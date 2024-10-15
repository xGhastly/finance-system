/*
  Warnings:

  - You are about to drop the column `receiverId` on the `friendship` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `friendship` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[senderUser,receiverUser]` on the table `Friendship` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `receiverUser` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderUser` to the `Friendship` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `friendship` DROP FOREIGN KEY `Friendship_receiverId_fkey`;

-- DropForeignKey
ALTER TABLE `friendship` DROP FOREIGN KEY `Friendship_senderId_fkey`;

-- DropIndex
DROP INDEX `Friendship_senderId_receiverId_key` ON `friendship`;

-- AlterTable
ALTER TABLE `friendship` DROP COLUMN `receiverId`,
    DROP COLUMN `senderId`,
    ADD COLUMN `receiverUser` VARCHAR(191) NOT NULL,
    ADD COLUMN `senderUser` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Friendship_senderUser_receiverUser_key` ON `Friendship`(`senderUser`, `receiverUser`);

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_senderUser_fkey` FOREIGN KEY (`senderUser`) REFERENCES `customers`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_receiverUser_fkey` FOREIGN KEY (`receiverUser`) REFERENCES `customers`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
