"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, {useState} from 'react';
import clsx from "clsx";
import {FaBuilding, FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import Container from "@/components/ui/Container";
import Image from "next/image";
import {useTheme} from "next-themes";

import Modal from "@/app/(site)/judges/components/JudgesForm/Modal";



const Judges = () => {
    const fontStyles = { fontSize: "40px" };
    const { theme } = useTheme();

    const [submitted, setSubmitted] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <motion.div
            initial={{y: "100%"}}
            animate={{y: "0%"}}
            exit={{opacity: 1}}
            transition={{duration: 0.75, ease: "easeOut"}}
        >
            <div className={clsx(theme === "dark" ? "bg-dark" : "bg-light")}>
                {/* <!-- Section: Design Block --> */}

                <section className="relative h-screen ">
                    <div
                        className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
                        <Image
                            src="/images/coffee/3.jpg"
                            alt="background image"
                            className="object-cover object-center"
                            fill
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <div className="flex h-full items-center justify-center relative z-20  ">
                        <div
                            className={clsx(
                                "px-6 text-center  md:px-12",
                                theme === "dark" ? "text-white" : "text-dark"
                            )}
                        >
                            <h2 className="mt-2 mb-16  text-2xl md:text-4xl  font-bold !text-light tracking-tight ">
                             Judges
                            </h2>
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] !text-light text-base font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"*/}
                            {/*    data-te-ripple-init*/}
                            {/*    data-te-ripple-color="light"*/}
                            {/*>*/}
                            {/*    Get started*/}
                            {/*</button>*/}
                        </div>
                    </div>
                    {/* <!-- Jumbotron --> */}
                </section>
                {/* <!-- Section: Design Block --> */}

                <section
                    className={clsx(
                        " py-20 lg:py-[120px] overflow-hidden relative z-10"
                    )}
                >
                    <Container className="">
                        <div className="flex flex-wrap -mx-4 lg:justify-between">
                            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                                <div className="mb-12 max-w-[570px] lg:mb-0">
                                    <h2
                                        className={clsx(
                                            "mb-6 text-xl md:text-2xl  font-bold uppercase text-white "
                                            // theme === "dark" ? " text-white" : " text-[#041434]"
                                        )}
                                    >
                                        List of Judges </h2>
                                    <p className="text-base leading-relaxed mb-9 text-body-color">
                                        Here is a list of Judges that Judge in our Various Events.
                                    </p>
                                    <div className="mb-8 flex w-full max-w-[370px]">
                                        <div
                                            className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                            <FaBuilding style={fontStyles}/>

                                        </div>
                                        <div className="w-full">
                                            <h4
                                                className={clsx(
                                                    "mb-1 text-lg md:text-xl  font-bold"
                                                    // theme === "dark" ? " text-white" : " text-[#041434]"
                                                )}
                                            >
                                                Our Location
                                            </h4>
                                            <p className="text-base text-body-color">Nairobi cbd</p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex w-full max-w-[370px]">
                                        <div
                                            className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">


                                            <FaPhoneAlt style={fontStyles}/>
                                        </div>
                                        <div className="w-full">
                                            <h4
                                                className={clsx(
                                                    "mb-1 text-lg md:text-xl font-bold"
                                                    // theme === "dark" ? " text-white" : " text-[#041434]"
                                                )}
                                            >
                                                Phone Number
                                            </h4>
                                            <p className="text-base text-body-color">+254700000</p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex w-full max-w-[370px]">
                                        <div
                                            className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">


                                            <MdEmail style={fontStyles}/>
                                        </div>
                                        <div className="w-full">
                                            <h4
                                                className={clsx(
                                                    "mb-1 text-lg md:text-xl font-bold"
                                                    // theme === "dark" ? " text-white" : " text-[#041434]"
                                                )}
                                            >
                                                Email Address
                                            </h4>
                                            <p className="text-base text-body-color">
                                                info@kenyacoffeeEvents.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>





<div className='flex items-center'>


                            <button onClick={openModal}
                                    className="inline sm:w-auto rounded bg-[#2ecc71] my-2 px-4 py-2 text-lg sm:px-8 sm:py-3 md:text-xl font-medium shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500">
                            Click To Register
                            </button>
                            <Modal isOpen={isModalOpen} onClose={closeModal}/>
</div>
                        </div>
                    </Container>
                </section>

            </div>
        </motion.div>
        </>
    )
}

export default Judges


//