# Kimtong Peng — Portfolio

Personal portfolio site for **Kimtong Peng** — BA Mechanical Engineering, Sungkyunkwan University; AI Research & Development Lead at NeWwave. Based in Seoul.

Live site: hosted on GitHub Pages.

## Stack

A single static HTML page. No build step, no framework, no JavaScript dependencies. CSS lives inline in `<style>` blocks; any JS lives inline in `<script>` blocks.

```
.
├── index.html          # the entire site
├── assets/             # images and other static media
│   └── profile.jpg     # hero photo
├── CLAUDE.md           # notes for Claude Code
└── README.md
```

## Develop locally

Open `index.html` in a browser, or serve the directory:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push to `master` (or `main`).
2. In the repo settings → **Pages**, set source to the branch root.
3. The entry file **must** be named `index.html` — GitHub Pages will not serve a file named `index` with no extension.

## Editing content

All copy, sections, and styles are inline in `index.html`. To add a section, add a `<section id="...">` and the matching `<a href="#...">` in the top nav.

## Assets

Hero and section imagery lives in `assets/`. Original camera files from phones/Telegram are kept out of the repo via `.gitignore`; keep web-ready, resized JPEGs (≤ ~500 KB, ≤ 1400 px on the long edge) in `assets/` with short, descriptive names.
