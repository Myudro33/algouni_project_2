import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
async function main() {
  const payment_status = await prisma.payment_status.createMany({
    data: [
      {
        id: 1,
        name: "paid",
      },
      {
        id: 2,
        name: "not paid",
      },
      {
        id: 3,
        name: "pending",
      },
    ],
  });
  const orders = await prisma.orders.createMany({
    data: [
      {
        id: 1,
        type: "chocolate",
        address: "address 1",
        payment_status_id: 1,
        name: "nika",
        mobile: "0912345678",
        price: 0.5,
        quantity: 10,
        sum: 0.5 * 10,
        note: "note 1",
      },
      {
        id: 2,
        type: "vanilla",
        address: "address 2",
        payment_status_id: 2,
        name: "nika",
        mobile: "0912345678",
        price: 2.5,
        quantity: 20,
        sum: 2.5 * 20,
        note: "note 2",
      },
      {
        id: 3,
        type: "strawberry",
        address: "address 3",
        payment_status_id: 3,
        name: "nika",
        mobile: "0912345678",
        price: 1.5,
        quantity: 30,
        sum: 1.5 * 30,
        note: "note 3",
      },
    ],
  });
  const roles = await prisma.roles.createMany({
    data: [
      {
        id: 1,
        name: "admin",
        description: "manage all",
      },
      {
        id: 2,
        name: "manager",
        description: "production management",
      },
      {
        id: 3,
        name: "sales",
        description: "manage orders",
      },
      {
        id: 4,
        name: "distributor",
        description: "delivery",
      },
    ],
  });
  const users = await prisma.users.create({
    data: {
      name: "nika",
      email: "nika@gmail.com",
      password: bcrypt.hashSync("nika", 10),
      role_Id: 1,
    },
  });
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
