"use client";

import React from "react";

import {Field, useFormikContext} from "formik";

import { InferType } from "yup";
import FormikControl from "@/components/FormComponents/FormikControl";
import {FormStepComponentType} from "@/components/JudgesForm/FormStepProps";
import {JudgesSchema} from "@/components/JudgesForm/judgeFormSchema";
import {Button} from "@/components/ui/Button";
import ImageUpload from "@/components/FormComponents/ImageUpload";


const genderOptions = [
    { key: "Male", value: 'male' },
    { key: "Female", value: 'female' },

];
const Page1: FormStepComponentType = () => {
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

            <div className='flex justify-between gap-4  items-center w-full'>
                <label htmlFor="nationalIdImage" className='w-full'>Image  Front </label>
                <Field name="frontIdImage" component={ImageUpload}/>
            </div>

            <div className='flex justify-between gap-4 items-center w-full'>
                <label htmlFor="nationalIdImage" className='w-full'> Image  Back</label>
                <Field name="backIdImage" component={ImageUpload}/>
            </div>

            {/*<ErrorMessage name="nationalIdImage" component="div"/>*/}
        </div>
    );
};

export default Page1;