import fastifyCors from '@fastify/cors';
import type { FastifyInstance } from 'fastify';

export const setupCors = (app: FastifyInstance) => {
  app.register(fastifyCors, {
    origin: 'http://localhost:3000',
  });
};
