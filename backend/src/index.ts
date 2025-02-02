import Fastify from 'fastify';
const server = Fastify({ logger: true });
import { PrismaClient } from '@prisma/client'



server.get('/', async (request, reply) => {
  const prisma = new PrismaClient();

  try {
    let depot = await prisma.depot.findFirst({
      where: {
        id: 1,
      },
    });

    if (!depot) {
      depot = await prisma.depot.create({
        data: {
          label: "Quai Plate",
          adresse: "Quai Plate",
          coordonneeY: 0.0,
          coordonneeX: 0.0,
        },
      });
    }

    return { data: depot };
  } catch (error) {
    console.error("Error:", error);
    reply.status(500).send({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
});


server.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Serveur web sur le port ${address}`);
});
