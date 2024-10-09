import express from "express";
import type { Request, Response } from "express";
import userRouter from "./routes/users";
import bodyParser from "body-parser";
import calcRouter from "./routes/calculator";

const PORT = 3001;

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    data: "Hello World",
  });
});

app.use("/users", userRouter);
app.use("/calculator", calcRouter);

console.log("App is running on PORT: http://localhost:" + PORT);

app.listen(PORT);
