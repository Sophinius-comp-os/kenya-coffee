"use client"
import React, { useState } from 'react';
import * as Yup from "yup";
import { useParams, useRouter } from "next/navigation"
import { Formik, Form, Field } from 'formik';
import clsx from "clsx";
import axios from 'axios'
import { useTheme } from "next-themes";
import { toast } from "react-hot-toast"
import { Button } from "@/components/ui/Button";
import Page1 from "@/app/(site)/judges/components/JudgesForm/Page1";
import Page2 from "@/app/(site)/judges/components/JudgesForm/Page2";
import Page3 from "@/app/(site)/judges/components/JudgesForm/Page3";
import Page4 from "@/app/(site)/judges/components/JudgesForm/Page4";
import {JudgesSchema} from "@/app/(site)/judges/components/JudgesForm/judgeFormSchema";
interface FormValues {
    name: string;
    email: string;
    phone: string;
    gender: string;
    idNumber:number;

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

    // frontIdImage: File | null;
    // backIdImage: File | null;
}

const MultiStepForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [step, setStep] = useState<number>(1);
    const { theme } = useTheme();
    const router = useRouter();
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const [submitting, setSubmitting] = useState(false);
    const initialValues: FormValues = {
        email: "",
        name: "",
        phone: "",
        gender:"",
        idNumber:0,
        highestEducationLevel:"",
        currentEmployer:"",
        numberOfYearsWorked:1,
        nameOfReferee:"",
        emailOfReferee:"",
        phoneOfReferee:"",
        placeOfWork:"",
        judgingCategory:"",
        judgedBefore:false,
        eventJudged:"",

        // frontIdImage: null,
        // backIdImage:null,
    }

    // async function handleCloudinaryUpload(file: File): Promise<string> {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //
    //     // Replace with your secure credential retrieval method
    //
    //     const uploadPreset =process.env.CLOUDINARY_CLOUD_NAME;
    //     const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    //
    //     if (!uploadPreset || !cloudName) {
    //         throw new Error('Missing Cloudinary credentials (uploadPreset and cloudName)');
    //     }
    //
    //     formData.append('upload_preset', uploadPreset);
    //     formData.append('cloud_name', cloudName);
    //
    //     try {
    //         const response = await axios.post('https://api.cloudinary.com/v1/image/upload', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //
    //         const data = await response.data;
    //         return data.secure_url; // Return the uploaded image URL
    //     } catch (error) {
    //         console.error('Error uploading image to Cloudinary:', error);
    //         throw new Error('Error uploading image'); // Re-throw for handling in the form component
    //     }
    // }


    const onSubmit = async (
        values: FormValues,
         onClose: () => void,
         { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
    ) => {

        try {
            // Validate required fields
            if (Object.values(values).some((value) => !value)) {
                console.error('Please fill in all required fields.');
                return;
            }

            setSubmitting(true); // Set submitting state for UI feedback

            // // Upload images and get image URLs
            // const imageUrls = await Promise.all([
            //     handleCloudinaryUpload(values.frontIdImage),
            //     handleCloudinaryUpload(values.backIdImage),
            // ]);

            // Create FormData for form submission
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('gender', values.gender);
            formData.append('idNumber', values.idNumber);
            formData.append('highestEducationLevel', values.highestEducationLevel);
            formData.append('currentEmployer', values.currentEmployer);
                formData.append('numberOfYearsWorked', values.numberOfYearsWorked);
                formData.append('nameOfReferee', values.nameOfReferee);
            formData.append('emailOfReferee', values.emailOfReferee);
            formData.append('phoneOfReferee', values.phoneOfReferee);
            formData.append('placeOfWork', values.placeOfWork);
            formData.append('judgingCategory', values.judgingCategory)
            formData.append('judgedBefore', values.judgedBefore);
            formData.append('eventJudged', values.eventJudged)


            console.log('Form data:', formData); // Log for debugging

            // Submit form data to API endpoint
            const response = await axios.post<any>('/api/upload', values);

            console.log('Form submission response:', response.data); // Handle successful response

            // Handle successful submission (e.g., reset form, show success message)
            toast.success('Form submitted successfully!');
            resetForm();

        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Form failed to be submitted.');

            // Handle error (e.g., display error message to user)
        } finally {
            setSubmitting(false);
            onClose(); // Assuming this is intended to be called only once
        }
    };



    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen  pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className={clsx("absolute inset-0 bg-gray-900 opacity-75", theme === "dark" ? "bg-light " : "bg-dark")}></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                <div className={clsx("inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full", theme === "dark" ? "bg-light text-dark" : "bg-light")}>
                    <div className="mt-12 flex items-center justify-around">
                        <h2 className="text-xl font-bold text-center">Judge Registration Form</h2>
                        <button onClick={onClose} className="text-black opacity-7 h-12 w-12 text-4xl block bg-gray-400 py-0 rounded-full">&times;</button>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={JudgesSchema} // Add validation schema
                        onSubmit={onSubmit}
                        validate // Add validate prop to trigger validation on step change

                    >
                        {({ isSubmitting, isValid, dirty }) => (
                            <Form
                                className={clsx("relative w-full p-8 text-base md:text-lg rounded-lg shadow-xl sm:p-12 py-2", theme === "dark" ? "bg-light text-dark" : "bg-light")}>
                                {step === 1 && <Page1/>}
                                {step === 2 && <Page2/>}
                                {step === 3 && <Page3/>}
                                {step === 4 && <Page4/>}
                                <div className="p-4 flex justify-between">
                                    {step > 1 && (
                                        <button type="button" onClick={prevStep}
                                                className="inline sm:w-auto rounded bg-[#2ecc71] my-2 px-4 py-2 text-lg sm:px-8 sm:py-3 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500">Previous</button>
                                    )}
                                    <button type="submit" disabled={!isValid }
                                            onClick={() => setStep(step + 1)} // Handle navigation directly
                                            className="inline sm:w-auto rounded bg-[#2ecc71] my-2 px-4 py-2 text-lg sm:px-8 sm:py-3 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500">{step === 4 ? 'Submit' : 'Next'}</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;

//
//
// const isLastStep = currentStep === Object.keys(steps).length;
//
// const handleNext = () => {
//     if (!formik.errors.length) { // Check for validation errors
//         setCurrentStep(currentStep + 1);
//     }
// };
//
// const handleBack = () => {
//     setCurrentStep(currentStep - 1);
// };
//
// const steps = {
//     1: Step1,
//     2: Step2,
//     // ... other steps
// };
//
// const RenderStepContent = steps[currentStep];
//
// return (
//     <form onSubmit={formik.handleSubmit}>
//         <RenderStepContent />
//         {currentStep > 1 && <button type="button" onClick={handleBack}>Back</button>}
//         {!isLastStep && <button type="button" onClick={handleNext}>Next</button>}
//         {isLastStep && <button type="submit">Submit</button>}
//     </form>
// );
// };
//
// export default MultistepForm;