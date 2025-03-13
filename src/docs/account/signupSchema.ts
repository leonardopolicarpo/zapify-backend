import { z } from 'zod';

export const signupSchema = {
  summary: 'Register user',
  tags: ['account'],
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  }),
  response: {
    200: z.object({
      message: z.string(),
      user: z.object({
        name: z.string(),
        email: z.string(),
      }),
    }),
  },
};

export type SignupBody = z.infer<typeof signupSchema.body>;
