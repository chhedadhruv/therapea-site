import { EMERGENCY_NUMBER, TELE_MANAS } from "@/lib/site";

/** Shown at the top of every page. Wording matches the app's approved crisis copy. */
export function CrisisBanner() {
  return (
    <aside
      aria-label="Crisis support"
      className="border-b border-border bg-surface px-4 py-3 text-center text-sm"
    >
      <p>
        <strong>If you are in immediate danger,</strong> call{" "}
        <a className="font-bold text-crisis underline" href={`tel:${EMERGENCY_NUMBER}`}>
          {EMERGENCY_NUMBER}
        </a>
        . Talk to someone now: {TELE_MANAS.name}{" "}
        <a className="font-bold text-crisis underline" href={`tel:${TELE_MANAS.number}`}>
          {TELE_MANAS.number}
        </a>
        , free and confidential.
      </p>
    </aside>
  );
}
