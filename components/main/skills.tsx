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

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="flex flex-col items-center justify-center gap-3 h-full relative py-20"
    >
      <AsciiIndonesia opacity={0.25} isTop={true} />

      <div className="z-[10] w-full max-w-[1200px] px-6 md:px-20 flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full flex flex-col items-center justify-center"
        >
          <SkillText />
        </motion.div>

        <h3 className="text-lg font-semibold text-purple-400 mt-6 mb-2 tracking-wide">
          Backend Development & Frameworks
        </h3>
        <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
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
        <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center w-full max-w-[900px]">
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
              className="px-4 py-2 text-sm rounded-full bg-[#7042f815] border border-[#7042f88b] text-purple-300 hover:bg-[#7042f830] transition-all"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
          Frontend Development & UI/UX
        </h3>
        <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
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
        <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center w-full max-w-[900px]">
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
              className="px-4 py-2 text-sm rounded-full bg-[#7042f815] border border-[#7042f88b] text-purple-300 hover:bg-[#7042f830] transition-all"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
          Database Management
        </h3>
        <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
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
        <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center w-full max-w-[900px]">
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
              className="px-4 py-2 text-sm rounded-full bg-[#0d948815] border border-[#0d94888b] text-cyan-300 hover:bg-[#0d948830] transition-all"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
          Tools, DevOps & Productivity
        </h3>
        <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
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
        <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center w-full max-w-[900px]">
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
              className="px-4 py-2 text-sm rounded-full bg-[#7042f815] border border-[#7042f88b] text-purple-300 hover:bg-[#7042f830] transition-all"
            >
              {tool}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
          Specialized Libraries & Packages
        </h3>
        <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center w-full max-w-[900px]">
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
              className="px-4 py-2 text-sm rounded-full bg-[#7042f815] border border-[#7042f88b] text-purple-300 hover:bg-[#7042f830] transition-all"
            >
              {lib}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
          IT Support & Infrastructure
        </h3>
        <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
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
        <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center w-full max-w-[900px]">
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
              className="px-4 py-2 text-sm rounded-full bg-[#f5a62315] border border-[#f5a6238b] text-amber-300 hover:bg-[#f5a62330] transition-all"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
          Office Productivity & Business Tools
        </h3>
        <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
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

        <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
          Domain Expertise, Certifications & Professional Skills
        </h3>
        <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center w-full max-w-[900px]">
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
              className="px-4 py-2 text-sm rounded-full bg-[#0d948815] border border-[#0d94888b] text-cyan-300 hover:bg-[#0d948830] transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-1] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};