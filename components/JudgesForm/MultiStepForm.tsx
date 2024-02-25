// "use client"
//
// import { useState } from 'react';
// import { Formik, Form, Field } from 'formik';
// import Page1 from "@/components/JudgesForm/Page1";
// import Page2 from "@/components/JudgesForm/Page2";
// import Page3 from "@/components/JudgesForm/Page3";
// import Page4 from "@/components/JudgesForm/Page4";
// import clsx from "clsx";
// import axios from 'axios'
// import {useTheme} from "next-themes";
// import {Button} from "@/components/ui/Button";
//
//
// const MultiStepForm = ({ onClose }) => {
//     const [step, setStep] = useState(1);
//
//     const nextStep = () => {
//         setStep(step + 1);
//     };
//
//     const prevStep = () => {
//         setStep(step - 1);
//     };
//     const { theme } = useTheme();
//     const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
//     const [submitted, setSubmitted] = useState(false);
//
//     const fontStyles = { fontSize: "40px" };
//
//     const initialValues = {
//         email: "",
//         name: "",
//         phone: "",
//         frontIdImage:"",
//         backIdImage:"",
//         highestEducationLevel:"",
//         currentEmployer:"",
//         numberOfYearsWorked:"",
//         nameOfReferee:"",
//         emailOfReferee:"",
//         phoneOfReferee:"",
//         placeOfWork:"",
//         // judgingCategory:"",
//         judgedBefore:"",
//         eventJudged:"",
//     };
//
//     // const onSubmit = async (
//     //     values: any,
//     //     { resetForm }: { resetForm: () => void }
//     // ) => {
//     //     setMessage("Form submitted");
//     //     setSubmitted(true);
//     //     // console.log(values);
//     //
//     //     // const { email, name, phone, subject, message } = values;
//     //
//     //     const res = await fetch("/api/contact", {
//     //         body: values,
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //         },
//     //         method: "post",
//     //     });
//     //
//     //     resetForm();
//     // };
//
//     return (
//         <div className="fixed z-10 inset-0 overflow-y-auto">
//         <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         <div className="fixed inset-0 transition-opacity">
//         <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
//             <div
//                 className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//
//                 <div className="mt-12 flex items-center justify-around">
//
//
//                 <h2 className="text-xl font-bold  text-center">Judge Registration Form</h2>
//
//                     <button onClick={onClose} className="text-black opacity-7 h-12 w-12 text-4xl block bg-gray-400 py-0 rounded-full">&times;</button>
//
//                 </div>
//                 <Formik
//                     initialValues={initialValues}
//                     onSubmit={async (values, actions) => {
//                         if (step === 4) {
//                             try {
//                                 const formData = new FormData();
//
//                                 //page 1
//                                 formData.append('name', values.name);
//                                 formData.append('email', values.email);
//                                 formData.append('phone', values.phone);
//                                 formData.append('frontImage', values.frontIdImage);
//                                 formData.append('backImage', values.backIdImage);
//
//                                 //page 2
//                                 formData.append('highestEducationLevel', values.highestEducationLevel);
//                                 formData.append('currentEmployer', values.currentEmployer);
//                                 formData.append('numberOfYearsWorked', values.numberOfYearsWorked);
//
//                                 //page 3
//                                 formData.append('nameOfReferee', values.nameOfReferee);
//                                 formData.append('emailOfReferee', values.emailOfReferee);
//                                 formData.append('phoneOfReferee', values.phoneOfReferee);
//                                 formData.append('placeOfWork', values.placeOfWork);
//
//                                 //page 4
//                                 formData.append('judgingCategory', values.judgingCategory);
//                                 formData.append('judgedBefore', values.judgedBefore);
//                                 formData.append('eventJudged', values.eventJudged);
//                                 // Append other fields here
//
//
//                                 const response = await axios.post('/api/upload', formData, {
//                                     headers: {
//                                         'Content-Type': 'multipart/form-data',
//                                     },
//                                 });
//
//                                 console.log('Images uploaded successfully:', response.data);
//                             } catch (error) {
//                                 console.error('Error uploading images:', error);
//                             } finally {
//                                 // setSubmitting(false);
//                             }
//                             onClose();
//                         } else {
//                             nextStep();
//                         }
//                     }}
//                 >
//                     {({isSubmitting}) => (
//                         <Form
//                             className={clsx(
//                                 "relative w-full  p-8 text-base md:text-lg  rounded-lg shadow-xl sm:p-12  py-2 ",
//                                 theme === "dark" ? "bg-light text-dark" : "bg-light"
//                             )}
//                         >
//
//                             {step === 1 && (
//                        <Page1/>
//                             )}
//                             {step === 2 && (
//                                <Page2 />
//                             )}
//                             {step === 3 && (
//                                 <Page3 />
//                             )}
//                             {step === 4 && (
//                                 <Page4 />
//                             )}
//                             <div className="p-4 flex justify-between">
//                                 {step > 1 && (
//                                     <button type="button" onClick={prevStep}
//                                             className="inline sm:w-auto rounded bg-[#2ecc71] my-2 px-4 py-2 text-lg sm:px-8 sm:py-3 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500">Previous</button>
//                                 )}
//                                 <button type="submit"
//                                         className="inline sm:w-auto rounded bg-[#2ecc71] my-2 px-4 py-2 text-lg sm:px-8 sm:py-3 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500">{step > 4 ? 'Submit' : 'Next'}</button>
//                             </div>
//
//
//                         </Form>
//                     )}
//                 </Formik>
//             </div>
//         </div>
//         </div>
//     );
// };
//
// export default MultiStepForm;


