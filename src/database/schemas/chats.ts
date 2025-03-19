import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const chats = pgTable('chats', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
  reated_at: uuid('reated_at'),
});
