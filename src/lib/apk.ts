/** Pure helpers for GitHub Releases data. No Next.js imports, so `node --test` can load them. */

export interface ApkRelease {
  version: string;
  publishedAt: string;
  notesUrl: string;
  apkName: string;
  apkUrl: string;
  sizeBytes: number;
  /** Lowercase hex SHA-256 of the APK, or null if GitHub hasn't computed it. */
  sha256: string | null;
}

export interface GitHubAsset {
  name: string;
  size: number;
  browser_download_url: string;
  digest?: string | null;
}

export interface GitHubRelease {
  tag_name: string;
  published_at: string | null;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
  assets: GitHubAsset[];
}

const SHA256 = /^sha256:([0-9a-f]{64})$/i;

export function toApkRelease(release: GitHubRelease): ApkRelease | null {
  if (release.draft || release.prerelease) return null;
  const apk = release.assets.find((asset) => asset.name.toLowerCase().endsWith(".apk"));
  if (!apk) return null;
  const digest = apk.digest ? SHA256.exec(apk.digest) : null;
  return {
    version: release.tag_name.replace(/^v/, ""),
    publishedAt: release.published_at ?? "",
    notesUrl: release.html_url,
    apkName: apk.name,
    apkUrl: apk.browser_download_url,
    sizeBytes: apk.size,
    sha256: digest?.[1]?.toLowerCase() ?? null,
  };
}

export function formatSize(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
