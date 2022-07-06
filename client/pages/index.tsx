import type { NextPage } from 'next';

import { createContext } from 'react';

import Layout from '@components/Layout';
import Hero from '@components/Home/Hero';
import { Hero as HeroModel } from '@models/Hero';
import { Project } from '@models/Project';
import { queryStrapiAPIPlural, queryStrapiAPISingular } from '@helpers/strapi';
import { StrapiObject } from '@models/StrapiResponse';

type HomeProps = {
  hero: HeroModel;
  projects: StrapiObject<Project>[];
};

export const HomeContext = createContext<HomeProps | undefined>(undefined);

const Home: NextPage<HomeProps> = ({ hero, projects }) => {
  return (
    <HomeContext.Provider value={{ hero, projects }}>
      <Layout>
        <Hero />
      </Layout>
    </HomeContext.Provider>
  );
};

export async function getStaticProps() {
  return {
    props: {
      hero: await queryStrapiAPISingular<HeroModel>('hero'),
      projects: await queryStrapiAPIPlural<Project>('projects'),
    },
  };
}

export default Home;
