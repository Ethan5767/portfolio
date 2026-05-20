# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A single-page static portfolio site for Kimtong Peng (AI Research & Development Lead at NeWwave). The entire site is **one file**: `index` at the repo root.

Note the filename has **no extension** — it is `index`, not `index.html`. Preserve this name. To preview locally, either open the file directly in a browser (it still renders as HTML thanks to the doctype) or serve it with a static server that maps extension-less `index` as the directory index.

## Architecture conventions

- Everything is inline in `index`: HTML, the entire `<style>` block, and (currently) no JavaScript. There are no external CSS, JS, or asset files in the repo. Keep additions inline unless there's a clear reason to split.
- Layout sections are anchor-linked from the top nav by `id` (`#about`, `#experience`, `#education`, `#awards`, `#contact`). When adding a section, wire up both the `<section id="...">` and the corresponding `<a href="#...">` in `.topbar .nav-links`.
- The page uses a fixed dark color scheme defined on `:root` (background `#05060a`, accent `#8fcfff` / `#4f8dff` / `#6fdfff`). Reuse these tokens rather than introducing new colors.
- Reusable visual primitives already defined: `.card`, `.badge`, `.button.primary` / `.button.secondary`, `.section`, `.section-title`, `.timeline` / `.timeline-item`, `.grid` / `.grid-2`. Prefer composing these over adding new classes.
- Responsive behavior: mobile-first base styles, with two breakpoints — `min-width: 840px` flips the hero to two columns, `max-width: 720px` adjusts padding and topbar layout.

## Gotcha: profile/cover images are signed LinkedIn URLs

The hero `<img>` tags reference `media.licdn.com` URLs with `?e=<timestamp>&v=beta&t=<token>` query strings. These are time-signed and **will eventually 404**. If images break, the fix is to replace the URLs (e.g. host the assets in-repo) — they aren't a code bug.

## No build / test / lint tooling

There is no `package.json`, no test suite, no linter, no formatter config. Don't invent commands; just edit `index` and reload the browser to verify changes.
