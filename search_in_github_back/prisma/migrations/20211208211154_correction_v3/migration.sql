/*
  Warnings:

  - The primary key for the `Branch` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Branch_pkey" PRIMARY KEY ("id");
