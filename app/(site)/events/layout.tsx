import Footer from "@/components/Footer/Footer";
import Container from "@/components/ui/Container";
import { Tabs } from "@/components/Tabs";
import { Pagination } from "@/components/Pagination";

export const metadata = {
  title: {
    template: "Events - %s - Jane Doe",
    default: "Events",
  },
  description: "CHeck out our upcomming events .",
};

export default async function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const categories = await getAllCategories();

  return (
    <>
      {/* <BlogHero /> */}
      <section
        id="articles"
        className="overflow-hidden  py-16 sm:py-14 lg:py-12"
      >
        <Container className="">
          <h2 className="text-center font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            Latest Events
          </h2>
          {children}
          <Pagination />
        </Container>
      </section>
      {/* <Footer /> */}
    </>
  );
}
