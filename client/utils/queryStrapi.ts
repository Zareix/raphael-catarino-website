import axios from 'axios';

import {
  StrapiSingularResponse,
  StrapiPluralResponse,
} from '../models/StrapiResponse';

export async function queryStrapiAPISingular<T>(query: string) {
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
    console.log(error);
  }
}

export async function queryStrapiAPIPlural<T>(query: string) {
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
    console.log(error);
  }
}
