import { Experiences } from "./Experiences";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export type HomeData = {
  hero: Hero;
  experiences: Experiences;
  skills: Skills;
  projects: Projects;
};
