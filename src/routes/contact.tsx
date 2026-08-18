import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Man & Tech" },
      { name: "description", content: "Share the problem you're solving and we'll come back with a clear, practical path to a working product." },
      { property: "og:title", content: "Contact — Man & Tech" },
      { property: "og:description", content: "Share the problem you're solving and we'll come back with a clear, practical path to a working product." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      label="LET'S BUILD"
      title="Tell us what you're making."
      description="Share the problem you're solving and we'll come back with a clear, practical path to a working product."
    />
  );
}
