"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-[rgba(3,0,20,0.37)] border border-[rgba(112,66,248,0.38)] p-1 rounded-full backdrop-blur-md">
            <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${language === "en"
                        ? "bg-[rgb(112,66,248)] text-white shadow-[0_0_10px_rgba(112,66,248,0.5)]"
                        : "text-gray-400 hover:text-white"
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage("id")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${language === "id"
                        ? "bg-[rgb(112,66,248)] text-white shadow-[0_0_10px_rgba(112,66,248,0.5)]"
                        : "text-gray-400 hover:text-white"
                    }`}
            >
                ID
            </button>
        </div>
    );
};
