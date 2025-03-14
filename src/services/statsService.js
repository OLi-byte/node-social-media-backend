import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createStats(userId, stats, emoji) {
  try {
    const existingStats = await prisma.stats.findFirst({
      where: {
        userId: userId,
      },
    });

    if (existingStats) {
      throw new Error("Esse perfil já possui stats");
    }

    const [cool, trustable, sexy] = stats;

    const newStats = await prisma.stats.create({
      data: {
        userId,
        cool,
        trustable,
        sexy,
        emoji,
      },
    });

    return newStats;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateStats(userId, updatedStats, updatedEmoji) {
  try {
    const existingStats = await prisma.stats.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!existingStats) {
      throw new Error("Esse perfil ainda não possui stats");
    }

    const [updatedCool, updatedTrustable, updatedSexy] = updatedStats;

    const updatedStatsRecord = await prisma.stats.update({
      where: {
        userId: userId,
      },
      data: {
        cool: updatedCool,
        trustable: updatedTrustable,
        sexy: updatedSexy,
        emoji: updatedEmoji,
      },
    });

    return updatedStatsRecord;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
