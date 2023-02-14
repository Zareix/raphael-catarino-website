import { SectionSubtitle, SectionTitle } from "@components/ui/Home";
import Experience from "./Experience";
import { Experiences as ExperiencesModel } from "@models/Experiences";

type Props = {
  experiences: ExperiencesModel;
};

const Experiences = ({ experiences }: Props) => {
  return (
    <section className="w-full bg-white pt-8 pb-32 md:pt-28" id="experiences">
      <SectionTitle>{experiences.title}</SectionTitle>
      <SectionSubtitle>{experiences.subtitle}</SectionSubtitle>
      <div className="container flex snap-x items-end overflow-x-scroll py-4 px-2 md:snap-none">
        {experiences.experiences.map((exp) => (
          <Experience experience={exp} key={exp.id} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
