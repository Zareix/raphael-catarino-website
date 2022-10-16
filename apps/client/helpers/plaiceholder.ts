import { getPlaiceholder } from "plaiceholder";

import { getStrapiMediaUrl } from "./strapi";

export const createPlaceholder = async (url: string) => {
  return (await getPlaiceholder(getStrapiMediaUrl(url))).base64;
};
