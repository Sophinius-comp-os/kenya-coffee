import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import event from './schemas/event'
import gallery from './schemas/gallery'
import blogImage from "@/sanity/schemas/objects/blogImage";
import imageHolder from "@/sanity/schemas/imageHolder";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, event, blogImage,
    imageHolder,],
}
