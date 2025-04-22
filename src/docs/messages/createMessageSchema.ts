import { z } from 'zod';

export const createMessageSchema = {
  summary: 'Create a message',
  tags: ['messages'],
  body: z.object({
    chatId: z.string().uuid(),
    senderId: z.string().uuid(),
    content: z.string().min(1),
  }),
  response: {
    201: z.object({
      id: z.string().uuid(),
      chatId: z.string().uuid(),
      senderId: z.string().uuid(),
      content: z.string(),
      createdAt: z.string(),
    }),
  },
};

export type CreateMessageBody = z.infer<typeof createMessageSchema.body>;
