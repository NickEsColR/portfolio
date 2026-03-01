import type { I18nString } from "@/interfaces/i18n.interface";
import type { SanityImageSource } from "@/interfaces/sanity.interface";

/**
 * Bio document from Sanity CMS.
 * Schema: `bio`
 */
export interface ProfileData {
  elevatorPitch: I18nString;
  email: string;
  github: string;
  linkedIn: string;
  name: string;
  profilePicture: SanityImageSource;
  role: string;
}
