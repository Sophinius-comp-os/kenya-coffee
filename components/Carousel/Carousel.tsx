"use client"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImagesData from "./Items";
import Image from "next/image";
import Link from "next/link";

export default function ResponsiveCarousel() {
    return (
        <div className="relative w-full h-[calc(100vh - 4rem)] md:h-[calc(100vh - 5rem)] lg:h-screen mb-8">
            <Carousel
                showArrows={true}
                autoPlay={true}
                showIndicators={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={9000}
                transitionTime={900}
                verticalSwipe="natural"
            >
                {ImagesData?.map((image, index) => (
                    <div key={image.id} className="relative w-full h-full">
                        <Image
                            src={image.imgUrl}
                            width={1200} // Adjusted width
                            height={800} // Adjusted height
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute left-10 top-1/2 p-4 w-full md:w-1/2 !text-white bg-opacity-80 bg-black rounded-r-md transform -translate-y-1/2">
                            <div className="flex flex-col items-start">
                                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-2 font-bold">
                                    Kenya Coffee Events
                                </h1>
                                <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-4 font-bold">
                                    A leader in organizing and holding coffee events.
                                </h2>
                                <div className="flex flex-wrap gap-2 justify-start items-start">
                                <Link
                                    href="/about"
                                    className="block w-full sm:w-auto rounded bg-[#2ecc71] my-2 px-8 py-4 text-lg sm:px-12 sm:py-4 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
                                >
                                    Learn More
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
