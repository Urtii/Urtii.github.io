# urtii.github.io — Onurcan Yılmaz — Academic Portfolio

The live Jekyll academic portfolio of **Onurcan Yılmaz**, PhD student and
Research Assistant at Hacettepe University, hosted at
[urtii.github.io](https://urtii.github.io).

---

## Directory Structure

```
urtii.github.io/
├── _config.yml              # Site-wide settings (name, URLs, nav links)
├── Gemfile / Gemfile.lock   # Ruby dependencies (github-pages gem, pinned)
├── .gitignore
├── .claude/                 # Local Claude Code launch config (optional, dev-only)
│
├── _data/
│   ├── publications.yml     # ← Add papers, abstracts, posters, thesis here
│   └── awards.yml           # ← Add awards, scholarships, grants here
│
├── _includes/
│   ├── head.html            # <head> meta, fonts, CSS
│   ├── nav.html              # Fixed top navigation bar
│   ├── footer.html           # Footer with social icons
│   ├── social_icons.html     # Social link row (used on Home)
│   ├── teaching.html         # Teaching content (used on the Teaching page)
│   └── awards.html           # Awards content (used on the Awards page)
│
├── _layouts/
│   ├── default.html         # Base template (nav + footer)
│   ├── home.html             # Hero / bio layout
│   ├── page.html              # Generic content page (used by Teaching)
│   ├── post.html              # Individual blog post
│   └── blog.html              # Blog index
│
├── _posts/
│   └── 2024-01-01-welcome.md   # Sample post (blog not in nav yet)
│
├── assets/
│   ├── css/
│   │   └── style.css        # All styles with CSS Variables (light/dark)
│   ├── js/
│   │   └── main.js          # Dark mode toggle + mobile nav
│   ├── img/
│   │   └── profile.jpg      # Profile photo
│   └── pdf/
│       ├── cv.pdf                # CV, linked from the "View CV" nav button
│       └── trc2026-poster.pdf    # Poster PDF linked from a publications entry
│
├── index.md                 # Home page (bio text)
├── publications.md          # Publications page (papers, abstracts, posters, thesis)
├── awards.md                 # Awards page (dedicated, in nav)
├── teaching.md               # Teaching page (dedicated, in nav)
├── blog.md                  # Blog index (not in nav yet)
└── 404.html                 # Custom 404 page
```

---

## Quick Start

### 1. Clone and install dependencies

```bash
git clone https://github.com/Urtii/Urtii.github.io.git
cd Urtii.github.io
bundle install
```

`Gemfile.lock` is committed and pinned to `bundler 4.0.7`, so `bundle install`
reproduces the exact same gem versions GitHub Pages builds with.

### 2. Run locally

```bash
bundle exec jekyll serve --livereload
# Open http://localhost:4000
```

A ready-made launch config for this is in `.claude/launch.json`
("Jekyll Dev Server", port 4000) if you're running this inside Claude Code.

### 3. Site identity

`_config.yml` and `index.md` are already filled in with real information
(name, tagline, social links, bio). To change any of it:

```yaml
title: "Onurcan Yılmaz"
tagline: "Research Assistant · Electrical & Electronics Engineering · Hacettepe University"

author:
  name:            "Onurcan Yılmaz"
  email:           "onurcan@hacettepe.edu.tr"
  avatar:          "/assets/img/profile.jpg"
  github:          "Urtii"
  linkedin:        "yilmaz-onurcan"
  google_scholar:  "BcVj4hwAAAAJ"
  orcid:           "0009-0003-6264-4290"
  department_url:  "https://www.ee.hacettepe.edu.tr/?link=400999&sublink=285&lang=e"

cv_url: "/assets/pdf/cv.pdf"
```

### 4. Photo and CV

`assets/img/profile.jpg` and `assets/pdf/cv.pdf` already contain the real
photo and CV — replace them in place whenever they need updating.

---

## Adding a Publication

Everything — journal articles, conference papers, abstracts, posters, and
the thesis — lives in one file: `_data/publications.yml`. Append a new
block, newest entries at the top of their year group:

```yaml
- title: "Your Paper Title"
  authors: "**Onurcan Yılmaz**, Co-Author One, Co-Author Two"
  venue: "Proceedings of Conference Name (CONF), 2025"
  year: 2025
  type: conference             # journal | conference | abstract | poster | thesis
  author_position: 1           # 1-indexed position of Onurcan Yılmaz in `authors`
  badge: "CONF 2025"           # optional short label, e.g. an award
  links:
    paper:  "https://doi.org/xx.xxxx/xxxxx"
    code:   "https://github.com/you/repo"
    poster: "/assets/pdf/your-poster.pdf"   # optional, e.g. a local PDF
    slides: "https://link-to-slides.com"    # optional
```

**Rules:**
- Wrap **Onurcan Yılmaz** in `**double asterisks**` to bold it in the authors line.
- The `year` integer controls the grouping header on the page (newest first).
- `type` drives the filter checkboxes on `/publications/` (Journal Articles /
  Conference Papers checked by default, Abstracts / Posters unchecked). Use
  `thesis` for entries that should always render regardless of which
  checkboxes are ticked — there's no checkbox for it, by design, since
  there's only one.
- Within each year, entries are grouped by `type` in a fixed priority order —
  thesis > journal > conference > abstract > poster — and within each group,
  sorted by `author_position` ascending (first-author work leads). This
  ordering is handled entirely in `publications.md`'s Liquid template; you
  only need to set `type` and `author_position` correctly on each entry.
- `badge`, and every key under `links` (`paper`, `code`, `poster`, `slides`)
  are optional — omit any field you don't need and its corresponding button
  will not appear. `poster`/`slides` work for any `type`, not just
  `type: poster` — e.g. a conference paper can still link the slide deck you
  presented it with.
- `badge` doubles as a place to note an award, e.g. `"🏆 2nd Place · SIU 2026"`.
- No `bibtex` field — link the DOI/paper page instead of hand-maintaining a
  BibTeX block that could drift out of sync or contain errors.

---

## Adding an Award

Awards, scholarships, and grants live in `_data/awards.yml` and render on
`/awards/`, newest first:

```yaml
- date: "2025"
  title: "Your Award or Scholarship Name"
  category: "Award"            # Award | Scholarship | Grant — shown as a small badge
  org: "Awarding Organization"
  link: "https://example.com/announcement"   # optional
  detail: "Extra context, e.g. a funded position that came with it."  # optional
```

`link` and `detail` are optional — omit either and that button/line simply
won't render.

---

## Editing Teaching

The Teaching page lives at `/teaching/` (`teaching.md`, `layout: page`) and
pulls its content from `_includes/teaching.html`. It has two blocks —
**Laboratory Instruction** (course code, name, years) and **Senior Project
Mentorship** (year, project title) — each a plain HTML list. Edit
`_includes/teaching.html` directly to add or update entries; there's no
data file for this section yet.

---

## Enabling the Blog in Navigation

The blog infrastructure is ready but the "Blog" link is hidden from the nav.
To add it:

1. Open `_config.yml`
2. Append to `nav_links`:

```yaml
nav_links:
  - title: "Home"
    url: "/"
  - title: "Publications"
    url: "/publications/"
  - title: "Awards"
    url: "/awards/"
  - title: "Teaching"
    url: "/teaching/"
  - title: "Blog"          # add this
    url: "/blog/"
```

---

## Dark Mode

The site ships with full dark/light mode support:

- **User toggle:** the moon/sun button in the top-right of the nav.
- **OS preference:** automatically respected on first visit.
- **Persistence:** choice is saved to `localStorage`.
- **No flash:** an inline `<script>` in `<head>` applies the saved theme
  before the first paint.

All colours are controlled by CSS custom properties in `assets/css/style.css`
under the `:root` and `[data-theme="dark"]` blocks — easy to customise.

---

## Typography

Two Google Fonts, loaded in `_includes/head.html`:

- **Inter** (`--font-ui`) — nav, headings, buttons, labels, badges.
- **Lora** (`--font-body`) — body copy: bio paragraphs, publication/award
  titles. Chosen over a display serif (the original was Playfair Display)
  because display faces have thin hairline strokes that read fine but tire
  the eye over paragraph-length text; Lora is a text serif designed for
  exactly that.

Both `assets/css/style.css` and `assets/js/main.js` are loaded with a
`?v={{ site.time | date: '%s' }}` cache-busting query string, so every
rebuild forces browsers to fetch the current version instead of serving a
stale cached copy.

---

## Deploying to GitHub Pages

GitHub Pages builds the site automatically on every push to `main`.

```bash
git add .
git commit -m "Add publications, update bio"
git push origin main
```

The site will be live at **https://urtii.github.io** within a minute or two.

> **Tip:** Make sure GitHub Pages is set to deploy from the `main` branch
> (*Settings → Pages → Source → Deploy from branch → main / root*).

---

## License

Content © Onurcan Yılmaz. Code/theme released under the
[MIT License](https://opensource.org/licenses/MIT) — feel free to fork and adapt.
