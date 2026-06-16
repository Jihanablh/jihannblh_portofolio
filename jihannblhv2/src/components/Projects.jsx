import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronUp } from 'lucide-react';
import { projects } from '../data/projects';
import BestProjectShowcase from './BestProjectShowcase';
import SectionHeader from './SectionHeader';
import MagneticButton from './MagneticButton';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const bestProject = useMemo(() => projects.find((project) => project.title === 'Jogja Siaga WebGIS'), []);
  const orderedProjects = useMemo(
    () => projects.filter((project) => project.title !== 'Jogja Siaga WebGIS'),
    [],
  );
  const visibleProjects = showAll ? orderedProjects : orderedProjects.slice(0, 6);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  const open = (project) => {
    setSelected(project);
    setImageIndex(0);
  };

  const close = () => {
    setSelected(null);
  };

  const next = () => {
    if (!selected) return;
    setImageIndex((value) => (value + 1) % selected.images.length);
  };

  const prev = () => {
    if (!selected) return;
    setImageIndex((value) => (value - 1 + selected.images.length) % selected.images.length);
  };

  return (
    <section id="projects" className="section-shell scroll-mt-24">
      <SectionHeader
        eyebrow="PROJECTS / CASE STUDIES"
        title="Selected Analytical Projects"
        description="A collection of data, business, system, and digital projects that reflect my analytical and problem-solving journey."
      />

      <BestProjectShowcase project={bestProject} onOpen={open} />

      <motion.div
        className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="mono-label">[SELECTED PROJECTS]</p>
          <h3 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">More analytical work.</h3>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Six additional projects across data analysis, business process, dashboard, system modeling, and digital product design.
        </p>
      </motion.div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpen={open}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <MagneticButton
          variant={showAll ? 'secondary' : 'primary'}
          onClick={() => setShowAll((value) => !value)}
          ariaLabel={showAll ? 'Show fewer projects' : 'See all projects'}
        >
          {showAll ? <ChevronUp size={18} /> : <ArrowUpRight size={18} />}
          {showAll ? 'Show Less' : 'See All Projects'}
        </MagneticButton>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            imageIndex={imageIndex}
            onClose={close}
            onNextImage={next}
            onPrevImage={prev}
            onSelectImage={setImageIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
