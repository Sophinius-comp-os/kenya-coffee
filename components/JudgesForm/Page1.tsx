"use client";

import React from "react";

import { useFormikContext } from "formik";

import { InferType } from "yup";
import FormikControl from "@/components/FormComponents/FormikControl";
import {FormStepComponentType} from "@/components/JudgesForm/FormStepProps";
import {JudgesSchema} from "@/components/JudgesForm/judgeFormSchema";
import {Button} from "@/components/ui/Button";


const genderOptions = [
    { key: "Male", value: 'male' },
    { key: "Female", value: 'female' },

];
const Page1: FormStepComponentType = (props) => {
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
            <Button className='px-8 py-3 text-white rounded bg-black  mt-2' onClick={props.onNext}
                    disabled={!!hasErrors}>
                Next
            </Button>
        </div>
    );
};

export default Page1;