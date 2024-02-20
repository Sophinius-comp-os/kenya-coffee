"use client";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTheme } from "next-themes";
import { Formik, Form, Field } from "formik";
import { useSearchParams, useRouter } from "next/navigation";
import { FormStepComponentType } from "./FormStepProps";
import Container from "@/components/ui/Container";
import FormikControl from "@/components/FormComponents/FormikControl";
import Image from "next/image";
import {JudgesSchema} from "@/components/JudgesForm/judgeFormSchema";




type Props = {
    steps:FormStepComponentType[];
}

const JudgesForm= ({steps}: Props) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const page = searchParams.get("step"); // get the current step using search params
    const pageIndex = page ? +page : 1;
    // get the step component
    const StepComponent = steps.at(pageIndex - 1);
    const stepExists = !!StepComponent;


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
                                                    {/* render the step component if it exists */}
                                                    {stepExists && (
                                                        <StepComponent
                                                            onNext={() => {
                                                                // navigate to next page if it is not the last page using `router.push`
                                                                if (pageIndex < steps.length) {
                                                                    const nextPage = pageIndex + 1;
                                                                    router.push(`/judges?step=${nextPage}`);
                                                                }
                                                            }}
                                                            onPrevious={() => {
                                                                // navigate to the previous page using `router.push`
                                                                const prevPage = pageIndex - 1;
                                                                if (prevPage > 1) {
                                                                    router.push(`/judges?step=${prevPage}`);
                                                                } else {
                                                                    router.push("/judges");
                                                                }
                                                            }}
                                                        />
                                                    )}

                                                </Form>
                                            );
                                        }}
                                    </Formik>
                                </div>
                            </div>
                        </Container>
                    </section>

                </div>
            </motion.div>
        </>
    );
};

export default JudgesForm;
