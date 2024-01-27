import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";

import { Post as PostTypes } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

export function Post({ post }: { post: PostTypes }) {

  return (
    <article className="flex flex-col items-start justify-between shadow-sm rounded-2xl shadow-sky-100/50 ring-1 ring-slate-100">
      <div className="w-full px-4 pt-4">
        <Link
            key={post?.slug.current}
            href={`/news/${post?.slug.current}`}
            className="block w-full overflow-hidden rounded-xl"
        >
          <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.title}
              layout="responsive"
              width={16}
              height={9}
              className="object-cover w-full rounded-xl"
          />
          {/*<div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/5"></div>*/}
        </Link>
      </div>

      <div className="relative flex flex-col flex-1 px-2 pt-2 pb-4 sm:px-5 sm:pt-8 sm:pb-10 group xl:px-7">

        <div className="flex-1">
          <h3 className="mt-1 sm:mt-4  text-lg md:text-xl font-medium leading-normal transition duration-200 ease-in-out font-display text-slate-900 decoration-slate-400 group-hover:text-sky-900">
            <Link key={post?.slug.current} href={`/news/${post?.slug.current}`}>
              <span className="absolute inset-0"></span>
              {post.title}
            </Link>
          </h3>
          <p className="  text-base md:text-lg mt-3.5 line-clamp-3  leading-7 text-slate-700">
            {post.description}
          </p>
        </div>
        <div className="flex items-center gap-3 mt-8 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.75"
              stroke="currentColor"
              className="w-7 h-7 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <time dateTime={post?.publishedAt} className='text-lg'>
              {format(parseISO(post?.publishedAt), "LLL d, yyyy")}
            </time>
          </span>

        </div>
      </div>
    </article>
  );
}
