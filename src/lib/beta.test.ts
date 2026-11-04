import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { BETA_LINKS, PLAY_OPT_IN_URL, checkBetaLinks } from "./beta.ts";

describe("checkBetaLinks", () => {
  it("accepts missing links, so the page can say the beta isn't open yet", () => {
    const links = { androidGroup: null, iosTestFlight: null };
    assert.deepEqual(checkBetaLinks(links), links);
  });

  it("accepts a Google Group and a TestFlight public link", () => {
    const links = {
      androidGroup: "https://groups.google.com/g/therapea-beta",
      iosTestFlight: "https://testflight.apple.com/join/AbC123xY",
    };
    assert.deepEqual(checkBetaLinks(links), links);
  });

  it("rejects links to anywhere else", () => {
    assert.throws(() =>
      checkBetaLinks({ androidGroup: "https://example.com/g/therapea", iosTestFlight: null }),
    );
    assert.throws(() =>
      checkBetaLinks({ androidGroup: "http://groups.google.com/g/therapea", iosTestFlight: null }),
    );
    assert.throws(() =>
      checkBetaLinks({ androidGroup: null, iosTestFlight: "https://apple.com/join/AbC123" }),
    );
  });

  it("has valid configured links", () => {
    assert.doesNotThrow(() => checkBetaLinks(BETA_LINKS));
  });
});

describe("PLAY_OPT_IN_URL", () => {
  it("points at the app's Play testing page", () => {
    assert.equal(PLAY_OPT_IN_URL, "https://play.google.com/apps/testing/com.dhruvchheda.therapea");
  });
});
