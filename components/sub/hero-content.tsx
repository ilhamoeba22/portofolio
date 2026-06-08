"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

import { useLanguage } from "@/context/LanguageContext";

import { ASSET_PREFIX } from "@/constants/config";

export const HeroContent = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-24 flex w-full flex-col items-center justify-center px-5 sm:px-8 md:mt-40 md:flex-row md:px-20"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-center md:text-start">
        <motion.div
          variants={slideInFromTop(0.3)}
          className="Welcome-box self-center border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9] md:self-start"
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
          <h1 className="Welcome-text text-[13px]">
            {t("hero_badge")}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.4)}
          className="mt-5 flex h-auto w-auto max-w-[680px] flex-col gap-5 text-3xl font-bold text-white sm:text-4xl md:text-6xl"
        >
          <span>
            Muhammad{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Ilham
            </span>{" "}
            Pratama
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.55)}
          className="mx-auto my-4 max-w-[650px] text-base leading-relaxed text-gray-300 md:mx-0 md:text-lg"
        >
          {t("hero_p")}
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.7)}
          className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
        >
          <Link
            href="#projects"
            className="button-primary cursor-pointer whitespace-nowrap rounded-lg px-6 py-3 text-center text-white"
          >
            {t("hero_btn_explore")}
          </Link>
          <Link
            href="#contact"
            className="cursor-pointer whitespace-nowrap rounded-lg border border-[#7042f88b] px-6 py-3 text-center text-white transition-all hover:bg-[#7042f815]"
          >
            {t("hero_btn_contact")}
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.55)}
        className="mt-10 flex h-full w-full items-center justify-center md:mt-0"
      >
        <div className="profile-container">
          <motion.div
            className="profile-3d-wrapper"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotateY: [0, 5, -5, 2, -2, 0],
                    rotateX: [0, -3, 2, -2, 3, 0],
                    y: [0, -6, 0, 6, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  }
            }
          >
            <div className="profile-photo-mask">
              <Image
                src={`${ASSET_PREFIX}/foto-ilham.jpeg`}
                alt="Muhammad Ilham Pratama"
                fill
                sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1200px) 360px, 360px"
                draggable={false}
                className="select-none object-cover"
                style={{ objectPosition: "center top" }}
                priority
              />
              <div className="profile-holo-overlay" />
            </div>

            <div className="profile-3d-shadow" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
