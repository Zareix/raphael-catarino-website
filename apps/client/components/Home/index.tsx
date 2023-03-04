import { HomeData } from "@models/Home";
import Hero from "@components/Home/Hero";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Projects from "./Projects";

export type HomeProps = {
  home: HomeData;
  locale: string;
};

const Home = ({ home, locale }: HomeProps) => {
  return (
    <>
      <Hero hero={home.hero} />
      <Experiences experiences={home.experiences} />
      <Skills skills={home.skills} />
      <Projects projects={home.projects} />
    </>
  );
};

export default Home;
