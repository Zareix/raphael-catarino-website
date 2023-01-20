import { createContext, useContext, useState } from "react";

import { HomeData } from "@models/Home";
import Layout from "@components/Layout";
import Hero from "@components/Home/Hero";
import Projects from "@components/Home/Projects";
import Experiences from "@components/Home/Experiences";
import Skills from "@components/Home/Skills";
import Contact from "@components/Home/Contact";
import { NavigationLink } from "@models/Layout";

export type HomeProps = {
  home: HomeData;
  locale: string;
};

export type HomeContextData = {
  home: HomeData;
  locale: string;
};

export const HomeContext = createContext<HomeContextData | undefined>(
  undefined
);

export const useHomeContext = () => {
  return useContext(HomeContext) as HomeContextData;
};

const navLinks: NavigationLink[] = [
  {
    href: "#experiences",
    id: "navbar_experiences",
    defaultMessage: "Expériences",
    description: "Navbar link experiences",
  },
  {
    href: "#skills",
    id: "navbar_skills",
    defaultMessage: "Compétences",
    description: "Navbar link skills",
  },
  {
    href: "#projects",
    id: "navbar_projects",
    defaultMessage: "Projets",
    description: "Navbar link projects",
  },
  {
    href: "/blog",
    id: "navbar_blog",
    defaultMessage: "Blog",
    description: "Navbar link blog",
  },
];

const Home = ({ home, locale }: HomeProps) => {
  return (
    <HomeContext.Provider value={{ home, locale }}>
      <Layout links={navLinks}>
        <Hero />
        <Experiences />
        <Skills />
        <Projects />
      </Layout>
    </HomeContext.Provider>
  );
};

export default Home;
