import { groq } from "next-sanity";
import { sanityClient } from "./sanity.client";
import imageUrl from '@sanity/image-url'
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

export const fetchEvents = async () => {
  const events = await sanityClient.fetch(
    groq`*[_type == "event"]{
         _id,
          title,
          author =>{
            name,
            image
          },
       
        description,
        mainImage,
        eventDate,
        slug,
        publishedAt,
  "content": body,
        }`
  );

  return events;
};



function generateImageData({ blogImage }) {
  return {

    //    image: `![${blogImage.alt}](${imageUrl(sanityClient)
    src: `${imageUrl(sanityClient)
        .image(blogImage)
        .height(300)
        .url()}`,
alt:`${blogImage.alt}`
  };
}
export const  fetchImages = async ()  => {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const images = groq`*[_type == "imageHolder"]`;
  // const projection = groq`{
  //   blogImage,
  //
  // }`;

  // const query = [filter, projection].join(" ");
  const docs = await sanityClient.fetch(images).catch((err) => console.error(err));
  // console.log(docs)
  const preparePosts = docs.map(generateImageData);
   // console.log(preparePosts)
  return preparePosts;
}