/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `accounts_customerId_key` ON `accounts`(`customerId`);
