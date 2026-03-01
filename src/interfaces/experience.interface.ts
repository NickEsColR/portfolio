/**
 * Experience document from Sanity CMS.
 * Schema: `experience`
 */
import type { I18nString } from "@/interfaces/i18n.interface";
import type { Skill } from "@/interfaces/skill.interface";

export interface Experience {
  role: string;
  company: string;
  companyURL: string;
  startDate: string;
  endDate?: string;
  summary: I18nString;
  responsibilities: I18nString[];
  technologies: Skill[];
}
