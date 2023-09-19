"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateNote = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        className="block mb-5 text-black"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        className="block mb-5 text-black"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="border border-white rounded-md px-4 py-2">
        Create note
      </button>
    </form>
  );
};

export default CreateNote;
