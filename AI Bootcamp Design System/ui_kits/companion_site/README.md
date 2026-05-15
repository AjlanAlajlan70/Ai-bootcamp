# UI kit — Workshop Companion Website

A working, mobile-first prototype of the معسكر التطبيقات companion site. Open `index.html` to interact.

## What's inside

- **Home** — hero with the mascot, three camp rules, four-day overview with live progress dots wired to the boss-fight checklists.
- **Day pages** (1–4) — big idea, key concepts with "عرض التفاصيل ↓" expanders, and the boss-fight checklist that persists to `localStorage`.
- **Commands** — `/plan`, `/context`, `/compact` (with 70% warning callout), `/clear`, `/rewind`, `/simplify`, `/security-review`, `/diff`. One-click copy on every card.
- **Prompts** — copyable prompts for debugging, security review, PRD creation, code simplification, README writing.

## Files

| File | What it is |
|---|---|
| `index.html` | Shell + all script tags. Open this. |
| `data.js` | Curriculum content (Arabic copy, days, commands, prompts). Placeholder text — please replace with the real curriculum. |
| `primitives.jsx` | `Button`, `Card`, `Pill`, `CopyButton`, `Mascot`, `Icon` — reusable across pages. |
| `Shell.jsx` | App container, mobile-frame layout, bottom nav, routing state. |
| `HomePage.jsx` | Home view (hero + rules + day cards). |
| `DayPage.jsx` | Per-day view (big idea + concepts + boss fight). |
| `CommandsPage.jsx` | Claude Code command reference. |
| `PromptsPage.jsx` | Prompt library. |
| `app.jsx` | Mounts `<Shell>` into `#root`. |

## Interactions

- Bottom-nav taps switch views. Day list shows on the "Days" tab; tap a day to dive in.
- Boss-fight checkboxes save to `localStorage` under key `bootcamp:progress:day-{N}`. Home progress dots read from the same keys, so completing items on a day page updates home automatically.
- Copy buttons use the Clipboard API; on success the button label flips to "تم النسخ ✓" for ~1.2s.
- "عرض التفاصيل ↓" toggles a height-animated panel.

## Known gaps

- Curriculum copy is **placeholder**. Real big-idea sentences and concept lists are TODO.
- Mascot and logo are placeholders (see `assets/`).
- This is a prototype, not a Vite app yet — when you scaffold the production project, lift the JSX files into `src/` and the data into a real module. The CSS variables in `colors_and_type.css` can be imported into your Vite app as a global stylesheet.
