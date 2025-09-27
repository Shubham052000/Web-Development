import type { NextFunction, Request, Response } from "express";
import { validateUserToken } from "../utils/token";

export const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next();
  }

  const [_, token] = authHeader.split(" ");

  const payload = validateUserToken(token);

  req.user = payload;
  return next();
};
