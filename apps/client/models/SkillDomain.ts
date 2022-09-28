import { StrapiImage } from './StrapiImage';

export type SkillDomain = {
  id: number;
  title: string;
  skills: Skill[];
};

type Skill = {
  id: number;
  name: string;
  icon: StrapiImage;
};
