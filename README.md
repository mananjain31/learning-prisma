# whats done in this step ?
- added prisma client generated by runnung migrations : 
```bash
    yarn add @prisma/client
```
- if you need to manually regenate the client :
```bash
    yarn prisma generate
```
output:
```
✔ Generated Prisma Client (4.12.0 | library) to ./node_modules/@prisma/client in 42ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```