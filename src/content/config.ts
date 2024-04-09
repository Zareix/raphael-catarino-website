import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      featuredImage: image(),
      repoUrl: z.string().url().nullable(),
      publicUrl: z.string().url().nullable(),
      technologies: z.array(z.string()),
      date: z.string().nullable(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
