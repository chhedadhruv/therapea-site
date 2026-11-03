# therapea-site

Landing page for [Thera-Pea](https://therapea.dhruvchheda.com), a free, private self-help app.
Built with Next.js and deployed on Vercel.

| Page        | What it does                                                                       |
| ----------- | ---------------------------------------------------------------------------------- |
| `/`         | What the app is and isn't, with a crisis banner on every page                      |
| `/download` | Latest signed APK from this repo's GitHub Releases, its SHA-256, and install steps |
| `/privacy`  | The privacy policy, the same text as the app's Settings, Privacy policy            |
| `/feedback` | A mailto link with a privacy note. No form, nothing stored                         |

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

## Publishing an APK

1. In the app repo, run `yarn build:preview:android` (EAS, `preview` profile, signed APK).
2. Create a release here with tag `v<version>` (for example `v1.0.0`) and attach the APK as
   `therapea-<version>.apk`. Don't mark it as a pre-release.
3. GitHub computes the asset's SHA-256, and `/download` shows it within an hour.

## Deploy (Vercel)

1. `vercel login`, then import this repo in Vercel (framework: Next.js, no environment variables).
2. Add the domain `therapea.dhruvchheda.com` in the Vercel project.
3. At your DNS provider, add `CNAME therapea -> cname.vercel-dns.com`.
4. Leave Vercel Web Analytics and Speed Insights **off**.
