import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// ═══ A. BACKEND DEVELOPMENT & FRAMEWORKS ═══
export const SKILL_DATA = [
  {
    skill_name: "PHP",
    image: "php.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel 11",
    image: "laravel.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CodeIgniter",
    image: "codeigniter.svg",
    width: 65,
    height: 65,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/m-ilhampratama",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:muhammad.ilham.yk@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/62895390069595",
  },
] as const;

// ═══ B. FRONTEND DEVELOPMENT & UI/UX ═══
export const FRONTEND_SKILL = [
  {
    skill_name: "Vue.js 3",
    image: "vue.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Vite",
    image: "vite.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Alpine.js",
    image: "alpine.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Livewire",
    image: "livewire.svg",
    width: 70,
    height: 70,
  },
] as const;

// ═══ C. DATABASE MANAGEMENT ═══
export const BACKEND_SKILL = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
] as const;

// ═══ D. TOOLS & DEVOPS ═══
export const FULLSTACK_SKILL = [
  {
    skill_name: "Git",
    image: "git.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    image: "github.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitLab",
    image: "gitlab.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "AWS",
    image: "aws.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "VS Code",
    image: "vscode.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Laragon",
    image: "laragon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Jira",
    image: "jira.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Postman",
    image: "postman.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Swagger",
    image: "swagger.svg",
    width: 70,
    height: 70,
  },
] as const;

// ═══ E. (Not used - handled via text in component) ═══
export const OTHER_SKILL = [] as const;

