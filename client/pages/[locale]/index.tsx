import type { NextPage } from 'next';

import { HomeData, HomeProps } from '@models/Home';
import { Experience } from '@models/Experience';
import { SkillDomain } from '@models/SkillDomain';
import { getStrapiMedia, queryStrapiAPISingular } from '@helpers/strapi';
import HomeComponent from '@components/Home';
import { getPlaiceholder } from 'plaiceholder';

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

  const pp = await getPlaiceholder(
    getStrapiMedia(res.hero.profilePicture.data.attributes.url)
  );

  return {
    props: {
      home: {
        hero: {
          ...res.hero,
          profilePicture: {
            ...res.hero.profilePicture.data.attributes,
            url: getStrapiMedia(res.hero.profilePicture.data.attributes.url),
            placeHolder: pp.base64,
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
          skillsDomains: res.skills.skillsDomains.data.map(
            (x: { attributes: SkillDomain; id: number }) => ({
              ...x.attributes,
              skills: x.attributes.skills.map((s) => {
                return {
                  ...s,
                  icon: {
                    ...s.icon,
                    url: getStrapiMedia(s.icon.data.attributes.url),
                  },
                };
              }),
              id: x.id,
            })
          ),
        },
      },
    },
  };
}

export default Home;
