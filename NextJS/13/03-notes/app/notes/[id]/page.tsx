import React from "react";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  return data;
}

const NotePage = async ({ params }: any) => {
  const note = await getNote(params.id);
  return (
    <div>
      <h1 className="text-xl font-bold">notes/{note.id}</h1>
      <div className="bg-yellow-300 text-black inline-block px-6 py-4">
        <h3 className="text-lg">{note.title}</h3>
        <h5 className="text-md">{note.content}</h5>
        <p className="text-sm">{note.created}</p>
      </div>
    </div>
  );
};

export default NotePage;
