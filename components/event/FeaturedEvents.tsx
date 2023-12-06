import SingleEvent from "@/app/(site)/events/components/SingleEvent";
import { Post } from "@/typings";
import events from "events";
import React from "react";

const FeaturedEvents = ({ events }: { events: [Post] }) => {
  console.log(events);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
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

export default FeaturedEvents;
