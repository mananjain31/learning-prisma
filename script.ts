import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany();
  console.log("Done");
};

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
