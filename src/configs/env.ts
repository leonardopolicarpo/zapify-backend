import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  WEB_URL: z.string().url(),
  POSTGRES_URL: z.string().url(),
  JWT_SECRET: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string(),
});

export const env = envSchema.parse(process.env);
