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
      "An AI-powered digital employee designed to help businesses communicate with customers, automate repetitive work and operate more efficiently.",
    status: "In Development",
    cta: "Explore MATE",
    tags: ["AI", "Automation", "SaaS"],

    visual: "mate",
    flagship: true,
  },
  {
    id: "personal-performance-system",
    index: "02",
    title: "Personal Performance System",
    description:
      "A productivity platform that compares what you planned to accomplish with what you actually achieved, turning daily execution into measurable performance insights.",
    status: "Concept",
    cta: "View concept",
    tags: ["Productivity", "Analytics", "SaaS"],
    visual: "agent",
  },
  {
    id: "business-intelligence",
    index: "03",
    title: "Business Intelligence Platform",
    description:
      "A digital platform designed to transform business data into clear insights and actionable decisions.",
    status: "Planned",
    cta: "View concept",
    tags: ["AI", "Analytics", "Web Application"],
    visual: "analytics",
  },
  {
    id: "digital-commerce",
    index: "04",
    title: "Digital Commerce Platform",
    description:
      "A modern commerce platform designed to help businesses manage and grow their digital sales.",
    status: "Planned",
    cta: "View concept",
    tags: ["E-commerce", "Web Application"],
    visual: "commerce",
  },
];

