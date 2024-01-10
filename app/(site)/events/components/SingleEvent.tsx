import { urlForImage } from "@/sanity/lib/image";
import { Post } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import React from "react";

const SingleEvent = ({ event }: { event: Post }) => {
  // console.log(event);
  return (
    <>
      <div className="lg:flex">
        <Link key={event?.slug.current} href={`/events/${event?.slug.current}`}>
          <Image
            className="object-cover w-full h-72 rounded-lg lg:w-96"
            width={400}
            height={400}
            src={urlForImage(event.mainImage).url()}
            alt={event.title}
          />
        </Link>
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <Link
            href={`/events/${event?._id}`}
            className="text-2xl  sm:text-3xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            {event.title}
          </Link>

          <div className="flex items-center gap-3 mt-8 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
                className="w-10 h-10 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <time dateTime={event?.eventDate}  className='text-xl'>
                {format(parseISO(event?.eventDate), "LLL d, yyyy")}
              </time>
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
                className="w-10 h-10 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {/* {`${post.timeToRead} minute read`} */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
