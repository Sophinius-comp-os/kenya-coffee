import { defineField, defineType } from "sanity";

export default defineType({
    name: 'imageHolder',
    type: 'document',
    title: 'Image Holder',
    fields: [    defineField({
            name: 'blogImage',
            type: 'blogImage',
            title: 'Image',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        }),

        defineField({
            name: 'slug',
            type: 'string',
            title: 'slug',
            validation: Rule => Rule.required(),
        })
    ],
    preview: {
        select: {
            media: 'blogImage',
            slug: 'slug',
        },
        prepare ({ slug, media}) {
            return {
                title: media.alt,
                media,
                subtitle: `${slug}` || ''
            }
        }
    }
}
)