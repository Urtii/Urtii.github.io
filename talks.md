---
layout: default
title: Talks
permalink: /talks/
---

<div class="container talks-section">

  <header class="page-header">
    <h1 class="page-title">Talks &amp; Presentations</h1>
  </header>

  {% if site.data.talks.size > 0 %}
  <ul class="talk-list" role="list">

    {% for talk in site.data.talks %}
    <li class="talk-item">

      <!-- Date column -->
      <time class="talk-date" datetime="{{ talk.date }}">{{ talk.date }}</time>

      <!-- Body column -->
      <div class="talk-body">
        <p class="talk-title">{{ talk.title }}</p>
        <p class="talk-venue">{{ talk.venue }}</p>

        <!-- Conditional link buttons:
             A button is only rendered when the corresponding URL field
             is present and non-empty in _data/talks.yml             -->
        {% assign has_links = false %}
        {% if talk.slides and talk.slides != "" %}{% assign has_links = true %}{% endif %}
        {% if talk.video  and talk.video  != "" %}{% assign has_links = true %}{% endif %}

        {% if has_links %}
        <div class="talk-links">

          {% if talk.slides and talk.slides != "" %}
          <a class="btn btn--outline btn--sm"
             href="{{ talk.slides }}"
             target="_blank" rel="noopener noreferrer">
            Slides
          </a>
          {% endif %}

          {% if talk.video and talk.video != "" %}
          <a class="btn btn--ghost btn--sm"
             href="{{ talk.video }}"
             target="_blank" rel="noopener noreferrer">
            Video
          </a>
          {% endif %}

        </div>
        {% endif %}

      </div>
    </li>
    {% endfor %}

  </ul>
  {% else %}
  <p class="empty-state">No talks listed yet.</p>
  {% endif %}

</div>
