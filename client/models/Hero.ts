import { StrapiImage } from './StrapiImage';

export type Hero = {
  id: number;
  title: string;
  subtitle: string;
  profilePicture: StrapiImage;
  CV: StrapiImage;
  biography: string;
};
