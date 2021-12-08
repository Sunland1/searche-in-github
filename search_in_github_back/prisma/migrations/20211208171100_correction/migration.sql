/*
  Warnings:

  - You are about to drop the `_UserFollows` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nbFollower` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nbFollowing` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `avatar_url` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "nbFollower" INTEGER NOT NULL,
ADD COLUMN     "nbFollowing" INTEGER NOT NULL,
ALTER COLUMN "avatar_url" SET NOT NULL,
ALTER COLUMN "createAt" SET NOT NULL;

-- DropTable
DROP TABLE "_UserFollows";
