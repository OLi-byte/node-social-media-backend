import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createFriendRequest(userId, receiverId) {
  try {
    const existingRequest = await prisma.friendRequest.findFirst({
      where: {
        OR: [
          { senderId: userId, receiverId: receiverId },
          { senderId: receiverId, receiverId: userId },
        ],
      },
    });

    if (existingRequest) {
      const error = new Error("A solicitação de amizade já foi feita");
      error.statusCode = 400;
      throw error;
    }

    const request = await prisma.friendRequest.create({
      data: {
        senderId: userId,
        receiverId: receiverId,
      },
    });

    return request;
  } catch (error) {
    throw error;
  }
}
