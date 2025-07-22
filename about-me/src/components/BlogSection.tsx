
import React, { useEffect, useState } from "react";
import matter from "gray-matter";

type BlogPost = {
  title: string;
  date: string;
  content: string;
};

export const BlogSection: React.FC = React.memo(() => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const files = import.meta.glob("../blog/*.mdx", { as: "raw" });
        const entries = await Promise.all(
          Object.entries(files).map(async ([, loader]) => {
            const raw = await loader();
            const { data, content } = matter(raw);
            return { title: data.title, date: data.date, content };
          })
        );
        setPosts(entries);
      } catch (err) {
        setError("Failed to load blog posts.");
      }
    };
    loadPosts();
  }, []);

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" aria-label="Blog Section">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {posts.map((post, i) => (
        <article key={i} className="mb-8" aria-label={`Blog post: ${post.title}`}>
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p className="mt-2">{post.content.slice(0, 200)}...</p>
        </article>
      ))}
    </section>
  );
});
