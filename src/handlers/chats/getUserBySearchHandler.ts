import type { FastifyReply, FastifyRequest } from 'fastify';
import type { GetUserBySearchQuery } from '../../docs';
import { getUserBySearch } from '../../functions';

export const getUserBySearchHandler = async (
  request: FastifyRequest<{ Querystring: GetUserBySearchQuery }>,
  reply: FastifyReply
) => {
  try {
    const { query } = request.query;

    const users = await getUserBySearch({ searchTerm: query });

    return reply.status(200).send({ users });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error('Error getting users:', error.message);
    return reply.status(500).send({ error: 'Error getting users' });
  }
};
