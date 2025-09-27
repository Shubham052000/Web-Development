import { Router } from "express";
import db from "../db";
import { usersTable } from "../models";
import {
  loginPostRequestBodySchema,
  signupPostRequestBodySchema,
} from "../validations/request.validation";
import { treeifyError } from "zod";
import { hashPassword } from "../utils/hash";
import { createUser, getUserByEmail } from "../services/user.service";
import jwt from "jsonwebtoken";
import { createUserToken } from "../utils/token";

const userRouter = Router();

userRouter.post("/signup", async (req, res, next) => {
  const validationResult = await signupPostRequestBodySchema.safeParseAsync(
    req.body
  );

  if (validationResult.error) {
    return res
      .status(400)
      .json({ error: treeifyError(validationResult.error) });
  }

  const { firstName, lastName, email, password } = validationResult.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return res.status(400).json({
      error: `User with email: ${email} already exists`,
    });
  }

  const { salt, hashedPassword } = hashPassword(password);

  const user = await createUser({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    salt,
  });

  return res.status(201).json({
    data: { userId: user.id },
  });
});

userRouter.post("/login", async (req, res, next) => {
  const validsationResult = await loginPostRequestBodySchema.safeParseAsync(
    req.body
  );

  if (validsationResult.error) {
    return res.status(400).json({
      error: treeifyError(validsationResult.error),
    });
  }

  const { email, password } = validsationResult.data;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).json({
      error: `User with email: ${email} does not exist}`,
    });
  }

  const { hashedPassword } = hashPassword(password, user.salt);

  if (user.password !== hashedPassword) {
    return res.status(401).json({
      error: "Invalid password, pleae try again!",
    });
  }

  const token = createUserToken({
    id: user.id,
    email: user.email,
  });

  if (!token) {
    return res.status(500).json({
      error: "Something went wrong, please try again later!",
    });
  }

  return res.json({ token });
});

userRouter.get("/", (req, res, next) => {});

export default userRouter;
