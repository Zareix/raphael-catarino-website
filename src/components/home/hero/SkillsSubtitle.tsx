import { useEffect, useState } from "react";
import * as icons from "~/components/home/skills/Icons";
import { DOMAINS } from "~/content/skills";
import { type Lang, useTranslations } from "~/i18n";

const domains = Object.values(DOMAINS).flat();

type Props = {
	lang: Lang;
};

const SkillsSubtitle = ({ lang }: Props) => {
	const t = useTranslations(lang);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		let timeout: Timer;
		const changeTechno = () => {
			setCurrentIndex((currentIndex) => (currentIndex + 1) % domains.length);

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
		<h3 className="flex items-center gap-2 text-xl font-semibold text-slate-700 lg:text-2xl dark:text-gray-300">
			<div>{t("hero.subtitle-techno")}</div>
			<div
				id="heroTechno"
				className={
					"flex items-center gap-1 bg-linear-to-t from-purple-700 to-purple-950 to-180% bg-clip-text pr-2 text-transparent italic dark:from-slate-50 dark:to-slate-500 dark:to-100%" +
					(currentIndex !== undefined ? " animate" : "")
				}
				key={currentIndex}
			>
				{/* biome-ignore lint/performance/noDynamicNamespaceImportAccess: Optimized by astro */}
				{icons[domains[currentIndex]]({
					className: "h-6 w-6",
				})}
				{domains[currentIndex].replace("CSharp", "C#")}
			</div>
		</h3>
	);
};

export default SkillsSubtitle;
