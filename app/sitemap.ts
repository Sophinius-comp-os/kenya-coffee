// app/sitemap.js

import { fetchEvents, fetchPosts } from "@/sanity/sanity.query"
import {Post, Event} from "@/typings";

const URL = "https://www.coffeeEvents.com";

export default async function sitemap() {
    const AllPosts: [Post] = await fetchPosts();
    const AllEvents: [Event] = await fetchEvents();

    const posts = AllPosts.map(({ slug, publishedAt }) => ({
        url: `${URL}/news/${slug}`,
        lastModified: publishedAt,
    }));
    const events = AllEvents.map(({ slug, publishedAt }) => ({
        url: `${URL}/events/${slug}`,
        lastModified: publishedAt,
    }));

    const routes = ["/", "/news", "gallery", "/events", "/contact"].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...posts, ...events];
}
