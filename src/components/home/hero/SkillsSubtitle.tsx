import { useEffect, useRef, useState } from 'react';
import { DOMAINS } from '~/content/skills';

import * as icons from '~/components/home/skills/Icons';

const domains = Object.values(DOMAINS).flat();

const SkillsSubtitle = () => {
  const [currentIndex, setCurrentIndex] = useState<number>();

  useEffect(() => {
    let timeout: Timer;
    const changeTechno = () => {
      setCurrentIndex(
        (currentIndex) => ((currentIndex ?? 0) + 1) % domains.length,
      );

      timeout = setTimeout(() => {
        changeTechno();
      }, 2000);
    };

    timeout = setTimeout(() => {
      changeTechno();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <h3 className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
      <div>Building with </div>
      <div
        id="heroTechno"
        className={
          'flex items-center gap-1 bg-gradient-to-t from-purple-700 to-purple-950 to-[180%] bg-clip-text pr-2 italic text-transparent dark:from-slate-50 dark:to-slate-500 dark:to-100%' +
          (currentIndex !== undefined ? ' animate' : '')
        }
        key={currentIndex}
      >
        {icons[domains[currentIndex ?? 0]]({
          className: 'h-6 w-6',
        })}
        {domains[currentIndex ?? 0]}
      </div>
    </h3>
  );
};

export default SkillsSubtitle;
