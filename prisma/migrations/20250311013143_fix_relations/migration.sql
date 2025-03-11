/*
  Warnings:

  - You are about to drop the `Friendship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Friendship` DROP FOREIGN KEY `Friendship_user1Id_fkey`;

-- DropForeignKey
ALTER TABLE `Friendship` DROP FOREIGN KEY `Friendship_user2Id_fkey`;

-- DropTable
DROP TABLE `Friendship`;

-- CreateTable
CREATE TABLE `friendship` (
    `user1Id` INTEGER NOT NULL,
    `user2Id` INTEGER NOT NULL,

    PRIMARY KEY (`user1Id`, `user2Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `friendship` ADD CONSTRAINT `friendship_user1Id_fkey` FOREIGN KEY (`user1Id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friendship` ADD CONSTRAINT `friendship_user2Id_fkey` FOREIGN KEY (`user2Id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
