import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="px-8 py-4 shadow-lg rounded-lg flex flex-col items-center border border-slate-400 ">
      <img
        src={image ?? "mememan.webp"}
        alt={`${name}'s profile`}
        className="rounded-full h-36 w-36 "
      />
      <div className="mt-3 text-left">
        <h3 className="font-bold text-lg">
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
