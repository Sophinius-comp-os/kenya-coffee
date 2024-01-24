import Footer from "@/components/Footer/Footer";
import Container from "@/components/ui/Container";
// import { Tabs } from "@/components/Tabs";
// import { getAllCategories } from "@/lib/articles";
import {Pagination} from "@/components/Pagination";
import React from "react";

export const metadata = {
  title: {
    template: "Blog - %s - Jane Doe",
    default: "Blog",
  },
  description:
    "Explore a diverse range of blog posts covering web development, design, content creation, business, programming tutorials, and more.",
};

export default async function BlogLayout({
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
