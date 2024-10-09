import { Router } from "express";

const router = Router();

const USER_DATA = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob@example.com",
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice@example.com",
  },
];

router.get("/", (req, res) => {
  res.status(201).send({
    success: true,
    data: USER_DATA,
  });
});

export default router;
