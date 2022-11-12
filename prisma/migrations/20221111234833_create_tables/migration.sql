/*
  Warnings:

  - You are about to drop the column `accomodations` on the `places` table. All the data in the column will be lost.
  - Added the required column `accommodations` to the `places` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "places" DROP COLUMN "accomodations",
ADD COLUMN     "accommodations" JSONB NOT NULL;
