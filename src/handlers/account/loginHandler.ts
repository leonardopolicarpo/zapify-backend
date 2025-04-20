import type { FastifyReply, FastifyRequest } from 'fastify';
import type { SignupBody } from '../../docs';
import {
  comparePassword,
  findUserByEmail,
  updateUserLastLogin,
} from '../../functions';

export const loginHandler = async (
  request: FastifyRequest<{ Body: SignupBody }>,
  reply: FastifyReply
) => {
  try {
    const { email, password } = request.body;

    const user = await findUserByEmail({ email });
    if (!user) {
      return reply.status(401).send({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return reply.status(401).send({ error: 'Invalid credentials' });
    }

    await updateUserLastLogin({ id: user.id });

    return reply.status(200).send({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error('Login error:', error.message);
    return reply.status(500).send({ error: 'Internal server error' });
  }
};
