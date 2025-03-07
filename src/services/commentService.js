import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createComment(userId, postId, content) {
  if (!userId || !postId || !content) {
    throw new Error("userId, postId, content são obrigatórios!");
  }

  try {
    const newComment = await prisma.comment.create({
      data: {
        userId,
        postId,
        content,
      },
    });

    return newComment;
  } catch (error) {
    throw error;
  }
}
