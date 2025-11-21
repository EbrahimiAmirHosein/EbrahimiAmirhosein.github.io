/* Theme toggle: floating slide switch that persists preference. */
(function(){
  'use strict';

  function getStoredTheme() {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  }

  function setThemeAttr(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function persistTheme(theme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }

  function applyTheme(theme, persist) {
    setThemeAttr(theme);
    if (persist !== false) {
      persistTheme(theme);
    }
    updateToggle(theme);
  }

  function updateToggle(theme) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var isDark = theme === 'dark';
    btn.classList.toggle('is-dark', isDark);
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    var stored = getStoredTheme();
    var applied = document.documentElement.getAttribute('data-theme');
    var initial = stored || applied || 'light';

    applyTheme(initial, !!stored);

    btn.addEventListener('click', function(event){
      event.preventDefault();
      var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
    });
  });

})();
