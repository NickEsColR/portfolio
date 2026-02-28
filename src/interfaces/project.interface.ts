/**
 * Project document from Sanity CMS.
 * Schema: `project`
 */
import type { Skill } from "./skill.interface";
import type { SanityImageSource } from "./sanity.interface";

export interface Project {
  name: string;
  description: string;
  demoURL?: string;
  repoURL?: string;
  bulletpoints: string[];
  technologies: Skill[];
  projectImage: SanityImageSource;
}
