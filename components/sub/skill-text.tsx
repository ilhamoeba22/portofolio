"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

import { useLanguage } from "@/context/LanguageContext";

export const SkillText = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop(0)}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          {t("skills_badge")}
        </h1>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.3)}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-6 text-center mb-10 relative z-[20]"
      >
        {t("skills_title")}
      </motion.h2>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[16px] md:text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        {t("skills_cursive")}
      </motion.div>
    </div>
  );
};
