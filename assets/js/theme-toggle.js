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

  function applyTheme(theme) {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch (e) {}
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

    if (applied !== initial) {
      document.documentElement.setAttribute('data-theme', initial);
    }

    updateToggle(initial);

    btn.addEventListener('click', function(event){
      event.preventDefault();
      var current = document.documentElement.getAttribute('data-theme') || getStoredTheme() || 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });

})();
