import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PageHeader } from "@/components/ui";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  const posts = getPosts();

  return (
    <>
      <PageHeader eyebrow="Blog" title="Writing">
        <p className="page-lede">Notes on machine learning, clinical data and building software for healthcare.</p>
      </PageHeader>

      <section className="section section-tight">
        <div className="container">
          {posts.length === 0 ? (
            <div className="panel empty-state">
              <h2>First posts coming soon</h2>
              <p>In the meantime, the projects on the Work page have write-ups on GitHub.</p>
              <Link className="btn btn-ghost" href="/work">
                See my work <Arrow />
              </Link>
            </div>
          ) : (
            <div className="post-grid">
              {posts.map((post) => (
                <Link key={post.slug} href={`/writing/${post.slug}`} className="post-card">
                  <time dateTime={post.date}>
                    {formatDate(post.date)}
                    {post.draft ? " · Draft" : null}
                  </time>
                  <h3>{post.title}</h3>
                  {post.description ? <p>{post.description}</p> : null}
                  <span className="project-link">
                    Read post <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
