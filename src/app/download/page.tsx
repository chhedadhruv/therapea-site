import type { Metadata } from "next";

import { ButtonLink, Card, PageTitle } from "@/components/ui";
import { formatSize, getLatestApk, type ApkRelease } from "@/lib/releases";
import { RELEASES_REPO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download the Thera-Pea Android app (APK), check its SHA-256, and install it safely.",
  alternates: { canonical: "/download" },
};

function ReleaseCard({ release }: { release: ApkRelease }) {
  const published = release.publishedAt
    ? new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(new Date(release.publishedAt))
    : null;
  return (
    <Card className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-semibold">Version {release.version}</h2>
        <p className="text-text-muted">
          {published ? `Released ${published} · ` : ""}
          {formatSize(release.sizeBytes)} ·{" "}
          <a className="underline" href={release.notesUrl}>
            Release notes
          </a>
        </p>
      </div>
      <div>
        <ButtonLink href={release.apkUrl}>Download {release.apkName}</ButtonLink>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">SHA-256 checksum</h3>
        {release.sha256 ? (
          <code className="rounded-lg bg-primary-soft p-3 text-sm break-all">{release.sha256}</code>
        ) : (
          <p className="text-text-muted">
            Not available yet. See the release notes for the checksum.
          </p>
        )}
      </div>
    </Card>
  );
}

function NoRelease() {
  return (
    <Card className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">Coming soon</h2>
      <p>
        The first Android release isn&apos;t out yet. Check back soon, or watch the{" "}
        <a className="underline" href={`https://github.com/${RELEASES_REPO}/releases`}>
          releases page on GitHub
        </a>
        .
      </p>
    </Card>
  );
}

export default async function DownloadPage() {
  const release = await getLatestApk();

  return (
    <div className="flex flex-col gap-10">
      <PageTitle
        title="Download Thera-Pea"
        intro="Free, for Android 7 and newer. An iPhone version is planned for the App Store."
      />

      {release ? <ReleaseCard release={release} /> : <NoRelease />}

      <section aria-labelledby="install" className="flex flex-col gap-4">
        <h2 id="install" className="text-2xl font-semibold">
          How to install
        </h2>
        <p>
          Thera-Pea isn&apos;t on Google Play yet, so Android will ask before installing it. The APK
          is signed by the developer and only ever published on this page.
        </p>
        <ol className="flex list-decimal flex-col gap-2 pl-6">
          <li>Tap the download button above, on your Android phone.</li>
          <li>
            When the download finishes, open it. If Android says your browser isn&apos;t allowed to
            install apps, tap <strong>Settings</strong> and turn on{" "}
            <strong>Allow from this source</strong>, then go back.
          </li>
          <li>
            Tap <strong>Install</strong>. If Google Play Protect asks you to scan the app, you can
            let it.
          </li>
          <li>
            After installing, you can turn <strong>Allow from this source</strong> off again.
          </li>
        </ol>
      </section>

      <section aria-labelledby="verify" className="flex flex-col gap-4">
        <h2 id="verify" className="text-2xl font-semibold">
          Check the download (optional)
        </h2>
        <p>
          The SHA-256 checksum lets you confirm the file wasn&apos;t changed. On a computer, run one
          of these and compare the result with the checksum above:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-surface p-3 text-sm">
          {`# macOS or Linux
shasum -a 256 therapea-*.apk

# Windows (PowerShell)
Get-FileHash .\\therapea-*.apk -Algorithm SHA256`}
        </pre>
      </section>

      <section aria-labelledby="updates" className="flex flex-col gap-4">
        <h2 id="updates" className="text-2xl font-semibold">
          Updates
        </h2>
        <p>
          The app doesn&apos;t update itself. To update, download the newest APK from this page and
          install it over the old one. Your entries stay on your phone. Never uninstall first:
          uninstalling deletes everything in the app.
        </p>
      </section>
    </div>
  );
}
