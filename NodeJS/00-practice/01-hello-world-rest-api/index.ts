import express from "express";
import type {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";
import userRouter from "./routes/users";
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

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const errMsg = err.message || "Something went wrong with the request";
  const errStatus = err.status || 500;
  res.status(errStatus).send({ error: errMsg });
});

app.listen(PORT, () => {
  console.log(`Application is listening on: http://localhost:${PORT}`);
});
