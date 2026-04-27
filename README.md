# VM 2026 Tipping

Internal company tipping competition for the 2026 FIFA World Cup (Canada · Mexico · USA).

Built as a static web app backed by [Supabase](https://supabase.com) for data storage and API.

## Pages

| Page | Description |
|---|---|
| `index.html` | Participant registration and prediction form |
| `report.html` | Public leaderboard with search and filters |
| `admin.html` | Admin panel — protected by Azure AD login |

## Local development

1. Copy `config.template.js` to `config.js` and fill in your Supabase credentials
2. Open `index.html` in a browser — no build step required

> `config.js` is in `.gitignore` and must never be committed.

## Deployment

Hosted on **Azure Static Web Apps** (West Europe).

**First time setup** — run the `create-azure-static-webapp` workflow manually from GitHub Actions. This creates the SWA and AAD app registration. After it completes:

1. Copy the SWA deployment token from Azure Portal → add as GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN`
2. Copy the AAD Client ID and create a client secret → add both as Application Settings on the SWA in Azure Portal (`AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET`)

**Ongoing deploys** — every push to `main` triggers `update-azure-static-webapp` automatically.

## GitHub Secrets required

| Secret | Purpose |
|---|---|
| `AML_AZURE_CREDENTIALS` | Azure service principal for SWA creation |
| `PAT_AZ_STATICWEBAPP` | GitHub PAT for linking repo to Azure |
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | SWA deployment token (set after first deploy) |
| `SUPABASE_URL` | Supabase project hostname |
| `SUPABASE_ANON` | Supabase anon/public key |

## Security

- `admin.html` and `admin.js` are gated behind Azure AD — unauthenticated requests are redirected to Microsoft login
- Login is restricted to the company AAD tenant
- All responses include security headers (CSP, HSTS, X-Frame-Options, etc.)
- Supabase data is stored in West Europe and protected by Row Level Security
