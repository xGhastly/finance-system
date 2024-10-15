/*
  Warnings:

  - Added the required column `receiverUser` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderUser` to the `Friendship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `friendship` ADD COLUMN `receiverUser` VARCHAR(191) NOT NULL,
    ADD COLUMN `senderUser` VARCHAR(191) NOT NULL;
