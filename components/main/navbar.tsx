'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";
import { LanguageSwitcher } from "@/components/sub/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/constants/translations";

import { ASSET_PREFIX } from "@/constants/config";

export const Navbar = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-5 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src={`${ASSET_PREFIX}/logo.png`}
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
            priority
            loading="eager"
          />
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex flex-row items-center gap-5">
          <div className="flex items-center justify-between gap-10 h-auto border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#about-me" className="cursor-pointer hover:text-[rgb(112,66,248)] transition">{t("nav_about")}</Link>
            <Link href="#skills" className="cursor-pointer hover:text-[rgb(112,66,248)] transition">{t("nav_skills")}</Link>
            <Link href="#experience" className="cursor-pointer hover:text-[rgb(112,66,248)] transition">{t("nav_experience")}</Link>
            <Link href="#projects" className="cursor-pointer hover:text-[rgb(112,66,248)] transition">{t("nav_projects")}</Link>
            <Link href="#contact" className="cursor-pointer hover:text-[rgb(112,66,248)] transition">{t("nav_contact")}</Link>
          </div>

          <LanguageSwitcher />
        </div>

        {/* Social Icons (Web) & Switcher Mobile Container */}
        <div className="flex flex-row gap-5 items-center">
          <div className="hidden md:flex flex-row gap-5">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-6 w-6 text-white" />
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <LanguageSwitcher />
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-white focus:outline-none text-4xl ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-[65px] right-0 w-[280px] h-[calc(100vh-65px)] bg-[#030014]/95 backdrop-blur-xl p-8 flex flex-col items-center shadow-2xl md:hidden border-l border-white/10"
            >
              {/* Links */}
              <div className="flex flex-col items-center gap-6 w-full">
                {NAV_LINKS.map((nav) => (
                  <Link
                    key={nav.title}
                    href={nav.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-medium text-gray-200 hover:text-purple-400 transition-colors py-2 border-b border-white/5 w-full text-center"
                  >
                    {t(`nav_${nav.title.toLowerCase()}` as TranslationKey)}
                  </Link>
                ))}
              </div>

              {/* Social Icons */}
              <div className="mt-auto flex justify-center gap-6 pb-10">
                {SOCIALS.map(({ link, name, icon: Icon }) => (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={name}
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
