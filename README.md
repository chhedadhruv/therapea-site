# therapea-site

Landing page for [Thera-Pea](https://therapea.dhruvchheda.com), a free, private self-help app.
Built with Next.js and deployed on Vercel.

| Page        | What it does                                                             |
| ----------- | ------------------------------------------------------------------------ |
| `/`         | What the app is and isn't, with a crisis banner on every page            |
| `/beta`     | How to join the Android (Play closed test) and iPhone (TestFlight) betas |
| `/privacy`  | The privacy policy, the same text as the app's Settings, Privacy policy  |
| `/feedback` | A mailto link with a privacy note. No form, nothing stored               |

**No analytics, cookies or third-party scripts.** The Content Security Policy in
`next.config.ts` only allows this origin. Keep it that way.

## Develop

```bash
yarn install
yarn dev        # http://localhost:3000
yarn verify     # lint + typecheck + format:check + test + build
```

Package manager: Yarn only.

## Keeping content in sync with the app

- `src/content/privacy-policy.json` is a copy of `src/content/privacy-policy.json` in the app
  repo. Change it there first, then copy it here.
- Crisis numbers in `src/lib/site.ts` must match the app's `src/content/helplines.json`. Crisis
  wording needs the developer's approval, just as in the app.

## Opening the beta

Links live in `src/lib/beta.ts` (`BETA_LINKS`). Each platform shows "isn't open yet" until its
link is set, and a malformed link fails the build. `/download` redirects to `/beta`.

- **Android:** create a Google Group (for example `therapea-beta`), set "Who can join" to
  "Anyone on the web can join" and "Who can see members" to "Group managers". In Play Console,
  add the group's email as the tester list of the closed test. Set `androidGroup` to
  `https://groups.google.com/g/<name>`.
- **iPhone:** in App Store Connect, open TestFlight, add an external testing group, turn on its
  public link, and set `iosTestFlight` to `https://testflight.apple.com/join/<code>`.

## Deploy (Vercel)

1. `vercel login`, then import this repo in Vercel (framework: Next.js, no environment variables).
2. Add the domain `therapea.dhruvchheda.com` in the Vercel project.
3. At your DNS provider, add `CNAME therapea -> cname.vercel-dns.com`.
4. Leave Vercel Web Analytics and Speed Insights **off**.
