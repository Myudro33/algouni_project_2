/*
  Warnings:

  - You are about to drop the column `iceCream_type` on the `orders` table. All the data in the column will be lost.
  - Added the required column `type` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "iceCream_type",
ADD COLUMN     "type" VARCHAR(255) NOT NULL;
