import Image from "next/image";
import { montserrat, pacifico, raleway } from "./layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/hello"}>Go to Hello Route</Link>
      <h1 className={`${montserrat.className} mb-4 text-2xl`}>Hello World</h1>
      <h1 className={`${pacifico.className} mb-4 text-2xl`}>Hello World</h1>
      <h1 className={`${raleway.className} mb-4 text-2xl`}>Hello World</h1>
      Raleway
      <h1 className={`${raleway.className} mb-4 text-2xl tracking-widest`}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </h1>
      <h1 className={`${raleway.className} mb-4 text-2xl tracking-widest`}>
        abcdefghijklmnopqrstuvwxyz
      </h1>
    </>
  );
}
