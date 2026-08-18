import type { ReactNode } from "react";
import { ActionLink, Label } from "./ui";
import { Reveal } from "./Reveal";

export function PlaceholderPage({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="container-mt py-20 md:py-28">
      <Reveal className="max-w-3xl">
        <Label>{label}</Label>
        <h1 className="mt-5 text-4xl leading-[1.03] font-semibold text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-9">
          <ActionLink to="/contact" variant="outline">
            Start a project <span aria-hidden>→</span>
          </ActionLink>
        </div>
      </Reveal>
      {children ? <div className="mt-16 md:mt-20">{children}</div> : null}
    </div>
  );
}
