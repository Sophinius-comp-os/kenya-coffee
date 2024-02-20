"use client";

import React from "react";

import { useFormikContext } from "formik";

import { InferType } from "yup";
import FormikControl from "@/components/FormComponents/FormikControl";
import {FormStepComponentType} from "@/components/JudgesForm/FormStepProps";
import {JudgesSchema} from "@/components/JudgesForm/judgeFormSchema";
import {Button} from "@/components/ui/Button";


const Page4: FormStepComponentType = (props) => {
    const { errors } = useFormikContext<InferType<typeof JudgesSchema>>();
    const hasErrors = errors.name || errors.email;
    return (
        <div className="flex flex-col gap-2 w-[400px]">

            <FormikControl
                control="input"
                type="text"
                label="Name of Referee"
                name="nameOfReferee"
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

            <div className="flex justify-between gap-2">
                <Button onClick={props.onPrevious} className='px-6 py-2.5  text-lg shadow-lg text-white rounded bg-green-500 mt-2 flex-grow ' >
                    Back
                </Button>
                <Button type="submit"   className='px-6 py-2.5  text-lg shadow-xl text-white rounded bg-red-500  mt-2 flex-grow'>
                  Send details
                </Button>
            </div>
        </div>
    );
};

export default Page4;