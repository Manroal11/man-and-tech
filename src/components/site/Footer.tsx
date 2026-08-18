import { Link } from "@tanstack/react-router";
import { footerNav, socialLinks } from "@/data/site";
import { Label } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-mt grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-lg font-bold tracking-[0.14em] uppercase">
            Man<span className="text-accent"> &amp; </span>Tech
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Digital Product Studio</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We build digital products for the real world.
          </p>
        </div>

        <nav className="md:col-span-4" aria-label="Footer">
          <Label>Navigate</Label>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <Label>Elsewhere</Label>
          <ul className="mt-5 space-y-3">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="inline-block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-mt flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Man &amp; Tech. All rights reserved.</p>
          <p className="font-mono tracking-[0.14em] uppercase">Built in-house</p>
        </div>
      </div>
    </footer>
  );
}
