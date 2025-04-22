import type { FastifyPluginAsync } from 'fastify';

const messageSocketRoute: FastifyPluginAsync = async app => {
  app.get('/messages', { websocket: true }, (socket, req) => {
    console.log('🟢 Cliente conectado no /ws/messages');

    socket.on('message', message => {
      const data = JSON.parse(message.toString());

      if (data.type === 'message') {
        console.log('📨 Mensagem recebida:', data.data);

        for (const client of app.websocketServer.clients) {
          if (client.readyState === 1) {
            client.send(
              JSON.stringify({
                type: 'message',
                data: data.data,
              })
            );
          }
        }
      }
    });
  });
};

export default messageSocketRoute;
