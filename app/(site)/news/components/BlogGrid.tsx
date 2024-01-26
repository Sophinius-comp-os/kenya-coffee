"use client";
import { Post as PostTypes } from "@/typings";
import { Post } from "./Post";
import clsx from "clsx";
import { useTheme } from "next-themes";
import {Pagination} from "@/components/Pagination";

export function BlogGrid({ posts }: { posts: [PostTypes] }) {

  return (
    <div
      className={clsx(
        "relative grid max-w-lg gap-10 mx-auto mt-14 sm:mt-16 md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10 xl:gap-x-10 xl:gap-y-10",

      )}
    >
      <div className="absolute hidden gap-6 -top-20   lg:-left-4 xl:flex 2xl:-left-24">
        <span className="inline-block  text-xl md:text-2xl tracking-wide transform -rotate-12 font-writing text-slate-600">
          Read the latest
        </span>

        <svg
          viewBox="0 0 85 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-16 h-auto transform rotate-45 -left-1 top-2 -scale-100 text-slate-600"
        >
          <path
            d="M84.1428 1.12604C68.4579 15.0432 48.2728 24.8484 26.7076 22.7737C20.393 22.1662 13.251 19.5041 7.51 16.6647C6.29685 16.0646 5.19832 15.2656 4.08583 14.4969C3.06981 13.7949 4.95423 22.296 5.12047 23.2959C6.89794 33.9863 5.2443 22.4385 4.04146 18.4653C3.10796 15.3818 1.13626 12.2911 0.701068 9.07517C0.350636 6.4856 5.49948 7.02736 7.26614 6.8582C9.08258 6.68426 20.8214 3.77937 19.2507 7.81152C16.4328 15.0458 10.9147 19.889 6.01223 25.5572"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>

      {posts.map((post) => (
        <Post key={post?.slug.current} post={post} />
      ))}
      {/*<Pagination/>*/}
    </div>
  );
}
