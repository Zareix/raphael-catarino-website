import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { marked } from 'marked';
import { env } from '@/lib/env';
import { Lang, defaultLang } from '@/i18n/utils';

const createNotionClient = () =>
  new Client({
    auth: env.NOTION_API_TOKEN,
  });

const addContent = async <T extends { id: string }>(page: T) => {
  const notion = createNotionClient();
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdString = n2m.toMarkdownString(await n2m.pageToMarkdown(page.id));
  return {
    ...page,
    content: marked(mdString.parent),
  };
};

const getAllExperiences = async (lang: Lang = defaultLang) =>
  (
    (
      await createNotionClient().databases.query({
        database_id: env.NOTION_EXPERIENCES_DB,
        filter: {
          property: 'lang',
          select: {
            equals: lang,
          },
        },
        sorts: [
          {
            property: 'dateRange',
            direction: 'ascending',
          },
        ],
      })
    ).results as ExperiencePage[]
  ).map(experienceConverter);

const experienceConverter = (experience: ExperiencePage) => ({
  id: experience.id,
  title: experience.properties.title.title[0].plain_text,
  entreprise: experience.properties.entreprise.rich_text[0].plain_text,
  date: {
    start: new Date(experience.properties.dateRange.date.start),
    end: experience.properties.dateRange.date.end
      ? new Date(experience.properties.dateRange.date.end)
      : undefined,
  },
  dateIncludeMonth: experience.properties.dateIncludeMonth.checkbox,
  icon:
    experience.properties.icon.files[0].type === 'external'
      ? experience.properties.icon.files[0].external.url
      : experience.properties.icon.files[0].file.url,
  url: experience.properties.url.url,
});

const getAllSkills = async (lang: Lang = defaultLang) =>
  (
    (
      await createNotionClient().databases.query({
        database_id: env.NOTION_SKILLS_DB,
        sorts: [
          {
            property: 'order',
            direction: 'ascending',
          },
        ],
      })
    ).results as SkillsPage[]
  )
    .map((x) => skillsConverter(lang, x))
    .reduce((acc, curr) => {
      if (!acc[curr.domain]) {
        acc[curr.domain] = [];
      }
      acc[curr.domain].push(curr);
      return acc;
    }, {} as Record<string, ReturnType<typeof skillsConverter>[]>);

const skillsConverter = (lang: Lang, skill: SkillsPage) => ({
  id: skill.id,
  title: skill.properties.title.title[0].plain_text,
  icon: skill.properties.icon.url,
  domain: skill.properties[`domain-${lang}`].select.name,
  order: skill.properties.order.number,
});

const getAllProjects = async (lang: Lang = defaultLang) => {
  const projects = (
    (
      await createNotionClient().databases.query({
        database_id: env.NOTION_PROJECTS_DB,
        filter: {
          property: 'lang',
          select: {
            equals: lang,
          },
        },
        sorts: [
          {
            property: 'order',
            direction: 'ascending',
          },
        ],
      })
    ).results as ProjectsPage[]
  ).map(projectsConverter);
  return await Promise.all(projects.map(addContent));
};

const projectsConverter = (project: ProjectsPage) => ({
  id: project.id,
  lang: project.properties.lang.select.name,
  title: project.properties.title.title[0].plain_text,
  featuredImage:
    project.properties.featuredImage.files[0].type === 'external'
      ? project.properties.featuredImage.files[0].external.url
      : project.properties.featuredImage.files[0].file.url,
  repoUrl: project.properties.repoUrl?.url,
  publicUrl: project.properties.publicUrl?.url,
  technologies: project.properties.technologies.multi_select.map((x) => x.name),
  order: project.properties.order.number,
});

export { getAllExperiences, getAllSkills, getAllProjects };
