import { createContext, useContext, useState } from "react";

import { HomeData } from "@models/Home";
import Layout from "@components/Layout";
import Hero from "@components/Home/Hero";
import Projects from "@components/Home/Projects";
import Experiences from "@components/Home/Experiences";
import Skills from "@components/Home/Skills";
import Contact from "@components/Home/Contact";

export type HomeProps = {
  home: HomeData;
  locale: string;
};

export type HomeContextData = {
  home: HomeData;
  toggleContactOpen: Function;
  locale: string;
};

export const HomeContext = createContext<HomeContextData | undefined>(
  undefined
);

export const useHomeContext = () => {
  return useContext(HomeContext) as HomeContextData;
};

const Home = ({ home, locale }: HomeProps) => {
  const [contactOpen, setContactOpen] = useState(false);
  const toggleContactOpen = () => {
    setContactOpen(!contactOpen);
  };
  return (
    <HomeContext.Provider value={{ home, toggleContactOpen, locale }}>
      <Layout>
        <Hero />
        <Experiences />
        <Skills />
        <Projects />
      </Layout>
      {contactOpen && <Contact />}
    </HomeContext.Provider>
  );
};

export default Home;
