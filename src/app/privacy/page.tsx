import type { Metadata } from "next";

import { PageTitle } from "@/components/ui";
import policy from "@/content/privacy-policy.json";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "What Thera-Pea keeps on your phone, what leaves it, and your rights under India's DPDP Act, 2023.",
  alternates: { canonical: "/privacy" },
};

/** Same text as the app's Settings, Privacy policy (src/content/privacy-policy.json in the app). */
export default function PrivacyPage() {
  const updated = new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(
    new Date(`${policy.lastUpdated}T00:00:00+05:30`),
  );
  return (
    <article className="flex max-w-2xl flex-col gap-6">
      <PageTitle title={policy.title.en} intro={`Last updated ${updated}`} />
      {policy.sections.map((section) => (
        <section key={section.heading.en} className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">{section.heading.en}</h2>
          <p>{section.body.en}</p>
        </section>
      ))}
    </article>
  );
}
