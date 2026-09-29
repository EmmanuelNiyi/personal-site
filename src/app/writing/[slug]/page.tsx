import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="page-header">
      <div className="container post-container">
        <Link href="/writing" className="text-link back-link">
          ← All writing
        </Link>
        <div className="eyebrow">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.draft ? " · Draft" : null}
        </div>
        <h1 className="page-title">{post.title}</h1>
        {post.description ? <p className="page-lede">{post.description}</p> : null}
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </article>
  );
}
