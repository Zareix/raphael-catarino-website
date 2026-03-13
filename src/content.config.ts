import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			featuredImage: image(),
			repoUrl: z.url().nullable(),
			publicUrl: z.url().nullable(),
			technologies: z.array(z.string()),
			date: z.string().nullable(),
		}),
});

export const collections = {
	projects: projectsCollection,
};
