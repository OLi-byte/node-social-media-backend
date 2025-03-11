/*
  Warnings:

  - You are about to drop the `friendship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `friendship` DROP FOREIGN KEY `friendship_user1Id_fkey`;

-- DropForeignKey
ALTER TABLE `friendship` DROP FOREIGN KEY `friendship_user2Id_fkey`;

-- DropTable
DROP TABLE `friendship`;

-- CreateTable
CREATE TABLE `Friendship` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `friendId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Friendship_userId_friendId_key`(`userId`, `friendId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_friendId_fkey` FOREIGN KEY (`friendId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
