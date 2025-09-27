import { randomBytes, createHmac } from "crypto";

export const hashPassword = (password: string, passedSalt?: string) => {
  const salt = passedSalt ?? randomBytes(256).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  return { salt, hashedPassword };
};
