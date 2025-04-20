/*
  Warnings:

  - You are about to drop the column `payment_status_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `payment_status` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `order_status_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_payment_status_id_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "payment_status_id",
ADD COLUMN     "order_status_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "payment_status";

-- CreateTable
CREATE TABLE "order_status" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "order_status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_status_id_key" ON "order_status"("id");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_order_status_id_fkey" FOREIGN KEY ("order_status_id") REFERENCES "order_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
