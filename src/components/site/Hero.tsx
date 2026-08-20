import { ActionLink, Label } from "./ui";
import { Reveal } from "./Reveal";
import { MateDashboard } from "./MateDashboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container-mt relative grid items-center gap-14 pt-20 pb-16 md:grid-cols-12 md:pt-28 md:pb-28">
        <Reveal className="md:col-span-6">
          <Label>Man &amp; Tech · Digital Product Studio</Label>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-[4.25rem]">
            We build digital solutions for real-world problems.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Software, AI and digital products designed to make work simpler, businesses smarter, and
            ideas possible.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <ActionLink to="/work" variant="primary" className="rounded-full">
              Explore what we&apos;re building <span aria-hidden>→</span>
            </ActionLink>
            <ActionLink to="/contact" variant="ghost" className="rounded-full">
              Start a project
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-6">
          <MateDashboard />
        </Reveal>
      </div>
    </section>
  );
}
