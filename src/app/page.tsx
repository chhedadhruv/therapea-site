import { ButtonLink, Card } from "@/components/ui";

const FEATURES = [
  {
    title: "Mood check-ins",
    body: "Notice how you feel, with feelings, activities and a note. See patterns over time.",
  },
  { title: "Private journal", body: "Write freely, with prompts, tags and search." },
  {
    title: "Thought records",
    body: "Look at a difficult thought from another angle, one step at a time.",
  },
  {
    title: "Calm, right now",
    body: "Guided breathing and 5-4-3-2-1 grounding for hard moments.",
  },
  {
    title: "Safety plan",
    body: "Your warning signs, coping steps and people to call, ready when you need them.",
  },
  {
    title: "Help in one tap",
    body: "The SOS button is on every screen, even when the app is locked, and works without internet.",
  },
] as const;

const PRIVACY = [
  "Everything you write stays on your phone, in an encrypted database.",
  "No account, no ads, and nothing to sell.",
  "Crash reports and usage counts are off unless you turn them on.",
  "Export or permanently delete everything, any time.",
] as const;

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6 pt-10">
        <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">
          A calm, private space for hard days
        </h1>
        <p className="max-w-2xl text-lg text-text-muted">
          Thera-Pea is a free self-help app. Notice how you feel, write things down, and practise
          skills that can help, without ads, accounts or a subscription.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/beta">Join the beta</ButtonLink>
          <ButtonLink href="/privacy" variant="secondary">
            How we protect your privacy
          </ButtonLink>
        </div>
      </section>

      <section aria-labelledby="features" className="flex flex-col gap-6">
        <h2 id="features" className="text-2xl font-semibold">
          What&apos;s inside
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <li key={feature.title}>
              <Card className="h-full">
                <h3 className="mb-1 text-lg font-semibold">{feature.title}</h3>
                <p className="text-text-muted">{feature.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="privacy" className="flex flex-col gap-4">
        <h2 id="privacy" className="text-2xl font-semibold">
          Private by default
        </h2>
        <ul className="flex list-disc flex-col gap-2 pl-6">
          {PRIVACY.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="isnt" className="flex flex-col gap-4">
        <h2 id="isnt" className="text-2xl font-semibold">
          What Thera-Pea isn&apos;t
        </h2>
        <Card>
          <ul className="flex list-disc flex-col gap-2 pl-6">
            <li>Therapy, or a replacement for a mental health professional.</li>
            <li>A medical device. It never diagnoses anything.</li>
            <li>An emergency service. In a crisis, call a helpline.</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
