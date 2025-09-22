/*
  Warnings:

  - You are about to drop the `ProductBundle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `swedishname` to the `IndividualProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."BundleItem" DROP CONSTRAINT "BundleItem_bundleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_bundleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ShippingDestination" DROP CONSTRAINT "ShippingDestination_bundleId_fkey";

-- AlterTable
ALTER TABLE "public"."IndividualProduct" ADD COLUMN     "swedishname" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."ProductBundle";

-- CreateTable
CREATE TABLE "public"."OrderableProductBundle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "swedishname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "swedishdescription" TEXT NOT NULL,
    "purity" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "correlatesto" TEXT NOT NULL,
    "imagedescription" TEXT NOT NULL,
    "tier" INTEGER NOT NULL,
    "productType" TEXT NOT NULL DEFAULT 'productlisting',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderableProductBundle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."BundleItem" ADD CONSTRAINT "BundleItem_bundleId_fkey" FOREIGN KEY ("bundleId") REFERENCES "public"."OrderableProductBundle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ShippingDestination" ADD CONSTRAINT "ShippingDestination_bundleId_fkey" FOREIGN KEY ("bundleId") REFERENCES "public"."OrderableProductBundle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CartItem" ADD CONSTRAINT "CartItem_bundleId_fkey" FOREIGN KEY ("bundleId") REFERENCES "public"."OrderableProductBundle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
