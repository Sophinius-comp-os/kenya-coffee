// import { NextApiRequest, NextApiResponse } from 'next';
// import multer from 'multer';
// import { v2 as cloudinary } from 'cloudinary';
// import prismadb from "@/lib/prismadb";
//
// // Multer configuration
// const upload = multer();
//
// // Cloudinary configuration
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
//     api_key: process.env.CLOUDINARY_API_KEY!,
//     api_secret: process.env.CLOUDINARY_API_SECRET!
// });
//
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         upload.fields([
//             { name: 'frontIdImage', maxCount: 1 },
//             { name: 'backIdImage', maxCount: 1 }
//         ])(req, res, async (err) => {
//             if (err) {
//                 console.error('Error uploading images:', err);
//                 return res.status(500).json({ error: 'Internal server error' });
//             }
//
//             try {
//                 // Ensure required fields are present
//                 const requiredFields = [
//                     'name',
//                     'email',
//                     'phone',
//                     'gender',
//                     'highestEducationLevel',
//                     'currentEmployer',
//                     'numberOfYearsWorked',
//                     'nameOfReferee',
//                     'emailOfReferee',
//                     'phoneOfReferee',
//                     'placeOfWork',
//                     'judgingCategory',
//                     'judgedBefore',
//                     'eventJudged'
//                 ];
//                 for (const field of requiredFields) {
//                     if (!req.body[field]) {
//                         return res.status(400).json({ error: `${field} is required` });
//                     }
//                 }
//
//                 const formData = {
//                     name: req.body.name,
//                     email: req.body.email,
//                     highestEducationLevel: req.body.highestEducationLevel,
//                     currentEmployer: req.body.currentEmployer,
//                     numberOfYearsWorked: req.body.numberOfYearsWorked,
//                     nameOfReferee: req.body.nameOfReferee,
//                     emailOfReferee: req.body.emailOfReferee,
//                     phoneOfReferee: req.body.phoneOfReferee,
//                     placeOfWork: req.body.placeOfWork,
//                     judgingCategory: req.body.judgingCategory,
//                     judgedBefore: req.body.judgedBefore,
//                     eventJudged: req.body.eventJudged
//                 };
//
//                 const frontIdImage = req.files['frontIdImage'][0];
//                 const backIdImage = req.files['backIdImage'][0];
//
//                 // Upload frontIdImage to Cloudinary
//                 const frontImageResponse = await cloudinary.uploader.upload(frontIdImage.path);
//
//                 // Upload backIdImage to Cloudinary
//                 const backImageResponse = await cloudinary.uploader.upload(backIdImage.path);
//
//                 // Save form data to Prisma along with image URLs
//                 const judge = await prismadb.judge.create({
//                     data: {
//                         ...formData,
//                         frontIdImage: frontImageResponse.secure_url,
//                         backIdImage: backImageResponse.secure_url
//                     }
//                 });
//
//                 res.status(200).json({ message: 'Form submitted successfully', formData });
//             } catch (error) {
//                 console.error('Error submitting form:', error);
//                 res.status(500).json({ error: 'Internal server error' });
//             }
//         });
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

// import { NextApiRequest, NextApiResponse } from 'next';
// import prismadb from "@/lib/prismadb";
//
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         try {
//             const {
//                 name,
//                 email,
//                 phone,
//                 gender,
//                 highestEducationLevel,
//                     currentEmployer,
//                     numberOfYearsWorked,
//                     nameOfReferee,
//                     emailOfReferee,
//                     phoneOfReferee,
//                     placeOfWork,
//                     judgingCategory,
//                     judgedBefore,
//                     eventJudged,
//                 frontIdImage, // Secure URL from the frontend
//                 backIdImage, // Secure URL from the frontend
//             } = req.body;
//
//             // Validate data (e.g., required fields)
//
//             // Save form data to Prisma with image URLs
//             const judge = await prismadb.judge.create({
//                 data: {
//                     name,
//                     email,
//                     phone,
//                     gender,
//                     highestEducationLevel,
//                     currentEmployer,
//                     numberOfYearsWorked,
//                     nameOfReferee,
//                     emailOfReferee,
//                     phoneOfReferee,
//                     placeOfWork,
//                     judgingCategory,
//                     judgedBefore,
//                     eventJudged,
//                     // ... other form data
//                     frontIdImage,
//                     backIdImage
//                 }
//             });
//
//             res.status(200).json({ message: 'Form submitted successfully', judge });
//         } catch (error) {
//             console.error('Error in upload route:', error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

import { NextResponse } from 'next/server';
// import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from "@/lib/prismadb";

export default async function POST (req: Request, res: Response) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin (adjust as needed)
    res.setHeader('Access-Control-Allow-Methods', 'POST'); // Allow POST method only
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow necessary headers



        try {
            const body = await req.json();
            const { name, email, phone, gender } = body; // Access form data from request body

            if (!name) {
                return new NextResponse("name is required", { status: 400 });
            }

            if (!email) {
                return new NextResponse("email URL is required", { status: 400 });
            }
            if (!phone) {
                return new NextResponse("phone is required", { status: 400 });
            }

            if (!gender) {
                return new NextResponse("gender URL is required", { status: 400 });
            }


            // Save form data to Prisma with image URLs
            const judge = await prismadb.judge.create({
                data: {
                    name,
                    email,
                    phone,
                    gender,
                },
            });

            res.status(200).json({ message: 'Judge created successfully!', data: newJudge });
        } catch (error) {
            console.error('Error creating judge:', error);
            res.status(500).json({ message: 'Failed to create judge' });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}