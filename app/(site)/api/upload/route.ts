import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

// export const  POST =  async (req: NextApiRequest, res: NextApiResponse) =>  {
//     // Set CORS headers to allow cross-origin requests (adjust as needed)
//     // res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin (adjust if needed)
//     // res.setHeader('Access-Control-Allow-Methods', 'POST'); // Allow POST method only
//     // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//
//     if (req.method === 'POST') {
//         try {
//             // Parse request body as JSON
//             const { name, email, phone, gender } = await req.json();
//
//             // Validate required fields
//             if (!name || !email || !phone || !gender) {
//                 return res.status(400).json({ message: 'Required fields missing: name, email, phone, gender' });
//             }
//
//             // Save form data to Prisma
//             const judge = await prismadb.judge.create({
//                 data: {
//                     name,
//                     email,
//                     phone,
//                     gender,
//                 },
//             });
//
//             // Return successful response
//             return res.status(200).json({ message: 'Judge created successfully!', data: judge });
//         } catch (error) {
//             console.error('Error creating judge:', error);
//             // Return generic error response for client-side handling
//             return res.status(500).json({ message: 'An error occurred' });
//         }
//     } else {
//         // Handle non-POST requests
//         res.setHeader('Allow', 'POST');
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }

//
// export async function POST(
//     req: Request,
// ) {
//
//     console.log('Received data:', req.body);
//     if (req.method === 'POST') {
//         try {
//             // Parse request body as JSON
//             console.log(req.body)
//             const { name, email, phone, gender } = await req.json();
//
//             // Validate required fields
//             if (!name || !email || !phone || !gender) {
//                 return new NextResponse( 'Required fields missing: name, email, phone, gender' ,
//                     { status: 400 });
//             }
//
//             // Save form data to Prisma
//             // const judge = await prismadb.judge.create({
//             //     data: {
//             //         name,
//             //         email,
//             //         phone,
//             //         gender,
//             //     },
//             // });
//
//             console.log(name)
//             // Return successful response
//             return NextResponse.json ({message: 'Judge created successfully!', name}, { status: 500 })
//         } catch (error) {
//             console.error('Error creating judge:', error);
//             console.error('Request body:', req.body);
//             // Return generic error response for client-side handling
//             return new NextResponse("Internal error", { status: 500 });
//         }
//     } else {
//         // Handle non-POST requests
//         //res.setHeader('Allow', 'POST');
//         return new NextResponse("Method not allowed", { status: 405 });
//
//     }
// }



export async function POST(
    req: Request,
) {
    try {

        const body = await req.json();
        console.log(body)

        const {
            name,
            email,
            phone,
            gender,
            idNumber,
            highestEducationLevel,
            currentEmployer,
            numberOfYearsWorked,
            nameOfReferee,
            emailOfReferee,
            phoneOfReferee,
            placeOfWork,
            judgingCategory,
            judgedBefore,
            eventJudged,}  = body;





        // Validate required fields
            if (!name || !email || !phone || !gender|| !idNumber! || highestEducationLevel! || currentEmployer! ||
                numberOfYearsWorked! ||
                nameOfReferee! ||
                emailOfReferee! ||
                phoneOfReferee! ||
                placeOfWork! ||
                judgingCategory! ||
                judgedBefore! ||
                eventJudged! ) {
                return new NextResponse( 'Required fields missing: name, email, phone, gender' ,
                    { status: 400 });
            }

        // Save form data to Prisma
            const judge = await prismadb.judge.create({
                data: {
                    name,
                    email,
                    phone,
                    gender,
                    idNumber,
                    highestEducationLevel,
                    currentEmployer,
                    numberOfYearsWorked,
                    nameOfReferee,
                    emailOfReferee,
                    phoneOfReferee,
                    placeOfWork,
                    judgingCategory,
                    judgedBefore,
                    eventJudged,
                },
            });

      return NextResponse.json ({message: 'Judge created successfully!', name}, { status: 200 })
    } catch (error) {
        console.error('Error creating judge:', error);
             console.error('Request body:', req.body);
//             // Return generic error response for client-side handling

        return new NextResponse("Internal error", { status: 500 });
    }

}

