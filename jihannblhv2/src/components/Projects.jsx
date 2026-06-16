import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronUp } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeader from './SectionHeader';
import MagneticButton from './MagneticButton';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const priorityProjects = [
  'Jogja Siaga WebGIS',
  'BarangBareng',
  'Data Analysis Project',
  'Personal Portfolio',
  'GoFood Marketing Analytics & Strategy',
  'Enterprise Blueprint',
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const orderedProjects = useMemo(() => {
    const prioritized = priorityProjects
      .map((title) => projects.find((project) => project.title === title))
      .filter(Boolean);
    const remaining = projects.filter((project) => !priorityProjects.includes(project.title));
    return [...prioritized, ...remaining];
  }, []);

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
        eyebrow="Projects"
        title="Analytical work presented as data and business case-study showcases."
        description="Enam project utama ditampilkan langsung sebagai showcase Data Analyst dan Business Analyst, dengan problem, process, tools, insight, dan business value."
      />

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpen={open}
              featured={!showAll && index === 0}
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
