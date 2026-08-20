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
│   ├── publications.yml     # ← Add papers here
│   └── talks.yml            # ← Add talks / presentations / posters here
│
├── _includes/
│   ├── head.html            # <head> meta, fonts, CSS
│   ├── nav.html              # Fixed top navigation bar
│   ├── footer.html           # Footer with social icons
│   ├── social_icons.html     # Social link row (used on Home)
│   └── teaching.html         # Teaching content (used on the Teaching page)
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
│       └── trc2026-poster.pdf    # Poster PDF linked from a Talks entry
│
├── index.md                 # Home page (bio text)
├── publications.md          # Publications page
├── talks.md                 # Talks & Presentations page
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

Open `_data/publications.yml` and append a new block, newest entries at the
top of their year group:

```yaml
- title: "Your Paper Title"
  authors: "**Onurcan Yılmaz**, Co-Author One, Co-Author Two"
  venue: "Proceedings of Conference Name (CONF), 2025"
  year: 2025
  badge: "CONF 2025"          # optional short label, e.g. an award
  links:
    paper: "https://doi.org/xx.xxxx/xxxxx"
    code:  "https://github.com/you/repo"
    bibtex: |
      @inproceedings{yourname2025,
        title     = {Your Paper Title},
        author    = {Onurcan Yilmaz and Co-Author One and Co-Author Two},
        booktitle = {Proceedings of Conference Name},
        year      = {2025}
      }
```

**Rules:**
- Wrap **Onurcan Yılmaz** in `**double asterisks**` to bold it in the authors line.
- The `year` integer controls the grouping header on the page.
- `badge`, `links.paper`, `links.code`, and `links.bibtex` are all optional —
  omit any field you don't need and its corresponding button will not appear.
- `badge` doubles as a place to note an award, e.g. `"🏆 2nd Place · SIU 2026"`.

---

## Adding a Talk or Poster

Open `_data/talks.yml` and append:

```yaml
- date: "Jun 2025"
  title: "Your Talk Title"
  venue: "Conference or Institution Name — note an award here too, if any"
  slides: "https://link-to-slides.com"   # omit to hide button
  video:  "https://youtube.com/..."      # omit to hide button
```

Both `slides` and `video` are **optional**. The Liquid template uses
`{% if talk.slides and talk.slides != "" %}` — so any field you leave out
(or comment out) will simply not render a button.

The `slides` field also works for a local PDF poster: drop the file in
`assets/pdf/` and point `slides` at it, e.g.
`slides: "/assets/pdf/your-poster.pdf"` — the "Slides" button opens it
directly, since the template only distinguishes Slides vs. Video, not
poster vs. deck.

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
  - title: "Talks"
    url: "/talks/"
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
