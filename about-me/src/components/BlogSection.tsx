import { useEffect, useState } from "react";
import matter from "gray-matter";

export const BlogSection = () => {
  const [posts, setPosts] = useState<{ title: string; date: string; content: string }[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const files = import.meta.glob("../blog/*.mdx", { as: "raw" });
      const entries = await Promise.all(
        Object.entries(files).map(async ([, loader]) => {
          const raw = await loader();
          const { data, content } = matter(raw);
          return { title: data.title, date: data.date, content };
        })
      );
      setPosts(entries);
    };

    loadPosts();
  }, []);

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h2>
      {posts.map((post, i) => (
        <article key={i} className="mb-8">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p className="mt-2">{post.content.slice(0, 200)}...</p>
        </article>
      ))}
    </section>
  );
};
