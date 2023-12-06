// import { fetchPosts } from "@/sanity/sanity.query";
// import { Post } from "@/typings";
// export async function getAllCategories() {
//   const posts: [Post] = await fetchPosts();

//   let repeatingCategories = posts?.categories?.map((category) => ( category)
//   const categoryCount = new Map();

//   repeatingCategories.forEach((category) => {
//     if (categoryCount.has(category)) {
//       categoryCount.set(category, categoryCount.get(category) + 1);
//     } else {
//       categoryCount.set(category, 1); // Map to capture Count of elements
//     }
//   });

//   const uniqueCategories = [...new Set(repeatingCategories)];

//   const categories = uniqueCategories.sort((category1, category2) => {
//     let freq1 = categoryCount.get(category1);
//     let freq2 = categoryCount.get(category2);

//     return freq2 - freq1;
//   });

//   return categories;
// }
