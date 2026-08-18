import type { Project } from "@/data/site";

/** Abstract interface fragments — no stock photography, pure composition. */

export function HeroComposition() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="font-mono ml-3 text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
          mantech / product-os
        </span>
      </div>

      <div className="grid gap-px bg-border md:grid-cols-3">
        <div className="space-y-4 bg-surface p-6">
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            Systems
          </p>
          {["Agent runtime", "Data pipeline", "Billing", "Workflows"].map((row, i) => (
            <div key={row} className="flex items-center justify-between text-xs">
              <span className="text-foreground/85">{row}</span>
              <span
                className={i === 0 ? "text-accent" : "text-muted-foreground"}
                aria-hidden
              >
                {i === 0 ? "live" : "ok"}
              </span>
            </div>
          ))}
          <div className="space-y-2 pt-2">
            {[72, 46, 88].map((w) => (
              <div key={w} className="h-1 rounded-full bg-surface-elevated">
                <div className="h-1 rounded-full bg-foreground/35" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface p-6 md:col-span-2">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                Throughput
              </p>
              <p className="font-display mt-1 text-3xl font-semibold tracking-tight">99.98%</p>
            </div>
            <p className="font-mono text-[10px] text-muted-foreground">30d</p>
          </div>
          <div className="mt-6 flex h-32 items-end gap-1.5" aria-hidden>
            {[28, 44, 36, 58, 49, 66, 55, 74, 62, 81, 70, 92, 78, 88, 96].map((h, i) => (
              <div
                key={i}
                className={
                  i > 11 ? "flex-1 rounded-sm bg-accent" : "flex-1 rounded-sm bg-foreground/18"
                }
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-px border-t border-border bg-border pt-px">
            {[
              ["Products", "12"],
              ["Deploys", "1.4k"],
              ["Latency", "82ms"],
            ].map(([k, v]) => (
              <div key={k} className="bg-surface pt-4">
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                  {k}
                </p>
                <p className="font-display mt-1 text-lg font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  if (variant === "agent") {
    return (
      <Frame>
        <div className="space-y-3">
          <Bubble align="left" w="72%" />
          <Bubble align="right" w="54%" accent />
          <Bubble align="left" w="86%" />
          <Bubble align="right" w="40%" accent />
        </div>
      </Frame>
    );
  }
  if (variant === "analytics") {
    return (
      <Frame>
        <div className="flex h-full items-end gap-2" aria-hidden>
          {[35, 60, 45, 78, 52, 88, 68].map((h, i) => (
            <div
              key={i}
              className={i === 5 ? "flex-1 rounded-sm bg-accent" : "flex-1 rounded-sm bg-foreground/18"}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </Frame>
    );
  }
  return (
    <Frame>
      <div className="grid h-full grid-cols-3 gap-2" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md border border-border bg-surface-elevated transition-transform duration-500 group-hover:-translate-y-0.5"
            style={{ transitionDelay: `${i * 25}ms` }}
          />
        ))}
      </div>
    </Frame>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-lg border border-border bg-surface p-5 sm:h-52">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function Bubble({ align, w, accent }: { align: "left" | "right"; w: string; accent?: boolean }) {
  return (
    <div className={align === "right" ? "flex justify-end" : "flex"}>
      <div
        className={
          accent
            ? "h-7 rounded-md bg-accent/25 ring-1 ring-accent/40"
            : "h-7 rounded-md bg-surface-elevated ring-1 ring-border"
        }
        style={{ width: w }}
      />
    </div>
  );
}
