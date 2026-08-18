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

export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  visual: "agent" | "analytics" | "commerce";
};

export const projects: Project[] = [
  {
    id: "ai-customer-agent",
    index: "01",
    title: "AI Customer Agent",
    description: "AI-powered customer communication platform.",
    tags: ["AI", "SaaS"],
    visual: "agent",
  },
  {
    id: "business-intelligence",
    index: "02",
    title: "Business Intelligence",
    description: "Modern analytics platform designed to help businesses understand their data.",
    tags: ["Web Application", "Data"],
    visual: "analytics",
  },
  {
    id: "digital-commerce",
    index: "03",
    title: "Digital Commerce",
    description: "Modern e-commerce experience for growing businesses.",
    tags: ["Website", "Web Application"],
    visual: "commerce",
  },
];
