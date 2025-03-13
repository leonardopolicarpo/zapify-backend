import type { FastifyReply, FastifyRequest } from 'fastify';
import type { SignupBody } from '../../docs';

export const signupHandler = async (request: FastifyRequest<{ Body: SignupBody }>, reply: FastifyReply) => {
  const { email, name, password } = request.body;
  
  reply.send({ message: 'User registered successfully', user: { name, email } });
};