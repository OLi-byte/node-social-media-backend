/*
  Warnings:

  - You are about to drop the `Stats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Stats` DROP FOREIGN KEY `Stats_userId_fkey`;

-- DropTable
DROP TABLE `Stats`;

-- CreateTable
CREATE TABLE `stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cool` INTEGER NOT NULL DEFAULT 1,
    `trustable` INTEGER NOT NULL DEFAULT 1,
    `sexy` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `emoji` VARCHAR(191) NOT NULL DEFAULT '🙂',
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `stats_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stats` ADD CONSTRAINT `stats_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
