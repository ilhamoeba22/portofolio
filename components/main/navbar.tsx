'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";
import { LanguageSwitcher } from "@/components/sub/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

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
            src="/logo.png"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden border-b border-[#2A0E61]">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            <Link href="#about-me" className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center" onClick={() => setIsMobileMenuOpen(false)}>{t("nav_about")}</Link>
            <Link href="#skills" className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center" onClick={() => setIsMobileMenuOpen(false)}>{t("nav_skills")}</Link>
            <Link href="#experience" className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center" onClick={() => setIsMobileMenuOpen(false)}>{t("nav_experience")}</Link>
            <Link href="#projects" className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center" onClick={() => setIsMobileMenuOpen(false)}>{t("nav_projects")}</Link>
            <Link href="#contact" className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center" onClick={() => setIsMobileMenuOpen(false)}>{t("nav_contact")}</Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
