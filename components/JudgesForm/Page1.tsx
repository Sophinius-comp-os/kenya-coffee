"use client";

import React from "react";

import {Field, useFormikContext, Formik} from "formik";
import { InferType } from "yup";
import FormikControl from "@/components/FormComponents/FormikControl";

import {JudgesSchema} from "@/components/JudgesForm/judgeFormSchema";
import {Button} from "@/components/ui/Button";
import ImageUpload from "@/components/FormComponents/ImageUpload";


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
const Page1 = ({ formik })=> {
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

            {/*<div className='flex justify-between gap-4  items-center w-full'>*/}
            {/*    <label htmlFor="frontIdImage" className='w-full'>Image Front </label>*/}
            {/*    <Field name="frontIdImage" component={ImageUpload}  formik={formik}  />*/}
            {/*</div>*/}
            {/*<div className='flex justify-between gap-4 items-center w-full'>*/}
            {/*    <label htmlFor="backIdImage" className='w-full'> Image Back</label>*/}
            {/*    <Field name="backIdImage" component={ImageUpload}  formik={formik}  />*/}
            {/*</div>*/}



        </div>
    );
};

export default Page1;