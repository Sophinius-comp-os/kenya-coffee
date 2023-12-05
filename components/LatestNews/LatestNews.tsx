"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Container from "../ui/Container";
import { Post } from "@/typings";
import PostCard from "../Post/Post";
import Link from "next/link";
const LatestNews = ({ posts }: { posts: [Post] }) => {
  console.log(posts);
  const router = useRouter();
  return (
    <Container className="">
      <div className="text-center">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Latest News
        </h2>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog
          </h1>

          {posts.map((post) => (
            <div
              className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"
              key={post._id}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default LatestNews;
