import { SectionSubtitle, SectionTitle } from "@components/ui/Home";
import Image from "next/image";
import { useHomeContext } from "../";
import SkillDomainArticle from "./SkillDomainArticle";

const Skills = () => {
  const {
    home: { skills },
  } = useHomeContext();

  return (
    <section
      className="grid min-h-[80vh] w-full place-content-center overflow-hidden py-28"
      id="skills"
    >
      <SectionTitle>{skills.title}</SectionTitle>
      <SectionSubtitle>{skills.subtitle}</SectionSubtitle>
      <div className="skill-wrapper container flex flex-wrap items-center justify-center gap-6 md:gap-12">
        <div className="grid-lines w-full">
          <div className="vertical left-0" />
          <div className="vertical left-1/4" />
          <div className="vertical left-2/4" />
          <div className="vertical left-3/4" />
          <div className="vertical right-0" />
          <div className="horizontal top-0" />
          <div className="horizontal top-1/2" />
          <div className="horizontal bottom-0" />
          <div className="vertical outer -right-[25%]" />
          <div className="vertical outer -left-[25%]" />
        </div>
        {skills.skillsDomains.map((domain) => (
          <SkillDomainArticle key={domain.id} domain={domain} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
