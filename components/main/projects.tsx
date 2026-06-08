"use client";

import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative z-[20] flex flex-col items-center justify-center py-20"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center px-5 sm:px-6 md:px-20">
        <h1 className="py-14 text-center text-3xl font-semibold text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text sm:text-4xl md:py-20 md:text-[40px]">
          {t("projects_title")}
        </h1>
        <div className="grid h-full w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={t(project.descriptionKey as TranslationKey)}
              tech={project.tech}
              status={"status" in project ? project.status : undefined}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-5 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#030014] shadow-2xl md:flex-row md:rounded-3xl"
            >
              <button
                aria-label="Close project detail"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-[20] rounded-full border border-white/10 bg-black/40 p-2 transition-colors hover:bg-white/20"
              >
                <RxExit className="h-5 w-5 text-white md:h-6 md:w-6" />
              </button>

              <div className="relative h-48 w-full shrink-0 overflow-hidden bg-[#030014] sm:h-56 md:h-auto md:w-1/2">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 md:hover:scale-105"
                />
                {"status" in selectedProject && selectedProject.status && (
                  <span className="absolute left-4 top-4 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-xs">
                    {selectedProject.status}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-50 md:opacity-20" />
              </div>

              <div className="w-full overflow-y-auto p-5 sm:p-6 md:w-1/2 md:p-10">
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <h2 className="mb-2 pr-10 text-2xl font-bold text-white md:text-3xl">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.split(", ").map((tech) => (
                        <span key={tech} className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-purple-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400">Overview</h3>
                      <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                        {t(selectedProject.fullDescriptionKey as TranslationKey)}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-purple-400">Key Features</h3>
                      <ul className="mt-2 space-y-2">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-400">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 border-t border-white/5 pt-5 md:pt-6">
                    {selectedProject.link ? (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-5 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 md:px-6 md:text-base"
                      >
                        🌐 {language === "en" ? "Live Project" : "Lihat Proyek"}
                      </a>
                    ) : "status" in selectedProject && selectedProject.status ? (
                      <span className="flex-1 cursor-not-allowed rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-center text-xs font-semibold text-cyan-200 md:px-6 md:text-sm">
                        🚧 {language === "en" ? "Currently In Development" : "Sedang Dalam Pengembangan"}
                      </span>
                    ) : (
                      <span className="flex-1 cursor-not-allowed rounded-xl border border-white/10 px-5 py-3 text-center text-xs font-semibold text-gray-500 md:px-6 md:text-sm">
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
