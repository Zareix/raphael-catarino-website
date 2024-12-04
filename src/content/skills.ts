import type { SkillsSelectorProps } from '~/components/home/skills/SkillsSelector';

export const DOMAINS = {
  Frontend: ['React', 'NextJS', 'Svelte', 'Angular', 'Astro'],
  Backend: ['NodeJS', 'Java', 'CSharp', 'Go', 'Python'],
  DevOps: ['Docker', 'Kubernetes', 'Terraform', 'Ansible'],
} as const satisfies SkillsSelectorProps['domains'];
