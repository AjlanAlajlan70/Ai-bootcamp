# AI Bootcamp Design System
### معسكر بناء التطبيقات بالذكاء الاصطناعي · King Saud University

A dark, energetic, mobile-first design system for the workshop companion site of a 4-day AI coding camp at King Saud University in Riyadh, Saudi Arabia. Audience: Arabic-speaking university students, complete coding beginners. The site's job is to keep a beginner oriented, confident, and unblocked — like a polished dark-mode game guide crossed with a dev reference.

---

## Context

| | |
|---|---|
| **Product** | معسكر بناء التطبيقات (workshop companion website) |
| **Audience** | Arabic-speaking university students, total beginners at coding |
| **Format** | 4-day in-person bootcamp with companion site |
| **Surfaces** | Home · Day 1–4 · Claude Code commands · Prompt library |
| **Language** | Arabic (RTL), bilingual where useful for technical terms |
| **Platform** | Static React + Vite app, deployable to GitHub Pages |

### Sources given
- GitHub: `AjlanAlajlan70/Ai-bootcamp` — present but empty (stub README only at time of work). No design or code source of truth was provided; this system is built from the spec in the brief.

> If you have access to the bootcamp's curriculum, instructor decks, or photos of the in-person sessions, drop them into `assets/` and update this README so future passes can lift real copy and imagery instead of leaning on the spec alone.

---

## Brand identity

**The vibe.** A dark, calm-but-energetic room. Beginners walking in feel that the screen is on their side. The teal cat mascot is the friendly co-pilot — never the hero of the page, but it's quietly present on empty states, completion screens, and "you got this" moments. Think Discord-meets-game-guide: dense enough to feel like a real reference, warm enough not to scare a first-time coder.

**The metaphor.** Each day of the bootcamp ends in a "boss fight" (a checklist of things the student has to ship). The companion site borrows lightly from RPG-guide language without going full-gamer: no XP bars, no skill trees, but yes to "Boss Fight," progress dots, and a small completion celebration.

---

## Content fundamentals

### Tone
- **Encouraging, plainspoken, and short.** Beginners are the audience. No jargon without a one-line gloss. Each concept fits in a tweet before it earns a "show details ↓".
- **Direct address, second person.** Arabic: أنت / اكتب / جرّب. The site talks to one student at a time.
- **Optimistic, not hype.** "خطوة بسيطة" rather than "🚀🚀". Confidence comes from clarity, not exclamation marks.
- **Bilingual technical terms.** Keep `Claude Code`, `/plan`, `localStorage`, `npm`, `Vite`, `React` in Latin script inside the Arabic body — students will Google these. Wrap them in `<code>` so they read correctly inside RTL paragraphs.

### Casing & writing rules
- Arabic headings: no all-caps (Arabic has no case). Use weight, size, and the accent line under section titles instead.
- English/code inside Arabic: lowercase for commands (`/plan`), CamelCase for components (`PromptCard`), exactly as the user would type them.
- Numbers: Western Arabic numerals (1, 2, 3, 4) — the spec uses them and they're more familiar in a coding context. Day labels use the words `اليوم ١` only as section titles for visual rhythm.
- One idea per card. If a card has more than ~50 Arabic words, split it or move the rest behind "عرض التفاصيل ↓".

### Voice examples
| Don't | Do |
|---|---|
| "تعلّم أساسيات البرمجة بالذكاء الاصطناعي في رحلة استثنائية!" | "أربعة أيام. مشروع واحد. تطبيق تبنيه بنفسك." |
| "نظام متقدّم لإدارة المهام" | "Boss Fight اليوم — كمّل القائمة قبل ما تطلع." |
| "اضغط هنا لنسخ الأمر" | "نسخ" (with a copy icon) |
| "🚀 ابدأ رحلتك الآن 🎉" | "ابدأ من اليوم ١ ←" |

### Emoji
**Sparingly, and only as functional glyphs.** ✓ (done), → / ← (nav, mind the RTL flip), ↓ (expand). No celebratory emoji on default surfaces. The mascot does the warmth — emoji would compete with it.

### Microcopy patterns
- Empty states (no checklist progress yet): "لسّه ما بدأت. ابدأ من المهمة الأولى." with the mascot.
- Copied confirmation: button momentarily becomes "تم النسخ ✓" in teal, then reverts.
- Compact warning at 70%: a coral inline callout — "Context ممتلئ. شغّل `/compact`." Not a modal.

