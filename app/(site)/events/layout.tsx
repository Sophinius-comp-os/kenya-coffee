import Footer from "@/components/Footer/Footer";
import Container from "@/components/ui/Container";
import { Tabs } from "@/components/Tabs";
import {Pagination} from "@/components/Pagination";
import React from "react";


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
        {children}
      </>
  );
}
