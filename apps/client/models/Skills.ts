import { Image } from "./Components";

export type Skills = {
  title: string;
  subtitle?: string;
  skillsDomains: SkillDomain[];
};

export type SkillDomain = {
  id: number;
  title: string;
  skills: Skill[];
};

type Skill = {
  id: number;
  name: string;
  icon: Image;
};
