import Fastify from 'fastify';

const server = Fastify({ logger: true });

server.get('/', async (request, reply) => {
  return { message: 'Hello world !' };
});

server.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Serveur web sur le port ${address}`);
});
