---
name: ai-bootcamp-design
description: Use this skill to generate well-branded interfaces and assets for the معسكر بناء التطبيقات بالذكاء الاصطناعي (AI Bootcamp at King Saud University), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a dark, energetic, mobile-first, Arabic-RTL companion site for a 4-day AI coding camp.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. The system covers an Arabic-language (RTL) workshop companion site with home, day pages, command reference, and prompt library — built around a dark indigo palette (#15132A) with teal/coral/yellow/violet accents and a friendly teal-cat mascot.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always:
- Set `dir="rtl"` on `<html>` and use logical CSS properties (`padding-inline-start`, etc.) so layout mirrors correctly.
- Import `colors_and_type.css` for the full color + type token system.
- Use Cairo (700/800) for headings and Tajawal (400/700) for body. Both are open-source Arabic webfonts.
- Use Lucide via CDN for icons; tint them with `currentColor` to match the card's accent.
- One accent per card. Teal is the default; coral is warning-only; yellow is "current/new" only; violet is reserved for command/code chrome.
- The teal cat mascot belongs on empty states, hero, and completion — not on every screen.
- The `ui_kits/companion_site/` folder contains a working React+Babel prototype with reusable components (`Button`, `Card`, `Pill`, `CopyButton`, `Mascot`, `Icon`, `BossFight` checklist with localStorage). Lift these as needed.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand. The repo target is a static React + Vite app deployable to GitHub Pages — keep components small and dependency-light.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (which day/section? mobile or desktop? real curriculum copy or placeholder?), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
