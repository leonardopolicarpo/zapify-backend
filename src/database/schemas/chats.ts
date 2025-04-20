import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { users } from './users';

export const chats = pgTable('chats', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  created_by: uuid('created_by').references(() => users.id),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
});
