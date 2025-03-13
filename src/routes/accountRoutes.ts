import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { signupSchema } from '../docs';
import { signupHandler } from '../handlers';

const accountRoutes: FastifyPluginAsyncZod = async app => {
  app.post('/signup', { schema: signupSchema }, signupHandler);
};

export default accountRoutes;
