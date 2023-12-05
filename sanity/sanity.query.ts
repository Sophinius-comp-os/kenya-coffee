import { groq } from "next-sanity";
import { sanityClient } from "./sanity.client";

export const fetchPosts = async () => {
  return sanityClient.fetch(
    groq`*[_type == "post"]{
         _id,
          title,
          author =>{
            name,
            image
          },
            category =>{
          title,
        description
          },
        description,
        mainImage,
        slug,
        }`
  );
};
