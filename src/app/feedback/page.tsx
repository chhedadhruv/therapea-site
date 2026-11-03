import type { Metadata } from "next";

import { ButtonLink, Card, PageTitle } from "@/components/ui";
import { FEEDBACK_EMAIL, FEEDBACK_NOTE, feedbackMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Tell us what works, what doesn't, and what would help.",
  alternates: { canonical: "/feedback" },
};

export default function FeedbackPage() {
  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <PageTitle
        title="Send feedback"
        intro="Ideas, bugs, or something that felt off? We read every message."
      />
      <Card className="flex flex-col gap-4">
        <p className="font-semibold">{FEEDBACK_NOTE}</p>
        <div>
          <ButtonLink href={feedbackMailto()}>Email {FEEDBACK_EMAIL}</ButtonLink>
        </div>
        <p className="text-sm text-text-muted">
          This opens your email app. There&apos;s no form on this site, so nothing is stored here.
        </p>
      </Card>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Helpful details to include</h2>
        <ul className="flex list-disc flex-col gap-1 pl-6">
          <li>Your phone model and Android version</li>
          <li>The version you downloaded</li>
          <li>What you expected, and what happened instead</li>
        </ul>
      </section>
    </div>
  );
}
