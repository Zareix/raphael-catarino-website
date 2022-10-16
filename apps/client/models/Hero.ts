import { Image, Document } from "./Components";

export type Hero = {
  id: number;
  title: string;
  subtitle?: string;
  profilePicture: Image;
  CV: Document;
  biography: string;
};
