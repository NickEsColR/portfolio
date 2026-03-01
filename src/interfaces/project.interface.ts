/**
 * Project document from Sanity CMS.
 * Schema: `project`
 */
import type { Skill } from "@/interfaces/skill.interface";
import type { SanityImageSource } from "@/interfaces/sanity.interface";
import type { I18nString } from "@/interfaces/i18n.interface";

export interface Project {
  name: string;
  description: I18nString;
  demoURL?: string;
  repoURL?: string;
  bulletpoints: I18nString[];
  technologies: Skill[];
  projectImage: SanityImageSource;
}
