# TaskFlow (intentionally vulnerable demo for GlideBox Shield)

**This is NOT a real app. Every key, user and row here is FAKE.** It is the source code of the
TaskFlow demo that GlideBox Shield scans (`/functions/v1/targets/taskflow`), kept small so the
"Fix by GitHub pull request" feature has a real repository to open a PR against.

It contains the same holes as the scanned demo, on purpose:

| Finding type | Where in this repo |
|---|---|
| `secret_in_bundle` | `src/config.js` (fake OpenAI and Stripe secret keys shipped to the browser) |
| `rls_disabled` | `supabase/migrations/0001_init.sql` (tables `profiles`, `users`, `tasks` without Row Level Security) |
| `exposed_env` | `public/.env` (env file served as a public static file) |
| `unauth_api` | `api/admin/users.js` (admin endpoint without any auth check) |
| `cors_wildcard` | `api/admin/users.js` (`Access-Control-Allow-Origin: *`) |
| `missing_headers` | `vercel.json` (no security headers) |

Fake keys that look like real provider formats are split into parts and joined at runtime,
so GitHub push protection and secret scanners do not flag this repository. They are not real
and never were.

## Use for the live demo

1. Create an empty GitHub repository (e.g. `taskflow-demo`), then from this folder:
   `git init && git add . && git commit -m "TaskFlow demo" && git branch -M main && git remote add origin <url> && git push -u origin main`
2. Create a fine-grained personal access token for **only that repository** with
   *Contents: read and write* and *Pull requests: read and write*.
3. In GlideBox Shield scan the TaskFlow demo, open a finding and use "Open fix PR on GitHub"
   with `owner/taskflow-demo` and the token. The token is used for that one request and never stored.

Run locally (optional): `npm install && npm run dev`.
