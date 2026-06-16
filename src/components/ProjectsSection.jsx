import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  DatabaseZap,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  Layers,
  Map,
  Target,
  X,
} from 'lucide-react';

const fallbackImage = '/images_projects_data_analis/BI_Gojek/Dashboard_BI_Gojek.png';

const bestProjectInsights = [
  {
    title: 'Data Visualization',
    label: 'INSIGHT LAYER',
    icon: BarChart3,
    text: 'Menampilkan data kejadian bencana dalam bentuk visual yang mudah dipahami melalui peta, statistik, dan ringkasan wilayah.',
  },
  {
    title: 'Business Insight',
    label: 'ANALYTICAL VALUE',
    icon: Target,
    text: 'Menerjemahkan informasi risiko dan kejadian menjadi insight yang membantu pembacaan kondisi wilayah secara lebih cepat.',
  },
  {
    title: 'System / Process Value',
    label: 'DECISION SUPPORT',
    icon: DatabaseZap,
    text: 'Menyajikan informasi kebencanaan secara lebih terstruktur, interaktif, dan berbasis data untuk mendukung pemahaman publik dan pengambilan keputusan.',
  },
];

const RevealOnScroll = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function ProjectsSection({
  projects,
  openProjectDetail,
  selectedProject,
  closeProjectDetail,
  currentImageIndex,
  nextImage,
  prevImage,
}) {
  const [showAll, setShowAll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const bestProject = useMemo(() => projects.find((project) => project.title === 'Jogja Siaga WebGIS') || projects[0], [projects]);
  const selectedProjects = useMemo(
    () => projects.filter((project) => project.title !== bestProject?.title),
    [projects, bestProject],
  );
  const visibleProjects = showAll ? selectedProjects : selectedProjects.slice(0, 6);
  const selectedProjectImages = selectedProject?.images?.length ? selectedProject.images : [fallbackImage];
  const selectedProjectLink = selectedProject?.demo || selectedProject?.github;

  useEffect(() => {
    if (selectedProject && !isHovered && selectedProjectImages.length > 1) {
      const slideInterval = setInterval(() => {
        nextImage();
      }, 3000);

      return () => clearInterval(slideInterval);
    }
  }, [selectedProject, selectedProjectImages.length, isHovered, nextImage]);

  const toggleShowAll = () => {
    setShowAll((value) => !value);
    if (showAll) {
      const section = document.getElementById('projects');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="mx-auto mt-20 mb-20 max-w-6xl scroll-mt-28 px-4 sm:px-6">
      <RevealOnScroll>
        <div className="mb-12 flex flex-col">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,.9)]" />
            Projects / Case Studies
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Analytical Project Showcase
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Best project highlight and selected work across data analysis, business intelligence, system analysis, and digital product thinking.
          </p>
        </div>
      </RevealOnScroll>

      {bestProject && (
        <div className="mb-16 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <RevealOnScroll className="h-full">
            <article
              onClick={() => openProjectDetail(bestProject)}
              className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-blue-950/30 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,.12),transparent_36%)]" />
              <div className="relative h-72 overflow-hidden sm:h-96">
                <img
                  src={bestProject.images?.[0] || fallbackImage}
                  alt={bestProject.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-blue-300/25 bg-slate-950/60 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-xl">
                  Best Project / Featured Case Study
                </div>
              </div>

              <div className="relative p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-200">
                    {bestProject.category}
                  </span>
                  <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-bold text-purple-200">
                    Data Visualization / WebGIS / Spatial Data Analysis
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-white sm:text-5xl">{bestProject.title}</h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{bestProject.shortDesc}</p>

                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {(bestProject.outcomes || []).slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-2xl border border-blue-400/15 bg-blue-500/[0.06] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {bestProject.tech.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition group-hover:bg-blue-500">
                    <ArrowUpRight size={18} />
                    View Case Study
                  </span>
                  {bestProject.demo && (
                    <a
                      href={bestProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:border-blue-400/50 hover:bg-white/[0.08]"
                    >
                      <Globe2 size={18} />
                      Live Demo
                    </a>
                  )}
                  {bestProject.github && (
                    <a
                      href={bestProject.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition hover:border-purple-400/50 hover:bg-white/[0.08]"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          </RevealOnScroll>

          <div className="grid gap-5">
            {bestProjectInsights.map((card, index) => (
              <RevealOnScroll key={card.title} delay={index * 100}>
                <InsightCard card={card} index={index} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      )}

      <RevealOnScroll>
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-blue-300">Selected Projects</p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-4xl">More analytical work</h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Six additional projects that show dashboard thinking, business analysis, process modeling, and digital solution design.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, idx) => (
          <RevealOnScroll key={project.title} delay={idx * 80} className="h-full">
            <ProjectGridCard project={project} openProjectDetail={openProjectDetail} />
          </RevealOnScroll>
        ))}
      </div>

      {selectedProjects.length > 6 && (
        <RevealOnScroll delay={200}>
          <div className="mt-14 flex justify-center">
            <button
              onClick={toggleShowAll}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-blue-400/30 bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.32)] active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative inline-flex items-center gap-3">
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    See All Projects
                    <ChevronDown size={18} />
                  </>
                )}
              </span>
            </button>
          </div>
        </RevealOnScroll>
      )}

      {selectedProject && (
        <ProjectModal
          selectedProject={selectedProject}
          closeProjectDetail={closeProjectDetail}
          currentImageIndex={currentImageIndex}
          nextImage={nextImage}
          prevImage={prevImage}
          selectedProjectImages={selectedProjectImages}
          selectedProjectLink={selectedProjectLink}
          setIsHovered={setIsHovered}
        />
      )}
    </section>
  );
}

