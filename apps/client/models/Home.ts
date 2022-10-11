import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { SkillDomain } from "./SkillDomain";

export type HomeData = {
  hero: Hero;
  experiences: Experience[];
  skills: {
    title: string;
    subtitle?: string;
    skillsDomains: SkillDomain[];
  };
};

export type HomeProps = {
  home: HomeData;
};
