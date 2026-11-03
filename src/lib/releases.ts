import { cacheLife } from "next/cache";

import { toApkRelease, type ApkRelease, type GitHubRelease } from "./apk";
import { RELEASES_REPO } from "./site";

export { formatSize, type ApkRelease } from "./apk";

/**
 * The latest published APK on GitHub Releases, refreshed hourly. Returns null when there is no
 * release yet or GitHub can't be reached, so the page can say so instead of failing.
 */
export async function getLatestApk(): Promise<ApkRelease | null> {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(`https://api.github.com/repos/${RELEASES_REPO}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
    });
    if (!response.ok) return null;
    return toApkRelease((await response.json()) as GitHubRelease);
  } catch {
    return null;
  }
}
