"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainHeader = () => {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <Link
        href={"/"}
        className={` ${path === "/" && "underline"} underline-offset-8`}
      >
        Home Page
      </Link>
      <Link
        href={"/hello"}
        className={` ${path === "/hello" && "underline"} underline-offset-8`}
      >
        Hello Page
      </Link>
    </>
  );
};

export default MainHeader;
