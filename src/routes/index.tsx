import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { CapabilityCard } from "@/components/site/CapabilityCard";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, Label, SectionHeading } from "@/components/site/ui";
import { capabilities, projects } from "@/data/site";

const title = "Man & Tech — Software & AI Product Studio";
const description =
  "Man & Tech builds software, SaaS and AI systems for the real world — starting with MATE, a digital employee for growing businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const philosophy = ["Build.", "Learn.", "Iterate.", "Ship."];

function Index() {
  return (
    <>
      <Hero />

      {/* Introduction */}
      <section className="border-b border-border">
        <div className="container-mt grid gap-8 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-4">
            <Label>What we do</Label>
          </Reveal>
          <Reveal delay={80} className="md:col-span-8">
            <h2 className="text-3xl leading-[1.08] font-semibold text-balance sm:text-4xl lg:text-5xl">
              Technology should do the work.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Man &amp; Tech is a digital product studio building software, SaaS and AI systems. We
              are early, we build in the open, and every product starts with a real problem — the
              first one being MATE.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-border">
        <div className="container-mt py-20 md:py-28">
          <Reveal>
            <SectionHeading label="Capabilities" title="What we build." />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.id} delay={i * 70}>
                <CapabilityCard capability={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* In progress */}
      <section className="border-b border-border">
        <div className="container-mt py-20 md:py-28">
          <Reveal>
            <SectionHeading
              label="Products & projects"
              title="What we're building."
              description="Everything here is in active development or early exploration. No fake case studies — just the work as it stands today."
              action={
                <ActionLink to="/work" variant="outline" className="h-10 min-h-10 px-4">
                  View everything <span aria-hidden>→</span>
                </ActionLink>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal
                key={p.id}
                delay={i * 80}
                className={p.flagship ? "md:col-span-2 lg:col-span-3" : ""}
              >
                <ProjectCard project={p} featured={p.flagship === true} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden border-b border-border bg-surface/40">
        <div className="container-mt grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <Reveal>
              <Label>Our philosophy</Label>
            </Reveal>
            <ul className="mt-8 space-y-1">
              {philosophy.map((word, i) => (
                <Reveal as="li" key={word} delay={i * 110}>
                  <span className="font-display block text-5xl leading-[1.02] font-bold tracking-tight uppercase transition-colors duration-300 hover:text-accent sm:text-7xl lg:text-8xl">
                    {word}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={160} className="md:col-span-5 md:self-end">
            <p className="max-w-md border-l border-border pl-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe the best way to understand technology is to build with it. Every project is
              an opportunity to learn, experiment and create something useful.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
