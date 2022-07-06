import axios from 'axios';

import { StrapiImage } from '../models/StrapiImage';
import {
  StrapiSingularResponse,
  StrapiPluralResponse,
} from '../models/StrapiResponse';

function getStrapiMedia(media: StrapiImage): string {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/')
    ? process.env.STRAPI_PUBLIC_URL + url
    : url;
  return imageUrl;
}

const queryStrapiAPISingular = async <T>(query: string) => {
  try {
    const res = (
      await axios.get<StrapiSingularResponse<T>>(
        `${process.env.STRAPI_PUBLIC_URL}/api/${query}?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          },
        }
      )
    ).data.data.attributes;
    return res;
  } catch (error) {
    console.error(error);
  }
};

const queryStrapiAPIPlural = async <T>(query: string) => {
  try {
    const res = (
      await axios.get<StrapiPluralResponse<T>>(
        `${process.env.STRAPI_PUBLIC_URL}/api/${query}?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          },
        }
      )
    ).data.data;
    return res;
  } catch (error) {
    console.error(error);
  }
};

export { queryStrapiAPIPlural, queryStrapiAPISingular, getStrapiMedia };
