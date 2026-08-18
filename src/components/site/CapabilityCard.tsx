import type { Capability } from "@/data/site";

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="group relative flex h-full flex-col justify-between gap-10 border-t border-border bg-background p-6 transition-colors duration-300 hover:bg-surface md:p-8">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
      />
      <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
        {capability.label}
      </p>
      <div>
        <h3 className="font-display text-xl font-semibold tracking-tight uppercase transition-transform duration-300 group-hover:-translate-y-0.5">
          {capability.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {capability.description}
        </p>
      </div>
    </article>
  );
}
