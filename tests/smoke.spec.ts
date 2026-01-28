import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";

const storageState = process.env.E2E_STORAGE_STATE;
const hasValidStorageState = (() => {
  if (!storageState) return false;
  try {
    const raw = readFileSync(storageState, "utf8");
    const parsed = JSON.parse(raw);
    const hasCookies = Array.isArray(parsed.cookies) && parsed.cookies.length > 0;
    const hasOrigins = Array.isArray(parsed.origins) && parsed.origins.length > 0;
    return hasCookies || hasOrigins;
  } catch {
    return false;
  }
})();

test("login page renders", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByRole("heading", { name: /sign in/i })).toBeVisible();
  await expect(
    page.getByRole("button", { name: /connect with nostr extension/i })
  ).toBeVisible();
});

test.describe("authenticated dashboard smoke", () => {
  test.skip(
    !hasValidStorageState,
    "Set E2E_STORAGE_STATE to a storageState.json file with cookies/origins to enable auth."
  );
  test.use({ storageState: hasValidStorageState ? storageState : undefined });

  test("core dashboard routes load", async ({ page }) => {
    await page.goto("/dashboard");

    const signInHeading = page.getByRole("heading", { name: /sign in/i });
    if (await signInHeading.isVisible()) {
      test.skip(true, "Not authenticated: redirected to login.");
    }

    await expect(
      page.getByRole("heading", { name: /compliance dashboard/i })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /unreviewed projects/i })
    ).toBeVisible();

    const loadOlder = page.getByRole("button", { name: /load older projects/i });
    if (await loadOlder.isVisible()) {
      await loadOlder.click();
      await expect(page.getByText(/loading more/i)).toBeVisible();
    }

    await page.goto("/dashboard/recent");
    await expect(
      page.getByRole("heading", { name: /recent projects/i })
    ).toBeVisible();

    await page.goto("/dashboard/in-review");
    await expect(
      page.getByRole("heading", { name: /projects in review/i })
    ).toBeVisible();
  });

  test("review modal opens when available", async ({ page }) => {
    await page.goto("/dashboard");

    const signInHeading = page.getByRole("heading", { name: /sign in/i });
    if (await signInHeading.isVisible()) {
      test.skip(true, "Not authenticated: redirected to login.");
    }

    const reviewButton = page.getByRole("button", { name: /^review$/i }).first();
    if (!(await reviewButton.isVisible()) || (await reviewButton.isDisabled())) {
      test.skip(true, "No enabled review buttons available.");
    }

    await reviewButton.click();
    await expect(
      page.getByRole("heading", { name: /submit project review/i })
    ).toBeVisible();
    await page.getByRole("button", { name: /cancel/i }).click();
  });
});
