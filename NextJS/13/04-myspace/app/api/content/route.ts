const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget scelerisque porttitor, nisl nisl, nisl nisl.",
  },
  {
    title: "Dolor sit amet",
    slug: "dolor-sit-amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget scelerisque porttitor, nisl nisl, nisl nisl.",
  },
  {
    title: "Consectetur adipiscing elit",
    slug: "consectetur-adipiscing-elit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget scelerisque porttitor, nisl nisl, nisl nisl.",
  },
  {
    title: "Integer Nec Odio",
    slug: "integer-nec-odio",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget scelerisque porttitor, nisl nisl, nisl nisl.",
  },
  {
    title: "Praesent Libero",
    slug: "praesent-libero",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget scelerisque porttitor, nisl nisl, nisl nisl.",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();

  return NextResponse.json(posts);
}
