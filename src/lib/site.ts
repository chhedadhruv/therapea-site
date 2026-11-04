export const SITE_URL = "https://therapea.dhruvchheda.com";
export const SITE_NAME = "Thera-Pea";
export const SITE_TITLE = "Thera-Pea: Mood & Journal";
export const SITE_DESCRIPTION =
  "A free, private self-help app: track your mood, journal, try calming exercises, and reach a helpline in one tap, even offline.";

export const FEEDBACK_EMAIL = "me@dhruvchheda.com";
export const FEEDBACK_NOTE =
  "Please don't include personal health details. If you're in crisis, call 14416.";

export function feedbackMailto(subject = "Thera-Pea feedback"): string {
  return `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/** Crisis numbers, matching the app's bundled helplines (src/content/helplines.json). */
export const EMERGENCY_NUMBER = "112";
export const TELE_MANAS = { name: "Tele-MANAS", number: "14416", alternate: "1-800-891-4416" };