---

## Visual foundations

### Color
The whole system lives on **#15132A** — a deep indigo-near-black. Cards sit one step lighter at **#2A2740**. Four accents do all the heavy lifting:

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#15132A` | App background |
| `--surface` | `#2A2740` | Card / panel |
| `--surface-2` | `#3A3654` | Hover, raised card, nested panel |
| `--teal` | `#00C2A8` | Primary accent, mascot, success, progress |
| `--coral` | `#FF5C5C` | Warning, danger, the 70%-context callout |
| `--yellow` | `#FFC93C` | Highlights, current-day marker, "new" |
| `--violet` | `#7C6CF5` | Secondary accent, commands, code chrome |
| `--fg` | `#F1EEFF` | Body text |
| `--fg-muted` | `#A9A4C7` | Secondary text, captions |
| `--border` | `#3A3654` | 1px dividers, card outlines |

Rules of thumb:
- One accent per card. Mixing teal + coral + violet on the same surface = noise.
- Teal is the default. Coral is only for warnings. Yellow is only for "current" or "new". Violet is reserved for command/code chrome so `/plan` and friends are instantly recognizable.
- Accents on the dark background hit AA at all heading sizes; for body text use `--fg` or `--fg-muted`, never an accent.

### Type
**Zanjabeel** (Arabic + Latin) is the brand font — used for everything from the display to body. Nine weights are available (100–900); the system maps display/headings to the heavier end (700/800) and body to Regular/Medium (400/500). **JetBrains Mono** is the monospace for `/plan` and code snippets.

| Token | Family / weight / size / line | Use |
|---|---|---|
| `--font-display` | Zanjabeel 800 / 32–44px / 1.15 | Page titles, hero |
| `--h1` | Zanjabeel 700 / 28px / 1.2 | Section heads |
| `--h2` | Zanjabeel 700 / 22px / 1.3 | Card titles |
| `--h3` | Zanjabeel 700 / 18px / 1.35 | Sub-headings |
| `--body` | Zanjabeel 400 / 16px / 1.7 | Paragraphs |
| `--body-strong` | Zanjabeel 700 / 16px / 1.7 | Lead-ins, emphasis |
| `--caption` | Zanjabeel 500 / 13px / 1.4 | Labels, helper text |
| `--code` | JetBrains Mono 500 / 14px | `/plan`, code snippets |

> Older references to `'Cairo'` and `'Tajawal'` in component CSS are aliased to Zanjabeel via `@font-face` in `colors_and_type.css`, so no rewrites are needed.

Line-height runs generous (1.6–1.7) for Arabic readability. **Never** justify Arabic text — left it ragged on the leading edge.

### Spacing & layout
- **8-point grid.** Tokens: `4, 8, 12, 16, 20, 24, 32, 40, 56, 80`.
- **Mobile-first.** Single column at 360–430px; pad page edges 16px. Cards full-width with 12px gaps. At ≥768px, two columns of cards with 20px gaps. Max content width 720px — this is a reference site, not a marketing page.
- **RTL is the default.** `dir="rtl"` on `<html>`. All paddings/margins use logical properties (`padding-inline-start`, `margin-inline-end`) so the layout mirrors correctly. Iconography that has direction (arrows, chevrons) flips with `transform: scaleX(-1)` or uses the opposite glyph.

### Radii, borders, shadows
- **Radius scale:** `8, 12, 16, 20, 999`. Default card radius is **16px**. Buttons are **12px**. Pills/badges use `999`.
- **Borders:** 1px solid `--border` on every card. The border is the card — no drop shadow needed on a dark surface.
- **Shadows:** Used very rarely. Only on the floating "tap to copy" toast and the mobile nav: `0 12px 32px rgba(0,0,0,0.45)`. Cards do **not** carry shadows by default — they get depth from the `--surface` step instead.
- **No glow/neon.** Even though it's dark mode, accents do not bloom. Keep edges crisp.

### Backgrounds
- Flat `--bg` everywhere. No gradients on body. **One** subtle gradient is allowed: the hero on the home page may use a soft radial from `#1B1838` at top-right fading to `--bg`, just to seat the mascot.
- No imagery on backgrounds. No textures. No mesh gradients. The dark surface is the texture.

