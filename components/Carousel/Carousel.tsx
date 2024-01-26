"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImagesData from "./Items";
import Image from "next/image";
import Link from "next/link";

export default function ResponsiveCarousel() {
  return (
    <div className="relative w-full h-[calc(100vh - 4rem)] md:h-[calc(100vh - 5rem)] lg:h-[30rem] xl:h-[70rem] mb-4 lg:mb-8">
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
            <div className="hidden md:block absolute left-0 top-1/2 p-4 w-full md:w-1/2 text-white bg-opacity-80 bg-black rounded-r-md transform -translate-y-1/2 flex items-center">
              <div>
                <h1 className="font-display text-base sm:text-2xl lg:text-3xl mb-2 font-bold text-white !important">
                  Kenya Coffee Events
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl mb-4 font-bold text-white !important">
                  A leader in organizing and holding coffee events.
                </h2>
                <div className="flex flex-wrap gap-2 justify-start items-center">
                  <Link
                    href="#about"
                    scroll={false}
                    className="block w-full sm:w-auto rounded bg-[#2ecc71] my-2 px-4 py-2 text-lg sm:px-8 sm:py-2 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
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
