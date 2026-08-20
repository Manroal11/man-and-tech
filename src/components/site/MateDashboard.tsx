const tabs = ["Overview", "Conversations", "Customers", "Tasks", "Analytics"] as const;

const metrics = [
  ["Active Conversations", "12", "+3"],
  ["Resolved Today", "28", "+11"],
  ["Tasks Automated", "47", "+8"],
  ["Customer Satisfaction", "94%", "+2.1%"],
] as const;

const flow = [
  ["Customer enquiry received", "Channel · Email", "active"],
  ["MATE analyzed intent", "Confidence 0.96", "done"],
  ["Response generated", "Draft · 1.2s", "done"],
  ["Conversation resolved", "Auto-closed", "active"],
] as const;

const today = [
  ["Customer enquiries handled", true],
  ["Follow-up messages sent", true],
  ["Frequently asked questions answered", true],
  ["Escalated conversation", false],
] as const;

export function MateDashboard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/70 shadow-[var(--shadow-card)] backdrop-blur-sm">
      {/* browser chrome */}
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="font-mono flex items-center gap-2 text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          MATE · In development
        </span>
      </div>

      {/* app nav */}
      <div className="flex items-center gap-3 overflow-x-auto border-y border-border px-4 py-2.5">
        <span className="font-display text-sm font-semibold tracking-[0.12em]">MATE</span>
        {tabs.map((t, i) => (
          <span
            key={t}
            className={
              i === 0
                ? "rounded-md bg-foreground/8 px-2.5 py-1 text-xs whitespace-nowrap text-foreground"
                : "px-2.5 py-1 text-xs whitespace-nowrap text-muted-foreground"
            }
          >
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div>
          <p className="text-xs text-muted-foreground">Good morning.</p>
          <p className="mt-0.5 text-sm font-semibold tracking-tight">MATE is working for you.</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {metrics.map(([k, v, d]) => (
            <div key={k} className="rounded-xl border border-border bg-background/40 p-3.5">
              <p className="text-[10px] text-muted-foreground">{k}</p>
              <div className="mt-1.5 flex items-end justify-between gap-2">
                <p className="font-display text-2xl font-semibold tracking-tight">{v}</p>
                <span className="font-mono text-[9px] text-accent">{d}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-background/40 p-3.5">
            <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
              AI activity
            </p>
            <ul className="mt-3 space-y-2.5">
              {flow.map(([step, meta, state]) => (
                <li key={step} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className={
                      state === "active"
                        ? "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        : "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/25"
                    }
                  />
                  <span>
                    <span className="block text-[11px] text-foreground/90">{step}</span>
                    <span className="font-mono block text-[9px] text-muted-foreground">{meta}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-background/40 p-3.5">
            <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
              Today&apos;s activity
            </p>
            <ul className="mt-3 space-y-2.5">
              {today.map(([task, done]) => (
                <li key={task} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className={
                      done
                        ? "mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[8px] text-accent"
                        : "mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-border-strong text-[8px] text-muted-foreground"
                    }
                  >
                    {done ? "✓" : "○"}
                  </span>
                  <span
                    className={done ? "text-[11px] text-foreground/90" : "text-[11px] text-muted-foreground"}
                  >
                    {task}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