function InsightCard({ card, index }) {
  const Icon = card.icon;

  return (
    <article className="group rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-900 hover:shadow-[0_0_35px_rgba(59,130,246,0.14)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-300/15 bg-blue-500/10 text-blue-200 transition group-hover:scale-110">
          <Icon size={21} />
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-blue-200">[{card.label}]</p>
      <h4 className="mt-2 text-xl font-bold text-white">{card.title}</h4>
      <p className="mt-3 text-sm leading-7 text-slate-400">{card.text}</p>
    </article>
  );
}

function ProjectGridCard({ project, openProjectDetail }) {
  return (
    <article
      onClick={() => openProjectDetail(project)}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/85 shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_24px_60px_rgba(8,112,184,0.16)]"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.images?.[0] || fallbackImage}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-xl">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white transition group-hover:text-blue-200">{project.title}</h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-slate-400">{project.shortDesc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-500">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {project.outcomes?.[0] && (
          <div className="mt-5 rounded-2xl border border-blue-400/10 bg-blue-500/[0.055] p-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200">Business Highlight</p>
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">{project.outcomes[0]}</p>
          </div>
        )}

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-300 transition group-hover:text-white">
          View Case Study
          <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </article>
  );
}

function ProjectModal({
  selectedProject,
  closeProjectDetail,
  currentImageIndex,
  nextImage,
  prevImage,
  selectedProjectImages,
  selectedProjectLink,
  setIsHovered,
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close project modal"
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={closeProjectDetail}
      />

      <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">
        <button
          onClick={closeProjectDetail}
          aria-label="Close project detail"
          className="absolute right-5 top-5 z-50 rounded-full border border-white/10 bg-black/45 p-2.5 text-white/80 backdrop-blur-md transition hover:bg-red-500/80 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto">
          <div
            className="relative h-72 shrink-0 select-none bg-slate-950 sm:h-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={selectedProjectImages[currentImageIndex]}
              alt={selectedProject.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

            {selectedProjectImages.length > 1 && (
              <>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/25 p-3 text-white opacity-100 backdrop-blur-md transition hover:bg-blue-600/80 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/25 p-3 text-white opacity-100 backdrop-blur-md transition hover:bg-blue-600/80 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-8 flex flex-col justify-between gap-6 border-b border-slate-800 pb-8 lg:flex-row lg:items-end">
              <div className="flex-1 space-y-4">
                <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-blue-300">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">{selectedProject.title}</h2>
              </div>

              {selectedProjectLink && (
                <a
                  href={selectedProjectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
                >
                  <ExternalLink size={20} />
                  View Project
                </a>
              )}
            </div>

            <div className="grid gap-10 lg:grid-cols-3">
              <div className="space-y-8 lg:col-span-2">
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                    <FileText className="text-blue-400" size={20} />
                    Project Overview
                  </h3>
                  <p className="text-justify text-base leading-8 text-slate-300 sm:text-lg">{selectedProject.description}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <DetailList title="The Challenge" tone="red" items={selectedProject.challenges} />
                  <DetailList title="Key Outcomes" tone="emerald" items={selectedProject.outcomes} />
                </div>
              </div>

              <aside className="space-y-8">
                <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 backdrop-blur-sm">
                  <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    <Layers size={16} />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailList({ title, items = [], tone }) {
  const toneClasses =
    tone === 'red'
      ? 'from-red-500/5 border-red-500/10 text-red-300 bg-red-500 shadow-red-500/60'
      : 'from-emerald-500/5 border-emerald-500/10 text-emerald-300 bg-emerald-500 shadow-emerald-500/60';

  return (
    <div className={`rounded-2xl border bg-gradient-to-br ${toneClasses.split(' ').slice(0, 2).join(' ')} to-transparent p-6`}>
      <h3 className={`mb-4 text-sm font-bold uppercase tracking-wider ${toneClasses.split(' ')[2]}`}>{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
            <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${toneClasses.split(' ')[3]} shadow-[0_0_8px_var(--tw-shadow-color)] ${toneClasses.split(' ')[4]}`} />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
