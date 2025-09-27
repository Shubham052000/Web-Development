import express, { type Request } from "express";
import { urlShortenPostRequestBodySchema } from "../validations/request.validation";
import { treeifyError } from "zod";

import { nanoid } from "nanoid";
import { ensureAuthenticated } from "../middlewares/auth.middleware";
import {
  createShortUrl,
  deleteUrlByCode,
  getAllUrlsByUserId,
  getUrlByCode,
} from "../services/url.service";

const urlRouter = express.Router();

urlRouter.post("/shorten", ensureAuthenticated, async (req: Request, res) => {
  const validationResult = await urlShortenPostRequestBodySchema.safeParseAsync(
    req.body
  );

  if (validationResult.error) {
    return res
      .status(400)
      .json({ error: treeifyError(validationResult.error) });
  }

  const { url, code } = validationResult.data;

  const shortCode = code ?? nanoid(6);

  const result = await createShortUrl({
    shortCode,
    targetUrl: url,
    userId: req.user.id,
  });

  return res.status(201).json(result);
});

urlRouter.get("/codes", ensureAuthenticated, async (req: Request, res) => {
  const userID = req.user.id;

  const result = await getAllUrlsByUserId(userID);

  if (!result) {
    return res.status(404).json({ error: "No URLs found for this user" });
  }

  res.status(200).json(result);
});

urlRouter.delete("/:code", ensureAuthenticated, async (req: Request, res) => {
  const code = req.params.code;
  const userID = req.user.id;
  const result = await deleteUrlByCode(code, userID);

  res.status(204).json({ deleted: result });
});

urlRouter.get("/:code", async (req, res) => {
  const code = req.params.code;

  const result = await getUrlByCode(code);

  if (!result) {
    return res.status(404).json({ error: "URL not found" });
  }

  return res.status(302).redirect(result.targetUrl);
});

export default urlRouter;
