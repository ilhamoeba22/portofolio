"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";
import { AsciiIndonesia } from "@/components/sub/ascii_indonesia";

const StatCard = ({ title, value, index, icon }: { title: string; value: string | number; index: number; icon?: React.ReactNode }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            variants={slideInFromTop(0.5 + index * 0.1)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative h-40 w-full rounded-xl bg-gradient-to-br from-[#7042f825] to-[#00c7ff15] p-px"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-[#0300145e] shadow-lg backdrop-blur-xl border border-[#7042f833] transition-colors group-hover:border-[#7042f8]"
            >
                <div
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="flex flex-col items-center"
                >
                    {icon && <div className="mb-2 text-cyan-500">{icon}</div>}
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {value}
                    </div>
                    <p className="mt-1 text-[10px] md:text-xs font-medium text-gray-400 text-center px-2">
                        {title}
                    </p>
                </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </motion.div>
    );
};

const IndoFlag = () => (
    <motion.div
        animate={{
            y: [0, -5, 0],
            rotateZ: [0, 2, 0, -2, 0],
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="relative w-8 h-5 rounded-sm overflow-hidden flex flex-col shadow-sm border border-white/10"
    >
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-white" />
    </motion.div>
);

export const AboutMe = () => {
    const { t } = useLanguage();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Coffee calculation
    const [coffeeCount, setCoffeeCount] = React.useState(0);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
        const startDate = new Date("2019-07-01"); // Start of IT journey
        const calculateCoffee = () => {
            const now = new Date();
            const diffInTime = now.getTime() - startDate.getTime();
            const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
            // Avg 2 coffees a day
            setCoffeeCount(diffInDays * 2);
        };

        calculateCoffee();
        const interval = setInterval(calculateCoffee, 1000 * 60 * 60); // Update every hour
        return () => clearInterval(interval);
    }, []);

    // If not mounted, render a placeholder to prevent hydration mismatch for coffeeCount
    const displayCoffee = isMounted ? coffeeCount : 4850;

    return (
        <section
            id="about-me"
            ref={ref}
            className="relative flex flex-col items-center justify-center py-24 px-6 md:px-20"
        >
            {/* National Ambient Background Removed from here to sit between sections */}

            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="z-10 w-full max-w-[1200px]"
            >
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div variants={slideInFromLeft(0.3)}>
                            <div className="flex items-center gap-4 mb-2">
                                <h2 className="text-4xl md:text-5xl font-bold text-white">
                                    {t("about_title")}
                                </h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-[0_0_10px_#bc13fe]" />
                            </div>
                        </motion.div>

                        <motion.div
                            variants={slideInFromLeft(0.5)}
                            className="space-y-6 text-gray-300 text-lg leading-relaxed font-light"
                        >
                            <p className="border-l-4 border-purple-500/30 pl-6 py-2 bg-purple-500/5 rounded-r-xl shadow-inner backdrop-blur-sm">
                                {t("about_p1")}
                            </p>
                            <p className="border-l-4 border-cyan-500/30 pl-6 py-2 bg-cyan-500/5 rounded-r-xl shadow-inner backdrop-blur-sm">
                                {t("about_p2")}
                            </p>
                            <p className="border-l-4 border-indigo-500/30 pl-6 py-2 bg-indigo-500/5 rounded-r-xl shadow-inner backdrop-blur-sm">
                                {t("about_p3")}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: 3D Grid & Flair */}
                    <div className="flex-1 w-full max-w-[500px] flex flex-col gap-6">
                        {/* Standalone Cultural Flair at Top */}
                        <motion.div
                            variants={slideInFromRight(0.6)}
                            className="flex items-center justify-between px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <IndoFlag />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">{t("about_nationality_label")}</span>
                                    <span className="text-white font-black text-sm uppercase">Indonesia</span>
                                </div>
                            </div>
                            <div className="h-10 w-px bg-white/10 mx-2" />
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-cyan-500/80 font-bold tracking-widest uppercase">Citizen</span>
                                <span className="text-cyan-400 font-black text-sm">WNI</span>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 p-1">
                            <StatCard index={0} title={t("stats_apps")} value="5+" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>} />
                            <StatCard index={1} title={t("stats_experience")} value="3+" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="m4.93 4.93 14.14 14.14" /><path d="M2 12h20" /><path d="m19.07 4.93-14.14 14.14" /></svg>} />
                            <StatCard index={2} title={t("stats_certifications")} value="6+" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>} />
                            <StatCard index={3} title={t("about_coffee_label")} value={displayCoffee} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" x2="14" y1="2" y2="2" /></svg>} />
                        </div>

                        {/* Yogyakarta Badge */}
                        <motion.div
                            variants={slideInFromRight(0.7)}
                            className="relative group p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex items-center gap-4 overflow-hidden shadow-lg backdrop-blur-md"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm tracking-widest uppercase">{t("about_location_label")}</h4>
                                <p className="text-[10px] text-cyan-500/60 font-medium tracking-wider">LIVE IN THE SPECIAL REGION</p>
                            </div>
                            <motion.div
                                animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="ml-auto w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_15px_#00c7ff]"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
