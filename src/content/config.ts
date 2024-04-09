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

const experiencesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      experiences: z.array(
        z.object({
          title: z.string(),
          enterprise: z.string(),
          link: z.string(),
          logo: image(),
          date: z.string(),
        }),
      ),
    }),
});

export const collections = {
  projects: projectsCollection,
  experiences: experiencesCollection,
};
