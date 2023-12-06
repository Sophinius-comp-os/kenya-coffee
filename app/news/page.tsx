import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import { BlogHero } from "../../components/BlogHero";
import { Articles } from "../../components/Articles";
import { Post } from "@/typings";
import { fetchPosts } from "@/sanity/sanity.query";

export default async function News() {
  const posts: [Post] = await fetchPosts();
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Head>
          <title>Latest Articles & News </title>
          <meta
            name="description"
            content="Explore a diverse range of blog posts covering web development, design, content creation, business, programming tutorials, and more."
          />
        </Head>

        <BlogHero />
        <Articles articles={articles} categories={categories} />
      </motion.div>
    </>
  );
}
