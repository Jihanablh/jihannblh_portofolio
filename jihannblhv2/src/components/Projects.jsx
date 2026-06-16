import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronUp } from 'lucide-react';
import { projects } from '../data/projects';
import BestProjectShowcase from './BestProjectShowcase';
import SectionHeader from './SectionHeader';
import MagneticButton from './MagneticButton';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const priorityProjects = [
  'Data Analysis Project',
  'Personal Portfolio',
  'GoFood Marketing Analytics & Strategy',
  'Enterprise Blueprint',
  'Global Superstore Executive Dashboard',
  '3 Lots Business Diagram',
];

const hiddenFromProjectPreview = ['Jogja Siaga WebGIS', 'BarangBareng'];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const orderedProjects = useMemo(() => {
    const previewProjects = projects.filter((project) => !hiddenFromProjectPreview.includes(project.title));
    const prioritized = priorityProjects
      .map((title) => previewProjects.find((project) => project.title === title))
      .filter(Boolean);
    const remaining = previewProjects.filter((project) => !priorityProjects.includes(project.title));
    return [...prioritized, ...remaining];
  }, []);

  const visibleProjects = showAll ? orderedProjects : orderedProjects.slice(0, 6);
  const bestProject = projects.find((project) => project.title === 'Jogja Siaga WebGIS');

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
        eyebrow="Case Studies / Projects"
        title="Featured Work & Analytical Projects"
        description="Project portfolio focused on data analysis, business analysis, dashboard, system thinking, and digital solutions."
      />

      <BestProjectShowcase project={bestProject} onOpen={open} />

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
