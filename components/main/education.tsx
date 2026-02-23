"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { EDUCATION } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

import { useLanguage } from "@/context/LanguageContext";

export const Education = () => {
    const { t } = useLanguage();
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section
            id="education"
            ref={ref}
            className="flex flex-col items-center justify-center py-20"
        >
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full max-w-[1200px] px-6 md:px-20"
            >
                <motion.h2
                    variants={slideInFromLeft(0.3)}
                    className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 text-center"
                >
                    {t("education_title")}
                </motion.h2>

                {/* Degree */}
                <motion.div
                    variants={slideInFromRight(0.5)}
                    className="p-8 rounded-lg border border-[#7042f88b] bg-[#0300145e] backdrop-blur-sm mb-10"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white">
                                🎓 {t("degree_name")}
                            </h3>
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold mt-1">
                                {EDUCATION.university}
                            </p>
                        </div>
                        <span className="text-purple-400 font-medium mt-2 md:mt-0">
                            {EDUCATION.period}
                        </span>
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.h3
                    variants={slideInFromLeft(0.6)}
                    className="text-2xl font-semibold text-white mb-6 text-center"
                >
                    Professional Certifications
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {EDUCATION.certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            variants={index % 2 === 0 ? slideInFromLeft(0.5 + index * 0.1) : slideInFromRight(0.5 + index * 0.1)}
                            className="p-4 rounded-lg border border-[#7042f88b] bg-[#0300145e] backdrop-blur-sm hover:border-[#7042f8] transition-all duration-300"
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">📜</span>
                                <div>
                                    <h4 className="text-white font-semibold text-sm">
                                        {cert.name}
                                    </h4>
                                    <p className="text-purple-400 text-xs mt-1">{cert.issuer}</p>
                                    <p className="text-gray-500 text-xs mt-1">{cert.validity}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
