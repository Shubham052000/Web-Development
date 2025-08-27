import express from "express";
import booksRouter from "./routes/books.routes";
import loggerMiddleware from "./middleware/loggerMiddleware";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(loggerMiddleware);
app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// async function getAllUsers() {
//   const users = await db.select().from(usersTable);
//   console.log(users);
//   return users;
// }

// async function createUser({
//   name,
//   age,
//   email,
// }: {
//   name: string;
//   age: number;
//   email: string;
// }) {
//   await db.insert(usersTable).values({ name, age, email }).returning();
// }

// getAllUsers();
