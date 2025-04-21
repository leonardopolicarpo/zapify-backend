import { z } from 'zod';

export const getUserChatsSchema = {
  summary: 'Get user chats',
  tags: ['chats'],
  params: z.object({
    id: z.string(),
  }),
  response: {
    200: z.object({
      chatList: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          created_at: z.string().date(),
          created_by: z.string(),
          paricipants: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              role: z.string()
            })
          )
        })
      ),
    }),
  },
};

export type GetUserChatsParams = z.infer<typeof getUserChatsSchema.params>;
