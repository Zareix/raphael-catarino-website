import { SkillDomain } from '@models/SkillDomain';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type Props = {
  domain: SkillDomain;
};

const SkillDomainArticle = ({ domain }: Props) => {
  const { ref, inView } = useInView({
    rootMargin: '-125px 0px',
    triggerOnce: true,
  });

  return (
    <article
      key={domain.id}
      className={`bg-slate-900 mx-4 transition-all duration-700 md:min-w-[400px] md:max-w-[30%] text-gray-50 font-mono px-4 pt-12 pb-6 md:px-8 rounded-lg relative shadow-md md:w-max w-full 
                    ${
                      inView
                        ? 'opacity-100  translate-x-0 md:translate-y-0'
                        : 'opacity-0  -translate-x-9 md:translate-x-0 md:-translate-y-9 '
                    }`}
      ref={ref}
    >
      <div className="absolute top-2 left-2 md:top-3 md:left-4 flex gap-1">
        <div className="bg-red-400 rounded-full w-2 h-2 md:w-3 md:h-3"></div>
        <div className="bg-yellow-400 rounded-full w-2 h-2 md:w-3 md:h-3 aspect-square"></div>
        <div className="bg-green-400 rounded-full w-2 h-2 md:w-3 md:h-3 aspect-square"></div>
      </div>
      <h2 className="absolute top-4 md:top-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
        {domain.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        {domain.skills.map((skill) => (
          <div key={skill.id} className="text-center">
            <Image
              src={skill.icon.url}
              alt={skill.icon.alternativeText}
              layout="fixed"
              width={70}
              height={70}
              placeholder="blur"
              blurDataURL={skill.icon.placeHolder}
            />
            <p className="-mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillDomainArticle;
