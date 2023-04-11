# Description of the latest commit

Create Many

### CODE:
```ts
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
```

### OUTPUT:
```json
{ count: 2 }
```