import db from "./db";
import { usersTable } from "./drizzle/schema";

async function getAllUsers() {
  const users = await db.select().from(usersTable);
  console.log(users);
  return users;
}

async function createUser({
  name,
  age,
  email,
}: {
  name: string;
  age: number;
  email: string;
}) {
  await db.insert(usersTable).values({ name, age, email }).returning();
}

getAllUsers();
