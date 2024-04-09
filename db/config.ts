import { defineDb, defineTable, column } from 'astro:db';

const Skill = defineTable({
  columns: {
    name: column.text({ primaryKey: true }),
    icon: column.text(),
    category: column.text(),
  },
});

const Experience = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    titleFr: column.text(),
    titleEn: column.text(),
    enterprise: column.text(),
    link: column.text(),
    logo: column.text(),
    date: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Skill,
    Experience,
  },
});
