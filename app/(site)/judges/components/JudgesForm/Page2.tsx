"use client";

import React from "react";

import { useFormikContext } from "formik";

import { InferType } from "yup";
import FormikControl from "@/components/FormComponents/FormikControl";

import {JudgesSchema} from "@/app/(site)/judges/components/JudgesForm/judgeFormSchema";

const educationOptions = [
    { key: "Primary School", value: "Primary School" },
    { key: "Secondary School", value: "Secondary School" },
    { key: "Vocation Training", value: "Vocation Training" },
    { key: "Bachelor's degree", value: "Bachelor's degree" },
    { key: "Master's degree", value: "Master's degree" },
];

const Page2 = () => {
    const { errors } = useFormikContext<InferType<typeof JudgesSchema>>();
    const hasErrors = errors.name || errors.email;
    return (
        <div className="flex flex-col gap-2 w-[400px]">
            <FormikControl
                control="select"
                label="Current Education Level"
                name="highestEducationLevel"
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
                type="number"
                label="No of Years Worked"
                name="numberOfYearsWorked"
            />


        </div>
    );
};

export default Page2;