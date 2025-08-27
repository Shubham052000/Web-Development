import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  deleteBookById,
} from "../controller/books.controller";

const router = Router();

router.get("/", getAllBooks);

router.post("/", createBook);

router.get("/:id", getBookById);

router.delete("/:id", deleteBookById);

export default router;
