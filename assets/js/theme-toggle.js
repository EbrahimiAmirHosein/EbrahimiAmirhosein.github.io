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
    // set initial icon
    updateIcon(document.documentElement.getAttribute('data-theme') || getCurrent());

    btn.addEventListener('click', function(e){
      e.preventDefault();
      toggle();
    });
  });

  function svgIcon(type) {
    if(type === 'dark') {
      return '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>';
    }
    // sun
    return '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zM17.24 19.16l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM20 13h3v-2h-3v2zM4.22 17.66l-1.79 1.79 1.79 1.79 1.79-1.79-1.79-1.79zM12 6a6 6 0 100 12 6 6 0 000-12zM12 1h0v3h0V1zM12 20h0v3h0v-3z"/></svg>';
  }

  function updateIcon(theme) {
    var btn = document.getElementById('theme-toggle');
    if(!btn) return;
    var node = btn.querySelector('.theme-icon');
    if(!node) return;
    // replace contents with svg
    node.innerHTML = svgIcon(theme === 'dark' ? 'dark' : 'light');
  }

  // extend updateButton to also update icon
  var _oldUpdateButton = updateButton;
  updateButton = function(theme) {
    _oldUpdateButton(theme);
    updateIcon(theme);
  };

})();
