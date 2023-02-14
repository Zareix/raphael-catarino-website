import { Image } from "./Components";

export type BlogPost = {
  id: number;
  title: string;
  content: string;
  slug: string;
  featuredImage: Image;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};
