/*
  Warnings:

  - You are about to drop the column `name` on the `Weight` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Weight" DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
