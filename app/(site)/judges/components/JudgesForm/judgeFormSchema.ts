// import { z } from 'zod';
//
// export const JudgesSchema = z.object({
//     email: z.string().email('Invalid email'),
//     name: z.string().min(3, 'Name must be at least 3 characters'),
//     phone: z.string().min(10, 'Phone number must be at least 10 characters'),
//     gender: z.enum(['male', 'female']),
//     // frontIdImage: z.string(), // Uncomment if required
//     // backIdImage: z.string(), // Uncomment if required
//     frontIdImage: z.optional(z.object({ type: z.literal('image/*') })), // Allow only image files
//     backIdImage: z.optional(z.object({ type: z.literal('image/*') })), // Allow only image files
//     highestEducationLevel: z.string().optional(),
//     currentEmployer:   z.string().min(4, 'Current employer is required').max(255),
//     numberOfYearsWorked: z.number().min(0, 'Number of years worked cannot be negative'),
//     nameOfReferee:  z.string().min(3, 'Referee name is required').max(255),
//     emailOfReferee: z.string().email('Invalid referee email'),
//     phoneOfReferee: z.string().min(10, 'Referee phone number must be at least 10 characters'),
//     placeOfWork: z.string().min(3, 'Place of work is required').max(255),
//     judgingCategory: z.string().min(3, 'Judging category is required').max(255),
//     judgedBefore: z.boolean(),
//     eventJudged: z.string().optional(),
// });
// import * as Yup from "yup";
//
// const MAX_FILE_SIZE = 1024 * 1024; // 1MB

// interface FormValues {
//     name: string;
//     email: string;
//     phone: string;
//     gender: string;
//     frontIdImage: File | null;
//     backIdImage: File | null;
//     highestEducationLevel: string;
//     currentEmployer: string;
//     numberOfYearsWorked: number;
//     nameOfReferee: string;
//     emailOfReferee: string;
//     phoneOfReferee: string;
//     placeOfWork: string;
//     judgingCategory: string;
//     judgedBefore: boolean;
//     eventJudged: string;
// }
//
// export const JudgesSchema = Yup.object().shape({
//     name: Yup.string().max(255).required("You must enter your Name"),
//     email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
//     phone: Yup.string().max(20).required("Your mobile phone number is required"),
//     gender: Yup.string().oneOf(["male", "female"]).required("Gender is required"),
//     frontIdImage: Yup.mixed().when("step", {
//         is: 4, // Only validate when on step 4 (submission)
//         then: Yup.mixed().required("Required")
//     })
//         .test("FILE_SIZE", "File too big", (value) => !value || value.size <= MAX_FILE_SIZE)
//         .test("FILE_TYPE", "Invalid file type", (value) => !value || ['image/png', 'image/jpg', 'image/jpeg'].includes(value.type)),
//     backIdImage: Yup.mixed().when("step", {
//         is: 4, // Only validate when on step 4 (submission)
//         then: Yup.mixed().required("Required")
//     })
//         .test("FILE_SIZE", "File too big", (value) => !value || value.size <= MAX_FILE_SIZE)
//         .test("FILE_TYPE", "Invalid file type", (value) => !value || ['image/png', 'image/jpg', 'image/jpeg'].includes(value.type)),
//     highestEducationLevel: Yup.string().required("Highest Education Level is required"),
//     currentEmployer: Yup.string().required("Current Employer is required"),
//     numberOfYearsWorked: Yup.number().required("Number of Years Worked is required"),
//     nameOfReferee: Yup.string().required("You must enter the Name of Referee"),
//     emailOfReferee: Yup.string().email("Must be a valid email").max(255).required("Email of Referee is required"),
//     phoneOfReferee: Yup.string().required("Phone of Referee is required"),
//     placeOfWork: Yup.string().required("Place of Work is required"),
//     judgingCategory: Yup.string().required("Judging Category is required"),
//     judgedBefore: Yup.boolean().required("You must specify if you have been a judge before"),
//     eventJudged: Yup.string().required("Event Judged is required"),
// });

// import * as Yup from "yup";
//
// const MAX_FILE_SIZE = 1024 * 1024; // 1MB
//
// interface FormValues {
//     name: string;
//     email: string;
//     phone: string;
//     gender: string;
//
// }
// export const JudgesSchema = Yup.object().shape({
//     name: Yup.string().max(255).required("You must enter your Name"),
//     email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
//     phone: Yup.string().max(20).required("Your mobile phone number is required"),
//     gender: Yup.string().oneOf(["male", "female"]).required("Gender is required")
// })

import * as Yup from "yup";

const MAX_FILE_SIZE = 1024 * 1024; // 1MB

interface FormValues {
    name: string;
    email: string;
    phone: string;
    gender: string;
    frontIdImage: File | null;
    backIdImage: File | null;
    highestEducationLevel: string;
    currentEmployer: string;
    numberOfYearsWorked: number;
    nameOfReferee: string;
    emailOfReferee: string;
    phoneOfReferee: string;
    placeOfWork: string;
    judgingCategory: string;
    judgedBefore: boolean;
    eventJudged: string;
}

export const JudgesSchema = Yup.object().shape({
    name: Yup.string().max(255).required("You must enter your Name"),
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    phone: Yup.string().max(20).required("Your mobile phone number is required"),
    gender: Yup.string().oneOf(["male", "female"]).required("Gender is required"),
    frontIdImage: Yup.mixed().when("step", {
        is: 4, // Only validate when on step 4 (submission)
        then: Yup.mixed().required("Required")
    })
        .test("FILE_SIZE", "File too big", (value) => !value || value.size <= MAX_FILE_SIZE)
        .test("FILE_TYPE", "Invalid file type", (value) => !value || ['image/png', 'image/jpg', 'image/jpeg'].includes(value.type)),
    backIdImage: Yup.mixed().when("step", {
        is: 4, // Only validate when on step 4 (submission)
        then: Yup.mixed().required("Required")
    })
        .test("FILE_SIZE", "File too big", (value) => !value || value.size <= MAX_FILE_SIZE)
        .test("FILE_TYPE", "Invalid file type", (value) => !value || ['image/png', 'image/jpg', 'image/jpeg'].includes(value.type)),
    highestEducationLevel: Yup.string().required("Highest Education Level is required"),
    currentEmployer: Yup.string().required("Current Employer is required"),
    numberOfYearsWorked: Yup.number().required("Number of Years Worked is required"),
    nameOfReferee: Yup.string().required("You must enter the Name of Referee"),
    emailOfReferee: Yup.string().email("Must be a valid email").max(255).required("Email of Referee is required"),
    phoneOfReferee: Yup.string().required("Phone of Referee is required"),
    placeOfWork: Yup.string().required("Place of Work is required"),
    judgingCategory: Yup.string().required("Judging Category is required"),
    judgedBefore: Yup.boolean().required("You must specify if you have been a judge before"),
    eventJudged: Yup.string().required("Event Judged is required"),
});