import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

const main = async () => {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Manan",
      email: "mananjain31jan@gmail.com",
      age: 21,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    select: {
      name: true,
      email: true,
      userPreference: {
        select: {
          emailUpdates: true,
        },
      },
    },
  });
  console.log(user);
};

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
