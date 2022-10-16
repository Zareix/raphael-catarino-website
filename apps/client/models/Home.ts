import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { Skills } from "./Skills";

export type HomeData = {
  hero: Hero;
  experiences: Experience[];
  skills: Skills;
};

export type HomeProps = {
  home: HomeData;
};
