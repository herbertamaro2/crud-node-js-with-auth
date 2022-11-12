-- AlterTable
ALTER TABLE "places" ALTER COLUMN "restaurants" DROP NOT NULL,
ALTER COLUMN "attractions" DROP NOT NULL,
ALTER COLUMN "accommodations" DROP NOT NULL;
