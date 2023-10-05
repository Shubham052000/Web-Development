// export const dynamic = "force-dynamic";  use to always fetches the latest data

export const revalidate = 420; // use to only occassionally fetch the data such as here after 420 seconds

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostsPage({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div className="h-screen mx-5">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
