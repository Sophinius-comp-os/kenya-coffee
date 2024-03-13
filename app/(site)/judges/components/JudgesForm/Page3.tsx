"use client";

import React from "react";

import { useFormikContext } from "formik";

import { InferType } from "yup";
import FormikControl from "@/components/FormComponents/FormikControl";
import {JudgesSchema} from "@/app/(site)/judges/components/JudgesForm/judgeFormSchema";


const Page3 = () => {
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
                type="email"
                label="Email of Referee"
                name="emailOfReferee"
            />
            <FormikControl
                control="input"
                type="text"
                label="Phone Number of Referee"
                name="phoneOfReferee"
            />
            <FormikControl
                control="input"
                type="text"
                label="Place Of Work"
                name="placeOfWork"
            />


        </div>
    );
};

export default Page3;