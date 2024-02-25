// import { NextApiRequest, NextApiResponse } from 'next';
// import multer from 'multer';
// import cloudinary from "cloudinary";
// import prismadb from '@/lib/prismadb';
//
// // Multer configuration
// const upload = multer({ dest: './public/uploads/' });
//
// // Cloudinary configuration
// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })
//
// // // Next.js API configuration
// // export const config = {
// //     api: {
// //         bodyParser: false, // Disable body parsing, let multer handle it
// //     },
// // };
//
// // Upload handler
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         try {
//             // Multer middleware handles file uploads
//             upload.any()(req, res, async (err: any) => {
//                 if (err) {
//                     console.error('Error uploading images:', err);
//                     return res.status(500).json({ error: 'Internal server error' });
//                 }
//
//
//                 // Retrieve uploaded files
//                 const frontImage = req.files?.find((file: any) => file.fieldname === 'frontImage');
//                 const backImage = req.files?.find((file: any) => file.fieldname === 'backImage');
//                 console.log(frontImage)
//
//                 // Check if both front and back images are uploaded
//                 if (!frontImage || !backImage) {
//                     return res.status(400).json({ error: 'Front and back images are required' });
//                 }
//
//                 // Upload images to Cloudinary
//                 const frontImageResponse = await cloudinary.v2.upload(frontImage.path, {upload_preset:'kenyacoffee'});
//                 const backImageResponse = await cloudinary.v2.upload(backImage.path,{upload_preset:'kenyacoffee'});
//
//                 // Save judge data to Prisma
//                 const judge = await prismadb.judge.create({
//                     data: {
//                         name: req.body.name,
//                         email: req.body.email,
//                         frontIdImage: frontImageResponse.secure_url,
//                         backIdImage: backImageResponse.secure_url,
//                         highestEducationLevel: req.body.highestEducationLevel,
//                         currentEmployer: req.body.currentEmployer,
//                         numberOfYearsWorked: req.body.numberOfYearsWorked,
//                         nameOfReferee: req.body.nameOfReferee,
//                         emailOfReferee: req.body.emailOfReferee,
//                         phoneOfReferee: req.body.phoneOfReferee,
//                         placeOfWork: req.body.placeOfWork,
//                         judgedBefore: req.body.judgedBefore,
//                         eventJudged: req.body.eventJudged,
//                     },
//                 });
//
//                 res.status(200).json(judge);
//             });
//         } catch (error) {
//             console.error('Error uploading images to Cloudinary:', error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }


// pages/api/submitForm.ts

import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import prismadb from "@/lib/prismadb";

// Multer configuration
const upload = multer();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        upload.fields([
            { name: 'frontIdImage', maxCount: 1 },
            { name: 'backIdImage', maxCount: 1 }
        ])(req, res, async (err) => {
            if (err) {
                console.error('Error uploading images:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }


            try{
                // Ensure required fields are present
                const requiredFields = [
                    'name',
                    'email',
                    'phone',
                    'gender',
                    'frontIdImage',
                    'backIdImage',
                    'highestEducationLevel',
                    'currentEmployer',
                    'numberOfYearsWorked',
                    'nameOfReferee',
                    'emailOfReferee',
                    'phoneOfReferee',
                    'placeOfWork',
                    'judgingCategory',
                    'judgedBefore',
                    'eventJudged',
                    /* add other required fields */];
                for (const field of requiredFields) {
                    if (!req.body[field]) {
                        return res.status(400).json({ error: `${field} is required` });
                    }
                }



                const frontIdImage = req.files['frontIdImage'][0];
                const backIdImage = req.files['backIdImage'][0];

                // Upload frontIdImage to Cloudinary
                const frontImageResponse = await cloudinary.v2.uploader.upload(frontIdImage.path);

                // Upload backIdImage to Cloudinary
                const backImageResponse = await cloudinary.v2.uploader.upload(backIdImage.path);


                // Save form data to Prisma along with image URLs
                const judge = await prismadb.judge.create({
                    data: {
                        name: req.body.name,
                        email: req.body.email,
                        frontIdImage: frontImageResponse.secure_url,
                        backIdImage: backImageResponse.secure_url,
                        highestEducationLevel: req.body.highestEducationLevel,
                        currentEmployer: req.body.currentEmployer,
                        numberOfYearsWorked: req.body.numberOfYearsWorked,
                        nameOfReferee: req.body.nameOfReferee,
                        emailOfReferee: req.body.emailOfReferee,
                        phoneOfReferee: req.body.phoneOfReferee,
                        placeOfWork: req.body.placeOfWork,
                        judgingCategory:req.body.judgingCategory,
                        judgedBefore: req.body.judgedBefore,
                        eventJudged: req.body.eventJudged,
                    },
                });

                res.status(200).json({ message: 'Form submitted successfully', formData });
            } catch (error) {
                console.error('Error submitting form:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
