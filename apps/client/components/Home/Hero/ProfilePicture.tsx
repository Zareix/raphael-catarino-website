"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Hero as HeroModel } from "@models/Hero";

const ProfilePicture = ({
  hero,
  className = "",
}: {
  hero: HeroModel;
  className?: string;
}) => {
  const tiltRef = useRef(null);
  useEffect(() => {
    if (!tiltRef.current) return;
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 700,
      reverse: true,
      scale: 1.1,
      glare: true,
      "max-glare": 0.4,
    });

    return () => {};
  }, [tiltRef]);

  return (
    <div
      className={
        "fadeIn relative ml-auto mr-6 h-44 w-44 md:h-auto md:w-1/3 " + className
      }
    >
      <div className="absolute -z-10 h-full w-full rotate-90 scale-[6] opacity-[0.05] invert dark:opacity-[0.02] dark:filter-none">
        <Image src="/hero-bg.svg" alt="dddepth" fill className="object-fill" />
      </div>
      <div
        className="relative h-full w-full overflow-hidden rounded-xl shadow"
        ref={tiltRef}
      >
        <Image
          src={hero.profilePicture.url}
          alt={hero.profilePicture.alternativeText}
          blurDataURL={hero.profilePicture.placeHolder}
          placeholder="blur"
          priority
          fill
          quality={100}
          sizes="(max-width: 640px) 70vw, 20vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
