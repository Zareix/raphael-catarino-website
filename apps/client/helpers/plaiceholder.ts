import { getPlaiceholder } from 'plaiceholder';

import { getStrapiMedia } from './strapi';

export const createPlaceholder = async (url: string) => {
  return (await getPlaiceholder(getStrapiMedia(url))).base64;
};
