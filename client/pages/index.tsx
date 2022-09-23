import type { NextPage } from 'next';

import { getPlaiceholder } from 'plaiceholder';

import { HomeData, HomeProps } from '@models/Home';
import { Experience } from '@models/Experience';
import { SkillDomain } from '@models/SkillDomain';
import { getStrapiMedia, queryStrapiAPISingular } from '@helpers/strapi';
import HomeComponent from '@components/Home';

const Home: NextPage<HomeProps> = ({ home }) => {
  if (!home) return <></>;
  return <HomeComponent home={home} />;
};

export async function getStaticProps(): Promise<{ props: { home: HomeData } }> {
  const res = await queryStrapiAPISingular('fr', 'home');

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
          skillsDomains: res.skills.skillsDomains.data.map((domain) => ({
            ...domain.attributes,
            skills: domain.attributes.skills.map((s) => {
              return {
                ...s,
                icon: {
                  ...s.icon,
                  url: getStrapiMedia(s.icon.data.attributes.url),
                },
              };
            }),
            id: domain.id,
          })),
        },
      },
    },
  };
}

export default Home;
