import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import Observer from "@researchgate/react-intersection-observer";
import { SkillDomain } from "@models/Skills";
import styled from "styled-components";

type Props = {
  domain: SkillDomain;
};

const SkillContainer = styled.div`
  transition: transform 200ms;
  :hover {
    transform: translateZ(50px);
  }
`;

const SkillDomainArticle = ({ domain }: Props) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const tiltRef = useRef(null);
  useEffect(() => {
    if (!tiltRef.current) return;
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 700,
      reverse: false,
      scale: 1.05,
      glare: true,
      "max-glare": 0.25,
    });

    return () => {};
  }, [tiltRef]);

  return (
    <Observer
      rootMargin="-100px 0px"
      disabled={isIntersecting}
      onChange={(e) => setIsIntersecting(e.isIntersecting)}
    >
      <div
        className={`w-full transition-all duration-500 md:w-max md:min-w-[400px]  md:max-w-[30%] ${
          isIntersecting
            ? "translate-x-0 opacity-100 md:translate-y-0"
            : "-translate-x-9 opacity-0 md:translate-x-0 md:-translate-y-9"
        }`}
      >
        <article
          key={domain.id}
          className="relative mx-4 flex flex-wrap justify-center gap-x-8 gap-y-2 rounded-lg border border-gray-800 bg-gray-900 bg-opacity-[83%] px-4  pt-12 pb-6 font-mono text-gray-50 shadow-md md:px-8"
          ref={tiltRef}
          style={{
            transform: "perspective(500px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute top-2 left-2 flex gap-1 md:top-3 md:left-4">
            <div className="h-2 w-2 rounded-full bg-red-400 md:h-3 md:w-3"></div>
            <div className="aspect-square h-2 w-2 rounded-full bg-yellow-400 md:h-3 md:w-3"></div>
            <div className="aspect-square h-2 w-2 rounded-full bg-green-400 md:h-3 md:w-3"></div>
          </div>
          <h2 className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap md:top-2">
            {domain.title}
          </h2>
          {domain.skills.map((skill) => (
            <SkillContainer
              key={skill.id}
              className="grid max-w-[33%] justify-items-center text-center"
            >
              <div className="relative aspect-square w-16 overflow-hidden rounded-md">
                <Image
                  src={skill.icon.url}
                  alt={skill.icon.alternativeText ?? ""}
                  placeholder="blur"
                  blurDataURL={skill.icon.placeHolder}
                  className="object-contain"
                  fill
                  sizes="10vw"
                />
              </div>
              <p className="mt-1">{skill.name}</p>
            </SkillContainer>
          ))}
        </article>
      </div>
    </Observer>
  );
};

export default SkillDomainArticle;
