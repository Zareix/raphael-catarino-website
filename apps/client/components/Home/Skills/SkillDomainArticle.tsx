import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { SkillDomain } from "@models/Skills";

type Props = {
  domain: SkillDomain;
};

const SkillDomainArticle = ({ domain }: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <article
      key={domain.id}
      className={`relative mx-4 w-full rounded-lg bg-slate-900 px-4 pt-12 pb-6 font-mono text-gray-50 shadow-md transition-all duration-700 md:w-max md:min-w-[400px] md:max-w-[30%] md:px-8 
                    ${
                      inView
                        ? "translate-x-0  opacity-100 md:translate-y-0"
                        : "-translate-x-9  opacity-0 md:translate-x-0 md:-translate-y-9 "
                    }`}
      ref={ref}
    >
      <div className="absolute top-2 left-2 flex gap-1 md:top-3 md:left-4">
        <div className="h-2 w-2 rounded-full bg-red-400 md:h-3 md:w-3"></div>
        <div className="aspect-square h-2 w-2 rounded-full bg-yellow-400 md:h-3 md:w-3"></div>
        <div className="aspect-square h-2 w-2 rounded-full bg-green-400 md:h-3 md:w-3"></div>
      </div>
      <h2 className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap md:top-2">
        {domain.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        {domain.skills.map((skill) => (
          <div
            key={skill.id}
            className="grid max-w-[33%] justify-items-center text-center"
          >
            <div className="relative h-16 w-16">
              <Image
                src={skill.icon.url}
                alt={skill.icon.alternativeText}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL={skill.icon.placeHolder}
              />
            </div>
            <p className="mt-1">{skill.name}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillDomainArticle;
