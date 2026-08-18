import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { ActionLink } from "./ui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-mt flex h-16 items-center justify-between md:h-20" aria-label="Main">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-[0.95rem] font-bold tracking-[0.14em] uppercase"
        >
          Man<span className="text-accent"> &amp; </span>Tech
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ActionLink to="/contact" variant="primary" className="h-10 min-h-10 px-4">
            Let&apos;s build <span aria-hidden>→</span>
          </ActionLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-400 md:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="container-mt flex flex-col py-2">
          {navItems.map((item, i) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${open ? i * 40 : 0}ms` }}
                className={cn(
                  "font-display block border-b border-border py-4 text-2xl font-medium transition-all duration-300",
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="container-mt pt-4 pb-8">
          <ActionLink to="/contact" variant="accent" className="w-full">
            Let&apos;s build <span aria-hidden>→</span>
          </ActionLink>
        </div>
      </div>
    </header>
  );
}
