/** Placeholder mark (a pea pod) until the app's real icon artwork exists. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill="var(--primary-soft)" />
      <path
        d="M6 22c4-10 14-14 20-12-2 8-10 14-20 12z"
        fill="var(--primary)"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="18.5" r="2.2" fill="var(--primary-soft)" />
      <circle cx="16.5" cy="16" r="2.2" fill="var(--primary-soft)" />
      <circle cx="21" cy="13.5" r="2.2" fill="var(--primary-soft)" />
    </svg>
  );
}
