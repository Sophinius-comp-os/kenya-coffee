"use client";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "next-themes";
import { Formik, Form, Field } from "formik";
import { FormStepComponentType } from "./FormStepProps";
import Container from "@/components/ui/Container";
import FormikControl from "@/components/FormComponents/FormikControl";
import Image from "next/image";
import {JudgesSchema} from "@/components/JudgesForm/judgeFormSchema";
import Page1 from "@/components/JudgesForm/Page1";
import Page2 from "@/components/JudgesForm/Page2";
import Page3 from "@/components/JudgesForm/Page3";
import Page4 from "@/components/JudgesForm/Page4";




type Props = {
    steps:FormStepComponentType[];
}

const JudgesForm= ({ onClose }) => {

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
        <>
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
            >
                <div className={clsx(theme === "dark" ? "bg-dark" : "bg-light")}>
                    {/* <!-- Section: Design Block --> */}
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div
                            className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                            <div
                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <h2 className="text-lg font-bold mb-4 text-center">Multi-Step Form</h2>
                                <div className="flex justify-end">
                                    <button onClick={onClose}
                                            className="text-gray-500 hover:text-gray-700">&times;</button>
                                </div>
                                <h2
                                    className={clsx(
                                        "center mb-6 text-xl md:text-2xl  font-bold uppercase text-white "
                                        // theme === "dark" ? " text-white" : " text-[#041434]"
                                    )}
                                >
                                    Judges Registration form
                                </h2>
                                <section>


                                    <Container className="">
                                        <div className="">


                                            <div className="w-full px-4 lg:w-screen xl:w-full">
                                                <Formik
                                                    initialValues={initialValues}
                                                    onSubmit={onSubmit}
                                                    validationSchema={JudgesSchema}
                                                >
                                                    {(formik) => {
                                                        return (
                                                            <Form
                                                                className={clsx(
                                                                    "relative w-full  p-8 text-base md:text-lg  rounded-lg shadow-xl sm:p-12",
                                                                    theme === "dark" ? "bg-light text-dark" : "bg-light"
                                                                )}
                                                            >
                                                                {step === 1 && (
                                                                    <Page1/>
                                                                )}
                                                                {step === 2 && (
                                                                    <Page2/>
                                                                )}
                                                                {step === 3 && (
                                                                    <Page3/>
                                                                )}
                                                                {step === 4 && (
                                                                    <Page4/>
                                                                )}
                                                                <div className="p-4 flex justify-between">
                                                                    {step > 1 && (
                                                                        <button type="button" onClick={prevStep}
                                                                                className="btn bg-gray-300 hover:bg-gray-400">Previous</button>
                                                                    )}
                                                                    <button type="submit"
                                                                            className="btn bg-blue-500 hover:bg-blue-700 text-white">{step > 4 ? 'Submit' : 'Next'}</button>
                                                                </div>

                                                            </Form>
                                                        );
                                                    }}
                                                </Formik>
                                            </div>
                                        </div>
                                    </Container>
                                </section>
                            </div>
                        </div>
                    </div>
                            </div>
            </motion.div>
        </>
);
};

export default JudgesForm;
