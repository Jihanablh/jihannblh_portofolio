import React from 'react';
import { Code } from 'lucide-react';
import InfiniteMarquee from './InfiniteMarquee';

const marqueeSkills = [
  'Data Analysis',
  'Business Analysis',
  'SQL',
  'Python',
  'Excel',
  'Power BI',
  'Tableau',
  'Dashboard',
  'Reporting',
  'Data Visualization',
  'Business Process',
  'Requirement Analysis',
  'System Analysis',
  'KPI',
  'Insight',
  'Documentation',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative mt-24 mb-28 w-full scroll-mt-28 overflow-hidden">
      <div className="mx-auto mb-12 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col">
          <h2 className="flex items-center gap-4 text-3xl font-bold text-white sm:text-4xl">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-3 shadow-lg shadow-blue-900/20">
              <Code className="text-blue-400" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A continuous loop of technical tools, business analysis methods, and data storytelling capabilities.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 w-[110vw] -translate-x-1/2 -rotate-1 border-y border-blue-400/20 bg-slate-900/90 py-6 shadow-[0_0_45px_rgba(59,130,246,0.12)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
        <InfiniteMarquee items={marqueeSkills} speed="38s" />
      </div>
    </section>
  );
}
