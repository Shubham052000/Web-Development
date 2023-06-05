"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  // const pathName = usePathname();
  // console.log(pathName);
  const router = useRouter();
  return (
    <div className="text-center">
      <Link href={"/"} className=" underline underline-offset-4">
        Go to Home Route
      </Link>
      <h1>you're on hello route!!</h1>
      <button
        onClick={() => router.push("/")}
        className="mt-16 rounded-xl border-2 border-solid border-slate-200 px-4 py-2 duration-500 hover:bg-slate-200 hover:text-black
        "
      >
        Click me to go to home route
      </button>
    </div>
  );
};

export default page;
