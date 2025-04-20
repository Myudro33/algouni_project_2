-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "iceCream_type" VARCHAR(255) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "payment_status_id" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_status" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "payment_status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "orders_id_key" ON "orders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "payment_status_id_key" ON "payment_status"("id");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_payment_status_id_fkey" FOREIGN KEY ("payment_status_id") REFERENCES "payment_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
