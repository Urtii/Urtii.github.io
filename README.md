# urtii.github.io — Academic Portfolio

A clean, minimal Jekyll-based academic portfolio hosted at
[urtii.github.io](https://urtii.github.io).

---

## Directory Structure

```
urtii.github.io/
├── _config.yml              # Site-wide settings (name, URLs, nav links)
├── Gemfile                  # Ruby dependencies (github-pages gem)
├── .gitignore
│
├── _data/
│   ├── publications.yml     # ← Add papers here
│   └── talks.yml            # ← Add talks here
│
├── _includes/
│   ├── head.html            # <head> meta, fonts, CSS
│   ├── nav.html             # Fixed top navigation bar
│   ├── footer.html          # Footer with social icons
│   └── social_icons.html    # Social link row (used on Home)
│
├── _layouts/
│   ├── default.html         # Base template (nav + footer)
│   ├── home.html            # Hero / bio layout
│   ├── page.html            # Generic content page
│   ├── post.html            # Individual blog post
│   └── blog.html            # Blog index
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
│   │   └── profile.jpg      # ← Replace with your photo
│   └── pdf/
│       └── cv.pdf           # ← Drop your CV here
│
├── index.md                 # Home page (bio text)
├── publications.md          # Publications page
├── talks.md                 # Talks page
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

### 2. Run locally

```bash
bundle exec jekyll serve --livereload
# Open http://localhost:4000
```

### 3. Personalise `_config.yml`

Open `_config.yml` and fill in:

```yaml
title: "Your Name"
tagline: "PhD Candidate · Department of X · University of Y"

author:
  name:            "Your Name"
  email:           "you@university.edu"
  avatar:          "/assets/img/profile.jpg"
  github:          "your-github-username"
  linkedin:        "your-linkedin-handle"
  google_scholar:  "YOUR_SCHOLAR_ID"
  orcid:           "0000-0000-0000-0000"
  department_url:  "https://dept.university.edu/people/yourname"

cv_url: "/assets/pdf/cv.pdf"
```

### 4. Add your photo and CV

- Replace `assets/img/profile.jpg` with your photo (square crop recommended).
- Drop your CV PDF at `assets/pdf/cv.pdf`.

---

## Adding a Publication

Open `_data/publications.yml` and append a new block:

```yaml
- title: "Your Paper Title"
  authors: "**Your Name**, Co-Author One, Co-Author Two"
  venue: "Proceedings of Conference Name (CONF), 2025"
  year: 2025
  badge: "CONF 2025"          # optional short label
  links:
    paper: "https://arxiv.org/abs/xxxx.xxxxx"
    code:  "https://github.com/you/repo"
    bibtex: |
      @inproceedings{yourname2025,
        title     = {Your Paper Title},
        author    = {Your Name and Co-Author One and Co-Author Two},
        booktitle = {Proceedings of Conference Name},
        year      = {2025}
      }
```

**Rules:**
- Wrap **your name** in `**double asterisks**` to bold it in the authors line.
- The `year` integer controls the grouping header on the page.
- `badge`, `links.code`, and `links.bibtex` are all optional — omit any field
  you don't need and its corresponding button will not appear.

---

## Adding a Talk

Open `_data/talks.yml` and append:

```yaml
- date: "Jun 2025"
  title: "Your Talk Title"
  venue: "Conference or Institution Name"
  slides: "https://link-to-slides.com"   # omit to hide button
  video:  "https://youtube.com/..."      # omit to hide button
```

Both `slides` and `video` are **optional**. The Liquid template uses
`{% if talk.slides and talk.slides != "" %}` — so any field you leave out
(or comment out) will simply not render a button.

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

Content © Your Name. Code/theme released under the
[MIT License](https://opensource.org/licenses/MIT) — feel free to fork and adapt.
