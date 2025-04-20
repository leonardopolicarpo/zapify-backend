import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { signupSchema, loginSchema } from '../docs';
import { signupHandler, loginHandler } from '../handlers';

const accountRoutes: FastifyPluginAsyncZod = async app => {
  app.post('/signup', { schema: signupSchema }, signupHandler);
  app.post('/login', { schema: loginSchema }, loginHandler);
};

export default accountRoutes;
