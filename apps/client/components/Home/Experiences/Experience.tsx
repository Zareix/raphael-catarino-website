"use client";
import { Experience } from "@models/Experiences";
import ViewableMonitor from "@helpers/intersectionObserver";
import Image from "next/image";
import { Article } from "./Article";

type Props = {
  experience: Experience;
};

const Experience = ({ experience }: Props) => {
  return (
    <ViewableMonitor>
      {(inView) => (
        <Article key={experience.id}>
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
      )}
    </ViewableMonitor>
  );
};

export default Experience;
