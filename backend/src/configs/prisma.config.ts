import { PrismaClient } from "@prisma/client";

const prisma = PrismaClient();

// Handle Connection
prisma.$connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error: any) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });

export default prisma;