import { fetchPosts } from "@/sanity/sanity.query";

import { Post as PostTypes } from "@/typings";
import { BlogGrid } from "./components/BlogGrid";
import Container from "@/components/ui/Container";
import React from "react";
import {Pagination} from "@/components/Pagination";


export const revalidate = 3600;
export default async function BlogPage({searchParams}:{  searchParams?: {
    query?: string,
    page?: string,
  }
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPosts: [PostTypes] = await fetchPosts();
  // console.log(totalPosts)


  return (
      <section
      id="articles"
      className="overflow-hidden py-16 sm:py-24 lg:py-24"
  >
    <Container className="">
      <h2 className="text-center font-display  text-xl md:text-3xl font-semibold text-slate-900 ">
        Latest Articles
      </h2>

      {totalPosts?.length > 0 ? (
          <BlogGrid

             posts={totalPosts}

          />
      ) : (
          <p>No Posts Found</p>
      )}


    </Container>
  </section>)
}

