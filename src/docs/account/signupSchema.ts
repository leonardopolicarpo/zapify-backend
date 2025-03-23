import { z } from 'zod';

export const signupSchema = {
  summary: 'Register user',
  tags: ['account'],
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    email: z.string().email('Invalid email format'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/\d/, 'Password must contain at least one number')
      .regex(
        /[@$!%*?&]/,
        'Password must contain at least one special character'
      ),
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
