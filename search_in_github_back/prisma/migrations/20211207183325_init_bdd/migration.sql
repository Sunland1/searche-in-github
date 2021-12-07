/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "createAt" TEXT,
ADD COLUMN     "login" TEXT,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Branch" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "repoId" INTEGER,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repo" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "createDate" TEXT,
    "ownerid" INTEGER,

    CONSTRAINT "Repo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserFollows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserFollows_AB_unique" ON "_UserFollows"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFollows_B_index" ON "_UserFollows"("B");

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repo" ADD CONSTRAINT "Repo_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFollows" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
