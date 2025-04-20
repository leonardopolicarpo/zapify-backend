import { z } from 'zod';

export const createChatSchema = {
  summary: 'Create new chat',
  tags: ['chats'],
  body: z.object({
    name: z.string(),
    userIds: z.array(z.string()),
    createdBy: z.string(),
  }),
  response: {
    200: z.object({
      chat: z.object({}),
    }),
  },
};

export type CreateChatBody = z.infer<typeof createChatSchema.body>;
