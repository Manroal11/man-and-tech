import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Man & Tech" },
      { name: "description", content: "Man & Tech builds its own software products alongside client work. The first releases are being prepared." },
      { property: "og:title", content: "Products — Man & Tech" },
      { property: "og:description", content: "Man & Tech builds its own software products alongside client work. The first releases are being prepared." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PlaceholderPage
      label="IN-HOUSE PRODUCTS"
      title="Products in progress."
      description="Man & Tech builds its own software products alongside client work. The first releases are being prepared."
    />
  );
}
