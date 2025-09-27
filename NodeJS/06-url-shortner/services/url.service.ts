import { and, eq } from "drizzle-orm";
import db from "../db";
import { urlsTable } from "../models";

export const createShortUrl = async ({
  shortCode,
  targetUrl,
  userId,
}: {
  shortCode: string;
  targetUrl: string;
  userId: string;
}) => {
  const [result] = await db
    .insert(urlsTable)
    .values({
      shortCode,
      targetUrl,
      userId,
    })
    .returning({
      id: urlsTable.id,
      shortCode: urlsTable.shortCode,
      targetUrl: urlsTable.targetUrl,
    });

  return result;
};

export const getUrlByCode = async (code: string) => {
  const [result] = await db
    .select({
      targetUrl: urlsTable.targetUrl,
      userId: urlsTable.userId,
    })
    .from(urlsTable)
    .where(eq(urlsTable.shortCode, code));

  if (!result) {
    return null;
  }

  return result;
};

export const getAllUrlsByUserId = async (userID: string) => {
  const result = await db
    .select({
      targetUrl: urlsTable.targetUrl,
      shortCode: urlsTable.shortCode,
    })
    .from(urlsTable)
    .where(eq(urlsTable.userId, userID));

  if (result.length <= 0) {
    return null;
  }

  return result;
};

export const deleteUrlByCode = async (code: string, userID: string) => {
  await db
    .delete(urlsTable)
    .where(and(eq(urlsTable.shortCode, code), eq(urlsTable.userId, userID)));

  return true;
};
