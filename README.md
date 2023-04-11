# Description of the latest commit

query logging

### CODE:
```ts
// for logging
const prisma = new PrismaClient({ log: ["query"] });


// the main function code
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

```

### OUTPUT:
```bash
prisma:query BEGIN
prisma:query SELECT "public"."User"."id" FROM "public"."User" WHERE 1=1 OFFSET $1
prisma:query SELECT "public"."User"."id" FROM "public"."User" WHERE 1=1
prisma:query DELETE FROM "public"."User" WHERE ("public"."User"."id" IN ($1) AND 1=1)
prisma:query COMMIT
prisma:query BEGIN
prisma:query INSERT INTO "public"."UserPreference" ("id","emailUpdates") VALUES ($1,$2) RETURNING "public"."UserPreference"."id"
prisma:query INSERT INTO "public"."User" ("id","name","age","email","role","userPreferenceId") VALUES ($1,$2,$3,$4,$5,$6) RETURNING "public"."User"."id"
prisma:query SELECT "public"."User"."id", "public"."User"."name", "public"."User"."email", "public"."User"."userPreferenceId" FROM "public"."User" WHERE "public"."User"."id" = $1 LIMIT $2 OFFSET $3
prisma:query SELECT "public"."UserPreference"."id", "public"."UserPreference"."emailUpdates" FROM "public"."UserPreference" WHERE "public"."UserPreference"."id" IN ($1) OFFSET $2
prisma:query COMMIT
{
  name: 'Manan',
  email: 'mananjain31jan@gmail.com',
  userPreference: { emailUpdates: true }
}
```