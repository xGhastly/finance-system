/*
  Warnings:

  - Added the required column `ownerUser` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `accounts` ADD COLUMN `ownerUser` VARCHAR(191) NOT NULL;
