import { Image } from "./Components";

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  slug: string;
  featuredImage: Image;
};
