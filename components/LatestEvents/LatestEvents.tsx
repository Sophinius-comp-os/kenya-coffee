"use client";
import React from "react";
import Container from "../ui/Container";
import { useRouter } from "next/navigation";

const LatestEvents = () => {
  const router = useRouter();
  return (
    <Container className="">
      <div className="text-center">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Latest Events
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Events are a great way to connect with like-minded people. They also
          provide a great opportunity to learn and network with others in your
          field. Get started with Event-Ally to host or join your next event.
        </p>
        <div className="mt-14 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-[#f02e65] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#990e3c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              if (localStorage.getItem("userInfo") != null) {
                router.push("/landing");
              } else {
                router.push("/login");
              }
            }}
          >
            Get started
          </button>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default LatestEvents;
