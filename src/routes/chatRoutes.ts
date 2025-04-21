import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createChatSchema, getUserChatsSchema } from '../docs';
import { createChatHandler, getUserChatsHandler } from '../handlers';

const chatRoutes: FastifyPluginAsyncZod = async app => {
  app.post('/chats', { schema: createChatSchema }, createChatHandler);
  app.get('/user/:id/chats', { schema: getUserChatsSchema }, getUserChatsHandler);
};

export default chatRoutes;
