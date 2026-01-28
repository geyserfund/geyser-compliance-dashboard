import { chromium } from "playwright";
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import readline from "node:readline";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:5173";
const storageStatePath = process.env.E2E_STORAGE_STATE ?? "tests/storageState.json";
const browserChannel = process.env.PLAYWRIGHT_BROWSER_CHANNEL ?? "chrome";
const startDevServer = process.env.E2E_START_DEV_SERVER !== "0";

const extensionEnvPath =
  process.env.NOSTR_EXTENSION_PATH || process.env.ALBY_EXTENSION_PATH;

const getChromeExtensionsDirs = () => {
  const home = os.homedir();
  switch (process.platform) {
    case "darwin":
      return [
        path.join(home, "Library", "Application Support", "Google", "Chrome", "Default", "Extensions"),
      ];
    case "linux":
      return [
        path.join(home, ".config", "google-chrome", "Default", "Extensions"),
        path.join(home, ".config", "chromium", "Default", "Extensions"),
      ];
    case "win32":
      return [
        path.join(home, "AppData", "Local", "Google", "Chrome", "User Data", "Default", "Extensions"),
      ];
    default:
      return [];
  }
};

const isMatch = (manifest) => {
  const name = String(manifest?.name ?? "").toLowerCase();
  const shortName = String(manifest?.short_name ?? "").toLowerCase();
  return (
    name.includes("alby") ||
    name.includes("nostr") ||
    name.includes("nos2x") ||
    shortName.includes("alby") ||
    shortName.includes("nostr") ||
    shortName.includes("nos2x")
  );
};

const findLatestExtensionPath = async () => {
  const roots = getChromeExtensionsDirs();
  for (const root of roots) {
    try {
      const extensionIds = await fs.readdir(root);
      for (const extensionId of extensionIds) {
        const extensionDir = path.join(root, extensionId);
        const versions = await fs.readdir(extensionDir);
        const versionDirs = versions
          .map((version) => path.join(extensionDir, version))
          .sort()
          .reverse();

        for (const versionDir of versionDirs) {
          const manifestPath = path.join(versionDir, "manifest.json");
          try {
            const manifestRaw = await fs.readFile(manifestPath, "utf8");
            const manifest = JSON.parse(manifestRaw);
            if (isMatch(manifest)) {
              return versionDir;
            }
          } catch {
            // Ignore invalid manifests.
          }
        }
      }
    } catch {
      // Ignore missing roots.
    }
  }

  return null;
};

const prompt = (message) => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(message, () => {
    rl.close();
    resolve();
  }));
};

const isServerUp = async (url) => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    return response.ok || response.status === 404;
  } catch {
    return false;
  }
};

const waitForServer = async (url, timeoutMs = 60_000) => {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isServerUp(url)) {
      return true;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return false;
};

const run = async () => {
  const extensionPath = extensionEnvPath || (await findLatestExtensionPath());
  if (!extensionPath) {
    throw new Error(
      "Nostr extension not found. Set NOSTR_EXTENSION_PATH or ALBY_EXTENSION_PATH to the extension directory."
    );
  }

  let devServerProcess = null;
  if (startDevServer && !(await isServerUp(baseURL))) {
    console.log("Dev server not running. Starting with bun...");
    devServerProcess = spawn(
      "bun",
      ["run", "dev", "--", "--host", "127.0.0.1", "--port", "5173"],
      { stdio: "inherit" }
    );

    const ready = await waitForServer(baseURL);
    if (!ready) {
      if (devServerProcess) {
        devServerProcess.kill("SIGTERM");
      }
      throw new Error("Dev server did not start in time.");
    }
  }

  const userDataDir = path.join(process.cwd(), ".playwright", "user-data");
  await fs.mkdir(userDataDir, { recursive: true });

  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    channel: browserChannel,
    args: [
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`,
    ],
  });

  const page = await context.newPage();
  await page.goto(`${baseURL}/login`, { waitUntil: "domcontentloaded" });

  console.log("");
  console.log("Complete Nostr login in the opened browser window.");
  console.log("When the dashboard is visible, press Enter here to save storage state.");
  console.log("");

  await prompt("Press Enter to save storage state...");
  const nostrKey = await page.evaluate(() => localStorage.getItem("nostrPublicKey"));
  const cookies = await context.cookies();

  if (!nostrKey && cookies.length === 0) {
    await context.close();
    if (devServerProcess) {
      devServerProcess.kill("SIGTERM");
    }
    throw new Error(
      "No auth state detected (no localStorage nostrPublicKey or cookies). Make sure login succeeds before saving."
    );
  }

  await context.storageState({ path: storageStatePath });
  await context.close();

  if (devServerProcess) {
    devServerProcess.kill("SIGTERM");
  }

  console.log(`Saved storage state to ${storageStatePath}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
