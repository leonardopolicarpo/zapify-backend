import type { FastifyReply, FastifyRequest } from 'fastify';
import type { GetUserChatsParams } from '../../docs';
import { getChatsByUserId } from '../../functions';

export const getUserChatsHandler = async (
  request: FastifyRequest<{ Params: GetUserChatsParams }>,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params;

    const chatList = await getChatsByUserId({ userId: id })

    return reply.status(200).send({ chatList });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error('Error getting chats:', error.message);
    return reply.status(500).send({ error: 'Error getting chats' });
  }
};
