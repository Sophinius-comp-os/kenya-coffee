"use client"
import Image from "next/image";


const ImageContainer = ({photo})  => {

    // console.log(photo)
const widthHeightRatio = photo.height / photo.width
    const galleryHeight = Math.ceil(300 * widthHeightRatio)
    console.log(galleryHeight)
    const photoSpans = Math.ceil(galleryHeight / 6) + 1

    return (
        <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
            <Image
                src={photo.src}
                alt={photo.alt}
                fill={true}
                sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
                placeholder="blur"
                blurDataURL={photo.blurredDataUrl}
                className="object-cover group-hover:opacity-75"
            />
        </div>
        // <div className="w-[300px] justify-self-center"
        //      style={{ gridRow: `span ${photoSpans}` }}
        // >
        //
        //         <div className="rounded-xl overflow-hidden group">
        //
        //             <Image src={photo.src}
        //                    alt={photo.alt}
        //                    width={300}
        //                    height={600}
        //                    sizes="(min-width:1280px) 278px, (min-width:1040px) calc(12.73vw + 118px), (min-width:800px) 33.18vw, (min-width:540px) 50vw, calc(100vw -16px)"
        //                    blurDataURL={photo.blurDataUrl}
        //                    className=' group-hover:opacity-75 '/>
        //         </div>
        //
        // </div>
    )
}


export default ImageContainer