### Motion
- **Cheap, fast, no bounce.** Transitions are 150–200ms `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- **Hover (desktop):** card border goes from `--border` to `--teal-30` (`rgba(0,194,168,0.3)`); buttons brighten background by ~6%.
- **Press / active:** scale down to `0.98`, no color shift on the button itself.
- **Reveal:** "عرض التفاصيل" expanders use `height` + `opacity` over 180ms.
- **Celebration:** when a boss-fight checklist is fully completed, the row of checks pulses teal once (200ms) and the day card gets a teal ring on home. No confetti, no sounds.

### Transparency & blur
- The mobile bottom nav uses `backdrop-filter: blur(16px)` over `rgba(21,19,42,0.7)` so content can be seen scrolling underneath.
- Modals (rare — almost everything is inline) use a 60%-opacity `--bg` scrim, no blur.
- Code blocks and command cards never use transparency — they're solid `--surface-2`.

### Cards (the workhorse element)
```
background: var(--surface)
border: 1px solid var(--border)
border-radius: 16px
padding: 20px
gap: 12px (between children)
```
A "current" card (today's day, an unfinished boss) gets a 2px `--yellow` inset accent stripe on the inline-start edge (which is the right edge in RTL). A "completed" card gets a teal ring (`box-shadow: 0 0 0 1px var(--teal)`) and a small teal ✓ pill in the top-start corner.

### Layout rules
- **Mobile bottom nav is fixed.** 64px tall, four tabs (Home · Days · Commands · Prompts), labels in Tajawal 500/12px, the active tab gets a teal icon + a 2px teal underline.
- **Day-page header is sticky.** Compact 56px bar with the day number, big idea, and a thin teal progress bar tied to that day's checklist.
- **Above the fold on mobile:** the hero on home shows mascot + one-line pitch + a single primary CTA ("ابدأ من اليوم ١"). The 3 rules and 4 days are below.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) via CDN. Stroke-based, 1.75px stroke, 24px default. They sit well on dark backgrounds and are RTL-friendly. Loaded with `<script src="https://unpkg.com/lucide@latest"></script>` and rendered with `lucide.createIcons()`.
- **Color:** Icons inherit `currentColor`. Match them to the accent of their card (teal for primary, coral for danger, etc.).
- **Direction:** Use `<ChevronLeft>` where a Latin layout would use `<ChevronRight>` and vice versa — the visual leading edge in RTL is the right side. Or apply `style="transform: scaleX(-1)"`.
- **Mascot:** The teal cat is a hand-drawn SVG in `assets/mascot.svg`. **⚠ Placeholder — the spec mentions a mascot but no artwork was provided.** Replace with the official cat illustration when available. The placeholder is built from simple geometric shapes in `--teal` so it reads correctly at 32–160px.
- **Brand logo:** A placeholder wordmark in `assets/logo.svg` — Cairo 800, "معسكر التطبيقات" with a small teal dot. **⚠ Placeholder — request the official logo.**
- **No emoji** in the icon system except the three functional glyphs noted in Content Fundamentals.

---

## ⚠ Substitutions & open questions

Things I had to substitute or guess — please confirm or replace:

1. **Mascot.** No artwork was provided. `assets/mascot.svg` is a friendly-cat placeholder built from primitives. Please drop the real teal cat in.
2. **Logo.** No wordmark was provided. `assets/logo.svg` is a placeholder. Please drop the real logo in.
3. **Fonts.** ✓ Brand font **Zanjabeel** (9 weights, 100–900) is installed in `fonts/` and wired up via `@font-face`. Cairo/Tajawal aliases are kept so older references resolve correctly.
4. **JetBrains Mono** was added for `/plan`-style code chrome since the brief didn't specify a mono. Swap if you have a preference.
5. **Real curriculum copy.** All Day-1–4 content on the cards is placeholder. Please paste the actual big-idea sentences, key concepts, and boss-fight items.

---

## Index of this folder

```
README.md              ← you are here
SKILL.md               ← agent skill manifest (drop-in for Claude Code)
colors_and_type.css    ← CSS custom properties for color + type
assets/
  mascot.svg           ← teal cat placeholder
  logo.svg             ← wordmark placeholder
fonts/
  README.md            ← font sourcing notes
preview/               ← Design System tab cards (HTML)
ui_kits/
  companion_site/      ← workshop companion site UI kit
    README.md
    index.html         ← interactive prototype
    *.jsx              ← reusable components
```

### Further reading
- Source repo: <https://github.com/AjlanAlajlan70/Ai-bootcamp> (currently empty — explore once curriculum lands)
