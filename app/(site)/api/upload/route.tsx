import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import prismadb from '@/lib/prismadb';

// Multer configuration
const upload = multer({ dest: './public/uploads/' });

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// Next.js API configuration
export const config = {
    api: {
        bodyParser: false, // Disable body parsing, let multer handle it
    },
};

// Upload handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Multer middleware handles file uploads
            upload.any()(req, res, async (err: any) => {
                if (err) {
                    console.error('Error uploading images:', err);
                    return res.status(500).json({ error: 'Internal server error' });
                }

                // Retrieve uploaded files
                const frontImage = req.files?.find((file: any) => file.fieldname === 'frontImage');
                const backImage = req.files?.find((file: any) => file.fieldname === 'backImage');

                // Check if both front and back images are uploaded
                if (!frontImage || !backImage) {
                    return res.status(400).json({ error: 'Front and back images are required' });
                }

                // Upload images to Cloudinary
                const frontImageResponse = await cloudinary.uploader.upload(frontImage.path);
                const backImageResponse = await cloudinary.uploader.upload(backImage.path);

                // Save judge data to Prisma
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
                        judgedBefore: req.body.judgedBefore,
                        eventJudged: req.body.eventJudged,
                    },
                });

                res.status(200).json(judge);
            });
        } catch (error) {
            console.error('Error uploading images to Cloudinary:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
