import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Blog posts are Markdown files in content/writing. The filename is the URL slug.
const POSTS_DIR = path.join(process.cwd(), "content", "writing");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  draft: boolean;
  content: string;
};

function readPost(file: string): Post {
  const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, file), "utf8"));
  return {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? "Untitled"),
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? ""),
    description: String(data.description ?? ""),
    draft: Boolean(data.draft),
    content,
  };
}

// Drafts show up in `npm run dev` but are left out of production builds.
export function getPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(readPost)
    .filter((post) => !post.draft || process.env.NODE_ENV === "development")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): (Post & { html: string }) | undefined {
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) return undefined;
  return { ...post, html: marked.parse(post.content, { async: false }) };
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
