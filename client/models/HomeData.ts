import { Experience } from './Experience';
import { Hero } from './Hero';
import { SkillDomain } from './SkillDomain';

export type HomeData = {
  hero: Hero;
  experiences: Experience[];
  skillsDomains: SkillDomain[];
};
