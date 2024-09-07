import type { Lang } from '~/i18n';

type Experience = {
  titleFr: string;
  titleEn: string;
  enterprise: string;
  link: string;
  logo: string;
  date: string;
};

// date link logo titleEn titleFr enterprise
// 2019	https://laroche.org/	laroche	Scientific high school diploma	Baccalauréat général scientifique	Lycée La Rochefoucauld
// 2019 - 2021	https://iutparis-seine.u-paris.fr/	iut_de_paris	Computer Science DUT	DUT Informatique	IUT de Paris
// Avril 2021 - Août 2021	https://www.keolis.com	keolis	Internship Quality Analyst / Automatisation Developer	Stage Quality Analyst / Développeur Automatisation	Keolis
// 2021 - 2024	https://www.efrei.fr/	efrei	Software engineer	Ingénieur informatique	EFREI Paris
// 2021 - 2024	https://particuliers.societegenerale.fr/	sg	Fullstack developer (Apprentice)	Développeur Full Stack (Alternance)	Société Générale
// 2024 - today https://www.neosoft.fr/ neosoft Software engineer Ingénieur Développeur Fullstack Néosoft

export const EXPERIENCES = [
  {
    date: '2019',
    titleFr: 'Baccalauréat général scientifique',
    titleEn: 'Scientific high school diploma',
    enterprise: 'Lycée La Rochefoucauld',
    link: 'https://laroche.org/',
    logo: 'laroche',
  },
  {
    date: '2019 - 2021',
    titleFr: 'DUT Informatique',
    titleEn: 'Computer Science DUT',
    enterprise: 'IUT de Paris',
    link: 'https://iutparis-seine.u-paris.fr/',
    logo: 'iut_de_paris',
  },
  {
    date: 'Avril 2021 - Août 2021',
    titleFr: 'Stage Quality Analyst / Développeur Automatisation',
    titleEn: 'Internship Quality Analyst / Automatisation Developer',
    enterprise: 'Keolis',
    link: 'https://www.keolis.com/',
    logo: 'keolis',
  },
  {
    date: '2021 - 2024',
    titleFr: 'Développeur Full Stack (Alternance)',
    titleEn: 'Fullstack developer (Apprentice)',
    enterprise: 'Société Générale',
    link: 'https://particuliers.societegenerale.fr/',
    logo: 'sg',
  },
  {
    date: '2021 - 2024',
    titleFr: 'Ingénieur informatique',
    titleEn: 'Software engineer',
    enterprise: 'EFREI Paris',
    link: 'https://www.efrei.fr/',
    logo: 'efrei',
  },
  {
    date: '2024 - Now',
    titleFr: 'Consultant ingénieur développeur fullstack',
    titleEn: 'Software engineer consultant',
    enterprise: 'Néosoft',
    link: 'https://www.neosoft.fr/',
    logo: 'neosoft',
  },
  {
    date: '2024 - Now',
    titleFr: 'Ingénieur développeur fullstack',
    titleEn: 'Software engineer',
    enterprise: 'Société Générale',
    link: 'https://particuliers.societegenerale.fr/',
    logo: 'sg',
  },
] satisfies Experience[];
