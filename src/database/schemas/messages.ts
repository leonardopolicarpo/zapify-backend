import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { chats } from './chats';
import { users } from './users';

export const messages = pgTable('messages', {
  id: uuid('chat_id').primaryKey().defaultRandom(),
  chat_id: uuid('chat_id')
    .notNull()
    .references(() => chats.id, { onDelete: 'cascade' }),
  user_id: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  message: text('name').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
});
