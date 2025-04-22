import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';

import {
  createChatSchema,
  getUserBySearchSchema,
  getUserChatsSchema,
} from '../docs';

import {
  createChatHandler,
  getUserBySearchHandler,
  getUserChatsHandler,
} from '../handlers';

const chatRoutes: FastifyPluginAsyncZod = async app => {
  app.post('/chats', { schema: createChatSchema }, createChatHandler);
  app.get(
    '/user/:id/chats',
    { schema: getUserChatsSchema },
    getUserChatsHandler
  );
  app.get(
    '/user/search',
    { schema: getUserBySearchSchema },
    getUserBySearchHandler
  );
};

export default chatRoutes;
