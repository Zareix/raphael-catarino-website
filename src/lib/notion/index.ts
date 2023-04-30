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
  icon: experience.properties.icon.files[0].file.url,
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

export { getAllExperiences, getAllSkills };
