/* Theme toggle: toggles data-theme attribute on <html> and persists choice
   to localStorage. Keeps an accessible aria-pressed state on the toggle button.
*/
(function(){
  'use strict';

  function getCurrent() {
    try {
      return localStorage.getItem('theme');
    } catch(e) { return null; }
  }

  function setTheme(name) {
    try {
      document.documentElement.setAttribute('data-theme', name);
      localStorage.setItem('theme', name);
    } catch(e) {}
  }

  function toggle() {
    var current = document.documentElement.getAttribute('data-theme') || getCurrent() || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    updateButton(next);
  }

  function updateButton(theme) {
    var btn = document.getElementById('theme-toggle');
    if(!btn) return;
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  document.addEventListener('DOMContentLoaded', function(){
    // initialize button state
    var initial = document.documentElement.getAttribute('data-theme') || getCurrent();
    if(initial) updateButton(initial);

    var btn = document.getElementById('theme-toggle');
    if(!btn) return;
    btn.addEventListener('click', function(e){
      e.preventDefault();
      toggle();
    });
  });

})();
