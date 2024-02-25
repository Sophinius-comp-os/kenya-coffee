"use client";

import React from "react";

import { useFormikContext } from "formik";

import { InferType } from "yup";
import FormikControl from "@/components/FormComponents/FormikControl";
import {FormStepComponentType} from "@/components/JudgesForm/FormStepProps";
import {JudgesSchema} from "@/components/JudgesForm/judgeFormSchema";
import {Button} from "@/components/ui/Button";

const judgingOptions = [
    { key: "Head Judge", value: "Head Judge" },
    { key: "Technical", value: "Technical" },
    { key: "Sensory", value: "Sensory" },
    { key: "Bachelor's degree", value: "Bachelor's degree" },
    { key: "Master's degree", value: "Master's degree" },
];

const Page4 = () => {
    const { errors } = useFormikContext<InferType<typeof JudgesSchema>>();
    const hasErrors = errors.name || errors.email;
    return (
        <div className="flex flex-col gap-2 w-[400px]">

            <FormikControl
                control="select"
                label="Preferred Judging Category"
                name="judgingCategory"
                options={judgingOptions}
            />

            <FormikControl
                control="input"
                type="text"
                label="Have You Judged Before ?"
                name="judgedBefore"
            />
            <FormikControl
                control="input"
                type="text"
                label="Which Event have you Judged before ?"
                name="eventJudged"
            />


        </div>
    );
};

export default Page4;