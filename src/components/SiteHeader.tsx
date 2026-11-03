import Link from "next/link";

import { Logo } from "./Logo";

const NAV = [
  { href: "/download", label: "Download" },
  { href: "/privacy", label: "Privacy" },
  { href: "/feedback", label: "Feedback" },
] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-2 px-4 py-4">
      <Link
        href="/"
        className="flex min-h-11 items-center gap-2 rounded-lg font-heading text-xl font-semibold"
      >
        <Logo className="size-8" />
        Thera-Pea
      </Link>
      <nav aria-label="Main">
        <ul className="flex flex-wrap gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-11 items-center rounded-full px-3 font-semibold hover:bg-primary-soft"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
