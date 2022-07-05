import { StrapiImage } from '../models/StrapiImage';

export function getStrapiMedia(media: StrapiImage): string {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/')
    ? process.env.STRAPI_PUBLIC_URL + url
    : url;
  return imageUrl;
}
