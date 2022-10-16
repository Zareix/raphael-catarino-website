import { StrapiPluralObject } from "./../models/strapi/components/StrapiObject";
import axios from "axios";

import { StrapiSingularObject } from "@models/strapi/components/StrapiObject";

const getStrapiMediaUrl = (url: string): string => {
  return url.startsWith("/")
    ? process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL + url
    : url;
};

const queryStrapiAPISingular = async <T>(
  locale: string,
  query: string
): Promise<StrapiSingularObject<T>> => {
  try {
    const res = (
      await axios.get<StrapiSingularObject<T>>(
        `${process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL}/api/${query}`,
        {
          params: {
            locale,
            populate: "deep",
          },
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          },
        }
      )
    ).data;
    return res;
  } catch (error) {
    throw error;
  }
};

const queryStrapiAPIPlural = async <T>(
  locale: string,
  query: string
): Promise<StrapiPluralObject<T>> => {
  try {
    const res = (
      await axios.get<StrapiPluralObject<T>>(
        `${process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL}/api/${query}`,
        {
          params: {
            locale,
            populate: "deep",
          },
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          },
        }
      )
    ).data;
    return res;
  } catch (error) {
    throw error;
  }
};

export { queryStrapiAPIPlural, queryStrapiAPISingular, getStrapiMediaUrl };
