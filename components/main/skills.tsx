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
import { AsciiIndonesia } from "@/components/sub/ascii_indonesia";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative py-20"
    >
      {/* National Ambient Background positioned to bridge Between AboutMe and Skills */}
      <AsciiIndonesia opacity={0.25} isTop={true} />

      <SkillText />

      {/* Category: Backend Development & Frameworks */}
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
      <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center max-w-[800px]">
        {["RESTful API Integration"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm rounded-full bg-[#7042f815] border border-[#7042f88b] text-purple-300 hover:bg-[#7042f830] transition-all"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Category: Frontend Development & UI/UX */}
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

      {/* Category: Database Management */}
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

      {/* Category: Tools & DevOps */}
      <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
        Tools & DevOps
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
      <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center max-w-[800px]">
        {["Laragon", "Draw.io", "Antigravity AI"].map((tool) => (
          <span
            key={tool}
            className="px-4 py-2 text-sm rounded-full bg-[#7042f815] border border-[#7042f88b] text-purple-300 hover:bg-[#7042f830] transition-all"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Category: Specialized Libraries (text-based) */}
      <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
        Specialized Libraries & Packages
      </h3>
      <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center max-w-[800px]">
        {[
          "FilamentPHP v3", "FPDF", "DOMPDF", "Laravel-Excel", "Spatie Permission",
          "Eloquent ORM", "Blade Template", "Middleware",
          "OwlCarousel", "SB Admin 2",
        ].map((lib) => (
          <span
            key={lib}
            className="px-4 py-2 text-sm rounded-full bg-[#7042f815] border border-[#7042f88b] text-purple-300 hover:bg-[#7042f830] transition-all"
          >
            {lib}
          </span>
        ))}
      </div>

      {/* Category: IT Support & Infrastructure — icons + badges */}
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
      <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center max-w-[900px]">
        {[
          "🖧 Network Troubleshooting (LAN/WAN)",
          "🖥️ Hardware Maintenance & Repair",
          "🛡️ Endpoint Security & Antivirus",
          "🖨️ Printer & Peripheral Setup",
          "📡 Router & Switch Configuration",
          "📹 CCTV System Monitoring",
          "🔌 Cabling & Network Infrastructure",
          "☁️ Cloud Computing (AWS Academy)",
          "🗄️ Server & Workstation Management",
          "🔧 Software Installation & Licensing",
          "📞 IT Helpdesk & User Support",
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm rounded-full bg-[#f5a62315] border border-[#f5a6238b] text-amber-300 hover:bg-[#f5a62330] transition-all"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Category: Office Productivity & Business Tools — icons */}
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
      <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center max-w-[900px]">
        {/* Laragon, Draw.io etc. could go here if needed as badges, but the user specifically asked for Office icons back */}
      </div>

      {/* Category: Soft Skills & Domain Expertise */}
      <h3 className="text-lg font-semibold text-purple-400 mt-8 mb-2 tracking-wide">
        Domain Expertise & Soft Skills
      </h3>
      <div className="flex flex-row justify-center flex-wrap mt-2 gap-3 items-center max-w-[800px]">
        {[
          "🏦 Sharia Banking IT Systems",
          "📊 Core Banking System (CBS)",
          "📋 OJK Compliance & Reporting",
          "🔄 Digital Transformation",
          "⚡ Performance Optimization",
          "🔒 Role-Based Access Control (RBAC)",
          "🧪 Quality Assurance (UAT)",
          "🏃 Agile Methodology",
          "🎤 Effective Communication",
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm rounded-full bg-[#0d948815] border border-[#0d94888b] text-cyan-300 hover:bg-[#0d948830] transition-all"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="w-full h-full absolute overflow-hidden">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
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
