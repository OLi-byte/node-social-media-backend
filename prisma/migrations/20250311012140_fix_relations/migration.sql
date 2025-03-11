/*
  Warnings:

  - You are about to drop the `_FriendToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `friends` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_FriendToUser` DROP FOREIGN KEY `_FriendToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_FriendToUser` DROP FOREIGN KEY `_FriendToUser_B_fkey`;

-- AlterTable
ALTER TABLE `comments` MODIFY `content` TEXT NOT NULL;

-- DropTable
DROP TABLE `_FriendToUser`;

-- DropTable
DROP TABLE `friends`;

-- CreateTable
CREATE TABLE `Friendship` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user1Id` INTEGER NOT NULL,
    `user2Id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Friendship_user1Id_user2Id_key`(`user1Id`, `user2Id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_user1Id_fkey` FOREIGN KEY (`user1Id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_user2Id_fkey` FOREIGN KEY (`user2Id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
