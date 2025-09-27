import db from "../db";
import { usersTable } from "../models";
import { eq } from "drizzle-orm";

export const getUserByEmail = async (email: string) => {
  const [user] = await db
    .select({
      id: usersTable.id,
      firstName: usersTable.firstName,
      lastName: usersTable.lastName,
      email: usersTable.email,
      password: usersTable.password,
      salt: usersTable.salt,
    })
    .from(usersTable)
    .where(eq(usersTable.email, email));

  return user;
};

export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  salt,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  salt: string;
}) => {
  const [user] = await db
    .insert(usersTable)
    .values({
      firstName,
      lastName,
      email,
      password,
      salt,
    })
    .returning({ id: usersTable.id });

  return user;
};
