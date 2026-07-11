import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  MapPin,
  GraduationCap,
  Briefcase,
  Users,
  Building2,
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  Database,
  BarChart3,
  Map as MapIcon,
  Brain,
  Code2,
  Eye,
  Moon,
  Heart,
  Menu,
  X,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Hero3D from "@/components/Hero3D";
import { Reveal } from "@/components/Reveal";
import { ProjectModal } from "@/components/ProjectModal";
import { Lightbox } from "@/components/Lightbox";
import { projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jihan Nabilah Rahman — Data Analyst & Business Analyst" },
      { name: "description", content: "Portfolio interaktif: Data Analytics, BI Dashboards, GIS, dan People Analytics — Mahasiswa Sistem Informasi Universitas Bakrie." },
      { property: "og:title", content: "Jihan Nabilah Rahman — Data & Business Analyst" },
      { property: "og:description", content: "Portfolio 3D interaktif dengan dashboard BI, WebGIS, dan studi kasus analitik." },
    ],
  }),
  component: Index,
});

const contactLinks = {
  email: "mailto:jihannabilah624@gmail.com",
  linkedin: "https://www.linkedin.com/in/jihan-nabilah-057318357",
  github: "https://github.com/Jihanablh",
} as const;

const stats = [
  { value: "15+", label: "Projects Completed", color: "text-cyan" },
  { value: "10+", label: "Certifications", color: "text-magenta" },
  { value: "3.72", label: "GPA / IPK", color: "text-violet" },
  { value: "4+", label: "Organizations", color: "text-lime" },
];

const experiences: ExperienceItem[] = [
  {
    role: "Junior Data Analyst",
    org: "PT Vinix Seven Aurum - MSIB Mandiri Batch 4",
    location: "Yogyakarta, Indonesia (Remote)",
    period: "Feb 2026 - Jun 2026",
    status: "Completed",
    icon: Database,
    accent: "from-cyan-400/30 to-blue-500/10",
    impact: [
      "Conducted end-to-end data collection, cleaning, and validation on multi-source datasets, resolving missing values and anomalies to ensure analysis-ready data integrity.",
      "Performed EDA, regression, and clustering analysis in Python and Excel to identify career-readiness patterns among Indonesian university students.",
      "Designed and executed a national survey and sentiment analysis, translating unstructured responses into structured, actionable insights.",
      "Built interactive dashboards in Power BI and Google Data Studio to support stakeholder decision-making.",
      'Presented final analysis to industry mentors, earning a 95/100 evaluation score for the "Proyek Berdampak" capstone project.',
    ],
    tags: [
      "Excel",
      "Python",
      "Power BI",
      "Google Data Studio",
      "EDA",
    ],
  },
  {
    role: "Asisten Dosen Sistem Operasi",
    org: "Universitas Bakrie",
    period: "Sep 2025 - Jan 2026",
    status: "Completed",
    icon: Code2,
    accent: "from-fuchsia-400/30 to-purple-500/10",
    impact: [
      "Mengkoordinasikan sesi praktikum mingguan untuk 60+ mahasiswa.",
      "Instalasi dan troubleshooting Linux (Debian) serta Windows VM.",
      "Mengembangkan modul pembelajaran interaktif dan evaluasi tugas akhir.",
    ],
    tags: [
      "Linux",
      "Bash",
      "VMware",
      "Operating Systems",
      "Troubleshooting",
    ],
  },
  {
    role: "Teaching Assistant - Information Systems Analysis & Design",
    org: "Universitas Bakrie",
    period: "Mar 2026 - Jul 2026",
    icon: GraduationCap,
    accent: "from-pink-400/30 to-fuchsia-500/10",
    impact: [
      "Delivered instruction to 55+ students in a single course section, covering UML (Use Case, Activity, Sequence, Class Diagrams), ERD, flowcharting, and UI/UX prototyping in Figma.",
      "Guided student teams through end-to-end system analysis and design projects, providing consultation and structured feedback on prototypes.",
      "Authored practicum modules and grading rubrics in collaboration with course lecturers.",
    ],
    tags: [
      "UML",
      "ERD",
      "Figma",
      "System Analysis",
      "Prototyping",
    ],
  },
  {
    role: "Human Resource & Network Staff",
    org: "IEEE Student Branch Universitas Bakrie",
    period: "Mar 2025 - Jun 2026",
    status: "Completed",
    icon: Users,
    accent: "from-violet-400/30 to-indigo-500/10",
    impact: [
      "Memimpin rekrutmen end-to-end dari screening sampai onboarding.",
      "Merancang program up-skilling dan soft-skill yang meningkatkan retensi.",
      "Menginisiasi sistem administrasi HR berbasis KPI.",
    ],
    tags: [
      "Talent Acquisition",
      "People Analytics",
      "HR Operations",
      "Leadership",
    ],
  },
  {
    role: "Humas (Public Relations)",
    org: "Karang Taruna Cikoko",
    period: "Jan 2025 - Present",
    icon: Building2,
    accent: "from-emerald-400/30 to-teal-500/10",
    impact: [
      "Strategi komunikasi digital dan branding visual yang konsisten.",
      "Mengelola hubungan eksternal dan negosiasi kemitraan sponsor.",
      "Manajemen krisis komunikasi dan publikasi acara.",
    ],
    tags: [
      "Public Relations",
      "Branding",
      "Stakeholder Management",
      "Event Marketing",
    ],
  },
];

