"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { EXPERIENCES } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/constants/translations";

export const Experience = () => {
    const { t } = useLanguage();
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section
            id="experience"
            ref={ref}
            className="flex flex-col items-center justify-center py-20 px-6 md:px-20"
        >
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full max-w-[900px]"
            >
                <motion.h2
                    variants={slideInFromLeft(0.3)}
                    className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16 text-center"
                >
                    {t("experience_title")}
                </motion.h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500" />

                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${exp.period}`}
                            variants={index % 2 === 0 ? slideInFromLeft(0.3 + index * 0.1) : slideInFromRight(0.3 + index * 0.1)}
                            className={`relative flex flex-col md:flex-row items-start mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-[-6px] md:left-1/2 md:transform md:-translate-x-1/2 w-[14px] h-[14px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-2 border-[#030014] z-10" />

                            {/* Content card */}
                            <div
                                className={`ml-6 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                                    }`}
                            >
                                <div className="p-6 rounded-lg border border-[#7042f88b] bg-[#0300145e] backdrop-blur-sm hover:border-[#7042f8] transition-all duration-300">
                                    <span className="text-sm text-purple-400 font-medium">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-1">
                                        {t(exp.roleKey as TranslationKey)}
                                    </h3>
                                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mt-1">
                                        {exp.company}
                                    </h4>
                                    <ul className="mt-3 space-y-2">
                                        {exp.descriptionKeys.map((descKey, i) => (
                                            <li
                                                key={i}
                                                className="text-gray-400 text-sm flex items-start"
                                            >
                                                <span className="text-purple-400 mr-2 mt-1">▹</span>
                                                {t(descKey as TranslationKey)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
