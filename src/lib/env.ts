import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  clientPrefix: 'ASTRO_PUBLIC_',
  server: {
    NOTION_API_TOKEN: z.string(),
    NOTION_EXPERIENCES_DB: z.string(),
    NOTION_SKILLS_DB: z.string(),
    NOTION_PROJECTS_DB: z.string(),
  },
  client: {},
  runtimeEnv: import.meta.env,
  skipValidation: !!import.meta.env.SKIP_ENV_VALIDATION,
});