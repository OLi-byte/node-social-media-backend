-- CreateIndex
CREATE INDEX `friendships_userId_friendId_idx` ON `friendships`(`userId`, `friendId`);

-- CreateIndex
CREATE INDEX `friendships_friendId_userId_idx` ON `friendships`(`friendId`, `userId`);
