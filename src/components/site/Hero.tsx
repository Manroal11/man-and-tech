import { ActionLink, Label } from "./ui";
import { Reveal } from "./Reveal";
import { HeroComposition } from "./visuals";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="grid-lines pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="container-mt relative pt-20 pb-16 md:pt-28 md:pb-24">
        <Reveal className="max-w-4xl">
          <Label>Man &amp; Tech · Digital Product Studio</Label>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-[5.25rem]">
            We build digital products for the real world.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Websites, applications, SaaS and AI-powered solutions designed to solve meaningful
            problems.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <ActionLink to="/work" variant="accent">
              Explore our work <span aria-hidden>→</span>
            </ActionLink>
            <ActionLink to="/contact" variant="outline">
              Start a project
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-16 md:mt-20">
          <HeroComposition />
        </Reveal>
      </div>
    </section>
  );
}
