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

  <div class="pub-filter" role="group" aria-label="Filter publications by type">
    <label class="pub-filter__option">
      <input type="checkbox" class="pub-filter__checkbox" value="journal" checked>
      Journal Articles
    </label>
    <label class="pub-filter__option">
      <input type="checkbox" class="pub-filter__checkbox" value="conference" checked>
      Conference Papers
    </label>
    <label class="pub-filter__option">
      <input type="checkbox" class="pub-filter__checkbox" value="abstract">
      Abstracts
    </label>
    <label class="pub-filter__option">
      <input type="checkbox" class="pub-filter__checkbox" value="poster">
      Posters
    </label>
  </div>

  {% comment %}
    Group publications by year (descending) using the `year` field.
    Within each year, entries are bucketed by `type` in a fixed priority
    order (thesis > journal > conference > abstract > poster), and within
    each bucket sorted by `author_position` ascending (first author first).
    No custom plugins needed — pure Liquid.

    Each <li class="pub-item"> carries data-type="{{ pub.type }}" so the
    filter checkboxes above can show/hide it client-side. Items with
    type: thesis are exempt from filtering (see main.js) and always show.
  {% endcomment %}

  {% assign sorted_pubs = site.data.publications | sort: "year" | reverse %}
  {% assign years = sorted_pubs | map: "year" | uniq %}
  {% assign type_priority = "thesis,journal,conference,abstract,poster" | split: "," %}

  {% for year in years %}
  <div class="pub-year-group">
    <h2 class="pub-year-heading">{{ year }}</h2>

    <ul class="pub-list" role="list">
      {% assign year_pubs = sorted_pubs | where: "year", year %}
      {% for pub_type in type_priority %}
        {% assign type_pubs = year_pubs | where: "type", pub_type | sort: "author_position" %}
        {% for pub in type_pubs %}
        <li class="pub-item" data-type="{{ pub.type }}">

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

              {% if pub.links.poster and pub.links.poster != "" %}
              <a class="btn btn--outline btn--sm"
                 href="{{ pub.links.poster }}"
                 target="_blank" rel="noopener noreferrer">
                Poster
              </a>
              {% endif %}

              {% if pub.links.slides and pub.links.slides != "" %}
              <a class="btn btn--outline btn--sm"
                 href="{{ pub.links.slides }}"
                 target="_blank" rel="noopener noreferrer">
                Slides
              </a>
              {% endif %}

              {% if pub.links.code and pub.links.code != "" %}
              <a class="btn btn--ghost btn--sm"
                 href="{{ pub.links.code }}"
                 target="_blank" rel="noopener noreferrer">
                Code
              </a>
              {% endif %}
            </div>
            {% endif %}
          </div>

          <!-- Optional badge (e.g. venue shorthand) -->
          {% if pub.badge and pub.badge != "" %}
          <span class="pub-badge">{{ pub.badge }}</span>
          {% endif %}

        </li>
        {% endfor %}
      {% endfor %}
    </ul>
  </div>
  {% endfor %}

</div>
