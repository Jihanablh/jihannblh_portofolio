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
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-hidden border-white/10 p-0 backdrop-blur-2xl [&>button]:hidden"
        style={{ background: "oklch(0.12 0.04 270 / 0.95)" }}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="relative max-h-[90vh] overflow-y-auto">
          {/* Cover */}
          <div className="relative h-56 overflow-hidden sm:h-72">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_270)] via-[oklch(0.12_0.04_270)/0.4] to-transparent" />
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass-strong text-foreground transition-transform hover:scale-105"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                <project.icon className="h-3 w-3 text-cyan" /> {project.category}
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-4xl">{project.title}</h2>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-5 p-6 sm:p-8">
            <p className="text-foreground/80">{project.desc}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {sections.map((s) => (
                <div
                  key={s.key}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-2">
                    <s.icon className={`h-4 w-4 ${s.color}`} />
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {cs[s.key as keyof typeof cs] as string}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-cyan" />
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Process & Tools
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cs.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-xs font-medium text-cyan"
                  >
                    {t}
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
                  Live Demo
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
              <button
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
