import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Man & Tech" },
      { name: "description", content: "We partner with teams to design, build and ship digital products — from first prototype to production systems." },
      { property: "og:title", content: "Services — Man & Tech" },
      { property: "og:description", content: "We partner with teams to design, build and ship digital products — from first prototype to production systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      label="HOW WE WORK"
      title="Software, SaaS, AI and automation."
      description="We partner with teams to design, build and ship digital products — from first prototype to production systems."
    />
  );
}
