import { Client } from '@notionhq/client';
import { env } from '@/lib/env';
import { Lang, defaultLang } from '@/i18n/utils';

const createNotionClient = () =>
  new Client({
    auth: env.NOTION_API_TOKEN,
  });

const getAllExperiences = async (lang: Lang = defaultLang) =>
  (
    (
      await createNotionClient().databases.query({
        database_id: env.NOTION_EXPERIENCES_DB,
        filter: {
          property: 'lang',
          select: {
            equals: 'Experience',
          },
        },
      })
    ).results as ExperiencePage[]
  ).map(experienceConverter);

const experienceConverter = (experience: ExperiencePage) => ({
  id: experience.id,
  title: experience.properties.title.title[0].plain_text,
  entreprise: experience.properties.entreprise.rich_text[0].plain_text,
  date: experience.properties.date.rich_text[0].plain_text,
  icon: experience.properties.icon.files[0].file.url,
  url: experience.properties.url.url,
});

export { getAllExperiences };
