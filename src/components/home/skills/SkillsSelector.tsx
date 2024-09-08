import { useState } from 'react';

import * as icons from './Icons';

export type SkillsSelectorProps = {
  domains: Record<string, Array<keyof typeof icons>>;
};

export const SkillsSelector = ({ domains }: SkillsSelectorProps) => {
  const [selectedDomainName, setSelectedDomainName] = useState<string>(
    Object.keys(domains)[0],
  );

  return (
    <div className="flex h-[250px] w-full flex-col gap-4">
      <ul className="flex h-min justify-center gap-2">
        {Object.keys(domains).map((domain) => (
          <li
            key={domain}
            onMouseEnter={() => setSelectedDomainName(domain)}
            className={
              'h-min rounded-lg border border-gray-300 px-2 py-0.5 backdrop-blur-[2px] transition-colors duration-300 ease-out dark:border-slate-400' +
              (selectedDomainName === domain
                ? ' bg-gray-300/30 dark:bg-slate-400/20'
                : '')
            }
          >
            <h3 className="text-lg font-normal">{domain}</h3>
          </li>
        ))}
      </ul>
      <div className="relative grid justify-center">
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
                key={skill}
              >
                {icons[skill]({
                  className: 'h-16 w-16 overflow-hidden',
                })}
                <h4 className="absolute -bottom-6 mt-1 text-sm font-light text-gray-600 dark:text-gray-300">
                  {skill.replace('CSharp', 'C#')}
                </h4>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
