import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  clientPrefix: 'PUBLIC_',
  server: {
    SENDGRID_API_KEY: z.string(),
    EMAIL_TO: z.string(),
    EMAIL_FROM: z.string(),
  },
  client: {},
  runtimeEnv: {
    SENDGRID_API_KEY:
      process.env.SENDGRID_API_KEY ?? import.meta.env.SENDGRID_API_KEY,
    EMAIL_TO: process.env.EMAIL_TO ?? import.meta.env.EMAIL_TO,
    EMAIL_FROM: process.env.EMAIL_FROM ?? import.meta.env.EMAIL_FROM,
  },
});
