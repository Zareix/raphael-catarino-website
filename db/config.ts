import { defineDb, defineTable, column } from 'astro:db';

const Skill = defineTable({
  columns: {
    name: column.text({ primaryKey: true }),
    icon: column.text(),
    category: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Skill,
  },
});
