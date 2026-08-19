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
      <div
        aria-hidden
        className="grid-lines pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="container-mt relative grid items-center gap-14 pt-20 pb-16 md:grid-cols-12 md:pt-28 md:pb-24">
        <Reveal className="md:col-span-6">
          <Label>Man &amp; Tech · Digital Product Studio</Label>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-[4.5rem]">
            Building software and AI for the real world.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We are a digital product studio building software, SaaS and AI systems — starting with
            MATE, our first product: a digital employee for growing businesses.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <ActionLink to="/products" variant="accent">
              Discover MATE <span aria-hidden>→</span>
            </ActionLink>
            <ActionLink to="/work" variant="outline">
              See what we&apos;re building
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
