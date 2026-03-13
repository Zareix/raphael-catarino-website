import type { SkillsSelectorProps } from "~/components/home/skills/SkillsSelector";

export const DOMAINS = {
	Frontend: ["React", "Angular", "NextJS", "Svelte", "Astro"],
	Backend: ["NodeJS", "Java", "C#", "Go", "Python"],
	DevOps: ["Docker", "Kubernetes", "Terraform", "Ansible"],
} as const satisfies SkillsSelectorProps["domains"];
