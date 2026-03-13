type Experience = {
	titleFr: string;
	titleEn: string;
	enterprise: string;
	link: string;
	logo: string;
	logoType: "text" | "image";
	date: string;
};

export const EXPERIENCES = [
	{
		date: "2026 - Now",
		titleFr: "Consultant ingénieur développeur fullstack",
		titleEn: "Software engineer consultant",
		enterprise: "eXalt",
		link: "https://www.exalt-company.com",
		logo: "exalt",
		logoType: "text",
	},
	{
		date: "2024 - 2026",
		titleFr: "Consultant ingénieur développeur fullstack",
		titleEn: "Software engineer consultant",
		enterprise: "Néosoft",
		link: "https://www.neosoft.fr/",
		logo: "neosoft",
		logoType: "text",
	},
	{
		date: "2021 - 2024",
		titleFr: "Ingénieur informatique",
		titleEn: "Software engineer",
		enterprise: "EFREI Paris",
		link: "https://www.efrei.fr/",
		logo: "efrei",
		logoType: "image",
	},
	{
		date: "2021 - 2024",
		titleFr: "Développeur Full Stack (Alternance)",
		titleEn: "Fullstack developer (Apprentice)",
		enterprise: "Société Générale",
		link: "https://particuliers.societegenerale.fr/",
		logo: "sg",
		logoType: "image",
	},
	{
		date: "Avril 2021 - Août 2021",
		titleFr: "Stage Quality Analyst / Développeur Automatisation",
		titleEn: "Internship Quality Analyst / Automatisation Developer",
		enterprise: "Keolis",
		link: "https://www.keolis.com/",
		logo: "keolis",
		logoType: "image",
	},
	{
		date: "2019 - 2021",
		titleFr: "DUT Informatique",
		titleEn: "Computer Science DUT",
		enterprise: "IUT de Paris",
		link: "https://iutparis-seine.u-paris.fr/",
		logo: "iut_de_paris",
		logoType: "image",
	},
	{
		date: "2019",
		titleFr: "Baccalauréat général scientifique",
		titleEn: "Scientific high school diploma",
		enterprise: "Lycée La Rochefoucauld",
		link: "https://laroche.org/",
		logo: "laroche",
		logoType: "image",
	},
] as const satisfies Experience[];
