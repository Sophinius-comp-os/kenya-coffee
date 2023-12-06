import { fetchPosts } from "@/sanity/sanity.query";

import { Post as PostTypes } from "@/typings";
import { BlogGrid } from "./components/BlogGrid";

export const revalidate = 3600;
export default async function BlogPage() {
  const posts: [PostTypes] = await fetchPosts();
  return <BlogGrid posts={posts} />;
}
