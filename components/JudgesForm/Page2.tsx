"use client";

import React from "react";

import { useFormikContext } from "formik";

import { InferType } from "yup";
import FormikControl from "@/components/FormComponents/FormikControl";
import {FormStepComponentType} from "@/components/JudgesForm/FormStepProps";
import {JudgesSchema} from "@/components/JudgesForm/judgeFormSchema";
import {Button} from "@/components/ui/Button";

const educationOptions = [
    { key: "one", value: "Primary School" },
    { key: "two", value: "Secondary School" },
    { key: "three", value: "Vocation Training" },
    { key: "four", value: "Bachelor's degree" },
    { key: "five", value: "Master's degree" },
];

const Page2: FormStepComponentType = (props) => {
    const { errors } = useFormikContext<InferType<typeof JudgesSchema>>();
    const hasErrors = errors.name || errors.email;
    return (
        <div className="flex flex-col gap-2 w-[400px]">
            <FormikControl
                control="select"
                type="adults"
                label="Adults"
                name="adults"
                options={educationOptions}
            />
            <FormikControl
                control="input"
                type="text"
                label="Current Employer"
                name="currentEmployer"
            />
            <FormikControl
                control="input"
                type="text"
                label="No of Years Worked"
                name="phone"
            />

            <div className="flex space-x-2 justify-between">
                <Button onClick={props.onPrevious} className='px-6 py-2.5  text-lg shadow-lg text-white rounded bg-green-500 mt-2 flex-grow ' >
                    Back
                </Button>
                <Button
                    className='px-6 py-2.5  text-lg shadow-xl text-white rounded bg-red-500  mt-2 flex-grow'
                    onClick={props.onNext}

                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Page2;