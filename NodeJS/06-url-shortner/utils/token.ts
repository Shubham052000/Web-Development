import jwt from "jsonwebtoken";
import { userTokenSchema } from "../validations/token.validation";

const JWT_SECRET = process.env.JWT_SECRET!;

export const createUserToken = (payload: { id: string; email: string }) => {
  const validationResult = userTokenSchema.safeParse(payload);
  let token = null;
  if (validationResult.success) {
    token = jwt.sign(validationResult.data, JWT_SECRET, {
      expiresIn: "1h",
    });

    return token;
  }

  return token;
};

export const validateUserToken = (token: string) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
};
