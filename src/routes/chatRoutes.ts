import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createChatSchema } from '../docs';
import { signupHandler } from '../handlers';

const chatRoutes: FastifyPluginAsyncZod = async app => {
  app.post('/chats', { schema: createChatSchema }, signupHandler);
};

export default chatRoutes;
