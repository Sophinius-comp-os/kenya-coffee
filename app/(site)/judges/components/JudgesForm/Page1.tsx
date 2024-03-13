"use client";

import React from "react";

import {Field, useFormikContext, Formik} from "formik";
import { InferType } from "yup";
import FormikControl from "@/components/FormComponents/FormikControl";

import {JudgesSchema} from "@/app/(site)/judges/components/JudgesForm/judgeFormSchema";



const genderOptions = [
    { key: "Male", value: 'male' },
    { key: "Female", value: 'female' },

];


interface FormikProps<Values extends Record<string, any>> {
    // Properties you access from formik
    values: Values;
    errors: Record<string, string | undefined>;
    touched: Record<string, boolean | undefined>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    isValid: boolean;
    dirty: boolean;
    isSubmitting: boolean;
    setFieldValue: (name: string, value: any, shouldValidate?: boolean) => void;
    // ... other props or functions you use
}
const Page1 = ()=> {
    const { errors } = useFormikContext<InferType<typeof JudgesSchema>>();


    const hasErrors = errors.name || errors.email;
    return (
        <div className="flex flex-col gap-2 w-[400px]">
            <FormikControl
                control="input"
                type="text"
                label="Name"
                name="name"
            />
            <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
            />
            <FormikControl
                control="input"
                type="text"
                label="Phone Number"
                name="phone"
            />

            <h3 className="text-lg font-bold mb-4">Choose a Gender :</h3>
            <FormikControl
                control="radio"

                name="gender"
                options={genderOptions}
            />
             <FormikControl
            control="input"
            type="number"
            label="Id  Number"
            name="idNumber"
        />

            {/*<div className='flex justify-between gap-4  items-center w-full'>*/}
            {/*    <label htmlFor="frontIdImage" className='w-full'>Image Front </label>*/}
            {/*    <Field name="frontIdImage" component={ImageUpload}  formik={formik}  />*/}
            {/*</div>*/}
            {/*<div className='flex justify-between gap-4 items-center w-full'>*/}
            {/*    <label htmlFor="backIdImage" className='w-full'> Image Back</label>*/}
            {/*    <Field name="backIdImage" component={ImageUpload}  formik={formik}  />*/}
            {/*</div>*/}


            {/*<div className='flex justify-between gap-4  items-center w-full'>*/}
            {/*    <label htmlFor="frontIdImage" className='w-full'>Image Front </label>*/}
            {/*    <ImageUpload*/}
            {/*        cloudName="dkgbj1pny" // Replace with your Cloudinary cloud name*/}
            {/*        uploadPreset="kenyacoffee" // Replace with your Cloudinary upload preset*/}
            {/*        field="frontIdImage" // Specify the form field name for storing the image URL*/}
            {/*        onChange={(url) => formik.setFieldValue("image", url)}*/}
            {/*   // Disable upload button while submitting*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className='flex justify-between gap-4 items-center w-full'>*/}
            {/*    <label htmlFor="backIdImage" className='w-full'> Image Back</label>*/}
            {/*    <ImageUpload*/}
            {/*        cloudName="dkgbj1pny" // Replace with your Cloudinary cloud name*/}
            {/*        uploadPreset="kenyacoffee" // Replace with your Cloudinary upload preset*/}
            {/*        field="backIdImage" // Specify the form field name for storing the image URL*/}
            {/*        onChange={(url) => formik.setFieldValue("image", url)}*/}
            {/*       // Disable upload button while submitting*/}
            {/*    />*/}
            {/*</div>*/}


        </div>
    );
};

export default Page1;