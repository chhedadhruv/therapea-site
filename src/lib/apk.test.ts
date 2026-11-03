import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { formatSize, toApkRelease, type GitHubRelease } from "./apk.ts";

const HASH = "a".repeat(64);

function release(overrides: Partial<GitHubRelease> = {}): GitHubRelease {
  return {
    tag_name: "v1.0.0",
    published_at: "2026-11-03T10:00:00Z",
    html_url: "https://github.com/chhedadhruv/therapea-site/releases/tag/v1.0.0",
    draft: false,
    prerelease: false,
    assets: [
      {
        name: "therapea-1.0.0.apk",
        size: 52_428_800,
        browser_download_url: "https://github.com/x/y/releases/download/v1.0.0/therapea-1.0.0.apk",
        digest: `sha256:${HASH.toUpperCase()}`,
      },
    ],
    ...overrides,
  };
}

describe("toApkRelease", () => {
  it("reads the version, APK and checksum", () => {
    assert.deepEqual(toApkRelease(release()), {
      version: "1.0.0",
      publishedAt: "2026-11-03T10:00:00Z",
      notesUrl: "https://github.com/chhedadhruv/therapea-site/releases/tag/v1.0.0",
      apkName: "therapea-1.0.0.apk",
      apkUrl: "https://github.com/x/y/releases/download/v1.0.0/therapea-1.0.0.apk",
      sizeBytes: 52_428_800,
      sha256: HASH,
    });
  });

  it("ignores drafts, prereleases and releases without an APK", () => {
    assert.equal(toApkRelease(release({ draft: true })), null);
    assert.equal(toApkRelease(release({ prerelease: true })), null);
    assert.equal(toApkRelease(release({ assets: [] })), null);
  });

  it("leaves the checksum empty when GitHub has no valid digest", () => {
    const [asset] = release().assets;
    assert.ok(asset);
    assert.equal(toApkRelease(release({ assets: [{ ...asset, digest: null }] }))?.sha256, null);
    assert.equal(
      toApkRelease(release({ assets: [{ ...asset, digest: "md5:abc" }] }))?.sha256,
      null,
    );
  });
});

describe("formatSize", () => {
  it("shows megabytes with one decimal", () => {
    assert.equal(formatSize(52_428_800), "50.0 MB");
  });
});
