/*
  Warnings:

  - You are about to drop the column `receiverUser` on the `friendship` table. All the data in the column will be lost.
  - You are about to drop the column `senderUser` on the `friendship` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[senderId,receiverId]` on the table `Friendship` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `receiverId` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `Friendship` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `friendship` DROP FOREIGN KEY `Friendship_receiverUser_fkey`;

-- DropForeignKey
ALTER TABLE `friendship` DROP FOREIGN KEY `Friendship_senderUser_fkey`;

-- DropIndex
DROP INDEX `Friendship_senderUser_receiverUser_key` ON `friendship`;

-- AlterTable
ALTER TABLE `friendship` DROP COLUMN `receiverUser`,
    DROP COLUMN `senderUser`,
    ADD COLUMN `receiverId` INTEGER NOT NULL,
    ADD COLUMN `senderId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Friendship_senderId_receiverId_key` ON `Friendship`(`senderId`, `receiverId`);

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