"use client"
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import Page1 from "@/components/JudgesForm/Page1";
import Page2 from "@/components/JudgesForm/Page2";
import Page3 from "@/components/JudgesForm/Page3";
import Page4 from "@/components/JudgesForm/Page4";
import clsx from "clsx";
import axios from 'axios'
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import {JudgesSchema} from "@/components/JudgesForm/judgeFormSchema";

interface FormValues {
    email: string;
    name: string;
    phone: string;
    // frontIdImage: string;
    // backIdImage: string;
    frontIdImage: File | null;
    backIdImage: File | null;
    highestEducationLevel: string;
    currentEmployer: string;
    numberOfYearsWorked:number;
    nameOfReferee: string;
    emailOfReferee: string;
    phoneOfReferee: string;
    placeOfWork: string;
    judgingCategory:string,
    judgedBefore: boolean;
    eventJudged: string;
}



const MultiStepForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [step, setStep] = useState<number>(1);
    const { theme } = useTheme();

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const [submitting, setSubmitting] = useState(false);
    const initialValues: FormValues = {
        email: "",
        name: "",
        phone: "",
        frontIdImage: null,
        backIdImage: null,
        highestEducationLevel: "",
        currentEmployer: "",
        numberOfYearsWorked:1,
        nameOfReferee: "",
        emailOfReferee: "",
        phoneOfReferee: "",
        placeOfWork: "",
        judgingCategory:"",
        judgedBefore:false,
        eventJudged: "",
    };


    const onSubmit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            if (step === 4) {
                setSubmitting(true);

                // // Upload frontIdImage to Cloudinary
                // const frontImageFormData = new FormData();
                // if (values.frontIdImage) {
                //     frontImageFormData.append('file', values.frontIdImage);
                //     const frontImageResponse = await axios.post('CLOUDINARY_UPLOAD_URL', frontImageFormData);
                //     values.frontIdImage = frontImageResponse.data.secure_url;
                // }
                //
                // // Upload backIdImage to Cloudinary
                // const backImageFormData = new FormData();
                // if (values.backIdImage) {
                //     backImageFormData.append('file', values.backIdImage);
                //     const backImageResponse = await axios.post('CLOUDINARY_UPLOAD_URL', backImageFormData);
                //     values.backIdImage = backImageResponse.data.secure_url;
                // }

                // Submit form data to MongoDB service
                // console.log(values.frontIdImage)
                // await axios.post('/api/upload', values);
                //
                // // Reset form and state
                // onClose();

                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                    if (value instanceof File) {
                        formData.append(key, value);
                    } else {
                        formData.append(key, JSON.stringify(value));
                    }
                });

                // Submit form data to backend API route
                await axios.post('/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Reset form and state or perform any other necessary actions
                onClose();
            } else {
                setStep(step + 1);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error (e.g., display error message to user)
        } finally {
            setSubmitting(false);
        }
    };


    // const submitForm = async (values: FormValues, onClose: () => void) => {
    //     console.log('my values', values.backIdImage)
    //     try {
    //         const formData = createFormData(values);
    //         setSubmitting(true)
    //         const response = await uploadFormData(formData);
    //         console.log('Images uploaded successfully:', response.data);
    //         onClose();
    //     } catch (error) {
    //         setSubmitting(false)
    //         console.error('Error uploading images:', error.message);
    //         // Handle error if needed
    //     } finally {
    //         // Clean up or perform any final actions if needed
    //         setSubmitting(false)
    //     }
    // };

    // function createFormData(values: FormValues): FormData {
    //
    //
    //
    //     const frontIdImage = values.frontIdImage[0]
    //     const backIdImage = values.backIdImage[0]
    //
    //     const formData = new FormData();
    //     // formData.append('file', frontIdImage);
    //     // formData.append('file', backIdImage);
    //     // Append fields from each page
    //     formData.append('name', values.name);
    //     formData.append('email', values.email);
    //     formData.append('phone', values.phone);
    //     formData.append('file', frontIdImage);
    //     formData.append('file', backIdImage);
    //     // formData.append('frontIdImage', values.frontIdImage);
    //     // formData.append('backIdImage', values.backIdImage);
    //     formData.append('highestEducationLevel', values.highestEducationLevel);
    //     formData.append('currentEmployer', values.currentEmployer);
    //     formData.append('numberOfYearsWorked', values.numberOfYearsWorked);
    //     formData.append('nameOfReferee', values.nameOfReferee);
    //     formData.append('emailOfReferee', values.emailOfReferee);
    //     formData.append('phoneOfReferee', values.phoneOfReferee);
    //     formData.append('placeOfWork', values.placeOfWork);
    //     // formData.append('judgingCategory', values.judgingCategory);
    //     formData.append('judgedBefore', values.judgedBefore.toString());
    //     formData.append('eventJudged', values.eventJudged);
    //
    //
    //     return formData;
    // }
    //
    // async function uploadFormData(formData: FormData) {
    //     return await axios.post('/api/upload', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     });
    // }


    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
                        onSubmit={onSubmit}
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
                                    <button type="submit" disabled={!isValid || !dirty}
                                            // onClick={nextStep}
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
// import { Formik, Form, Field } from 'formik';
// import axios from 'axios';
//
// const onSubmit = async (values, { setSubmitting }) => {
//     try {
//         // Upload frontIdImage to Cloudinary
//         const frontImageFormData = new FormData();
//         frontImageFormData.append('file', values.frontIdImage);
//         const frontImageResponse = await axios.post('CLOUDINARY_UPLOAD_URL', frontImageFormData);
//
//         // Upload backIdImage to Cloudinary
//         const backImageFormData = new FormData();
//         backImageFormData.append('file', values.backIdImage);
//         const backImageResponse = await axios.post('CLOUDINARY_UPLOAD_URL', backImageFormData);
//
//         // Submit form data to MongoDB service
//         await axios.post('MONGODB_API_URL', {
//             name: values.name,
//             email: values.email,
//             password: values.password,
//             frontIdImageUrl: frontImageResponse.data.secure_url,
//             backIdImageUrl: backImageResponse.data.secure_url
//         });
//
//         // Reset form and state
//         // Optionally, you can redirect the user to another page or show a success message
//     } catch (error) {
//         console.error('Error submitting form:', error);
//         // Handle error (e.g., display error message to user)
//     } finally {
//         setSubmitting(false);
//     }
// };
//
// // Your form component
// const MyForm = () => (
//     <Formik
//         initialValues={{
//             name: '',
//             email: '',
//             password: '',
//             frontIdImage: null,
//             backIdImage: null
//         }}
//         onSubmit={onSubmit}
//     >
//         {({ isSubmitting, setFieldValue }) => (
//             <Form>
//                 <Field type="text" name="name" placeholder="Name" />
//                 <Field type="email" name="email" placeholder="Email" />
//                 <Field type="password" name="password" placeholder="Password" />
//                 <input type="file" onChange={(event) => setFieldValue('frontIdImage', event.currentTarget.files[0])} />
//                 <input type="file" onChange={(event) => setFieldValue('backIdImage', event.currentTarget.files[0])} />
//                 <button type="submit" disabled={isSubmitting}>Submit</button>
//             </Form>
//         )}
//     </Formik>
// );
//
// export default MyForm;
