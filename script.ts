import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

const main = async () => {
  await prisma.user.deleteMany();
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Spiderman",
        email: "parker@gmail.com",
        age: 22,
      },
      {
        name: "Ironman",
        email: "stark@gmail.com",
        age: 32,
      },
    ],
  });
  console.log(users);
};

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
