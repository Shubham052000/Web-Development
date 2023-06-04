import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"/"}>Go to Home Route</Link>
      <h1>you're on hello route!!</h1>
    </div>
  );
};

export default page;
