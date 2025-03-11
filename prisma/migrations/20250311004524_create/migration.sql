/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `comments` table. All the data in the column will be lost.
  - You are about to alter the column `content` on the `comments` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the column `description` on the `posts` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `posts` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `username` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comments` DROP COLUMN `updatedAt`,
    MODIFY `content` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `description`,
    ADD COLUMN `content` TEXT NOT NULL,
    ADD COLUMN `image_url` VARCHAR(191) NULL,
    MODIFY `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `bio` TEXT NULL,
    ADD COLUMN `profile_picture_url` VARCHAR(191) NULL,
    MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `friends` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `friendId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FriendToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FriendToUser_AB_unique`(`A`, `B`),
    INDEX `_FriendToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_username_key` ON `users`(`username`);

-- AddForeignKey
ALTER TABLE `_FriendToUser` ADD CONSTRAINT `_FriendToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `friends`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FriendToUser` ADD CONSTRAINT `_FriendToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
