import type { Metadata } from "next";

import { ButtonLink, Card, PageTitle } from "@/components/ui";
import { FEEDBACK_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your data",
  description:
    "How to delete everything Thera-Pea stores, what is deleted straight away, and what is kept for a short time.",
  alternates: { canonical: "/delete-data" },
};

const DELETED_NOW = [
  {
    what: "Mood check-ins, journal entries, thought records, safety plan, activities, good things and questionnaire answers",
    when: "Deleted from your phone straight away. They were never on our servers.",
  },
  {
    what: "Settings, reminders, app lock PIN and the database encryption key",
    when: "Deleted from your phone straight away.",
  },
  {
    what: "The app's random installation identifier (used to check for helpline updates)",
    when: "The app asks Google to delete it straight away, or the next time you open the app with internet if you're offline. Google then removes it within 180 days.",
  },
] as const;

const KEPT_FOR_A_WHILE = [
  {
    what: "Crash reports, only if you turned them on",
    when: "Deleted automatically after 90 days.",
  },
  {
    what: "Usage counts, only if you turned them on",
    when: "Deleted automatically after 2 months.",
  },
] as const;

function RetentionTable({ rows }: { rows: readonly { what: string; when: string }[] }) {
  return (
    <Card className="flex flex-col gap-4">
      <dl className="flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.what} className="flex flex-col gap-1">
            <dt className="font-semibold">{row.what}</dt>
            <dd className="text-text-muted">{row.when}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

export default function DeleteDataPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle
        title="Delete your Thera-Pea data"
        intro="Thera-Pea, by Dhruv Chheda, keeps your entries on your phone. You can delete everything yourself, any time, from inside the app."
      />

      <section aria-labelledby="steps" className="flex flex-col gap-4">
        <h2 id="steps" className="text-2xl font-semibold">
          How to delete everything
        </h2>
        <ol className="flex list-decimal flex-col gap-2 pl-6">
          <li>
            Open Thera-Pea and go to <strong>Settings</strong>.
          </li>
          <li>
            Under <strong>Your data</strong>, tap <strong>Delete everything</strong>.
          </li>
          <li>
            If you want a copy first, tap <strong>Export first</strong>. Otherwise tap{" "}
            <strong>Continue</strong>.
          </li>
          <li>
            Type <strong>DELETE</strong> and tap <strong>Delete everything</strong>.
          </li>
        </ol>
        <p>
          This can&apos;t be undone. The app returns to its welcome screen, empty. You don&apos;t
          need to contact us, and there&apos;s no account to close.
        </p>
      </section>

      <section aria-labelledby="deleted" className="flex flex-col gap-4">
        <h2 id="deleted" className="text-2xl font-semibold">
          What is deleted
        </h2>
        <RetentionTable rows={DELETED_NOW} />
      </section>

      <section aria-labelledby="kept" className="flex flex-col gap-4">
        <h2 id="kept" className="text-2xl font-semibold">
          What is kept for a short time
        </h2>
        <p>
          These are off unless you turned them on in Settings, Privacy. They never include anything
          you wrote, and they aren&apos;t linked to your name or email, so we can&apos;t look them
          up for you. They are deleted automatically:
        </p>
        <RetentionTable rows={KEPT_FOR_A_WHILE} />
      </section>

      <section aria-labelledby="no-app" className="flex flex-col gap-4">
        <h2 id="no-app" className="text-2xl font-semibold">
          If you can&apos;t open the app
        </h2>
        <p>
          Uninstalling Thera-Pea deletes everything on your phone. The random installation
          identifier isn&apos;t deleted from Google&apos;s systems that way, but it isn&apos;t
          linked to you. For any other request, email us and we will reply within 30 days.
        </p>
        <div>
          <ButtonLink
            href={`mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent("Thera-Pea data request")}`}
          >
            Email {FEEDBACK_EMAIL}
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
