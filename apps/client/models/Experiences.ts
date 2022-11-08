import { Image } from "./Components";

export type Experiences = {
  title: string;
  subtitle?: string;
  experiences: Experience[];
};

export type Experience = {
  date: string;
  id: number;
  title: string;
  rank: number;
  entreprise: string;
  url: string;
  icon: Image;
};
