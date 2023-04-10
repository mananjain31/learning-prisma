# Description of the latest commit

run this command to regenrate prisma client code for coding in it    
```bash
npx prisma generate
```

## create user : 
```ts

const user = await prisma.user.create({
data: {
    name: "Manan",
    email: "mananjain31jan@gmail.com",
    age: 21,
},
});
console.log(user);


```
output: 
```bash
{
  id: '2aa2a5fd-5b46-48c9-8934-d7210c8c2c21',
  name: 'Manan',
  age: 21,
  email: 'mananjain31jan@gmail.com',
  role: 'BASIC'
}
```