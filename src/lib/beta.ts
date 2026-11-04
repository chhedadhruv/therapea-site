/** Beta-testing links. Pure (no Next.js imports), so `node --test` can load it. */

export const APP_ID = "com.dhruvchheda.therapea";

/** Google Play's opt-in page for the closed test. Works once the tester is in the Google Group. */
export const PLAY_OPT_IN_URL = `https://play.google.com/apps/testing/${APP_ID}`;

export interface BetaLinks {
  /** Google Group that is the tester list for the Play closed test, or null until it exists. */
  androidGroup: string | null;
  /** TestFlight public link, or null until it exists. */
  iosTestFlight: string | null;
}

const GROUP = /^https:\/\/groups\.google\.com\/g\/[a-z0-9._-]+$/i;
const TESTFLIGHT = /^https:\/\/testflight\.apple\.com\/join\/[a-z0-9]+$/i;

/** Throws on a malformed link, so a typo fails the build instead of shipping a broken button. */
export function checkBetaLinks(links: BetaLinks): BetaLinks {
  if (links.androidGroup !== null && !GROUP.test(links.androidGroup)) {
    throw new Error(`androidGroup must be a https://groups.google.com/g/<name> link`);
  }
  if (links.iosTestFlight !== null && !TESTFLIGHT.test(links.iosTestFlight)) {
    throw new Error(`iosTestFlight must be a https://testflight.apple.com/join/<code> link`);
  }
  return links;
}

export const BETA_LINKS: BetaLinks = checkBetaLinks({
  androidGroup: "https://groups.google.com/g/therapea-beta",
  iosTestFlight: null,
});
