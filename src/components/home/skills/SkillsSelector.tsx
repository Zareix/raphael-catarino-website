import { useState } from 'react';

type Props = {
  domains: Record<
    string,
    {
      name: string;
      icon: string;
      category: string;
    }[]
  >;
};

export const SkillsSelector = ({ domains }: Props) => {
  const [selectedDomainName, setSelectedDomainName] = useState<string>(
    Object.keys(domains)[0],
  );

  return (
    <section className="grid w-full gap-4">
      <ul className="flex justify-center gap-2">
        {Object.keys(domains).map((domain) => (
          <li
            key={domain}
            onMouseEnter={() => setSelectedDomainName(domain)}
            className={
              'rounded-lg border border-gray-300 px-2 py-0.5 backdrop-blur-[2px] transition-colors duration-300 ease-out dark:border-slate-400' +
              (selectedDomainName === domain
                ? ' bg-gray-300/30 dark:bg-slate-400/20'
                : '')
            }
          >
            <h3 className="text-lg font-normal">{domain}</h3>
          </li>
        ))}
      </ul>
      <div className="relative grid h-[160px] justify-center">
        {Object.entries(domains).map(([domain, skills]) => (
          <div
            className={
              'domain-content flex max-w-96 flex-wrap items-start justify-center gap-8 px-4' +
              (domain === selectedDomainName ? ' block' : ' hidden')
            }
            key={domain}
          >
            {skills.map((skill) => (
              <div
                className="relative grid justify-items-center text-center"
                key={skill.name}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="relative overflow-hidden rounded-md"
                  width={64}
                  height={64}
                />
                <h4 className="absolute -bottom-6 mt-1 text-sm font-light text-gray-600 dark:text-gray-300">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
