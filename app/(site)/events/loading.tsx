import Container from "@/components/ui/Container";
import {BlogGrid} from "@/app/(site)/news/components/BlogGrid";
import React from "react";
import {Post as PostTypes} from "@/typings";
import Skeleton from "@/components/Skeleton";
import {fetchEvents, fetchPosts} from "@/sanity/sanity.query";
import clsx from "clsx";
import {Post} from "@/app/(site)/news/components/Post";
import Link from "next/link";



const LoadingNewsPage = async () => {
    const events: [PostTypes] = await fetchEvents();

    return (
        <section
            id="articles"
            className="overflow-hidden py-16 sm:py-24 lg:py-24"
        >
            <Container className="">
                <h2 className="text-center font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
                    <Skeleton/>
                </h2>
                <div
                    className={clsx(
                        "relative grid max-w-lg gap-10 mx-auto mt-14 sm:mt-16 md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10 xl:gap-x-10 xl:gap-y-10",
                    )}
                >
                    <div className="absolute hidden gap-6 -top-20 lg:-left-4 xl:flex 2xl:-left-24">
        <span className="inline-block text-2xl tracking-wide transform -rotate-12 font-writing text-slate-600">
             <Skeleton/>
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

                    {events.map((event) => (
                        <article
                            className="flex flex-col items-start justify-between shadow-sm rounded-2xl bg-slate-50 shadow-sky-100/50 ring-1 ring-slate-100">
                            <div className="w-full px-4 pt-4">
                                <Link
                                    key={event?.slug.current}
                                    href={`/news/${event?.slug.current}`}
                                    className="relative block w-full overflow-hidden group aspect-h-9 aspect-w-16 rounded-xl md:aspect-h-2 md:aspect-w-3"
                                >


                                    <Skeleton/>
                                    <div
                                        className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/5"></div>
                                </Link>
                            </div>

                            <div className="relative flex flex-col flex-1 px-5 pt-8 pb-10 group xl:px-7">

                                <div className="flex-1">
                                    <h3 className="mt-4 text-3xl font-medium leading-normal transition duration-200 ease-in-out font-display text-slate-900 decoration-slate-400 group-hover:text-sky-900">
                                        <Link key={event?.slug.current} href={`/news/${event?.slug.current}`}>
                                            <span className="absolute inset-0"></span>
                                            <Skeleton/>
                                        </Link>
                                    </h3>
                                    <p className=" text-2xl mt-3.5 line-clamp-3  leading-7 text-slate-700">
                                        <Skeleton/>
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 mt-8 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
          <Skeleton/>
            <time dateTime={event?.publishedAt} className='text-2xl'>
                    <Skeleton/>
            </time>
          </span>
                                    <span className="flex items-center gap-1.5">
               <Skeleton/>
                                        {/* {`${post.timeToRead} minute read`} */}
          </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>)
}

export default LoadingNewsPage