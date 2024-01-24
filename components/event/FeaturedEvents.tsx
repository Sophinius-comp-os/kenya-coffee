"use client";
import SingleEvent from "@/app/(site)/events/components/SingleEvent";
import { Post } from "@/typings";
import clsx from "clsx";
import events from "events";
import { useTheme } from "next-themes";
import React from "react";

export const FeaturedEvents = ({ events }: { events: [Post] }) => {
  // console.log(events);

  return (
    <section
      className={clsx(
        "mt-8 md:mt-8 lg:mt-8",

      )}
    >
      <div className="container mt-10 px-6 py-24 mx-auto ">
        <h2 className="max-w-2xl mx-auto text-4xl font-semibold leading-tight text-center font-display text-slate-900 sm:text-5xl sm:leading-tight">
          Upcoming Coffee Events
        </h2>

        <div className="w-full grid grid-cols-1 gap-12 mt-8 md:mt-16 md:grid-cols-2">
          {events.map((event) => (
            <SingleEvent key={event._id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};