// ═══ F. OFFICE PRODUCTIVITY & BUSINESS TOOLS ═══
export const OFFICE_SKILL = [
  {
    skill_name: "Microsoft Excel",
    image: "excel.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Microsoft Word",
    image: "word.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Microsoft PowerPoint",
    image: "powerpoint.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Canva",
    image: "canva.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

// ═══ G. IT SUPPORT & INFRASTRUCTURE ═══
export const IT_SUPPORT_SKILL = [
  {
    skill_name: "Windows",
    image: "windows.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Linux",
    image: "linux.svg",
    width: 65,
    height: 65,
  },
] as const;

export const PROJECTS = [
  {
    title: "BPRS Front Office System",
    descriptionKey: "project_bprs_fo_desc",
    fullDescriptionKey: "project_bprs_fo_full",
    features: [
      "Kiosk-based E-Form submission (Deposit, Withdrawal, Transfer)",
      "Real-time Teller Panel with zero-lag SPA architecture",
      "Automated Voice Notification system for TV displays",
      "Precision FPDF-generated print engine for physical slip overlays",
      "Middleware API integration for core banking connectivity"
    ],
    image: "/projects/bprs-front-office.png",
    link: "https://mcifrontoffice.bprshikmciyk.co.id/",
    tech: "Laravel 11, Vue.js 3, Vite, Bootstrap, FPDF",
  },
  {
    title: "BPRS Procurement System",
    descriptionKey: "project_bprs_proc_desc",
    fullDescriptionKey: "project_bprs_proc_full",
    features: [
      "Multi-tier Approval Engine with hierarchical permission mapping",
      "Automated Limit of Authority (LoA) detection for executive signing",
      "Budget Validation & Real-time expenditure tracking",
      "Competitor Survey & Price Comparison engine",
      "QR Code authenticated payment orders with DOMPDF",
      "Fine-grained RBAC using Spatie Permissions"
    ],
    image: "/projects/bprs-procurement.png",
    link: null,
    tech: "Laravel 11, FilamentPHP v3, TALL Stack, MySQL, DOMPDF",
    isPrivate: true,
  },
  {
    title: "BPRS Portal & CMS",
    descriptionKey: "project_bprs_portal_desc",
    fullDescriptionKey: "project_bprs_portal_full",
    features: [
      "Real-time Profit-Sharing Simulator for Deposito products",
      "Secure Financial Transparency module for OJK PDF reports",
      "Responsive Content Management System (CMS) for bank news",
      "Advanced XSS and CSRF security hardening",
      "Optimized Read-Heavy architecture for high-traffic stability"
    ],
    image: "/projects/bprs-portal.png",
    link: "https://bprshikmciyk.co.id/",
    tech: "Laravel 11, FilamentPHP v3, Bootstrap, OwlCarousel",
  },
  {
    title: "The Evidence - Archive Extractor",
    descriptionKey: "project_evidence_desc",
    fullDescriptionKey: "project_evidence_full",
    features: [
      "Read-Only Immutable security mode for absolute data integrity",
      "Bulk extraction of General Ledger, Profit & Loss, and Account Statements",
      "High-performance Excel export for massive datasets (Laravel-Excel)",
      "Legacy CBS integration using air-gapped compliance standards",
      "Audit-ready PDF generation with Snappy/DOMPDF"
    ],
    image: "/projects/the-evidence.png",
    link: null,
    tech: "Laravel 11, Bootstrap, SB Admin 2, Laravel-Excel, Snappy/DOMPDF",
    isPrivate: true,
  },
  {
    title: "BPRS RIPLAY System",
    descriptionKey: "project_riplay_desc",
    fullDescriptionKey: "project_riplay_full",
    features: [
      "Secure Routing with AES-256 level encryption parameters",
      "File Upload Mutation Sanitization to block malicious payloads",
      "OJK Compliance reporting audit trail",
      "High-availability architecture optimized for heavy concurrent access",
      "Seamless Blade Template Integration with optimized database indexing"
    ],
    image: "/projects/bprs-riplay.png",
    link: "https://riplay.bprshikmciyk.co.id/",
    tech: "Laravel 11, FilamentPHP v3, Blade Template, MySQL",
  },
  {
    title: "ECC Online Personal Assessment",
    descriptionKey: "project_ecc_desc",
    fullDescriptionKey: "project_ecc_full",
    features: [
      "RESTful API with Swagger/OpenAPI Documentation",
      "JWT & Laravel Sanctum Authentication",
      "Automated Testing (PHPUnit) & Code Quality (Pint/Rector)",
      "CI/CD Pipeline integration with GitLab CI",
      "PostgreSQL-backed high-performance database schema"
    ],
    image: "/projects/ecc-assessment.png",
    link: "https://opaecc.ecc.co.id/",
    tech: "Laravel 10, PHP 8.2, PostgreSQL 15, JWT, Swagger, GitLab CI",
    isPrivate: true,
  },
  {
    title: "Lost And Found System PT KAI Daop 6 Yogyakarta",
    descriptionKey: "project_new_lostnfound_desc",
    fullDescriptionKey: "project_new_lostnfound_full",
    features: [
      "Social OAuth (Google, GitHub, Facebook) via Socialite",
      "RESTful API endpoints with Sanctum Authentication",
      "Automated QR Code generation for item tracking",
      "Mobile-responsive UI with Tailwind CSS & Vite",
      "Production-ready deployment on Railway.app"
    ],
    image: "/projects/lost-found-kai.png",
    link: null,
    tech: "Laravel 9, PHP 8, Tailwind CSS, Vite, PostCSS",
    isPrivate: true,
  },
  {
    title: "PTJIM Corporate Ecosystem",
    descriptionKey: "project_ptjim_desc",
    fullDescriptionKey: "project_ptjim_full",
    features: [
      "Mining & Vehicle Testing Technical Hub",
      "Progressive Web App (PWA) for Industrial Use",
      "Real-time Analytics Dashboard for Partners",
      "Dynamic Multi-language Support (EN/ID)",
      "Optimized Asset Bundling with Laravel 11 & Vite"
    ],
    image: "/projects/ptjim-cover.png",
    link: "https://www.ptjim.co.id/",
    tech: "Laravel 11, PHP 8.2, PWA, Google Translate API, Vite, MySQL",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/m-ilhampratama",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://wa.me/62895390069595",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: FaEnvelope,
        link: "mailto:muhammad.ilham.yk@gmail.com",
      },
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "My Projects",
        icon: null,
        link: "#projects",
      },
    ],
  },
  {
    title: "Location",
    data: [
      {
        name: "Sleman, Yogyakarta",
        icon: null,
        link: "#contact",
      },
      {
        name: "Indonesia",
        icon: null,
        link: "#contact",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://linkedin.com/in/m-ilhampratama",
};

export const EXPERIENCES = [
  {
    company: "PT BPRS HIK MCI",
    roleKey: "exp_hik_role",
    period: "Oct 2024 - Present",
    descriptionKeys: [
      "exp_hik_desc1",
      "exp_hik_desc2",
      "exp_hik_desc3",
      "exp_hik_desc4",
      "exp_hik_desc5",
    ],
  },
  {
    company: "PT. JIM",
    roleKey: "exp_jim_role",
    period: "Apr 2024 - May 2024",
    descriptionKeys: [
      "exp_jim_desc1",
      "exp_jim_desc2",
      "exp_jim_desc3",
    ],
  },
  {
    company: "PT Baracipta Esa Engineering",
    roleKey: "exp_msib_ecc_role",
    period: "Aug 2023 - Dec 2023",
    descriptionKeys: [
      "exp_msib_ecc_desc1",
      "exp_msib_ecc_desc2",
      "exp_msib_ecc_desc3",
      "exp_msib_ecc_desc4",
    ],
  },
  {
    company: "SEAL (Social Economy Accelerator Lab)",
    roleKey: "exp_seal_role",
    period: "Aug 2022 - Dec 2022",
    descriptionKeys: [
      "exp_seal_desc1",
      "exp_seal_desc2",
      "exp_seal_desc3",
      "exp_seal_desc4",
      "exp_seal_desc5",
    ],
  },
  {
    company: "PT. Paragon Technology and Innovation",
    roleKey: "exp_paragon_role",
    period: "Jul 2019 - Dec 2019",
    descriptionKeys: [
      "exp_paragon_desc1",
      "exp_paragon_desc2",
      "exp_paragon_desc3",
      "exp_paragon_desc4",
      "exp_paragon_desc5",
    ],
  },
] as const;

export const EDUCATION = {
  degree: "Bachelor of Computer Science (S1) - Informatics",
  university: "Universitas Teknologi Digital Indonesia",
  period: "Sep 2020 - Feb 2024",
  certifications: [
    {
      name: "Java Programming Fundamentals",
      issuer: "Dicoding Academy",
      validity: "Valid until Jan 2027",
    },
    {
      name: "Agile Execution",
      issuer: "PT Baracipta Esa Engineering",
      validity: "Certified",
    },
    {
      name: "Effective Communication",
      issuer: "PT Baracipta Esa Engineering",
      validity: "Certified",
    },
    {
      name: "Powerful Delivery",
      issuer: "PT Baracipta Esa Engineering",
      validity: "Certified",
    },
    {
      name: "AWS Academy Cloud Associate",
      issuer: "AWS Academy",
      validity: "Certified",
    },
    {
      name: "MBKM - Full Stack Developer",
      issuer: "Kampus Merdeka",
      validity: "Certified",
    },
  ],
} as const;
