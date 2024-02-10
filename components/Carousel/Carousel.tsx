"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImagesData from "./Items";
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx'
import {useTheme} from "next-themes";

export default function ResponsiveCarousel() {

    const {theme} = useTheme()
  return (
    <div className="relative w-full h-[calc(100vh - 4rem)] md:h-[calc(100vh - 5rem)] lg:h-[30rem] xl:h-[55rem] mb-4 lg:mb-2">
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
            <div className={clsx("hidden md:block absolute left-0 top-1/2 p-4 w-full md:w-1/2   bg-opacity-25 text-white inset-0 bg-black  rounded-r-md transform -translate-y-1/2 items-center z-10", theme==='light' ? 'bg-black text-white' : 'bg-white text-black')}>

                <h1 className="font-display text-base sm:text-2xl lg:text-3xl mb-2 font-bold text-white !important z-20">
                  Kenya Coffee Events
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl mb-4 font-bold text-white !important z-20">
                  A leader in organizing and holding coffee events.
                </h2>

                    {/*flex flex-wrap gap-2 justify-start items-center*/}
                  <Link
                    href="#about"
                    scroll={false}
                    className="inline sm:w-auto rounded bg-[#2ecc71] my-2 px-4 py-2 text-lg sm:px-8 sm:py-3 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
                  >
                    Learn More
                  </Link>
                </div>

          </div>
        ))}
      </Carousel>
    </div>
  );
}
