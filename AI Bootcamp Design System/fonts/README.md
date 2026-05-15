# Fonts

The design system uses **Zanjabeel** (Arabic + Latin) for everything except code, plus **JetBrains Mono** for code.

## Installed

- `Zanjabeel-Thin.otf` — 100
- `Zanjabeel-ExtraLight.otf` — 200
- `Zanjabeel-Light.otf` — 300
- `Zanjabeel-Regular.otf` — 400
- `Zanjabeel-Medium.otf` — 500
- `Zanjabeel-SemiBold.otf` — 600
- `Zanjabeel-Bold.otf` — 700
- `Zanjabeel-ExtraBold.otf` — 800
- `Zanjabeel-Black.otf` — 900

All weights are wired up in `colors_and_type.css` via `@font-face`. The family is also aliased to `Cairo` and `Tajawal` so older component CSS resolves transparently to Zanjabeel.

## Code

JetBrains Mono is loaded from Google Fonts in `colors_and_type.css`. Swap if you have a brand mono — Zanjabeel itself isn't monospaced.
