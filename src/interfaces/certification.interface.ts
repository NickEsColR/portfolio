import type { I18nString } from "@/interfaces/i18n.interface";

/**
 * Certification document from Sanity CMS.
 * Schema: `certification`
 */
export interface Certification {
  certification: I18nString;
  issuer: string;
  date: string;
}
