import type { I18nString } from "@/interfaces/i18n.interface";

/**
 * Education document from Sanity CMS.
 * Schema: `education`
 */
export interface Education {
  level: I18nString;
  degree: I18nString;
  institution: string;
  startDate: string;
  endDate?: string;
}
