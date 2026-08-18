import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Man & Tech" },
      { name: "description", content: "Man & Tech is a digital product studio focused on building useful software, exploring emerging technologies and turning ideas into products." },
      { property: "og:title", content: "About — Man & Tech" },
      { property: "og:description", content: "Man & Tech is a digital product studio focused on building useful software, exploring emerging technologies and turning ideas into products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      label="ABOUT US"
      title="A studio built around building."
      description="Man & Tech is a digital product studio focused on building useful software, exploring emerging technologies and turning ideas into products."
    />
  );
}
