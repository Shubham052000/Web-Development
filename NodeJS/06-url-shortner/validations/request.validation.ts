import { z } from "zod";

export const signupPostRequestBodySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  password: z.string().min(3),
});

export const loginPostRequestBodySchema = z.object({
  email: z.email(),
  password: z.string().min(3),
});

export const urlShortenPostRequestBodySchema = z.object({
  url: z.url(),
  code: z.string().min(3).max(8).optional(),
});
