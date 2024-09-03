import type { SkillsSelectorProps } from '~/components/home/skills/SkillsSelector';

export const domains = {
  Frontend: ['React', 'NextJS', 'Svelte', 'Angular', 'Astro'],
  Backend: ['NodeJS', 'Java', 'CSharp', 'Go', 'Python'],
  DevOps: ['Docker', 'Kubernetes', 'Terraform', 'Ansible'],
} satisfies SkillsSelectorProps['domains'];
