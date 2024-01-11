import React from "react";
import Link from "next/link";
import Container from "../../components/ui/Container";
import ResponsiveCarousel from "../../components/Carousel/Carousel";
import { FeaturedEvents } from "@/components/event/FeaturedEvents";
import { FeaturedPosts } from "@/components/blog/FeaturedPosts";
import { fetchEvents, fetchPosts } from "@/sanity/sanity.query";
import { Post } from "@/typings";

export const revalidate = 3600;

const Home = async () => {
    const posts: [Post] = await fetchPosts();
    const events: [Post] = await fetchEvents();

    return (
        <div className="relative">
            {/* Image overlay */}
            <ResponsiveCarousel />

            {/* FeaturedEvents */}
            <Container className="mt-8 md:mt-12 lg:mt-16">
                <FeaturedEvents events={events} />
            </Container>

            {/* FeaturedPosts */}
            <Container className="mt-8 md:mt-12 lg:mt-16">
                <FeaturedPosts posts={posts} />
            </Container>
        </div>
    );
};

export default Home;
