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


    ],
    preview: {
        select: {
            media: 'blogImage',

        },
        prepare ({ media}) {
            return {
                title: media.alt,
                media,

            }
        }
    }
}
)