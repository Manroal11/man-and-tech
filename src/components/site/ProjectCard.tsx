import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/site";
import { ProjectVisual } from "./visuals";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link
        to="/work"
        className="block rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:p-5"
      >
        <ProjectVisual variant={project.visual} />
        <div className="flex items-start justify-between gap-4 px-1 pt-5">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
              {project.index}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <span
            aria-hidden
            className="mt-1 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
          >
            →
          </span>
        </div>
        <div className="flex flex-wrap gap-2 px-1 pt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono rounded-full border border-border px-2.5 py-1 text-[10px] tracking-[0.14em] text-muted-foreground uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
