# Description of the latest commit

on applying migrations: 

```bash
mananjain   ~/study/git repos/learning-prisma   main  npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "railway", schema "public" at "containers-us-west-52.railway.app:7997"


Error: 
⚠️ We found changes that cannot be executed:

  • Step 1 Added the required column `age` to the `User` table without a default value. There are 1 rows in this table, it is not possible to execute this step.
  • Step 1 Added the required column `email` to the `User` table without a default value. There are 1 rows in this table, it is not possible to execute this step.

You can use prisma migrate dev --create-only to create the migration file, and manually modify it to address the underlying issue(s).
Then run prisma migrate dev to apply it and verify it works.
```


i fixed it by removing all data from table User. 

```bash