-- CreateTable
CREATE TABLE `Stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cool` INTEGER NOT NULL DEFAULT 1,
    `trustable` INTEGER NOT NULL DEFAULT 1,
    `sexy` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `emoji` VARCHAR(191) NOT NULL DEFAULT '🙂',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
