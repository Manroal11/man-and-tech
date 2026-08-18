import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/lab")({
  head: () => ({
    meta: [
      { title: "Lab — Man & Tech" },
      { name: "description", content: "Prototypes, technical explorations and emerging-technology experiments from the Man & Tech team." },
      { property: "og:title", content: "Lab — Man & Tech" },
      { property: "og:description", content: "Prototypes, technical explorations and emerging-technology experiments from the Man & Tech team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      label="THE LAB"
      title="Where we experiment."
      description="Prototypes, technical explorations and emerging-technology experiments from the Man & Tech team."
    />
  );
}
