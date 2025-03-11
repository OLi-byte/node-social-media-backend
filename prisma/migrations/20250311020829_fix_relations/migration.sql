/*
  Warnings:

  - A unique constraint covering the columns `[friendId,userId]` on the table `friendships` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `friendships_friendId_userId_key` ON `friendships`(`friendId`, `userId`);
