import type { NextPage } from 'next';

import { HomeData, HomeProps } from '@models/Home';
import { Experience } from '@models/Experience';
import { SkillDomain } from '@models/SkillDomain';
import { queryStrapiAPISingular } from '@helpers/strapi';
import HomeComponent from '@components/Home';

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
          profilePicture: res.hero.profilePicture.data.attributes,
          CV: res.hero.CV.data.attributes,
        },
        experiences: res.experiences.experiences.data.map(
          (x: { attributes: Experience; id: number }) => ({
            ...x.attributes,
            id: x.id,
          })
        ),
        skillsDomains: res.skills.skillsDomains.data.map(
          (x: { attributes: SkillDomain; id: number }) => ({
            ...x.attributes,
            id: x.id,
          })
        ),
      },
    },
  };
}

export default Home;
