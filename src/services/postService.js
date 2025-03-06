import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createPost(title, description, userId) {
  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        userId,
      },
    });

    return newPost;
  } catch (error) {
    console.error(error.message);
  }
}
