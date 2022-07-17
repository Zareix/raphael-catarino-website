import type { NextPage } from 'next';

import { createContext, useContext } from 'react';

import { HomeData } from '@/models/HomeData';
import { Experience } from '@/models/Experience';
import { SkillDomain } from '@/models/SkillDomain';
import { queryStrapiAPISingular } from '@helpers/strapi';
import Layout from '@components/Layout';
import Hero from '@components/Home/Hero';
import Projects from '@components/Home/Projects';
import Experiences from '@components/Home/Experiences';
import Skills from '@components/Home/Skills';

type HomeProps = {
  home: HomeData;
};

export const HomeContext = createContext<HomeProps | undefined>(undefined);

const Home: NextPage<HomeProps> = ({ home }) => {
  if (!home) return <></>;
  return (
    <HomeContext.Provider value={{ home }}>
      <Layout>
        <Hero />
        <Experiences />
        <Skills />
        <Projects />
      </Layout>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext) as HomeProps;
};

export async function getStaticProps(): Promise<{ props: { home: HomeData } }> {
  const res = await queryStrapiAPISingular('home');

  return {
    props: {
      home: {
        hero: {
          ...res.hero,
          profilePicture: res.hero.profilePicture.data.attributes,
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
