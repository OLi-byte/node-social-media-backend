/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Stats` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Stats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Stats` ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `emoji` VARCHAR(191) NOT NULL DEFAULT '🙂';

-- CreateIndex
CREATE UNIQUE INDEX `Stats_userId_key` ON `Stats`(`userId`);

-- AddForeignKey
ALTER TABLE `Stats` ADD CONSTRAINT `Stats_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
