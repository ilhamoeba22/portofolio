"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-28 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop(0.5)}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] self-center md:self-start"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            {t("hero_badge")}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Muhammad{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Ilham
            </span>{" "}
            Pratama
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {t("hero_p")}
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link
            href="#projects"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg whitespace-nowrap"
          >
            {t("hero_btn_explore")}
          </Link>
          <Link
            href="#contact"
            className="py-2 px-6 border border-[#7042f88b] text-center text-white cursor-pointer rounded-lg hover:bg-[#7042f815] transition-all whitespace-nowrap"
          >
            {t("hero_btn_contact")}
          </Link>
        </motion.div>
      </div>

      {/* ── Profile Photo — Emerging from Black Hole Vortex ── */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="profile-container">
          {/* 3D Animated Photo Wrapper */}
          <motion.div
            className="profile-3d-wrapper"
            animate={{
              rotateY: [0, 8, -8, 4, -4, 0],
              rotateX: [0, -5, 3, -3, 5, 0],
              y: [0, -10, 0, 10, 0],
              scale: [1, 1.02, 0.99, 1.01, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            }}
          >
            {/* Photo with reduced blended edges */}
            <div className="profile-photo-mask">
              <Image
                src={`${ASSET_PREFIX}/foto-ilham.jpeg`}
                alt="Muhammad Ilham Pratama"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                draggable={false}
                className="select-none object-cover"
                style={{ objectPosition: "center top" }}
                priority
                loading="eager"
              />
              {/* Subtle Holographic Overlay */}
              <div className="profile-holo-overlay" />
            </div>

            {/* Subtle shadow beneath */}
            <div className="profile-3d-shadow" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