const gallery = [
  "https://jihannabilah.vercel.app/images_projects_gis_analyst/webgisyogya_dashboard.png",
  "https://jihannabilah.vercel.app/images_projects_gis_analyst/webgisyogya_peta.png",
  "https://jihannabilah.vercel.app/images_project_digital_product/barangbareng.png",
  "https://jihannabilah.vercel.app/images_projects_gis_analyst/layout_servicesarea_umbulharjo.png",
  "https://jihannabilah.vercel.app/images_projects_gis_analyst/layout_kerawananlongsor_bandung.png",
  "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Gojek/Dashboard_BI_Gojek.png",
  "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Gojek/Data_BI_Gojek.png",
  "https://jihannabilah.vercel.app/images_projects_data_analyst/BI_Global/Dashboard_BI_Global.png",
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    items: [
      "Power BI",
      "Microsoft Excel",
      "Google Data Studio",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
  },
  {
    title: "Methods",
    icon: Brain,
    items: [
      "Data Cleaning",
      "Statistical Analysis",
      "EDA",
      "K-Means Clustering",
      "Regression Analysis",
      "Random Forest",
      "A/B Testing",
    ],
  },
  {
    title: "Spatial & Systems",
    icon: MapIcon,
    items: ["QGIS", "WebGIS", "Spatial Analysis", "System Analysis"],
  },
];

const marqueeRow1 = [
  "Python",
  "SQL",
  "Power BI",
  "Microsoft Excel",
  "Google Data Studio",
  "EDA",
  "Regression Analysis",
  "Data Cleaning",
  "Random Forest",
];

const marqueeRow2 = [
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "QGIS",
  "WebGIS",
  "Spatial Analysis",
  "K-Means Clustering",
  "A/B Testing",
  "System Analysis",
];

const sectionIds = ["home", "about", "experience", "projects", "case-studies", "gallery", "skills", "contact"];

type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  period: string;
  status?: "Completed";
  icon: LucideIcon;
  accent: string;
  impact: string[];
  tags: string[];
};

function useScrollSpy() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

type ThemeMode = "dark" | "pink";

function useTheme(): [ThemeMode, (m: ThemeMode) => void] {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  useEffect(() => {
    const saved = (localStorage.getItem("hero-theme") as ThemeMode | null) ?? "dark";
    setThemeState(saved);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-pink", theme === "pink");
  }, [theme]);
  const setTheme = (m: ThemeMode) => {
    setThemeState(m);
    localStorage.setItem("hero-theme", m);
  };
  return [theme, setTheme];
}

function ThemeToggle({ theme, setTheme }: { theme: ThemeMode; setTheme: (m: ThemeMode) => void }) {
  const isPink = theme === "pink";
  return (
    <button
      onClick={() => setTheme(isPink ? "dark" : "pink")}
      aria-label={`Switch to ${isPink ? "dark" : "pink"} mode`}
      className="relative inline-flex h-8 items-center gap-1.5 rounded-full glass px-2.5 text-xs font-medium text-foreground transition-colors hover:bg-white/10"
      title={isPink ? "Switch to dark mode" : "Switch to pink mode"}
    >
      {isPink ? <Heart className="h-3.5 w-3.5 text-magenta" /> : <Moon className="h-3.5 w-3.5 text-cyan" />}
      <span className="hidden sm:inline">{isPink ? "Pink" : "Dark"}</span>
    </button>
  );
}

