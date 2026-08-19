const metrics = [
  ["Tasks handled", "128"],
  ["Messages", "1,042"],
  ["Hours saved", "36"],
  ["Accuracy", "97%"],
] as const;

const flow = [
  ["Reads incoming request", "done"],
  ["Drafts a reply", "done"],
  ["Updates the record", "active"],
  ["Schedules follow-up", "queued"],
] as const;

const today = [
  ["Answer 12 customer messages", true],
  ["Send 4 invoice reminders", true],
  ["Summarise weekly report", false],
  ["Prepare Monday follow-ups", false],
] as const;

export function MateDashboard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]">
      {/* top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-semibold tracking-tight">MATE</span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            Your Digital Employee.
          </span>
        </div>
        <span className="font-mono rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[9px] tracking-[0.16em] text-accent uppercase">
          In development
        </span>
      </div>

      <div className="space-y-6 p-5 sm:p-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            Good morning
          </p>
          <p className="font-display mt-1 text-xl font-semibold tracking-tight">
            Here&apos;s what I handled for you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {metrics.map(([k, v]) => (
            <div key={k} className="bg-surface p-4">
              <p className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase">
                {k}
              </p>
              <p className="font-display mt-1 text-xl font-semibold">{v}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              AI activity
            </p>
            <ul className="mt-4 space-y-3">
              {flow.map(([step, state]) => (
                <li key={step} className="flex items-center gap-3 text-xs">
                  <span
                    aria-hidden
                    className={
                      state === "active"
                        ? "h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        : state === "done"
                          ? "h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45"
                          : "h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong"
                    }
                  />
                  <span className={state === "queued" ? "text-muted-foreground" : "text-foreground/85"}>
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border p-4">
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              Today&apos;s activity
            </p>
            <ul className="mt-4 space-y-3">
              {today.map(([task, done]) => (
                <li key={task} className="flex items-start gap-3 text-xs">
                  <span
                    aria-hidden
                    className={
                      done
                        ? "mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-accent text-[9px] text-accent-foreground"
                        : "mt-px h-4 w-4 shrink-0 rounded-[4px] border border-border-strong"
                    }
                  >
                    {done ? "✓" : ""}
                  </span>
                  <span className={done ? "text-muted-foreground line-through" : "text-foreground/85"}>
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
