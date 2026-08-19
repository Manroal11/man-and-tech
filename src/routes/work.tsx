import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";
import { projects } from "@/data/site";
import { ProjectCard } from "@/components/site/ProjectCard";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Man & Tech Digital Product Studio" },
      {
        name: "description",
        content:
          "Selected software, SaaS and AI products built by Man & Tech for real business problems.",
      },
      { property: "og:title", content: "Work — Man & Tech" },
      {
        property: "og:description",
        content: "Selected software, SaaS and AI products built by Man & Tech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <PlaceholderPage
      label="Products & projects"
      title="What we're building."
      description="An honest view of our work in progress — each item shows its current stage, from early concept to active development."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.id} className={p.flagship ? "md:col-span-2 lg:col-span-3" : undefined}>
            <ProjectCard project={p} featured={p.flagship === true} />
          </div>
        ))}
      </div>
    </PlaceholderPage>
  );
}
