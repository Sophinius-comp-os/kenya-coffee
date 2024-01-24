export interface Post {
    eventDate: date | undefined;
  _id: string;
  publishedAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  categories: {
    title: string;
    description: string;
  };
  comments: Comment[];
  description: string;
  mainImage: {
    assets: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface Photo {
  _id: string,

}