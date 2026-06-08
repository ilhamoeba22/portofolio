"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  SKILL_DATA,
  OFFICE_SKILL,
  IT_SUPPORT_SKILL,
} from "@/constants";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AsciiIndonesia } from "@/components/sub/ascii_indonesia";

const badgeClass = "px-4 py-2 text-sm rounded-full transition-all";

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-20"
    >
      <AsciiIndonesia opacity={0.18} isTop={true} />

      <div className="z-[10] flex w-full max-w-[1200px] flex-col items-center px-5 sm:px-6 md:px-20">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex w-full flex-col items-center justify-center"
        >
          <SkillText />
        </motion.div>

        <h3 className="mt-6 mb-2 text-center text-lg font-semibold tracking-wide text-purple-400">
          Backend Development & Frameworks
        </h3>
        <div className="mt-2 flex flex-row flex-wrap items-center justify-around gap-5">
          {SKILL_DATA.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        <div className="mt-2 flex w-full max-w-[900px] flex-row flex-wrap items-center justify-center gap-3">
          {[
            "Laravel 11",
            "CodeIgniter",
            "RESTful API Development",
            "API Integration",
            "Middleware Architecture",
            "Eloquent ORM",
            "Blade Template",
            "Authentication & Authorization",
            "Role-Based Access Control (RBAC)",
          ].map((skill) => (
            <span
              key={skill}
              className={`${badgeClass} border border-[#7042f88b] bg-[#7042f815] text-purple-300 hover:bg-[#7042f830]`}
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="mt-8 mb-2 text-center text-lg font-semibold tracking-wide text-purple-400">
          Frontend Development & UI/UX
        </h3>
        <div className="mt-2 flex flex-row flex-wrap items-center justify-around gap-5">
          {FRONTEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        <div className="mt-2 flex w-full max-w-[900px] flex-row flex-wrap items-center justify-center gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Vue.js 3",
            "Vite",
            "Tailwind CSS",
            "Bootstrap",
            "Responsive Web Design",
            "UI/UX Implementation",
          ].map((skill) => (
            <span
              key={skill}
              className={`${badgeClass} border border-[#7042f88b] bg-[#7042f815] text-purple-300 hover:bg-[#7042f830]`}
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="mt-8 mb-2 text-center text-lg font-semibold tracking-wide text-purple-400">
          Database Management
        </h3>
        <div className="mt-2 flex flex-row flex-wrap items-center justify-around gap-5">
          {BACKEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        <div className="mt-2 flex w-full max-w-[900px] flex-row flex-wrap items-center justify-center gap-3">
          {[
            "MySQL",
            "PostgreSQL",
            "Database Design",
            "Query Optimization",
            "Data Export & Reporting",
            "Read-Only Legacy Data Access",
          ].map((skill) => (
            <span
              key={skill}
              className={`${badgeClass} border border-[#0d94888b] bg-[#0d948815] text-cyan-300 hover:bg-[#0d948830]`}
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="mt-8 mb-2 text-center text-lg font-semibold tracking-wide text-purple-400">
          Tools, DevOps & Productivity
        </h3>
        <div className="mt-2 flex flex-row flex-wrap items-center justify-around gap-5">
          {FULLSTACK_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        <div className="mt-2 flex w-full max-w-[900px] flex-row flex-wrap items-center justify-center gap-3">
          {[
            "Git",
            "GitHub",
            "GitLab CI",
            "Vercel",
            "Docker",
            "AWS Academy Cloud Associate",
            "Postman",
            "Swagger/OpenAPI",
            "VS Code",
            "Laragon",
            "Draw.io",
            "AI-Assisted Development Workflow",
          ].map((tool) => (
            <span
              key={tool}
              className={`${badgeClass} border border-[#7042f88b] bg-[#7042f815] text-purple-300 hover:bg-[#7042f830]`}
            >
              {tool}
            </span>
          ))}
        </div>

        <h3 className="mt-8 mb-2 text-center text-lg font-semibold tracking-wide text-purple-400">
          Specialized Libraries & Packages
        </h3>
        <div className="mt-2 flex w-full max-w-[900px] flex-row flex-wrap items-center justify-center gap-3">
          {[
            "FilamentPHP v3",
            "Livewire",
            "Alpine.js",
            "FPDF",
            "DOMPDF",
            "Laravel-Excel",
            "Spatie Permission",
            "Sanctum",
            "Socialite",
            "PHPUnit",
            "Pint",
            "OwlCarousel",
            "SB Admin 2",
          ].map((lib) => (
            <span
              key={lib}
              className={`${badgeClass} border border-[#7042f88b] bg-[#7042f815] text-purple-300 hover:bg-[#7042f830]`}
            >
              {lib}
            </span>
          ))}
        </div>

        <h3 className="mt-8 mb-2 text-center text-lg font-semibold tracking-wide text-purple-400">
          IT Support & Infrastructure
        </h3>
        <div className="mt-2 flex flex-row flex-wrap items-center justify-around gap-5">
          {IT_SUPPORT_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
        <div className="mt-2 flex w-full max-w-[900px] flex-row flex-wrap items-center justify-center gap-3">
          {[
            "Network Troubleshooting (LAN/WAN)",
            "Hardware Maintenance",
            "Software Installation",
            "Printer & Peripheral Setup",
            "Router & Switch Configuration",
            "CCTV System Monitoring",
            "Endpoint Support",
            "Server & Workstation Management",
            "IT Helpdesk & User Support",
          ].map((skill) => (
            <span
              key={skill}
              className={`${badgeClass} border border-[#f5a6238b] bg-[#f5a62315] text-amber-300 hover:bg-[#f5a62330]`}
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="mt-8 mb-2 text-center text-lg font-semibold tracking-wide text-purple-400">
          Office Productivity & Business Tools
        </h3>
        <div className="mt-2 flex flex-row flex-wrap items-center justify-around gap-5">
          {OFFICE_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <h3 className="mt-8 mb-2 text-center text-lg font-semibold tracking-wide text-purple-400">
          Domain Expertise, Certifications & Professional Skills
        </h3>
        <div className="mt-2 flex w-full max-w-[900px] flex-row flex-wrap items-center justify-center gap-3">
          {[
            "Sharia Banking IT Systems",
            "Core Banking System (CBS)",
            "OJK Compliance & Reporting",
            "Digital Transformation",
            "Enterprise Workflow Automation",
            "Procurement Workflow",
            "UAT & Quality Assurance",
            "Agile Methodology",
            "Design Sprint",
            "Design Thinking",
            "Effective Communication",
            "Leadership",
            "Team Collaboration",
            "Problem Solving",
            "Adaptability",
          ].map((skill) => (
            <span
              key={skill}
              className={`${badgeClass} border border-[#0d94888b] bg-[#0d948815] text-cyan-300 hover:bg-[#0d948830]`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden opacity-20 lg:block">
        {inView && (
          <video
            className="h-full w-full object-cover"
            preload="metadata"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        )}
      </div>
    </section>
  );
};
