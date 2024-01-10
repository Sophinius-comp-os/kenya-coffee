import {getPlaiceholder} from "plaiceholder";



const getBase64 = async(imageUrl:string) => {


    try{
        const res = await fetch(imageUrl)

        if(!res.ok){
            throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
        }

        const buffer  = await res.arrayBuffer()

        const {base64} = await getPlaiceholder(Buffer.from(buffer))
        // console.log(base64)

        return (base64)
    }catch(e){

        if(e instanceof Error) console.log(e.stack)
    }



}



export default async function addBlurredDataUrls(images):Promise<[]> {
//make all requests at once instead of awaiting each other - avoiding water fall

 const image = images.map((image) => image.alt)
     console.log(image)
    const base64Promises = images.map((image) => getBase64(image.src))

//resolve all request in order
    const base64Results = await Promise.all(base64Promises);

    const photosWithBlur= images.map((image, i) => {
        image.blurredDataUrl = base64Results[i]
        return image
    })
    return photosWithBlur

}
// // Usage
// const { base64, img } = await getImage(
//     "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=2850&q=80"
// );