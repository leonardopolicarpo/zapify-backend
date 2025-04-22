import type { FastifyReply, FastifyRequest } from 'fastify';
import type { GetMessagesByChatIdParams } from '../../docs';
import { getMessagesByChatId } from '../../functions';

export const getMessagesByChatIdHandler = async (
  request: FastifyRequest<{ Params: GetMessagesByChatIdParams }>,
  reply: FastifyReply
) => {
  try {
    const { chatId } = request.params;

    const messages = await getMessagesByChatId({ chatId });

    return reply.status(200).send({ messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return reply.status(500).send({ error: 'Error fetching messages' });
  }
};
