import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createMessageSchema } from '../docs';
import { createMessageHandler } from '../handlers';

const messagesRoutes: FastifyPluginAsyncZod = async app => {
  app.post('/messages', { schema: createMessageSchema }, createMessageHandler)
}

export default messagesRoutes;