import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
async function main() {
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
