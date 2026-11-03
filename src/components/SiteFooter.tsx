import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-8 text-sm text-text-muted">
        <p>
          Thera-Pea is a self-help tool. It is not therapy, not a medical device and not an
          emergency service, and it never diagnoses.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Link className="underline" href="/privacy">
            Privacy policy
          </Link>
          <Link className="underline" href="/feedback">
            Send feedback
          </Link>
          <span>Made in India. No ads, no trackers.</span>
        </p>
      </div>
    </footer>
  );
}
