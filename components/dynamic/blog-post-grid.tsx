"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogPost, getBlogPosts, isBackendApiError } from "@/lib/backend-api";

export function BlogPostGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    getBlogPosts()
      .then((data) => {
        if (!active) return;
        setPosts(data);
      })
      .catch((error) => {
        if (!active) return;
        if (isBackendApiError(error)) {
          setError(error.message);
          return;
        }
        setError("Unable to load posts from backend right now.");
      });

    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return <p className="text-brand-muted">{error}</p>;
  }

  if (!posts.length) {
    return <p className="text-brand-muted">Loading posts...</p>;
  }

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {posts.map((post) => (
        <article key={post.id} className="rounded-xl2 border border-brand-line bg-brand-card p-6 shadow-soft">
          <h2 className="text-xl font-semibold leading-snug">{post.title}</h2>
          <p className="mt-3 text-brand-muted">{post.excerpt}</p>
          <Link
            href={post.href}
            className="mt-5 inline-block text-sm font-semibold text-brand-primary hover:text-brand-primaryDark"
          >
            Read article
          </Link>
        </article>
      ))}
    </div>
  );
}
