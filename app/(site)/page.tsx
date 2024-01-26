import React from "react";
import Link from "next/link";
import Container from "../../components/ui/Container";
import ResponsiveCarousel from "../../components/Carousel/Carousel";
import { FeaturedEvents } from "@/components/event/FeaturedEvents";
import { FeaturedPosts } from "@/components/blog/FeaturedPosts";
import { fetchEvents, fetchPosts } from "@/sanity/sanity.query";
import { Post } from "@/typings";
import About from "@/components/About";
import delay from 'delay'
export const revalidate = 3600;

const Home = async () => {
  const posts: [Post] = await fetchPosts();
  const events: [Post] = await fetchEvents();
  await delay(5000)

  return (
    <div className="relative">
      {/* Image overlay */}
      <ResponsiveCarousel />

      <About />
      <FeaturedEvents events={events} />

      <FeaturedPosts posts={posts} />
    </div>
  );
};

    export default Home;
