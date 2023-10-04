import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav className="flex justify-between py-10 px-5">
      <Link href={"/"} className="inline-block">
        <Image src="/logo.svg" alt="NextSpace Logo" width={216} height={30} />
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}
