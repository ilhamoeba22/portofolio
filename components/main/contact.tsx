"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section
            id="contact"
            ref={ref}
            className="flex flex-col items-center justify-center py-20"
        >
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full max-w-[1200px] px-6 md:px-20"
            >
                <motion.h2
                    variants={slideInFromLeft(0.3)}
                    className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 text-center"
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    variants={slideInFromRight(0.4)}
                    className="text-gray-400 text-center mb-12 text-lg"
                >
                    Let&apos;s collaborate to design your next digital transformation.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="space-y-6"
                    >
                        <a
                            href="mailto:muhammad.ilham.yk@gmail.com"
                            className="flex items-center gap-4 p-4 rounded-lg border border-[#7042f88b] bg-[#0300145e] hover:border-[#7042f8] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                                <FaEnvelope className="text-white text-xl" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Email</h4>
                                <p className="text-gray-400 text-sm">muhammad.ilham.yk@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/m-ilhampratama"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center gap-4 p-4 rounded-lg border border-[#7042f88b] bg-[#0300145e] hover:border-[#7042f8] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                                <RxLinkedinLogo className="text-white text-xl" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">LinkedIn</h4>
                                <p className="text-gray-400 text-sm">linkedin.com/in/m-ilhampratama</p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/62895390069595"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center gap-4 p-4 rounded-lg border border-[#7042f88b] bg-[#0300145e] hover:border-[#7042f8] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                                <FaWhatsapp className="text-white text-xl" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">WhatsApp</h4>
                                <p className="text-gray-400 text-sm">0895-3900-69595</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7042f88b] bg-[#0300145e]">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                                <FaMapMarkerAlt className="text-white text-xl" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Location</h4>
                                <p className="text-gray-400 text-sm">Sleman, Yogyakarta, Indonesia</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        variants={slideInFromRight(0.5)}
                        className="space-y-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <input
                                suppressHydrationWarning
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg border border-[#7042f88b] bg-[#0300145e] text-white placeholder-gray-500 focus:border-[#7042f8] focus:outline-none transition-all"
                            />
                        </div>
                        <div>
                            <input
                                suppressHydrationWarning
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 rounded-lg border border-[#7042f88b] bg-[#0300145e] text-white placeholder-gray-500 focus:border-[#7042f8] focus:outline-none transition-all"
                            />
                        </div>
                        <div>
                            <input
                                suppressHydrationWarning
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 rounded-lg border border-[#7042f88b] bg-[#0300145e] text-white placeholder-gray-500 focus:border-[#7042f8] focus:outline-none transition-all"
                            />
                        </div>
                        <div>
                            <textarea
                                suppressHydrationWarning
                                rows={5}
                                placeholder="Your Message"
                                className="w-full p-3 rounded-lg border border-[#7042f88b] bg-[#0300145e] text-white placeholder-gray-500 focus:border-[#7042f8] focus:outline-none transition-all resize-none"
                            />
                        </div>
                        <button
                            suppressHydrationWarning
                            type="submit"
                            className="w-full py-3 button-primary text-white font-semibold rounded-lg cursor-pointer hover:opacity-90 transition-all"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};
