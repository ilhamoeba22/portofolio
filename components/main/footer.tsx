"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full relative py-4 overflow-hidden bg-transparent transition-all duration-500">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center"
        >
          {/* Main Content Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {FOOTER_DATA.map((column, colIdx) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: colIdx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start space-y-4"
              >
                <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 tracking-wider">
                  {column.title}
                </h3>
                <div className="flex flex-col space-y-2 items-center md:items-start text-gray-400">
                  {column.data.map(({ icon: Icon, name, link }) => (
                    <Link
                      key={`${column.title}-${name}`}
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center space-x-3 hover:text-white transition-all duration-300"
                    >
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 group-hover:scale-105 transition-all duration-300">
                        {Icon && <Icon className="w-4 h-4" />}
                        {!Icon && <div className="w-4 h-4 flex items-center justify-center text-[10px] font-bold">●</div>}
                      </div>
                      <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Copyright Section */}
          <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500">
            <div className="text-xs font-light text-center md:text-left">
              &copy; {new Date().getFullYear()} <span className="text-gray-300 font-medium">Muhammad Ilham Pratama</span>.
              <span className="hidden md:inline ml-2">Built with Passion & Code.</span>
            </div>

            <div className="flex items-center space-x-8">
              <Link href="#about-me" className="text-[10px] hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">Back to top</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
