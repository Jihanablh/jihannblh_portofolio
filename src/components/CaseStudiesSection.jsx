import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BarChart3, FileSearch, Layers, Lightbulb, Workflow } from 'lucide-react';

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
    <section id="case-studies" className="mx-auto mt-20 mb-20 max-w-6xl scroll-mt-28 px-4 sm:px-6">
      <RevealOnScroll>
        <div className="mb-12 flex flex-col">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-purple-200">
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
            <article className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[0_0_42px_rgba(168,85,247,0.14)]">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-200">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white transition group-hover:text-blue-100">{project.title}</h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-purple-200">
                  <BarChart3 size={20} />
                </span>
              </div>

              <div className="grid flex-1 gap-4">
                <CasePoint icon={Workflow} label="Problem" text={project.challenges?.[0] || project.shortDesc} />
                <CasePoint icon={Layers} label="Process" text={project.description} clamp />
                <CasePoint icon={Lightbulb} label="Insight / Business Value" text={project.outcomes?.[0] || project.shortDesc} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => openProjectDetail(project)}
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-white"
              >
                View Case Study
                <ArrowUpRight size={16} />
              </button>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

function CasePoint({ icon: Icon, label, text, clamp = false }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-2 flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-blue-200">
        <Icon size={13} />
        {label}
      </div>
      <p className={`text-sm leading-6 text-slate-400 ${clamp ? 'line-clamp-3' : ''}`}>{text}</p>
    </div>
  );
}
