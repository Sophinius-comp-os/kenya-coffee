"use client"

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Page1 from "@/components/JudgesForm/Page1";
import Page2 from "@/components/JudgesForm/Page2";
import Page3 from "@/components/JudgesForm/Page3";
import Page4 from "@/components/JudgesForm/Page4";
import clsx from "clsx";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/Button";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const MultiStepForm = ({ onClose }) => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };
    const { theme } = useTheme();
    const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState(false);

    const fontStyles = { fontSize: "40px" };

    const initialValues = {
        email: "",
        name: "",
        phone: "",
        highestEducationLevel:"",
        currentEmployer:"",
        numberOfYearsWorked:"",
        nameOfReferee:"",
        emailOfReferee:"",
        phoneOfReferee:"",
        placeOfWork:"",
        judgingCategory:"",
        judgedBefore:"",
        eventJudged:"",
    };

    const onSubmit = async (
        values: any,
        { resetForm }: { resetForm: () => void }
    ) => {
        setMessage("Form submitted");
        setSubmitted(true);
        // console.log(values);

        // const { email, name, phone, subject, message } = values;

        const res = await fetch("/api/contact", {
            body: values,
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
        });

        resetForm();
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

                <div className="mt-12 flex items-center justify-around">


                <h2 className="text-xl font-bold  text-center">Judge Registration Form</h2>

                    <button onClick={onClose} className="text-black opacity-7 h-12 w-12 text-4xl block bg-gray-400 py-0 rounded-full">&times;</button>

                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        if (step === 4) {
                            console.log('Form submitted:', values);
                            onClose();
                        } else {
                            nextStep();
                        }
                    }}
                >
                    {({isSubmitting}) => (
                        <Form
                            className={clsx(
                                "relative w-full  p-8 text-base md:text-lg  rounded-lg shadow-xl sm:p-12  py-2 ",
                                theme === "dark" ? "bg-light text-dark" : "bg-light"
                            )}
                        >

                            {step === 1 && (
                       <Page1/>
                            )}
                            {step === 2 && (
                               <Page2 />
                            )}
                            {step === 3 && (
                                <Page3 />
                            )}
                            {step === 4 && (
                                <Page4 />
                            )}
                            <div className="p-4 flex justify-between">
                                {step > 1 && (
                                    <button type="button" onClick={prevStep}
                                            className="inline sm:w-auto rounded bg-[#2ecc71] my-2 px-4 py-2 text-lg sm:px-8 sm:py-3 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500">Previous</button>
                                )}
                                <button type="submit"
                                        className="inline sm:w-auto rounded bg-[#2ecc71] my-2 px-4 py-2 text-lg sm:px-8 sm:py-3 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500">{step > 4 ? 'Submit' : 'Next'}</button>
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
