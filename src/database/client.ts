import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '../configs/env';
import * as schema from './schemas/';

export const pg = postgres(env.POSTGRES_URL);
export const db = drizzle(pg, { schema });