function Nav({ theme, setTheme }: { theme: ThemeMode; setTheme: (m: ThemeMode) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "case-studies", label: "Case Studies" },
    { id: "gallery", label: "Gallery" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <nav className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong shadow-[var(--shadow-elevated)]" : "glass"}`}>
          <a href="#home" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gradient-aurora)] text-[color:var(--primary-foreground)]">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>Jihan<span className="text-aurora">.</span></span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-foreground/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <a href="#contact" className="hidden rounded-full bg-foreground/95 px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] sm:inline-flex">
              Hire me
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-2 rounded-2xl glass-strong p-4 shadow-[var(--shadow-elevated)] md:hidden"
        >
          <div className="grid gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === l.id ? "bg-foreground/10 text-foreground" : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-[var(--gradient-aurora)] px-4 py-3 text-center text-sm font-semibold text-[color:var(--primary-foreground)]"
            >
              Hire me
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Hero({ theme }: { theme: ThemeMode }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <motion.div style={{ y, opacity }} className="pointer-events-none absolute inset-0">
        <Hero3D theme={theme} />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          Data Analyst · Business Analyst · People Analytics
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-7xl md:text-8xl"
        >
          <span className="block">Jihan Nabilah</span>
          <span className="block text-aurora">Rahman</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Mahasiswa Sistem Informasi yang mengubah data kompleks jadi keputusan bisnis cerdas — lewat
          <span className="text-foreground"> Data Analytics</span>,
          <span className="text-foreground"> Business Intelligence</span>, dan
          <span className="text-foreground"> UI/UX Thinking</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105">
            View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10">
            About Me
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10">
            <FileText className="h-4 w-4" /> CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4 text-muted-foreground"
        >
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          <span className="h-px w-8 bg-border" />
          <a href={contactLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground"><Github className="h-5 w-5" /></a>
          <span className="h-px w-8 bg-border" />
          <a href={contactLinks.email} aria-label="Email" className="transition-colors hover:text-foreground"><Mail className="h-5 w-5" /></a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="group relative overflow-hidden rounded-2xl glass-strong p-5 text-left transition-all hover:-translate-y-1 hover:bg-white/[0.09]">
              <div className={`font-display text-3xl font-bold ${s.color}`}>{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--gradient-aurora)] opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <Reveal>
      <div className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-cyan" /> {eyebrow}
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h2>
        {desc && <p className="mt-4 max-w-2xl text-muted-foreground">{desc}</p>}
      </div>
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="About Me" title="Hi, I'm Jihan — Aspiring Data & Business Analyst" />
        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="rounded-3xl glass-strong p-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Jakarta, Indonesia
              </div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/90">
                Saya mahasiswa semester 6 <span className="text-aurora font-semibold">Sistem Informasi</span> di
                Universitas Bakrie, dengan minat kuat pada analisis data dan menerjemahkan insight menjadi
                strategi bisnis yang berdampak.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Saya telah menyelesaikan program{" "}
                <span className="text-foreground">Junior Data Analyst</span> di
                PT Vinix Seven Aurum melalui MSIB Mandiri Batch 4, dengan fokus pada
                data collection, cleaning, validation, EDA, regression, clustering,
                sentiment analysis, serta pengembangan dashboard interaktif. Saya juga
                memiliki pengalaman mengajar sebagai{" "}
                <span className="text-foreground">Teaching Assistant</span> dan
                pengalaman organisasi melalui IEEE Student Branch Universitas Bakrie
                serta Karang Taruna Cikoko.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Data Analysis", "Business Intelligence", "People Analytics", "UI/UX Thinking"].map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/80">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:col-span-2">
            <Reveal delay={0.1}>
              <div className="rounded-3xl glass p-6">
                <GraduationCap className="h-6 w-6 text-cyan" />
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Education</div>
                <div className="mt-1 font-display text-xl font-semibold">Universitas Bakrie</div>
                <div className="text-sm text-muted-foreground">S1 — Sistem Informasi</div>
                <div className="mt-3 text-sm text-foreground/80">Focus: Data Analysis & Business Intelligence</div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-xs text-cyan">
                  High Distinction · GPA 3.72
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl glass p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-magenta/20 blur-3xl" />
                <Briefcase className="h-6 w-6 text-magenta" />
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Available · Open for</div>
                <div className="mt-1 font-display text-xl font-semibold">Data Analyst & Business Analyst Roles</div>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-magenta">
                  Let's collaborate <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience & Leadership"
          title="Building impact through data & people"
          desc="From data analytics internships to academic teaching and HR analytics leadership — a track record of turning structured thinking into measurable results."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-cyan/40 via-magenta/30 to-transparent md:block" />
          <div className="space-y-6">
            {experiences.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.05}>
                <div className="group relative md:pl-16">
                  <div className="absolute left-0 top-6 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full glass-strong md:flex">
                    <e.icon className="h-4 w-4 text-cyan" />
                  </div>
                  <div className="relative overflow-hidden rounded-3xl glass-strong p-8 transition-all hover:-translate-y-1 hover:border-white/20">
                    <div className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${e.accent} blur-3xl opacity-60`} />
                    <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                      <div className="min-w-0">
                        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{e.period}</div>
                        <h3 className="mt-2 font-display text-2xl font-semibold">{e.role}</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span>{e.org}</span>

                          {e.location && (
                            <>
                              <span aria-hidden="true">•</span>
                              <span>{e.location}</span>
                            </>
                          )}

                          {e.status && (
                            <span className="rounded-full bg-lime/10 px-2.5 py-0.5 text-xs font-medium text-lime">
                              {e.status}
                            </span>
                          )}
                        </div>                        
                      </div>
                      <e.icon className="h-6 w-6 shrink-0 text-foreground/40 md:hidden" />
                    </div>
                    <ul className="relative mt-6 space-y-2">
                      {e.impact.map((line) => (
                        <li key={line} className="flex gap-3 text-sm text-foreground/80">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div className="relative mt-5 flex flex-wrap gap-1.5">
                      {e.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground/70">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const highlight = p.highlight;

  return (
    <div className="group relative h-full overflow-hidden rounded-3xl glass-strong transition-all hover:-translate-y-2 hover:border-cyan/30 hover:shadow-[0_0_40px_-8px_oklch(0.85_0.16_200/0.35)]">
      <button onClick={onOpen} className="block w-full text-left">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs">
            <p.icon className="h-3 w-3 text-cyan" /> {p.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-aurora">{p.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
          {highlight && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
              <TrendingUp className="h-3.5 w-3.5" />
              {highlight}
            </div>
          )}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-foreground/70">{t}</span>
            ))}
          </div>
        </div>
      </button>
      <div className="flex flex-wrap items-center gap-2 px-6 pb-6">
        <button onClick={onOpen} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:bg-white/10">
          <Eye className="h-3 w-3" /> Case Study
        </button>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e: MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-aurora)] px-3 py-1.5 text-xs font-semibold text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105"
          >
            Live Demo <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}

function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  const featured = projects.find((p) => p.featured) ?? projects[0];

  if (!featured) return null;

  const featuredHighlight = featured.highlight;
  const rest = projects.filter((p) => p.slug !== featured.slug);

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Selected Work"
          title="Best project & analytical showcase"
          desc="Highlight project terbaik dan selected work lintas data analysis, business intelligence, GIS, dan digital product."
        />

        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl glass-strong transition-all hover:border-cyan/30 hover:shadow-[0_0_50px_-10px_oklch(0.85_0.16_200/0.4)]">
            <div className="grid md:grid-cols-2">
              <button onClick={() => onOpen(featured)} className="relative block aspect-[16/11] overflow-hidden text-left md:aspect-auto">
                <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/0 to-background/0" />
              </button>
              <div className="relative p-8 md:p-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                  <Sparkles className="h-3 w-3" /> Best Project · Featured Case Study
                </div>
                <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{featured.title}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{featured.category}</div>
                <p className="mt-4 text-foreground/80">{featured.desc}</p>
                {featuredHighlight && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1.5 text-sm font-semibold text-lime">
                    <TrendingUp className="h-4 w-4" />
                    {featuredHighlight}
                  </div>
                )}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: "01", t: "Spatial Data", d: "Peta, statistik, dan ringkasan wilayah." },
                    { k: "02", t: "Business Insight", d: "Pembacaan kondisi wilayah lebih cepat." },
                    { k: "03", t: "Decision Support", d: "Informasi terstruktur & interaktif." },
                  ].map((c) => (
                    <div key={c.k} className="rounded-xl bg-white/5 p-3">
                      <div className="font-mono text-xs text-cyan">{c.k}</div>
                      <div className="mt-1 text-sm font-semibold">{c.t}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{c.d}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <button onClick={() => onOpen(featured)} className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10">
                    <Eye className="h-4 w-4" /> Open Case Study
                  </button>
                  {featured.live && (
                    <a href={featured.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-5 py-2.5 text-sm font-semibold text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105">
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProjectCard p={p} onOpen={() => onOpen(p)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies({ onOpen }: { onOpen: (p: Project) => void }) {
  const top = useMemo(() => {
    const priorities = ["webgis", "barangbareng", "gofood"];
    const selected = priorities
      .map((keyword) =>
        projects.find((project) =>
          `${project.slug} ${project.title}`.toLowerCase().includes(keyword),
        ),
      )
      .filter((project): project is Project => Boolean(project));

    if (selected.length === priorities.length) return selected;

    const selectedSlugs = new Set(selected.map((project) => project.slug));
    const fallback = projects.filter((project) => !selectedSlugs.has(project.slug));

    return [...selected, ...fallback].slice(0, 3);
  }, []);

  return (
    <section id="case-studies" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Case Studies"
          title="Data-driven & business-oriented deep dives"
          desc="Setiap studi kasus disusun dengan kerangka Business Problem → Objective → Data → Approach → Insight → Recommendation → Impact."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {top.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <button
                onClick={() => onOpen(p)}
                className="group block h-full w-full rounded-3xl glass-strong p-6 text-left transition-all hover:-translate-y-1 hover:border-magenta/30 hover:shadow-[0_0_40px_-8px_oklch(0.72_0.26_330/0.35)]"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  <p.icon className="h-3.5 w-3.5 text-magenta" /> {p.category}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold transition-colors group-hover:text-aurora">{p.title}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-magenta/80">Problem</div>
                    <p className="mt-0.5 line-clamp-2 text-foreground/80">{p.caseStudy.problem}</p>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-cyan/80">Insight</div>
                    <p className="mt-0.5 line-clamp-2 text-foreground/80">{p.caseStudy.insight}</p>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-lime/80">Impact</div>
                    <p className="mt-0.5 line-clamp-2 text-foreground/80">{p.caseStudy.impact}</p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-foreground/80 transition-colors group-hover:text-cyan">
                  Read full case study <ArrowUpRight className="h-3 w-3" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <section id="gallery" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Visual Archive"
          title="Dashboards & systems gallery"
          desc="Galeri ringkas dari dashboard, layout spasial, dan visual BI."
        />
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 0.05}>
              <button
                onClick={() => onOpen(src)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl glass transition-all hover:border-cyan/30 hover:shadow-[0_0_30px_-8px_oklch(0.85_0.16_200/0.35)]"
              >
                <div className="relative overflow-hidden">
                  <img src={src} alt="Gallery item" loading="lazy" className="h-auto w-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max gap-10 whitespace-nowrap font-display text-2xl font-semibold text-foreground/30 sm:text-3xl"
        style={{ animation: `marquee ${reverse ? "50s" : "40s"} linear infinite${reverse ? " reverse" : ""}` }}
      >
        {[...items, ...items].map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            {s}
            <span className="h-1.5 w-1.5 rounded-full bg-cyan/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Stack, tools & analytical methods"
          desc="Pandangan menyeluruh dari bahasa teknis, platform analitik, hingga metode kerja berorientasi bisnis."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="group h-full rounded-3xl glass-strong p-6 transition-all hover:-translate-y-1 hover:border-cyan/30">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-aurora)] text-[color:var(--primary-foreground)]">
                  <g.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold">{g.title}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span key={it} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground/80 transition-colors hover:bg-white/10 hover:text-foreground">{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-20 space-y-4 border-y border-border/60 py-8">
        <MarqueeRow items={marqueeRow1} />
        <MarqueeRow items={marqueeRow2} reverse />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-10 sm:p-16">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan/30 blur-3xl" />
            <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-magenta/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-lime" /> Let's connect
              </div>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-6xl">
                Got a data problem? <br />
                <span className="text-aurora">Let's solve it together.</span>
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Saya terbuka untuk peluang sebagai Data Analyst, Business Analyst, atau People Analytics.
                Ayo ngobrol soal projek, magang, atau kolaborasi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={contactLinks.email} className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow-magenta)] transition-transform hover:scale-105">
                  <Mail className="h-4 w-4" /> Send an email <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={contactLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Jihan Nabilah Rahman — Built with curiosity & data.</div>
          <div className="font-mono">v3.0 · Crafted in Jakarta</div>
        </footer>
      </div>
    </section>
  );
}

function Index() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [theme, setTheme] = useTheme();

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Experience />
      <Projects onOpen={setOpenProject} />
      <CaseStudies onOpen={setOpenProject} />
      <Gallery onOpen={setLightboxSrc} />
      <Skills />
      <Contact />

      <ProjectModal
        project={openProject}
        open={!!openProject}
        onClose={() => setOpenProject(null)}
      />
      <Lightbox
        src={lightboxSrc}
        open={!!lightboxSrc}
        onClose={() => setLightboxSrc(null)}
      />
    </main>
  );
}