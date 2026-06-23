import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, LayoutGrid, Lightbulb, ListChecks, Target, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ProjectModal({ project, imageIndex, onClose, onNextImage, onPrevImage, onSelectImage }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[120]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        aria-label="Close project modal"
        className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="fixed inset-0 flex items-center justify-center px-4 py-5 sm:py-8">
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="premium-border relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/70 backdrop-blur-2xl"
          initial={{ y: 42, scale: 0.96, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 28, scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/50 text-white shadow-xl backdrop-blur-xl transition hover:border-red-300/60 hover:shadow-[0_0_24px_rgba(248,113,113,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanx"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="custom-scrollbar max-h-[90vh] overflow-y-auto overscroll-contain pb-10">
            <ProjectHero
              project={project}
              imageIndex={imageIndex}
              onNextImage={onNextImage}
              onPrevImage={onPrevImage}
              onSelectImage={onSelectImage}
            />

            <div className="grid gap-8 p-6 pb-14 sm:p-8 sm:pb-16 lg:grid-cols-[1fr_340px] lg:p-10">
              <main>
                <span className="inline-flex items-center gap-2 rounded-full border border-violetx/25 bg-violetx/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-100">
                  <LayoutGrid size={15} />
                  {project.category}
                </span>
                <h3 id="project-modal-title" className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">{project.description}</p>

                {project.highlights?.length > 0 && (
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((item) => (
                      <div key={item} className="rounded-2xl border border-cyanx/15 bg-cyanx/[0.06] p-4 text-xs font-bold uppercase tracking-[0.12em] text-cyan-100 sm:text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-7 grid gap-4">
                  <DetailBlock icon={Target} label="Problem" text={project.problem} />
                  <DetailBlock icon={ArrowUpRight} label="Objective" text={project.objective} />
                  <DetailBlock icon={ListChecks} label="Process / Approach" text={project.process} />
                  <DetailBlock icon={Lightbulb} label="Insight / Business Value" text={project.businessValue} highlight />
                </div>
              </main>

              <aside className="h-fit rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 lg:sticky lg:top-6">
                <h4 className="font-display text-lg font-bold text-white">Tools & Stack</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3">
                  {project.live && (
                    <MagneticButton href={project.live} target="_blank" className="w-full">
                      <ArrowUpRight size={18} />
                      Live Demo
                    </MagneticButton>
                  )}
                  {project.github && (
                    <MagneticButton href={project.github} target="_blank" variant="secondary" className="w-full">
                      <Github size={18} />
                      GitHub
                    </MagneticButton>
                  )}
                  {project.caseStudy && (
                    <MagneticButton href={project.caseStudy} target="_blank" variant="secondary" className="w-full">
                      <ArrowUpRight size={18} />
                      View Case Study
                    </MagneticButton>
                  )}
                  {!project.live && !project.github && !project.caseStudy && (
                    <p className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-400">
                      Project link belum tersedia. Visual dan detail project tetap bisa dibaca lengkap di modal ini.
                    </p>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProjectHero({ project, imageIndex, onNextImage, onPrevImage, onSelectImage }) {
  return (
    <div className="relative h-[36vh] min-h-72 overflow-hidden bg-midnight sm:h-[44vh]">
      <img
        src={project.images[imageIndex]}
        alt={`${project.title} preview ${imageIndex + 1}`}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

      {project.images.length > 1 && (
        <>
          <button
            type="button"
            onClick={onPrevImage}
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:border-cyanx/60 hover:shadow-glow sm:h-12 sm:w-12"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={onNextImage}
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:border-cyanx/60 hover:shadow-glow sm:h-12 sm:w-12"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {project.images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {project.images.map((image, index) => (
            <button
              key={image}
              onClick={() => onSelectImage(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-2 rounded-full transition ${index === imageIndex ? 'w-8 bg-cyanx' : 'w-2 bg-white/45'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function DetailBlock({ icon: Icon, label, text, highlight = false }) {
  if (!text) return null;
  return (
    <div className={`rounded-2xl border p-4 ${highlight ? 'border-cyanx/25 bg-cyanx/[0.07]' : 'border-white/10 bg-white/[0.035]'}`}>
      <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-100">
        <Icon size={15} />
        {label}
      </div>
      <p className="text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}
