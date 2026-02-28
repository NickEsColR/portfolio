/**
 * Experience document from Sanity CMS.
 * Schema: `experience`
 */
import type { Skill } from "./skill.interface";

export interface Experience {
  role: string;
  company: string;
  companyURL: string;
  startDate: string;
  endDate?: string;
  summary: string;
  responsibilities: string[];
  technologies: Skill[];
}
