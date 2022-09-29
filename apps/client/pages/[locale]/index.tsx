import type { NextPage } from 'next';

import { HomeData, HomeProps } from '@models/Home';
import { Experience } from '@models/Experience';
import { getStrapiMedia, queryStrapiAPISingular } from '@helpers/strapi';
import HomeComponent from '@components/Home';
import { createPlaceholder } from '@helpers/plaiceholder';

const Home: NextPage<HomeProps> = ({ home }) => {
  if (!home) return <></>;
  return <HomeComponent home={home} />;
};

export async function getStaticPaths() {
  const locales = ['fr', 'en'];

  return {
    paths: locales.map((x) => ({ params: { locale: x } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { locale: string };
}): Promise<{ props: { home: HomeData } }> {
  const res = await queryStrapiAPISingular(params.locale, 'home');

  return {
    props: {
      home: {
        hero: {
          ...res.hero,
          profilePicture: {
            ...res.hero.profilePicture.data.attributes,
            url: getStrapiMedia(res.hero.profilePicture.data.attributes.url),
            placeHolder: await createPlaceholder(
              res.hero.profilePicture.data.attributes.url
            ),
          },
          CV: {
            ...res.hero.CV.data.attributes,
            url: getStrapiMedia(res.hero.CV.data.attributes.url),
          },
        },
        experiences: res.experiences.experiences.data.map(
          (x: { attributes: Experience; id: number }) => ({
            ...x.attributes,
            id: x.id,
          })
        ),
        skills: {
          ...res.skills,
          skillsDomains: await Promise.all(
            res.skills.skillsDomains.data.map(async (domain) => ({
              ...domain.attributes,
              skills: await Promise.all(
                domain.attributes.skills.map(async (s) => ({
                  ...s,
                  icon: {
                    ...s.icon.data.attributes,
                    url: getStrapiMedia(s.icon.data.attributes.url),
                    placeHolder: await createPlaceholder(
                      s.icon.data.attributes.url
                    ),
                  },
                }))
              ),
              id: domain.id,
            }))
          ),
        },
      },
    },
  };
}

export default Home;
