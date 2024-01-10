"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImagesData from "./Items";
import styles from "@/app/styles/Responsive.module.css";
import Image from "next/image";
import Container from "../ui/Container";

export default function ResponsiveCarousel() {
  return (
    <div className="w-screen  flex flex-col justify-center items-center overflow-hidden ">
      <Carousel
        showArrows={true}


        autoPlay={true}
        showIndicators={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={9000}
        transitionTime={900}
        verticalSwipe='natural'
        // dynamicHeight={false}
        // className="w-full md:w-full"
      >
        {ImagesData?.map((image) => (
          <Image
            key={image.id}
            src={image.imgUrl}
            width={1000}
            height={3000}
            alt="slides"
            className="group-hover:opacity-75"
          />
        ))}
      </Carousel>
    </div>
  );
}

// .container {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     border-radius: 20px;
//     overflow: hidden;
//     padding: 10px;
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
//   }
//   .mySwiper {
//     width: 50%;
//   }
//   .swipItem {
//     text-align: center;
//     font-size: 18px;
//     margin: 1px auto;
//     padding: 5px 50px;
//     color: #fff;

//     /* Center slide text vertically */
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     border-radius: 10px;
//   }

//   .swipItem .imgBox {
//     width: 80%;
//     height: 80%;
//     margin: 0 auto;
//     padding: 5px;
//     border: 1px solid #ddd;
//     border-radius: 50%;
//     margin-top: 10px;
//   }
//   .swipItem .imgBox img {
//     width: 100%;
//     height: 100%;
//     display: block;
//     border-radius: 50%;
//   }
//   .detail {
//     margin: 1rem 0;
//   }
