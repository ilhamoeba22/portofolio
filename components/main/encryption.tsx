"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

import { useLanguage } from "@/context/LanguageContext";

export const Encryption = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="flex flex-col relative items-center justify-center min-h-screen w-full h-full">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full max-w-[1200px] px-6 md:px-20 flex flex-col items-center z-[5]"
      >
        {/* Title */}
        <motion.div
          variants={slideInFromTop(0.5)}
          className="text-[40px] font-medium text-center text-gray-200 mb-6"
        >
          {t("domain_title").split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {t("domain_title").split(" ").slice(2).join(" ")}
          </span>
        </motion.div>

        {/* Lock icon preserved from template */}
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto mb-6">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            style={{ height: "auto" }}
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
            style={{ height: "auto" }}
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border mb-10 border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">{t("domain_subtitle")}</h1>
        </div>

        {/* Domain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full z-[20]">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="p-6 rounded-lg border border-[#7042f88b] bg-[#0300148a] backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-white mb-3">{t("domain_sharia_title")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("domain_sharia_p")}
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromTop(0.5)}
            className="p-6 rounded-lg border border-[#7042f88b] bg-[#0300148a] backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-white mb-3">{t("domain_digital_title")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("domain_digital_p")}
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.5)}
            className="p-6 rounded-lg border border-[#7042f88b] bg-[#0300148a] backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-white mb-3">{t("domain_security_title")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("domain_security_p")}
            </p>
          </motion.div>
        </div>

        {/* Row 2: Design Thinking & Design Sprint */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px] z-[20] mt-6">
          <motion.div
            variants={slideInFromLeft(0.7)}
            className="p-6 rounded-lg border border-[#7042f88b] bg-[#0300148a] backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-white mb-3">{t("domain_thinking_title")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("domain_thinking_p")}
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.7)}
            className="p-6 rounded-lg border border-[#7042f88b] bg-[#0300148a] backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-white mb-3">{t("domain_sprint_title")}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("domain_sprint_p")}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Background video */}
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
