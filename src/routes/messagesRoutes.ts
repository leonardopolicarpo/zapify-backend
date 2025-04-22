import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createMessageSchema, getMessagesByChatIdSchema } from '../docs';
import { createMessageHandler, getMessagesByChatIdHandler } from '../handlers';

const messagesRoutes: FastifyPluginAsyncZod = async app => {
  app.post('/messages', { schema: createMessageSchema }, createMessageHandler);
  app.get(
    '/messages/:chatId',
    { schema: getMessagesByChatIdSchema },
    getMessagesByChatIdHandler
  );
};

export default messagesRoutes;
