import type { Config } from 'drizzle-kit';
import { env } from './src/configs/env';

export default {
  schema: './src/database/schemas/*',
  out: './src/database/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
} satisfies Config;
