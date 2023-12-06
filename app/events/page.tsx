import { fetchEvents, fetchPosts } from "@/sanity/sanity.query";

import { Post as PostTypes } from "@/typings";
import { EventGrid } from "./components/EventGrid";
import events from "events";

export default async function EventPage() {
  const events: [PostTypes] = await fetchEvents();
  return <EventGrid events={events} />;
}
