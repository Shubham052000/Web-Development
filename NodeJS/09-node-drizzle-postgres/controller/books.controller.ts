import type { Request, Response } from "express";
import db from "../db";
import { booksTable } from "../drizzle/schema";
import { eq } from "drizzle-orm";

const getAllBooks = async (req: Request, res: Response) => {
  const books = await db.select().from(booksTable);
  res.status(200).send(books);
};

const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await db
    .select()
    .from(booksTable)
    .where((table) => eq(table.id, Number(id)))
    .limit(1);
  res.status(200).send(book);
};

const createBook = async (req: Request, res: Response) => {
  const { title, author } = req.body;
  const result = await db
    .insert(booksTable)
    .values({ title, author })
    .returning({ id: booksTable.id });
  res.status(201).send(`Book added with ID: ${result[0].id}`);
};

const deleteBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.delete(booksTable).where(eq(booksTable.id, Number(id)));

  res.status(200).send(`Book deleted with ID: ${id}`);
};

export { getAllBooks, createBook, getBookById, deleteBookById };
