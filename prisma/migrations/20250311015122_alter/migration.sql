/*
  Warnings:

  - You are about to drop the `Friendship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Friendship` DROP FOREIGN KEY `Friendship_friendId_fkey`;

-- DropForeignKey
ALTER TABLE `Friendship` DROP FOREIGN KEY `Friendship_userId_fkey`;

-- DropTable
DROP TABLE `Friendship`;

-- CreateTable
CREATE TABLE `friendships` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `friendId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `friendships_userId_friendId_key`(`userId`, `friendId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `friendships` ADD CONSTRAINT `friendships_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friendships` ADD CONSTRAINT `friendships_friendId_fkey` FOREIGN KEY (`friendId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
