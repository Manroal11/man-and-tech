import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/site";
import { ProjectVisual } from "./visuals";
import { cn } from "@/lib/utils";

function StatusPill({ status }: { status: Project["status"] }) {
  const isActive = status === "In Development";
  return (
    <span
      className={cn(
        "font-mono rounded-full border px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase",
        isActive
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-border text-muted-foreground",
      )}
    >
      {status}
    </span>
  );
}

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article className="group h-full">
      <Link
        to="/work"
        className={cn(
          "flex h-full flex-col rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:p-5",
          featured && "md:grid md:grid-cols-2 md:items-center md:gap-8 md:p-6",
        )}
      >
        <ProjectVisual variant={project.visual} />
        <div className={cn("flex flex-1 flex-col", featured && "md:py-2")}>
          <div className="flex items-start justify-between gap-4 px-1 pt-5">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                {featured ? "Flagship Project" : project.index}
              </p>

              <h3
                className={cn(
                  "mt-2 text-lg font-semibold tracking-tight",
                  featured && "text-2xl sm:text-3xl",
                )}
              >
                {project.title}
              </h3>
              {project.tagline ? (
                <p className="mt-1 text-sm text-accent">{project.tagline}</p>
              ) : null}
              <p
                className={cn(
                  "mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground",
                  featured && "max-w-md",
                )}
              >
                {project.description}
              </p>
            </div>
            <StatusPill status={project.status} />
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 px-1 pt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono rounded-full border border-border px-2.5 py-1 text-[10px] tracking-[0.14em] text-muted-foreground uppercase"
              >
                {tag}
              </span>
            ))}
            <span className="ml-auto inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-accent">
              {project.cta} <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
