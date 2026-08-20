import { ActionLink } from "./ui";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="border-t border-border">
      <div className="container-mt py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-[1.02] font-semibold text-balance sm:text-6xl">
            Have a problem worth solving?
          </h2>
          <p className="font-display mt-3 text-4xl leading-[1.02] font-semibold text-balance text-muted-foreground sm:text-6xl">
            Let&apos;s build the solution.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ActionLink to="/contact" variant="primary" className="rounded-full">
              Start a project <span aria-hidden>→</span>
            </ActionLink>
            <ActionLink to="/work" variant="outline" className="rounded-full">
              Explore what we&apos;re building
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
