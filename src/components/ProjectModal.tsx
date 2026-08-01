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
  Images,
  ZoomIn,
} from "lucide-react";

const sections = [
  {
    key: "problem",
    label: "Business Problem",
    icon: AlertCircle,
    color: "text-magenta",
  },
  { key: "objective", label: "Objective", icon: Target, color: "text-cyan" },
  {
    key: "data",
    label: "Data / Requirement",
    icon: Database,
    color: "text-violet",
  },
  {
    key: "approach",
    label: "Analytical Approach",
    icon: Workflow,
    color: "text-cyan",
  },
  { key: "insight", label: "Insight", icon: Lightbulb, color: "text-lime" },
  {
    key: "recommendation",
    label: "Recommendation",
    icon: CheckCircle2,
    color: "text-cyan",
  },
  {
    key: "impact",
    label: "Result & Impact",
    icon: TrendingUp,
    color: "text-magenta",
  },
] as const;

export function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent
        className="max-w-5xl max-h-[90vh] overflow-hidden border-[var(--border-glass-strong)] bg-[var(--surface-modal)] p-0 backdrop-blur-2xl [&>button]:hidden"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <div className="relative max-h-[90vh] overflow-y-auto">
          <div className="relative h-56 overflow-hidden bg-white sm:h-72">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass-strong text-foreground transition-transform hover:scale-105"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                <project.icon className="h-3 w-3 text-cyan" /> {project.category}
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-4xl">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="space-y-5 p-6 sm:p-8">
            <p className="text-foreground/80">{project.desc}</p>

            {project.gallery && project.gallery.length > 0 && (
              <section className="rounded-2xl border border-[var(--border-glass-strong)] bg-[var(--chip-bg)] p-5">
                <div className="flex items-center gap-2">
                  <Images className="h-4 w-4 text-cyan" />
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Project Visuals
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((visual) => (
                    <a
                      key={visual.src}
                      href={visual.src}
                      target="_blank"
                      rel="noreferrer"
                      className="group/visual overflow-hidden rounded-2xl border border-border/70 bg-white transition-all hover:-translate-y-0.5 hover:border-cyan/40"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-white">
                        <img
                          src={visual.src}
                          alt={visual.alt}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-500 group-hover/visual:scale-[1.02]"
                        />
                        <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/65 text-white opacity-0 transition-opacity group-hover/visual:opacity-100">
                          <ZoomIn className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="border-t border-black/10 px-4 py-3 text-xs font-medium text-neutral-700">
                        {visual.caption}
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}

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
