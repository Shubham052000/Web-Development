"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-5 my-10">
      <h2 className="text-4xl">Something went wrong!</h2>
      <button
        className="border border-spacing-4 rounded-full px-6 py-3 mt-5"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
