/* ============================================================
   main.js — Dark mode toggle + mobile nav
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. Dark / Light mode
     ---------------------------------------------------------- */
  var html       = document.documentElement;
  var toggleBtn  = document.getElementById('theme-toggle');
  var STORAGE_KEY = 'color-scheme';

  function currentTheme() {
    return html.getAttribute('data-theme') || 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (toggleBtn) {
      toggleBtn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  // The inline <script> in <head> already applied the saved preference.
  // Here we just wire up the button click.
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  // Also respond to OS-level preference changes at runtime
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', function (e) {
    // Only follow OS changes if the user has not explicitly set a preference
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });


  /* ----------------------------------------------------------
     2. Mobile navigation hamburger
     ---------------------------------------------------------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu   = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));

      // Animate hamburger → X
      var bars = navToggle.querySelectorAll('.hamburger-bar');
      if (isOpen) {
        bars[0].style.transform = 'translateY(8px) rotate(45deg)';
        bars[1].style.opacity   = '0';
        bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity   = '';
        bars[2].style.transform = '';
      }
    });

    // Close menu when a nav link is clicked (mobile UX)
    navMenu.querySelectorAll('.nav-link, .btn').forEach(function (el) {
      el.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        var bars = navToggle.querySelectorAll('.hamburger-bar');
        bars[0].style.transform = '';
        bars[1].style.opacity   = '';
        bars[2].style.transform = '';
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ----------------------------------------------------------
     3. BibTeX collapsible blocks
     ---------------------------------------------------------- */
  document.querySelectorAll('.bibtex-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var block = btn.closest('.pub-item').querySelector('.bibtex-block');
      if (!block) return;
      var isOpen = block.classList.toggle('is-open');
      btn.textContent = isOpen ? 'Hide BibTeX' : 'BibTeX';
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });


  /* ----------------------------------------------------------
     4. Smooth-scroll offset (compensate for fixed nav)
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
        10
      ) || 64;
      var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

})();
