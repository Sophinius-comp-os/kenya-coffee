import React from "react";

import ResponsiveCarousel from "../components/Carousel/Carousel";
import Container from "../components/ui/Container";
import LatestEvents from "../components/LatestEvents/LatestEvents";
import { FeaturedPosts } from "@/components/blog/FeaturedPosts";
import { fetchEvents, fetchPosts } from "../sanity/sanity.query";
import { Post } from "@/typings";
import FeaturedEvents from "@/components/event/FeaturedEvents";

const Home = async () => {
  const posts: [Post] = await fetchPosts();
  const events: [Post] = await fetchEvents();

  return (
    <Container className="">
      <div className="relative isolate px-10 pt-14 lg:px-12">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-full rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
          C
        </div>
        <div className="flex items-center flex-col mx-auto px-6">
          <ResponsiveCarousel />
          <div className="w-3/4 py-14">
            <p className="text-xl">
              Kenya Coffee Events (KCE) is an event management organization
              registered in Nairobi, Kenya. KCE was originally founded in 2020
              by the Specialty Coffee Association of Kenya.
            </p>
          </div>{" "}
          <FeaturedEvents events={events} />
          <FeaturedPosts posts={posts} />
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
      </div>
    </Container>
  );
};

export default Home;
