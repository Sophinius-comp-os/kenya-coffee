"use client";
import SingleEvent from "@/app/(site)/events/components/SingleEvent";
import { Post } from "@/typings";
import clsx from "clsx";
import events from "events";
import { useTheme } from "next-themes";
import React from "react";

export const FeaturedEvents = ({ events }: { events: [Post] }) => {
  // console.log(events);
  const { theme, setTheme } = useTheme();
  return (
    <section
      className={clsx(
        "mt-8 md:mt-12 lg:mt-24",
        theme === "dark" ? "bg-dark" : "bg-light"
      )}
    >
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {events.map((event) => (
            <SingleEvent key={event._id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};
