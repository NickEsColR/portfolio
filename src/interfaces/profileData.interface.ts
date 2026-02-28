import type { SanityImageSource } from "./sanity.interface";

/**
 * Bio document from Sanity CMS.
 * Schema: `bio`
 */
export interface ProfileData {
  elevatorPitch: string;
  email: string;
  github: string;
  linkedIn: string;
  name: string;
  profilePicture: SanityImageSource;
  role: string;
}
