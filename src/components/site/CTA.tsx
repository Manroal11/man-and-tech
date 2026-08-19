import { ActionLink, Label } from "./ui";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="border-t border-border">
      <div className="container-mt py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Label>Early access</Label>
          <h2 className="mt-5 text-4xl leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-7xl">
            We&apos;re just getting started.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Follow the build, or talk to us about working together.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ActionLink to="/contact" variant="accent">
              Get in touch <span aria-hidden>→</span>
            </ActionLink>
            <ActionLink to="/products" variant="outline">
              Discover MATE <span aria-hidden>→</span>
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
