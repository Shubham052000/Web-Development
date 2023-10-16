import { prisma } from "@/lib/prisma";
import UserCard from "../components/UserCard";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="grid grid-cols-2 grid-rows-2 align-middle justify-center">
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}
