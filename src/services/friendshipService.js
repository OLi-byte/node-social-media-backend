import { FriendRequestStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function acceptFriendRequest(userId, senderId) {
  try {
    const friendRequest = await prisma.friendRequest.findFirst({
      where: {
        senderId,
        receiverId: userId,
        status: FriendRequestStatus.PENDING,
      },
    });

    if (!friendRequest) {
      throw new Error("Friend request not found or already processed");
    }

    const [user1Id, user2Id] =
      userId < senderId ? [userId, senderId] : [senderId, userId];

    const updatedRequest = await prisma.friendRequest.update({
      where: { senderId_receiverId: { senderId, receiverId: userId } },
      data: { status: FriendRequestStatus.ACCEPTED },
    });

    await prisma.friendship.create({
      data: {
        friendOfId: user1Id,
        friendId: user2Id,
      },
    });

    return updatedRequest;
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to accept friend request");
  }
}
