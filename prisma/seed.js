import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
async function main() {
  const payment_status = await prisma.order_status.createMany({
    data: [
      {
        id: 1,
        name: "received",
      },
      {
        id: 2,
        name: "In production",
      },
      {
        id: 3,
        name: "sent",
      },
      {
        id: 4,
        name: "finished",
      },
    ],
  });
  const orders = await prisma.orders.createMany({
    data: [
      {
        id: 1,
        type: "chocolate",
        address: "address 1",
        order_status_id: 1,
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
        order_status_id: 2,
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
        order_status_id: 3,
        name: "nika",
        mobile: "0912345678",
        price: 1.5,
        quantity: 30,
        sum: 1.5 * 30,
        note: "note 3",
      },
      {
        id: 4,
        type: "strawberry",
        address: "address 3",
        order_status_id: 4,
        name: "luka",
        mobile: "0912345678",
        price: 3,
        quantity: 40,
        sum: 3 * 40,
        note: "note 4",
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
