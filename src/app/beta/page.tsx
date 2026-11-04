import type { Metadata } from "next";

import { ButtonLink, Card, PageTitle } from "@/components/ui";
import { BETA_LINKS, PLAY_OPT_IN_URL } from "@/lib/beta";

export const metadata: Metadata = {
  title: "Join the beta",
  description:
    "Test Thera-Pea before it launches: join the Android beta on Google Play or the iPhone beta on TestFlight.",
  alternates: { canonical: "/beta" },
};

function NotOpenYet({ platform }: { platform: string }) {
  return (
    <p className="text-text-muted">The {platform} beta isn&apos;t open yet. Check back soon.</p>
  );
}

function AndroidCard({ group }: { group: string | null }) {
  return (
    <Card className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Android</h2>
      {group ? (
        <ol className="flex list-decimal flex-col gap-4 pl-6">
          <li className="flex flex-col gap-2">
            <span>
              Join the testers group with the Google account you use for Google Play. You won&apos;t
              get emails from it.
            </span>
            <span>
              <ButtonLink href={group}>Join the testers group</ButtonLink>
            </span>
          </li>
          <li className="flex flex-col gap-2">
            <span>
              Open the Google Play testing page and tap <strong>Become a tester</strong>.
            </span>
            <span>
              <ButtonLink href={PLAY_OPT_IN_URL} variant="secondary">
                Open the testing page
              </ButtonLink>
            </span>
          </li>
          <li>
            Install Thera-Pea from the link on that page. It can take a few minutes after joining
            before Google Play shows it.
          </li>
        </ol>
      ) : (
        <NotOpenYet platform="Android" />
      )}
    </Card>
  );
}

function IosCard({ testFlight }: { testFlight: string | null }) {
  return (
    <Card className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">iPhone</h2>
      {testFlight ? (
        <ol className="flex list-decimal flex-col gap-4 pl-6">
          <li>
            Install Apple&apos;s <strong>TestFlight</strong> app from the App Store.
          </li>
          <li className="flex flex-col gap-2">
            <span>Open the invite on your iPhone and tap Accept, then Install.</span>
            <span>
              <ButtonLink href={testFlight}>Open the TestFlight invite</ButtonLink>
            </span>
          </li>
        </ol>
      ) : (
        <NotOpenYet platform="iPhone" />
      )}
    </Card>
  );
}

export default function BetaPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle
        title="Join the beta"
        intro="Thera-Pea is free and in testing. Try it early, and tell us what works and what doesn't."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <AndroidCard group={BETA_LINKS.androidGroup} />
        <IosCard testFlight={BETA_LINKS.iosTestFlight} />
      </div>

      <section aria-labelledby="privacy" className="flex flex-col gap-4">
        <h2 id="privacy" className="text-2xl font-semibold">
          What joining shares
        </h2>
        <ul className="flex list-disc flex-col gap-2 pl-6">
          <li>
            Joining the Android testers group shares your Google account email with the developer.
            It&apos;s used only to give you access to test builds. Other members can&apos;t see it.
          </li>
          <li>
            Google Play and TestFlight are run by Google and Apple under their own privacy policies.
          </li>
          <li>
            The beta keeps your entries on your phone, just like the finished app. Nothing you write
            is sent to the developer.
          </li>
        </ul>
      </section>

      <section aria-labelledby="updates" className="flex flex-col gap-4">
        <h2 id="updates" className="text-2xl font-semibold">
          Updates and leaving
        </h2>
        <p>
          New test versions arrive through Google Play or TestFlight, like any other app update. You
          can leave any time from the same Google Play testing page, or in TestFlight. Leaving
          doesn&apos;t delete the app, but uninstalling it deletes everything in it, so export your
          data first if you want to keep it.
        </p>
        <div>
          <ButtonLink href="/feedback" variant="secondary">
            Send feedback
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
