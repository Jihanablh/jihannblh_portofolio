import React, { useState, useEffect, useRef } from 'react';
import { Code } from 'lucide-react';

/* REVEAL ON SCROLL */
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
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
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* SKILLS SECTION */
export default function SkillsSection({ skills }) {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto scroll-mt-28 px-4 mt-24 mb-24"
    >
      {/* HEADER */}
      <RevealOnScroll>
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-4">
            <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
              <Code className="text-blue-400" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
            A focused set of analytical, technical, and business-oriented skills
            built through academic projects, industry experience, and hands-on practice.
          </p>
        </div>
      </RevealOnScroll>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <RevealOnScroll key={idx} delay={idx * 120}>
            <div className="group relative h-full">
              
              {/* GLOW */}
              <div
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${skill.gradient}
                opacity-10 blur-xl group-hover:opacity-40 transition duration-700`}
              ></div>

              {/* CARD */}
              <div className="relative h-full rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-7 overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:border-slate-600/50">

                {/* TOP BAR */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-slate-950 border border-slate-800 shadow ${skill.iconColor}
                    group-hover:scale-110 transition-transform`}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {skill.category}
                    </h3>
                    <div className={`h-1 w-12 mt-1 rounded-full bg-gradient-to-r ${skill.gradient}`}></div>
                  </div>
                </div>

                {/* ITEMS */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm rounded-lg
                      bg-slate-800/60 border border-slate-700/50 text-slate-300
                      hover:bg-slate-700 hover:text-white hover:border-slate-500
                      transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* SUBTLE FOOTER */}
                <div className="mt-6 text-xs text-slate-500 tracking-wide">
                  Applied in real projects & case studies
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}