import { urlForImage } from "@/sanity/lib/image";
import { Post } from "@/typings";
import Image from "next/image";
import React from "react";

const SingleEvent = ({ event }: { event: Post }) => {
  console.log(event);
  return (
    <>
      <div className="lg:flex">
        <Image
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          width={200}
          height={200}
          src={urlForImage(event.mainImage).url()}
          alt={event.title}
        />

        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            How to use sticky note for problem solving
          </a>

          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 20 October 2019
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
