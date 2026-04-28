# Hermes Showcase

> A recruiter-facing portfolio site that documents the personal AI ops platform I built and run on Linux.

**🌐 Live site:** https://elspaniard97.github.io/hermes-showcase/

---

## What this is

This repo is the source for a static showcase site about **Hermes** — a personal multi-agent AI platform I built and operate on a Dell XPS 15 7590 running Ubuntu 24.04. The site walks through the architecture, the components, and the engineering decisions behind it.

The system itself includes:

- **Achilles** — a Discord-resident AI assistant with a sharp persona, multi-tool access (image gen, video gen, YouTube transcription, code execution, scheduled jobs).
- **Hermes Gateway** — a unified message-routing layer that lets one agent persona operate seamlessly across Telegram, Discord, and other platforms.
- **Obsidian Second Brain** — a git-versioned vault the agent reads from and writes to for persistent, structured memory across sessions.
- **Skills system** — modular procedural memory the agent loads on demand instead of stuffing one giant system prompt.
- **Autonomous agents & cron** — scheduled fresh-session agent runs for daily briefings, mission-control reports, and autonomous QA.

## Stack

- **Site:** Pure static HTML + Tailwind (CDN) + vanilla JS — no build step.
- **Diagrams:** Inline SVG, hand-authored.
- **Hosting:** GitHub Pages, deployed from `main`.
- **CI:** GitHub Actions running [gitleaks](https://github.com/gitleaks/gitleaks) (secrets) and [lychee](https://github.com/lycheeverse/lychee) (link check) on every push and PR.

## Features

- 🌓 Dark / light mode toggle with `localStorage` persistence and `prefers-color-scheme` respect
- 📱 Fully responsive (375 px and up)
- ♿ Skip-to-content link, keyboard navigable, visible focus rings, `prefers-reduced-motion` respected
- 🎯 Sticky nav with scroll-spy (active section highlighted)
- ✨ Scroll-triggered fade-ins, hover micro-interactions, animated gradient hero
- 📋 Copy-to-clipboard on code snippets
- 🖼️ Open Graph + Twitter Card metadata for social previews
- 🛟 Custom 404 page

## Local preview

No build step — just open the file:

```bash
git clone https://github.com/ElSpaniard97/hermes-showcase.git
cd hermes-showcase
xdg-open index.html       # Linux
# or: open index.html     # macOS
# or: start index.html    # Windows
```

For a real local server (recommended for relative paths to behave like Pages):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
.
├── index.html                  # one-pager, all top-level sections
├── 404.html                    # custom not-found page
├── assets/
│   ├── styles.css              # custom CSS overrides
│   ├── main.js                 # theme toggle, scroll-spy, animations
│   ├── favicon.svg
│   ├── og-cover.svg            # 1200x630 social card
│   └── diagrams/               # inline-able architecture SVGs
├── projects/                   # per-component case-study pages
│   ├── achilles.html
│   ├── hermes-gateway.html
│   ├── obsidian-second-brain.html
│   ├── skills-system.html
│   └── autonomous-agents.html
└── .github/workflows/ci.yml    # gitleaks + link check
```

## Security posture

This is a public site about a system that handles personal data and credentials. Some explicit rules I kept while building it:

- **No real source code** from the underlying agent runtime is published here — every code snippet on the site is illustrative pseudocode written fresh.
- **No API keys, bot tokens, channel/chat IDs, webhook URLs, IPs, or phone numbers** appear anywhere.
- **No screenshots of real conversations** — chat-bubble examples are hand-coded HTML mock-ups.
- **Secret scanning** runs on every commit via `gitleaks` (in CI) and a `pre-commit` hook locally.
- **`.gitignore`** explicitly excludes `.env`, `*.key`, `*.pem`, `auth.json`, `state.db*`, and `secrets/`.

## Contact

- 📧 **Email:** ezekielcorrea2016@gmail.com
- 💼 **LinkedIn:** [www.linkedin.com/in/ezekiel-correa-117a50305](https://www.linkedin.com/in/ezekiel-correa-117a50305)
- 🐙 **GitHub:** [github.com/ElSpaniard97](https://github.com/ElSpaniard97)
- 📄 **Full résumé:** [ElSpaniard97.github.io/ezekiel-correa-resume](https://ElSpaniard97.github.io/ezekiel-correa-resume/)

## License

[MIT](./LICENSE) © Ezekiel Correa
