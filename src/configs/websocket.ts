import { readdirSync } from 'node:fs';
import path from 'node:path';
import websocket from '@fastify/websocket';
import type { FastifyInstance } from 'fastify';

export const setupWebSocket = (app: FastifyInstance) => {
  app.register(websocket);

  const wsPath = path.join(__dirname, '../ws');

  readdirSync(wsPath).map(file => {
    const wsModule = require(path.join(wsPath, file));
    app.register(wsModule.default || wsModule, { prefix: '/ws' });
  });
};
