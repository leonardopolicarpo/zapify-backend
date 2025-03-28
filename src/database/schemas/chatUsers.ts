import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { users } from './users';

export const chatUsers = pgTable('chatUsers', {
  chat_id: uuid('chat_id').primaryKey().defaultRandom(),
  user_id: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  role: text('name').notNull(),
  joined_at: timestamp('joined_at').notNull().defaultNow(),
});
