import { fastify } from 'fastify';
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';
import { setupCors } from './cors';
import { setupRoutes } from './routes';
import { setupSwagger } from './swagger';
import { setupWebSocket } from './websocket';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

setupCors(app);
setupSwagger(app);
setupWebSocket(app);
setupRoutes(app);

export { app };
