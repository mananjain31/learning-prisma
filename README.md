# Description of the latest commit

- Nested Creations in single create function using "create" 
- "include" or "select" attribute to get depth of nested creations in our returned created object
- fixes in User an UserPreference  models
- include to include foreign key attributes in the returned object
- select to select specific column to be outputted in the returned object

### Code:
```ts
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
include: {
    userPreference: true,
},
});
console.log(user);
```
### OUTPUT:
{
  id: 'b86ccb99-befb-4105-a857-76c11c346c57',
  name: 'Manan',
  age: 21,
  email: 'mananjain31jan@gmail.com',
  role: 'BASIC',
  userPreferenceId: '9d164cc2-53b9-4646-8453-f3c11809a793',
  userPreference: { id: '9d164cc2-53b9-4646-8453-f3c11809a793', emailUpdates: true }
}