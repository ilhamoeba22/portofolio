"use client";

import React, { useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RxExit } from "react-icons/rx";

import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/constants/translations";

export const Projects = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 relative z-[20]"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        {t("projects_title")}
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={t(project.descriptionKey as TranslationKey)}
            tech={project.tech}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 bg-[#030014] shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-[10] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group"
              >
                <RxExit className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-[#030014] overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-40 md:opacity-20" />
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.split(", ").map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400">Overview</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {t(selectedProject.fullDescriptionKey as TranslationKey)}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-purple-400">Key Features</h3>
                      <ul className="space-y-2 mt-2">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex gap-4">
                    {selectedProject.link ? (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-opacity text-center text-sm md:text-base"
                      >
                        🌐 {language === "en" ? "Live Project" : "Lihat Proyek"}
                      </a>
                    ) : (
                      <span className="flex-1 py-3 px-6 rounded-xl border border-white/10 text-gray-500 font-semibold text-center cursor-not-allowed text-xs md:text-sm">
                        🔒 {language === "en" ? "Private / Internal System" : "Sistem Internal / Privat"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
