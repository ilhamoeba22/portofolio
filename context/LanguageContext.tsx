"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationKey } from "@/constants/translations";

type Language = "en" | "id";

const fallbackTranslations: Record<Language, Record<string, string>> = {
    en: {
        project_sso_server_mci_desc: "On-going enterprise access platform designed as a centralized sign-in foundation for MCI internal digital services.",
        project_sso_server_mci_full: "SSO Server MCI is an on-going enterprise access platform designed to become a centralized sign-in foundation for MCI internal applications. The project is prepared to support a more unified user journey, role-aware access flow, and future integration between multiple digital services. Although still in development and not yet live, this project represents a strategic move toward a cleaner, more scalable internal application ecosystem.",
    },
    id: {
        project_sso_server_mci_desc: "Platform akses enterprise yang sedang dikembangkan sebagai fondasi sign-in terpusat untuk layanan digital internal MCI.",
        project_sso_server_mci_full: "SSO Server MCI adalah platform akses enterprise yang sedang aktif dikembangkan sebagai fondasi sign-in terpusat untuk aplikasi internal MCI. Project ini disiapkan untuk mendukung pengalaman pengguna yang lebih terpadu, alur akses berbasis peran, dan integrasi antar layanan digital di tahap berikutnya. Walaupun belum live, project ini menunjukkan arah strategis menuju ekosistem aplikasi internal yang lebih rapi, terukur, dan mudah dikembangkan.",
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: TranslationKey): string => {
        return translations[language][key] || fallbackTranslations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};