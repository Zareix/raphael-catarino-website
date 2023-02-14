import ReactMarkdown from "react-markdown";
import { Hero as HeroModel } from "@models/Hero";
import ProfilePicture from "./ProfilePicture";
import { Bio } from "./Bio";
import { SocialButtons } from "./SocialsButton";

type Props = {
  hero: HeroModel;
};

const Hero = ({ hero }: Props) => {
  return (
    <section
      className="relative flex w-full items-center pt-24 pb-16 md:min-h-screen md:py-0"
      id="hero"
    >
      <div className="container flex flex-col px-6 md:flex-row md:gap-12 xl:px-40">
        <Bio className="z-10 md:w-2/3">
          <h1 className="slideInBottom text-4xl">{hero.title}</h1>
          <h2 className="slideInBottom mb-2 text-2xl">{hero.subtitle}</h2>
          <div className="slideInBottom grid gap-1 text-justify">
            <ReactMarkdown>{hero.biography}</ReactMarkdown>
          </div>
          <div className="slideInBottom mt-4 hidden gap-3 md:flex">
            <SocialButtons cv={hero.CV.url} />
          </div>
        </Bio>
        <div className="flex md:hidden">
          <div
            className="slideInBottom z-10 mt-4 flex flex-col items-center justify-center gap-3"
            style={{ animationDelay: "1.25s" }}
          >
            <SocialButtons cv={hero.CV.url} />
          </div>
          <ProfilePicture hero={hero} />
        </div>
        <ProfilePicture hero={hero} className="hidden md:block" />
      </div>
    </section>
  );
};

export default Hero;
