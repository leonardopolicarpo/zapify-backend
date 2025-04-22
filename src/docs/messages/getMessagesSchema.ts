import { z } from 'zod';

export const getMessagesByChatIdSchema = {
  summary: 'Get messages by chat ID',
  tags: ['messages'],
  params: z.object({
    chatId: z.string().uuid(),
  }),
  response: {
    200: z.object({
      messages: z.array(
        z.object({
          id: z.string().uuid(),
          chatId: z.string().uuid(),
          senderId: z.string().uuid(),
          content: z.string(),
          createdAt: z.string(),
        })
      ),
    }),
  },
};

export type GetMessagesByChatIdParams = z.infer<
  typeof getMessagesByChatIdSchema.params
>;
