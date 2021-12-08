/*
  Warnings:

  - The primary key for the `Branch` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Branch` table. All the data in the column will be lost.
  - Made the column `repoId` on table `Branch` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_repoId_fkey";

-- AlterTable
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_pkey",
DROP COLUMN "id",
ALTER COLUMN "repoId" SET NOT NULL,
ADD CONSTRAINT "Branch_pkey" PRIMARY KEY ("repoId");

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
