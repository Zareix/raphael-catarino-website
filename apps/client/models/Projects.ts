import { Image } from "./Components";

export type Projects = {
  title: string;
  subtitle?: string;
  projects: Project[];
};

export type Project = {
  id: number;
  title: string;
  featuredImage: Image;
  date: Date;
  description: string;
  websiteURL: string;
  sourceCodeURL: string;
  technologies: Technology[];
};

export type Technology = {
  id: number;
  name: string;
};
