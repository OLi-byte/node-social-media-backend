import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createLike(userId, postId) {
  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        userId,
        postId,
      },
    });

    if (existingLike) {
      throw new Error("Você já curtiu esse post!");
    }

    const like = await prisma.like.create({
      data: {
        userId,
        postId,
      },
    });

    return like;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
