import express from "express";
import { authenticationMiddleware } from "./middlewares/auth.middleware";
import userRouter from "./routes/user.routes";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use(authenticationMiddleware);

app.get("/", (req, res) => {
  res.json({
    status: "200",
    message: "Server is running",
  });
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
