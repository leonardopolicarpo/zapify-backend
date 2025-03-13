import { readdirSync } from 'node:fs';
import type { FastifyInstance } from 'fastify';

export const setupRoutes = (app: FastifyInstance): void => {
  readdirSync(`${__dirname}/../routes`).map(async file => {
    const route = require(`../routes/${file}`);
    app.register(route);
  });
};
