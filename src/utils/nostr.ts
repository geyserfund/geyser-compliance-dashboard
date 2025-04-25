import { type Event as NostrEvent, type UnsignedEvent } from "nostr-tools";

// Add window declaration for nostr
declare global {
  interface Window {
    nostr?: {
      getPublicKey(): Promise<string>;
      signEvent(event: UnsignedEvent): Promise<NostrEvent>;
      getRelays?(): Promise<{ [url: string]: { read: boolean; write: boolean } }>;
      nip04?: {
        encrypt(pubkey: string, plaintext: string): Promise<string>;
        decrypt(pubkey: string, ciphertext: string): Promise<string>;
      };
    };
  }
}

/**
 * Gets the public key from the Nostr extension.
 * @returns A promise that resolves with the public key string.
 * @throws If the Nostr extension is not available or fails to get the public key.
 */
export const getPubkey = async (): Promise<string> => {
  if (!window.nostr) {
    throw new Error("Nostr extension not found. Please install a NIP-07 compatible extension (e.g., Alby, nos2x).");
  }
  try {
    const pubkey = await window.nostr.getPublicKey();
    if (!pubkey) {
      throw new Error("Failed to get public key from Nostr extension.");
    }
    return pubkey;
  } catch (error) {
    console.error("Error getting public key:", error);
    throw new Error("Could not get public key from Nostr extension. Ensure it's properly configured and permissions are granted.");
  }
};

/**
 * Signs a Nostr event using the Nostr extension.
 * @param event - The unsigned Nostr event.
 * @returns A promise that resolves with the signed Nostr event.
 * @throws If the Nostr extension is not available or fails to sign the event.
 */
export const signEvent = async (event: UnsignedEvent): Promise<NostrEvent> => {
  if (!window.nostr) {
    throw new Error("Nostr extension not found.");
  }
  try {
    const signedEvent = await window.nostr.signEvent(event);
    if (!signedEvent) {
      throw new Error("Failed to sign event using Nostr extension.");
    }
    return signedEvent;
  } catch (error) {
    console.error("Error signing event:", error);
    throw new Error("Could not sign event using Nostr extension. Ensure permissions are granted.");
  }
}; 