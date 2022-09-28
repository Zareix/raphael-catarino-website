import { createContext, useContext } from 'react';

import { HomeData, HomeProps } from '@models/Home';
import Layout from '@components/Layout';
import Hero from '@components/Home/Hero';
import Projects from '@components/Home/Projects';
import Experiences from '@components/Home/Experiences';
import Skills from '@components/Home/Skills';

export const HomeContext = createContext<HomeProps | undefined>(undefined);

export const useHomeContext = () => {
  return useContext(HomeContext) as HomeProps;
};

const Home = ({ home }: HomeProps) => {
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

export default Home;
