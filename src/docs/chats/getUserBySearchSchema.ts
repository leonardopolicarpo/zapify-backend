import { z } from 'zod';

export const getUserBySearchSchema = {
  summary: 'Search users by name or email',
  tags: ['chats'],
  querystring: z.object({
    query: z.string().min(1, 'Search query is required'),
  }),
  response: {
    200: z.object({
      users: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          email: z.string().email(),
        })
      ),
    }),
  },
};

export type GetUserBySearchQuery = z.infer<
  typeof getUserBySearchSchema.querystring
>;
