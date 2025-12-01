import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
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
