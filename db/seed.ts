import { db, Skill, Experience } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Skill).values([
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      category: 'Frontend',
    },
    {
      name: 'NextJS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
      category: 'Frontend',
    },
    {
      name: 'NodeJS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
      category: 'Backend',
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      category: 'Backend',
    },
    {
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      category: 'Backend',
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      category: 'Backend',
    },
    {
      name: 'Svelte',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
      category: 'Frontend',
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      category: 'Frontend',
    },
    {
      name: 'Astro',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg',
      category: 'Frontend',
    },
  ]);

  await db.insert(Experience).values([
    {
      id: 1,
      titleFr: 'Baccalauréat général scientifique',
      titleEn: 'Scientific high school diploma',
      enterprise: 'Lycée La Rochefoucauld',
      link: 'https://laroche.org/',
      logo: 'laroche.webp',
      date: '2019',
    },
    {
      id: 2,
      titleFr: 'DUT Informatique',
      titleEn: 'Computer Science DUT',
      enterprise: 'IUT de Paris',
      link: 'https://iutparis-seine.u-paris.fr/',
      logo: 'iut_de_paris.png',
      date: '2019 - 2021',
    },
    {
      id: 3,
      titleFr: 'Stage Quality Analyst / Développeur Automatisation',
      titleEn: 'Internship Quality Analyst / Automatisation Developer',
      enterprise: 'Keolis',
      link: 'https://www.keolis.com',
      logo: 'keolis.png',
      date: 'Avril 2021 - Août 2021',
    },
    {
      id: 4,
      titleFr: 'Ingénieur informatique',
      titleEn: 'Software engineer',
      enterprise: 'EFREI Paris',
      link: 'https://www.efrei.fr/',
      logo: 'efrei.png',
      date: '2021 - 2024',
    },
    {
      id: 5,
      titleFr: 'Développeur Full Stack (Alternance)',
      titleEn: 'Fullstack developer (Apprentice)',
      enterprise: 'Société Générale',
      link: 'https://particuliers.societegenerale.fr/',
      logo: 'sg.png',
      date: '2021 - 2024',
    },
  ]);
}
