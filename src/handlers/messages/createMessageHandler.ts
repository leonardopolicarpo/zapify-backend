import type { FastifyReply, FastifyRequest } from 'fastify';
import type { CreateMessageBody } from '../../docs';
import { createMessage } from '../../functions';

export const createMessageHandler = async (
  request: FastifyRequest<{ Body: CreateMessageBody }>,
  reply: FastifyReply
) => {
  try {
    const { chatId, content, senderId } = request.body;

    const message = await createMessage({
      chatId,
      senderId,
      content,
    });

    return reply.status(201).send({ message });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error('Error creating chat:', error.message);
    return reply.status(500).send({ error: 'Error creating chat' });
  }
};
