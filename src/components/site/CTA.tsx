import { ActionLink, Label } from "./ui";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="border-t border-border">
      <div className="container-mt py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Label>Start here</Label>
          <h2 className="mt-5 text-4xl leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-7xl">
            Have an idea?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Let&apos;s turn it into something real.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ActionLink to="/contact" variant="accent">
              Start a project <span aria-hidden>→</span>
            </ActionLink>
            <ActionLink to="/work" variant="outline">
              Explore our work <span aria-hidden>→</span>
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
