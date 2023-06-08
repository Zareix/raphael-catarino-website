import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { marked } from 'marked';
import { env } from '@/lib/env';
import { Lang, defaultLang } from '@/i18n/utils';

const DATABASES = {
  PROJECTS: 'f86c64f9267544cea0c060fec905fc87',
} as const;

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
    content: marked(mdString.parent, {
      mangle: false,
      headerIds: false,
    }),
  };
};

const getAllProjects = async (lang: Lang = defaultLang) => {
  const projects = (
    (
      await createNotionClient().databases.query({
        database_id: DATABASES.PROJECTS,
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

export { getAllProjects };
