import React from "react";

import ResponsiveCarousel from "../../components/Carousel/Carousel";
import Container from "../../components/ui/Container";
import LatestEvents from "../../components/LatestEvents/LatestEvents";
import { FeaturedPosts } from "@/components/blog/FeaturedPosts";
import {fetchEvents, fetchImages, fetchPosts} from "../../sanity/sanity.query";
import { Post } from "@/typings";

import FeaturedEvents from "@/components/event/FeaturedEvents";
import Link from "next/link";

export const revalidate = 3600;




    const Home = async () => {
  const posts: [Post] = await fetchPosts();
  const events: [Post] = await fetchEvents();


  return (
    <Container className="">
        <div className="w-full flex items-center flex-col mx-auto relative h-full ">
            <ResponsiveCarousel/>
            <div
                className="absolute text-left z-20 px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center  lg:px-8">
                {/* sm:max-w-lg */}
                <div className="bg-[#f4208f] w-full  overflow-hidden text-left ltr:sm:text-left rtl:sm:text-right">
                    <h1
                        className={`
     text-center font-display text-4xl font-semibold text-[white]
      sm:text-6xl lg:text-left my-12 text-white`}

                    >
                       Kenya Coffee Events
                    </h1>
                    <h2

                        className=" my-4 text-3xl font-extrabold text-center sm:text-5xl  lg:text-left text-[white]"
                    >
                        A leader in organizing and Holding Coffee Events.
                    </h2>

              

                    <div

                        className="flex flex-wrap gap-2 text-center  justify-center items-center lg:justify-start"
                    >
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/about"
                            className="block w-1/2 rounded bg-[green]
                             my-2 px-6 py-4 text-base sm:px-12 sm:py-4 md:text-2xl font-medium !text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                Learn More
                        </Link>
                    </div>
                </div>
            </div>
            <FeaturedEvents events={events}/>
            <FeaturedPosts posts={posts}/>
        </div>
        <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
        >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#f02e65] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
            />
        </div>
    </Container>
  );
};

export default Home;
