import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export type HomeData = {
  hero: Hero;
  experiences: Experience[];
  skills: Skills;
  projects: Projects;
};
