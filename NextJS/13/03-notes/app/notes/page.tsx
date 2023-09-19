import Link from "next/link";
import PocketBase from "pocketbase";
import CreateNote from "./[id]/CreateNote";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "default-no-store",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getNotes() {
  // const res = await fetch(
  //   "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
  //   { cache: "no-store" }
  // );
  // const data = await res.json();

  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.collection("notes").getList(1, 30);

  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className="py-4 px-6 bg-yellow-300 text-black inline-block m-4">
        <h2>Title: {title}</h2>
        <h5>Content: {content}</h5>
        <p>Date created: {created}</p>
      </div>
    </Link>
  );
}
