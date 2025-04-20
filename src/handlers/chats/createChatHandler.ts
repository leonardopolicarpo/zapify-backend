import type { FastifyReply, FastifyRequest } from 'fastify';
import type { CreateChatBody } from '../../docs';
import { addUsersToChat, createChat } from '../../functions';

export const createChatHandler = async (
  request: FastifyRequest<{ Body: CreateChatBody }>,
  reply: FastifyReply
) => {
  try {
    const { name, userIds, createdBy } = request.body;

    const chat = await createChat({
      name,
      createdBy,
    });

    await addUsersToChat({ chatId: chat.id, userIds, createdBy })

    return reply.status(201).send({ chatId: chat.id, name });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error('Error creating chat:', error.message);
    return reply.status(500).send({ error: 'Error creating chat' });
  }
};
