import { z, defineCollection } from 'astro:content';

const skillsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    technologies: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string().url(),
        })
      )
      .min(1),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    featuredImage: z.string(),
  }),
});

const experiencesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    experiences: z.array(
      z.object({
        title: z.string(),
        enterprise: z.string(),
        link: z.string(),
        logo: z.string(),
        date: z.string(),
      })
    ),
  }),
});

export const collections = {
  skills: skillsCollection,
  projects: projectsCollection,
  experiences: experiencesCollection,
};
