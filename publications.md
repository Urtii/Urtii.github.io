---
layout: default
title: Publications
permalink: /publications/
---

<div class="container publications-section">

  <header class="page-header">
    <h1 class="page-title">Publications</h1>
    <p class="page-subtitle">
      See also:
      {% if site.author.google_scholar and site.author.google_scholar != "" %}
      <a href="https://scholar.google.com/citations?user={{ site.author.google_scholar }}"
         target="_blank" rel="noopener">Google Scholar</a>&ensp;&middot;&ensp;
      {% endif %}
      {% if site.author.orcid and site.author.orcid != "" %}
      <a href="https://orcid.org/{{ site.author.orcid }}"
         target="_blank" rel="noopener">ORCID</a>
      {% endif %}
    </p>
  </header>

  {% comment %}
    Group publications by year (descending) using the `year` field.
    No custom plugins needed — pure Liquid.
  {% endcomment %}

  {% assign sorted_pubs = site.data.publications | sort: "year" | reverse %}
  {% assign years = sorted_pubs | map: "year" | uniq %}

  {% for year in years %}
  <div class="pub-year-group">
    <h2 class="pub-year-heading">{{ year }}</h2>

    <ul class="pub-list" role="list">
      {% for pub in sorted_pubs %}
        {% if pub.year == year %}
        <li class="pub-item">

          <div class="pub-main">
            <p class="pub-title">{{ pub.title }}</p>
            <p class="pub-authors">{{ pub.authors | markdownify | remove: "<p>" | remove: "</p>" | strip }}</p>
            <p class="pub-venue">{{ pub.venue }}</p>

            <!-- Action links row -->
            {% if pub.links %}
            <div class="pub-links">
              {% if pub.links.paper and pub.links.paper != "" %}
              <a class="btn btn--outline btn--sm"
                 href="{{ pub.links.paper }}"
                 target="_blank" rel="noopener noreferrer">
                Paper
              </a>
              {% endif %}

              {% if pub.links.code and pub.links.code != "" %}
              <a class="btn btn--ghost btn--sm"
                 href="{{ pub.links.code }}"
                 target="_blank" rel="noopener noreferrer">
                Code
              </a>
              {% endif %}

              {% if pub.links.bibtex and pub.links.bibtex != "" %}
              <button class="bibtex-toggle btn--sm"
                      aria-expanded="false"
                      aria-label="Show BibTeX for {{ pub.title }}">
                BibTeX
              </button>
              {% endif %}
            </div>
            {% endif %}

            <!-- BibTeX collapsible -->
            {% if pub.links.bibtex and pub.links.bibtex != "" %}
            <div class="bibtex-block" aria-hidden="true">
              <pre><code>{{ pub.links.bibtex }}</code></pre>
            </div>
            {% endif %}
          </div>

          <!-- Optional badge (e.g. venue shorthand) -->
          {% if pub.badge and pub.badge != "" %}
          <span class="pub-badge">{{ pub.badge }}</span>
          {% endif %}

        </li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>
  {% endfor %}

</div>
