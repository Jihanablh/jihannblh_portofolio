import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BarChart3, CheckCircle2, ExternalLink, FileSearch, Lightbulb, ListChecks, Target, Workflow, Wrench } from 'lucide-react';

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
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function CaseStudiesSection({ projects = [], openProjectDetail }) {
  const caseStudies = projects.slice(0, 4);

  return (
    <section id="case-studies" className="mx-auto mt-20 mb-20 max-w-7xl scroll-mt-28 px-5 sm:px-8 lg:px-10">
      <RevealOnScroll>
        <div className="mb-12 flex flex-col">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-purple-200">
            <FileSearch size={14} />
            Case Studies
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
              Problem, process, insight, result
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Structured analytical stories that show how raw data, business context, and system thinking become useful decisions.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((project, index) => (
          <RevealOnScroll key={project.title} delay={index * 100} className="h-full">
            <article className="glass-card premium-border group flex h-full flex-col overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-1 hover:border-cyanx/30 hover:shadow-glow">
              <div className="relative h-56 overflow-hidden sm:h-60">
                <img
                  src={project.images?.[0] || '/images_projects_data_analyst/BI_Gojek/Dashboard_BI_Gojek.png'}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <span className="absolute left-5 right-5 top-5 w-fit max-w-[calc(100%-2.5rem)] rounded-full border border-cyanx/20 bg-cyanx/10 px-4 py-2 text-xs font-semibold leading-5 text-cyan-100 backdrop-blur-xl">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100">[Case Study]</p>
                    <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-white transition group-hover:text-cyan-100 sm:text-3xl">{project.title}</h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-purple-200">
                    <BarChart3 size={20} />
                  </span>
                </div>

                <div className="grid flex-1 gap-3 sm:grid-cols-2">
                  <CasePoint icon={Workflow} label="Problem" text={project.challenges?.[0] || project.shortDesc} />
                  <CasePoint icon={Target} label="Objective" text={project.shortDesc} />
                  <ListBlock icon={ListChecks} label="Data / Requirement" items={(project.challenges || [project.projectGroup, project.category]).slice(0, 3)} />
                  <ListBlock icon={Wrench} label="Process & Tools" items={[...(project.tech || []).slice(0, 4)]} />
                  <CasePoint className="sm:col-span-2" icon={Lightbulb} label="Insight" text={project.outcomes?.[0] || project.shortDesc} highlight />
                  <CasePoint icon={ArrowUpRight} label="Recommendation" text={project.outcomes?.[1] || 'Gunakan insight project sebagai dasar pengambilan keputusan, prioritas perbaikan proses, dan komunikasi kepada stakeholder.'} />
                  <CasePoint icon={CheckCircle2} label="Result" text={project.outcomes?.[2] || project.outcomes?.[0] || project.shortDesc} />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openProjectDetail(project)}
                    className="inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-white"
                  >
                    View Case Study
                    <ArrowUpRight size={16} />
                  </button>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyanx/25 bg-cyanx/10 px-4 py-2 text-xs font-bold text-cyan-100 transition hover:border-cyanx/50 hover:text-white hover:shadow-[0_0_18px_rgba(32,231,255,0.18)]"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

function CasePoint({ icon: Icon, label, text, highlight = false, className = '' }) {
  return (
    <div className={`rounded-2xl border p-4 ${highlight ? 'border-cyanx/25 bg-cyanx/[0.07]' : 'border-white/10 bg-white/[0.035]'} ${className}`}>
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
        <Icon size={13} />
        {label}
      </div>
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function ListBlock({ icon: Icon, label, items = [] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
        <Icon size={15} />
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.filter(Boolean).map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold leading-5 text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
