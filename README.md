# Description of the latest commit

- selects and nested selects : 

### CODE:
```ts
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
```json
{
  name: 'Manan',
  email: 'mananjain31jan@gmail.com',
  userPreference: { emailUpdates: true }
}
```