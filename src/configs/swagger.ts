import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import type { FastifyInstance } from 'fastify';
import { jsonSchemaTransform } from 'fastify-type-provider-zod';

export const setupSwagger = (app: FastifyInstance) => {
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Zapify',
        version: '0.0.1',
      },
    },
    transform: jsonSchemaTransform,
  });

  app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  });
};
