import Link from "next/link";
import type { ReactNode } from "react";

const BUTTON_BASE =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2 text-center font-bold";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const style =
    variant === "primary"
      ? "bg-primary text-on-primary hover:opacity-90"
      : "border border-primary bg-surface text-text hover:bg-primary-soft";
  const className = `${BUTTON_BASE} ${style}`;
  // Internal routes use client navigation; mailto, tel and external links are plain links.
  return href.startsWith("/") ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-5 ${className}`}>{children}</div>
  );
}

export function PageTitle({ title, intro }: { title: string; intro?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 pt-6 pb-8">
      <h1 className="text-4xl font-semibold">{title}</h1>
      {intro ? <p className="text-lg text-text-muted">{intro}</p> : null}
    </div>
  );
}
