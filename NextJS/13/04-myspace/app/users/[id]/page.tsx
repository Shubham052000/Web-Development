import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });

  return {
    title: `User profile of ${user?.name}`,
  };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });

  const { name, bio, image } = user ?? {};

  return (
    <div className="px-10 py-8 w-screen">
      <h1 className="font-bold text-3xl mb-5">{name}</h1>

      <img
        width={300}
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
        className="rounded-full mb-4"
      />

      <h3>Bio</h3>
      <p className="text-slate-400 italic">{bio ?? "NA"}</p>
    </div>
  );
}
