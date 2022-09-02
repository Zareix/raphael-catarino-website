import axios from 'axios';

const getStrapiMedia = (url: string): string => {
  return url.startsWith('/')
    ? process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL + url
    : url;
};

const queryStrapiAPISingular = async (locale: string, query: string) => {
  try {
    const res = (
      await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL}/api/${query}?locale=${locale}&populate=deep`,
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

const queryStrapiAPIPlural = async (locale: string, query: string) => {
  try {
    const res = (
      await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL}/api/${query}?locale=${locale}&populate=deep`,
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
