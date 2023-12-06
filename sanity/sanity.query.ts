import { groq } from "next-sanity";
import { sanityClient } from "./sanity.client";

export const fetchPosts = async () => {
  const posts = await sanityClient.fetch(
    groq`*[_type == "post"]{
         _id,
          title,
          author =>{
            name,
            image
          },
          categories[]->{
    _id,
    title,
              description
          },
        description,
        mainImage,
        slug,
        publishedAt,
  "content": body,
        }`
  );

  return posts;
};
