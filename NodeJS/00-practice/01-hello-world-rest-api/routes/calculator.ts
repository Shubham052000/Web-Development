import { Router, type Request, type Response } from "express";

//URL example = "http://localhost:3001/calculator/?op=__" operation can be add sub mul div

const router = Router();

router.post("/", (req, res) => {
  const { num1, num2 } = req.body;
  if (req.query.op === "add") {
    addtionHandler({ num1: Number(num1), num2: Number(num2) }, res);
  }
  if (req.query.op === "sub") {
    subHandler({ num1: Number(num1), num2: Number(num2) }, res);
  }
  if (req.query.op === "mul") {
    mulHandler({ num1: Number(num1), num2: Number(num2) }, res);
  }
  if (req.query.op === "div") {
    divHandler({ num1: Number(num1), num2: Number(num2) }, res);
  }
});

const addtionHandler = (
  numbers: { num1: number; num2: number },
  res: Response
) => {
  const { num1, num2 } = numbers;
  res.send({ result: Number(num1) + Number(num2) });
};

const subHandler = (numbers: { num1: number; num2: number }, res: Response) => {
  const { num1, num2 } = numbers;
  res.send({ result: Number(num1) - Number(num2) });
};

const mulHandler = (numbers: { num1: number; num2: number }, res: Response) => {
  const { num1, num2 } = numbers;
  res.send({ result: Number(num1) * Number(num2) });
};

const divHandler = (numbers: { num1: number; num2: number }, res: Response) => {
  const { num1, num2 } = numbers;
  res.send({ result: Number(num1) / Number(num2) });
};

export default router;
