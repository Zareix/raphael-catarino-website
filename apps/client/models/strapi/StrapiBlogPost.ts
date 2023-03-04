import { StrapiImage } from "./components/StrapiMedia";
import { StrapiSingularObject } from "./components/StrapiObject";

export type StrapiBlogPost = {
  title: string;
  content: string;
  slug: string;
  featuredImage: StrapiSingularObject<StrapiImage>;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: string;
};
