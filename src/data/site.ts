export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: "Work", to: "/work" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Lab", to: "/lab" },
  { label: "About", to: "/about" },
];

export const footerNav: NavItem[] = [...navItems, { label: "Contact", to: "/contact" }];

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "X", href: "#" },
];

export type Capability = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    id: "software",
    label: "01",
    title: "Software",
    description: "Modern websites, web applications and custom business systems.",
  },
  {
    id: "saas",
    label: "02",
    title: "SaaS",
    description: "Subscription-based software products designed around real business problems.",
  },
  {
    id: "ai",
    label: "03",
    title: "AI",
    description: "AI-powered applications, agents and intelligent business tools.",
  },
  {
    id: "automation",
    label: "04",
    title: "Automation",
    description: "Digital workflows that reduce repetitive work and improve efficiency.",
  },
];

export type ProjectStatus = "Concept" | "Planned" | "In Development" | "Internal Tool";

export type Project = {
  id: string;
  index: string;
  title: string;
  tagline?: string;
  description: string;
  status: ProjectStatus;
  cta: string;
  tags: string[];
  visual: "mate" | "agent" | "analytics" | "commerce";
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    id: "mate",
    index: "01",
    title: "MATE",
    tagline: "Your Digital Employee.",
    description:
      "An AI-powered digital employee that handles routine business work — conversations, follow-ups, documents and daily operations — so teams can focus on what matters.",
    status: "In Development",
    cta: "Learn more",
    tags: ["AI", "SaaS", "Automation"],
    visual: "mate",
    flagship: true,
  },
  {
    id: "ai-customer-agent",
    index: "02",
    title: "AI Customer Agent",
    description: "An AI communication layer that answers, qualifies and routes customer messages.",
    status: "Concept",
    cta: "Coming soon",
    tags: ["AI", "SaaS"],
    visual: "agent",
  },
  {
    id: "business-intelligence",
    index: "03",
    title: "Business Intelligence",
    description: "An analytics workspace that turns everyday business data into clear decisions.",
    status: "Planned",
    cta: "Coming soon",
    tags: ["Web Application", "Data"],
    visual: "analytics",
  },
  {
    id: "digital-commerce",
    index: "04",
    title: "Digital Commerce",
    description: "A modern commerce foundation for businesses selling online in growing markets.",
    status: "Concept",
    cta: "Coming soon",
    tags: ["Website", "Web Application"],
    visual: "commerce",
  },
];
