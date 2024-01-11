// import React from "react";
// import Link from "next/link";
// import Container from "../../components/ui/Container";
// import ResponsiveCarousel from "../../components/Carousel/Carousel";
// import { FeaturedEvents } from "@/components/event/FeaturedEvents";
// import { FeaturedPosts } from "@/components/blog/FeaturedPosts";
// import { fetchEvents, fetchPosts } from "../../sanity/sanity.query";
// import { Post } from "@/typings";
//
// export const revalidate = 3600;
//
// const Home = async () => {
//     const posts: [Post] = await fetchPosts();
//     const events: [Post] = await fetchEvents();
//
//     return (
//         <div className="relative">
//             <ResponsiveCarousel />
//
//             {/* Text overlay */}
//             <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
//                 <div className="text-white text-center">
//                     <h1 className="font-display text-4xl font-semibold sm:text-6xl lg:text-left my-6 sm:my-12">
//                         Kenya Coffee Events
//                     </h1>
//                     <h2 className="text-3xl font-extrabold sm:text-5xl lg:text-left">
//                         A leader in organizing and holding coffee events.
//                     </h2>
//
//                     <div className="flex flex-wrap gap-2 justify-center items-center lg:justify-start">
//                         <Link
//                             href="/about"
//                             className="block w-full sm:w-1/2 rounded bg-[#2ecc71] my-2 px-6 py-4 text-base sm:px-12 sm:py-4 md:text-2xl font-medium text-white dark:text-gray-800 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
//                         >
//                             Learn More
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Other components */}
//             <Container className="relative z-20">
//                 <FeaturedEvents events={events} />
//                 <FeaturedPosts posts={posts} />
//             </Container>
//         </div>
//     );
// };
//
// export default Home;
// import React from "react";
// import Link from "next/link";
// import Container from "../../components/ui/Container";
// import ResponsiveCarousel from "../../components/Carousel/Carousel";
// import { FeaturedEvents } from "@/components/event/FeaturedEvents";
// import { FeaturedPosts } from "@/components/blog/FeaturedPosts";
// import { fetchEvents, fetchPosts } from "../../sanity/sanity.query";
// import { Post } from "@/typings";
//
// export const revalidate = 3600;
//
// const Home = async () => {
//     const posts: [Post] = await fetchPosts();
//     const events: [Post] = await fetchEvents();
//
//     return (
//         <div className="relative">
//             {/* Image overlay */}
//             <ResponsiveCarousel />
//
//             {/* Text overlay */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-white md:flex-row md:items-start md:justify-start">
//                 <div className="text-center md:text-left">
//                     <h1 className="font-display text-4xl font-semibold sm:text-6xl lg:text-left my-6 sm:my-12">
//                         Kenya Coffee Events
//                     </h1>
//                     <h2 className="text-3xl font-extrabold sm:text-5xl lg:text-left">
//                         A leader in organizing and holding coffee events.
//                     </h2>
//
//                     <div className="flex flex-wrap gap-2 justify-center items-center lg:justify-start">
//                         <Link
//                             href="/about"
//                             className="block w-full sm:w-auto rounded bg-[#2ecc71] my-2 px-6 py-4 text-base sm:px-12 sm:py-4 md:text-2xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
//                         >
//                             Learn More
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//
//             {/* FeaturedEvents */}
//
//                 <FeaturedEvents events={events} />
//
//
//             {/* FeaturedPosts */}
//
//
//                     <FeaturedPosts posts={posts} />
//
//
//         </div>
//     );
// };
//
// export default Home;


import React from "react";
import Link from "next/link";
import Container from "../../components/ui/Container";
import ResponsiveCarousel from "../../components/Carousel/Carousel";
import { FeaturedEvents } from "@/components/event/FeaturedEvents";
import { FeaturedPosts } from "@/components/blog/FeaturedPosts";
import { fetchEvents, fetchPosts } from "../../sanity/sanity.query";
import { Post } from "@/typings";

export const revalidate = 3600;

const Home = async () => {
    const posts: [Post] = await fetchPosts();
    const events: [Post] = await fetchEvents();

    return (
        <div className="relative">
            {/* Image overlay */}
            <ResponsiveCarousel />


            {/* Text overlay */}




            {/* FeaturedEvents */}

                <FeaturedEvents events={events} />


            {/* FeaturedPosts */}

                <Container>
                    <FeaturedPosts posts={posts} />
                </Container>

        </div>
    );
};

export default Home;


