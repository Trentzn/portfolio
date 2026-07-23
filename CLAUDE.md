# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Trenton Horner's personal cybersecurity portfolio site — a static, single-page "terminal" web app themed after the Fallout / RobCo Termlink UI. It's hosted via GitHub Pages (see `CNAME` → `trentonhorner.com`). There is no build system, package manager, or bundler: the site is plain HTML/CSS/JS served as-is.

## Running / Previewing

No install or build step. Open `index.html` directly in a browser, or serve the directory with any static file server, e.g.:

```bash
python3 -m http.server 8000
```

There is no linting or test suite in this repo.

## Architecture

### Single-page app via content injection (`index.html` + `main.js`)

`index.html` is a shell with one empty `<main id="content">` region and a nav bar (`.nav-btn` buttons with `data-target` attributes: `boot`, `about`, `projects`, `gallery`, `contact`). All page content lives as template strings in the `contentData` object at the top of `main.js`, keyed by the same target names (plus `project_lora`, a "drill-down" page reached only via a link inside `projects`, not from the nav bar). Clicking a nav button or an in-content `.sub-link` button swaps content into `#boot-text` — there is no routing/URL state.

To add or edit a content section: edit the corresponding string in `contentData` in `main.js`. To add a brand-new page, add a new `contentData` key and wire up a trigger (either a `.nav-btn[data-target=...]` in `index.html` or a `.sub-link[data-target=...]` inside another section's HTML string).

### Typewriter rendering

Most sections are rendered character-by-character by `typeWriter()` in `main.js`, which walks the DOM nodes of a parsed HTML string and reveals text incrementally with a blinking cursor span, playing a blip sound per character (via `SoundManager`, using the Web Audio API — no audio files). `renderStats()` is a separate, non-animated formatter used only for the `about` page (wraps `[ SECTION HEADERS ]` in `.resume-header` divs). The `gallery` page is built directly as static grid HTML (no typewriter).

`currentTypingId` is used to cancel an in-flight typewriter animation when the user navigates away mid-type — any new call to `typeWriter()` invalidates the previous run.

### Image modal + gallery

Clicking any `<img>` inside `.gallery-item` or with class `.log-img` opens `#image-modal` and looks up a caption from the `imageMap` object in `main.js` (keyed by image filename), then types that caption out in the modal. New gallery images need an entry added to both the gallery grid HTML (in `main.js`, inside the `target === 'gallery'` branch) and `imageMap`.

### Decorative CRT/terminal effects

`style.css` defines the RobCo terminal look via CSS custom properties in `:root` (`--fallout-green`, `--fallout-bg`, etc.). Visual layers (`.crt-overlay`, `.scanlines`, `.terminal-scratches`, `.layer-dirt`, `.layer-data-stream`, `.layer-watermark`) are purely cosmetic, absolutely-positioned overlays. `updateDataStream()` in `main.js` procedurally generates the scrolling hex-dump background (`#data-stream`) on load — it's random decorative text, not real data.

### Embedded CTF challenge

`index.html`'s "DATA" (projects) section links to `login.html`, which is a self-contained mini CTF challenge ("Vault-Tec Personnel Verification"). The password check in `login.html` is deliberately obfuscated as a hex-encoded/packed JS array (a beginner reverse-engineering exercise: decoding the array and base64 reveals the password). Correct input redirects to `flag.html` (displays the flag `VT_FLAG{CODE_ANALYSIS_101}`); incorrect input redirects to `access-denied.html`. When editing this challenge, preserve the obfuscation style rather than de-obfuscating it — the obfuscation is the point of the exercise.
