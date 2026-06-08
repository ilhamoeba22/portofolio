"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

import { useLanguage } from "@/context/LanguageContext";

import { ASSET_PREFIX } from "@/constants/config";

export const Encryption = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "200px 0px" });

  return (
    <section ref={ref} className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="z-[5] flex w-full max-w-[1200px] flex-col items-center px-5 sm:px-6 md:px-20"
      >
        <motion.div
          variants={slideInFromTop(0.4)}
          className="mb-6 text-center text-2xl font-medium text-gray-200 sm:text-3xl md:text-[40px]"
        >
          {t("domain_title").split(" ").slice(0, 2).join(" ")}{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {t("domain_title").split(" ").slice(2).join(" ")}
          </span>
        </motion.div>

        <div className="group mb-6 flex h-auto w-auto cursor-pointer flex-col items-center">
          <Image
            src={`${ASSET_PREFIX}/lock-top.png`}
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            loading="lazy"
            style={{ height: "auto" }}
          />
          <Image
            src={`${ASSET_PREFIX}/lock-main.png`}
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
            loading="lazy"
            style={{ height: "auto" }}
          />
        </div>

        <div className="Welcome-box z-[20] mb-10 border border-[#7042F88B] px-[15px] py-[4px] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">{t("domain_subtitle")}</h1>
        </div>

        <div className="z-[20] grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            variants={slideInFromLeft(0.4)}
            className="rounded-lg border border-[#7042f88b] bg-[#0300148a] p-6 backdrop-blur-sm"
          >
            <h3 className="mb-3 text-lg font-bold text-white">{t("domain_sharia_title")}</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("domain_sharia_p")}
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromTop(0.4)}
            className="rounded-lg border border-[#7042f88b] bg-[#0300148a] p-6 backdrop-blur-sm"
          >
            <h3 className="mb-3 text-lg font-bold text-white">{t("domain_digital_title")}</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("domain_digital_p")}
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.4)}
            className="rounded-lg border border-[#7042f88b] bg-[#0300148a] p-6 backdrop-blur-sm"
          >
            <h3 className="mb-3 text-lg font-bold text-white">{t("domain_security_title")}</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("domain_security_p")}
            </p>
          </motion.div>
        </div>

        <div className="z-[20] mt-6 grid w-full max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            variants={slideInFromLeft(0.55)}
            className="rounded-lg border border-[#7042f88b] bg-[#0300148a] p-6 backdrop-blur-sm"
          >
            <h3 className="mb-3 text-lg font-bold text-white">{t("domain_thinking_title")}</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("domain_thinking_p")}
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.55)}
            className="rounded-lg border border-[#7042f88b] bg-[#0300148a] p-6 backdrop-blur-sm"
          >
            <h3 className="mb-3 text-lg font-bold text-white">{t("domain_sprint_title")}</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("domain_sprint_p")}
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden opacity-30 lg:block">
        {inView && (
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          >
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        )}
      </div>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,#160735_0%,#030014_60%,#030014_100%)] lg:hidden" />
    </section>
  );
};
