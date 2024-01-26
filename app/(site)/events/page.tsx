import { fetchEvents, fetchPosts } from "@/sanity/sanity.query";

import { Post as PostTypes } from "@/typings";
import { EventGrid } from "./components/EventGrid";
import events from "events";
import Container from "@/components/ui/Container";
import {Pagination} from "@/components/Pagination";

export const revalidate = 3600;

export default async function EventPage({searchParams}:{searchParams:{page:string}}) {
  const events: [PostTypes] = await fetchEvents();
  return(
      <section
          id="articles"
          className="overflow-hidden  py-16 sm:py-14 lg:py-12"
      >
        <Container className="">
          <h2 className="text-center font-display text-xl md:text-3xl  font-semibold text-slate-900  ">
            Latest Events
          </h2>


          <EventGrid events={events} />
          {/*<Pagination currentPage={parseInt(searchParams.page)} />*/}
        </Container>
      </section>


  )
}
