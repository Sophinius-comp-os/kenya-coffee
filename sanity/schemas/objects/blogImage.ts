import { defineField, defineType } from "sanity";

export default defineType({
    name: 'blogImage',
    type: 'image',
    title: 'Image',
    options: {
        hotspot: true
    },
    fields: [

                            {
                                name: 'alt',
                                type: 'string',
                                title: 'Alternative text',
                                description: 'What\'s on this picture?',
                                validation: Rule => Rule.error('You forgot to describe this image').required(),
                                options: {
                                    isHighlighted: true
                                }
                            },




    ],

    preview: {

        select: {
            imageUrl: 'asset.url',

        }

    },
})
