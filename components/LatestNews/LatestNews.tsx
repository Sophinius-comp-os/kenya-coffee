"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Container from "../ui/Container";
import { Post } from "@/typings";
import Link from "next/link";

import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { urlForImage } from "@/sanity/lib/image";
const LatestNews = ({ posts }: { posts: [Post] }) => {
  // console.log(posts);
  const router = useRouter();
  return (
    <Container className="">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Latest News
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {posts.map((post) => (
              <div className="lg:flex" key={post._id}>
                <Image
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={urlForImage(post.mainImage).url()}
                  alt={post.title}
                  width={200}
                  height={200}
                />
                <div className="flex flex-col justify-evenly lg:mx-4">
                  <a href={`/${post.slug}`}>
                    <div className="text-lg font-semibold text-gray-800 hover:underline dark:text-white ">
                      {post?.title}
                    </div>
                  </a>

                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    Date: {Date(post?.publishedAt).substring(0, 10)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default LatestNews;
