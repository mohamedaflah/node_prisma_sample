# prisma_setup

setup node js
`npm init -y`

install necessary dependencies
1. express

setup prisma
`npm i @prisma/client dotenv`
`npx prisma init`


 We'll configure our prisma schema to look like this 

`// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Post model represents individual blog posts
model Post {
  id        Int       @id @default(autoincrement())
  title     String
  content   String
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}`

Setup data base uri in .env file

DATABASE_URL="postgresql://name:password@localhost:5432/mydb?schema=public

`npx prisma migrate dev`