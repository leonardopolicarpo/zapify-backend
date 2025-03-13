import { app } from './configs/app';
import { env } from './configs/env';

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP server running on port ${env.PORT}`);
});
