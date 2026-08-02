import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Project } from "@/data/projects";
import {
  X,
  ExternalLink,
  Target,
  Database,
  Workflow,
  Lightbulb,
  TrendingUp,
  Wrench,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const sections = [
  { key: "problem", label: "Business Problem", icon: AlertCircle, color: "text-magenta" },
  { key: "objective", label: "Objective", icon: Target, color: "text-cyan" },
  { key: "data", label: "Data / Requirement", icon: Database, color: "text-violet" },
  { key: "approach", label: "Analytical Approach", icon: Workflow, color: "text-cyan" },
  { key: "insight", label: "Insight", icon: Lightbulb, color: "text-lime" },
  { key: "recommendation", label: "Recommendation", icon: CheckCircle2, color: "text-cyan" },
  { key: "impact", label: "Result & Impact", icon: TrendingUp, color: "text-magenta" },
] as const;

const toAssetPath = (src: string) => (src.startsWith("http") ? src : encodeURI(src));

export function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const heroImages = useMemo(() => {
    if (!project) return [];

    const images = [
      {
        src: project.image,
        alt: project.title,
        caption: project.title,
      },
      ...(project.gallery ?? []),
    ];

    return images.filter(
      (image, index, allImages) =>
        allImages.findIndex((item) => item.src === image.src) === index,
    );
  }, [project]);

  useEffect(() => {
    setActiveImage(0);
    setIsImageHovered(false);
  }, [project?.slug, open]);

  useEffect(() => {
    if (!open || isImageHovered || heroImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [open, isImageHovered, heroImages.length, project?.slug]);

  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-hidden border-[var(--border-glass-strong)] bg-[var(--surface-modal)] p-0 backdrop-blur-2xl [&>button]:hidden"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <div className="relative max-h-[90vh] overflow-y-auto">
          <div
            className="relative h-56 overflow-hidden sm:h-72"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            {heroImages.map((image, index) => (
              <img
                key={`${project.slug}-${image.src}`}
                src={toAssetPath(image.src)}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  index === activeImage
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-[1.03] opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full glass-strong text-foreground transition-transform hover:scale-105"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                <project.icon className="h-3 w-3 text-cyan" /> {project.category}
              </div>
              <h2 className="mt-3 max-w-3xl font-display text-2xl font-bold sm:text-4xl">
                {project.title}
              </h2>

              {heroImages.length > 1 && (
                <div className="mt-4 flex items-center gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={`${project.slug}-hero-dot-${index}`}
                      type="button"
                      aria-label={`Show image ${index + 1}`}
                      onClick={() => setActiveImage(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === activeImage
                          ? "w-7 bg-cyan"
                          : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-5 p-6 sm:p-8">
            <p className="text-foreground/80">{project.desc}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {sections.map((section) => (
                <div
                  key={section.key}
                  className="rounded-2xl border border-[var(--border-glass-strong)] bg-[var(--chip-bg)] p-5 transition-colors hover:bg-[var(--chip-bg-hover)]"
                >
                  <div className="flex items-center gap-2">
                    <section.icon className={`h-4 w-4 ${section.color}`} />
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {section.label}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {cs[section.key as keyof typeof cs] as string}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--border-glass-strong)] bg-[var(--chip-bg)] p-5">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-cyan" />
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Process & Tools
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cs.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-xs font-medium text-cyan"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-aurora)] px-5 py-2.5 text-sm font-semibold text-[color:var(--primary-foreground)] shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105"
                >
                  {project.linkLabel ?? "Live Demo"}
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
