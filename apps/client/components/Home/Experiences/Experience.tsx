import { Experience } from "@models/Experiences";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

type Props = {
  experience: Experience;
};

const Article = styled.article`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    top: auto;
    bottom: 2rem;
    width: 100%;
    height: 2px;
    background-color: #61616a;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(2rem - 8px);
    width: 20px;
    height: 20px;
    border-radius: 999vw;
    background-color: #fff;
    border: 2px solid #61616a;
  }

  .dark &::before {
    background-color: rgb(209 213 219);
  }

  .dark &::after {
    background-color: rgb(17 24 39);
    border: 2px solid rgb(209 213 219);
  }
`;

const Experience = ({ experience }: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "0px -20% 0px -20%",
    triggerOnce: true,
  });
  return (
    <Article key={experience.id} ref={ref}>
      <div
        className={`mx-4 flex w-max max-w-[300px] snap-center items-center justify-center gap-3 rounded-md border border-gray-300 bg-stone-50 bg-opacity-60 px-6 py-4 shadow transition-all duration-500 hover:scale-105 hover:shadow-md dark:border-gray-700  dark:bg-gray-900 dark:text-gray-50 ${
          inView
            ? "translate-x-0 opacity-100 md:translate-y-0"
            : "-translate-x-9 opacity-0 md:translate-x-0 md:-translate-y-9"
        }`}
      >
        <Image
          src={experience.icon.url}
          alt={experience.icon.alternativeText}
          width={48}
          height={48}
          placeholder="blur"
          blurDataURL={experience.icon.placeHolder}
          className=" object-contain"
        />
        <div>
          <h3 className="w-min text-lg font-bold">{experience.title}</h3>
          <a href={experience.url} className="hover:underline">
            <h4 className="text-zinc-600 dark:text-zinc-400">
              {experience.entreprise}
            </h4>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-zinc-600 dark:text-zinc-300">
        {experience.date}
      </div>
    </Article>
  );
};

export default Experience;
