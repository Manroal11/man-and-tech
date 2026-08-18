import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium tracking-tight " +
  "transition-[transform,background-color,border-color,color,opacity] duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-background active:scale-[0.98] min-h-11 px-5";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/88",
  accent: "bg-accent text-accent-foreground hover:brightness-108",
  outline: "border border-border-strong text-foreground hover:bg-surface hover:border-foreground/35",
  ghost: "text-muted-foreground hover:text-foreground",
} as const;

export type ActionVariant = keyof typeof variants;

export function ActionLink({
  to,
  href,
  variant = "primary",
  className,
  children,
}: {
  to?: string;
  href?: string;
  variant?: ActionVariant;
  className?: string;
  children: ReactNode;
}) {
  const cls = cn(base, variants[variant], className);
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href ?? "#"} className={cls}>
      {children}
    </a>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("label-xs", className)}>{children}</p>;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  action,
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center",
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "text-center")}>
        {label ? <Label className="mb-4">{label}</Label> : null}
        <h2 className="text-3xl leading-[1.05] font-semibold text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
