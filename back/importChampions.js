import { PrismaClient } from '@prisma/client';
import champions from './champions.json' assert { type: 'json' };

const prisma = new PrismaClient();

const importChampions = async () => {
  try {

    for (const champion of champions) {
      await prisma.champion.create({
        data: {
          name: champion.name,
          type: champion.type
        }
      });
    }

    console.log('Champions insérés avec succès dans la base de données !');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des champions :', error);
  } finally {
    await prisma.$disconnect();
  }
};

importChampions();