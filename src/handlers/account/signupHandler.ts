import type { FastifyReply, FastifyRequest } from 'fastify';
import type { SignupBody } from '../../docs';
import { createUser, hashPassword } from '../../functions';

export const signupHandler = async (
  request: FastifyRequest<{ Body: SignupBody }>,
  reply: FastifyReply
) => {
  try {
    const { email, name, password } = request.body;

    const hashedPassword = await hashPassword(password);

    await createUser({
      name,
      email,
      password: hashedPassword,
    });

    return reply.status(201).send({ message: 'User registered successfully' });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error('Error creating user:', error.message);
    if (error.message === 'Email already exits') {
      return reply.status(400).send({ error: 'Email already in use' });
    }
    return reply.status(500).send({ error: 'Error registering user' });
  }
};
