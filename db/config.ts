import { defineDb, defineTable, column } from 'astro:db';

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
    Experience,
  },
});
