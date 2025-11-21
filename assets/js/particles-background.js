/* Particle background powered by tsParticles. Draws subtle dots and
   connecting lines that adapt to the current theme colors. */
(function(){
  'use strict';

  var CONTAINER_ID = 'particles-background';
  var reloadTimer = null;
  var readyTimer = null;

  function getCssVar(name, fallback) {
    var value = getComputedStyle(document.documentElement).getPropertyValue(name);
    return value ? value.trim() : fallback;
  }

  function buildOptions() {
    var primary = getCssVar('--site-primary', '#5bb6ff');
    var link = getCssVar('--masthead-link', primary);

    return {
      fullScreen: { enable: false },
      detectRetina: true,
      background: { color: { value: 'transparent' } },
      particles: {
        number: {
          value: 52,
          density: { enable: true, area: 900 }
        },
        color: { value: primary },
        links: {
          enable: true,
          distance: 140,
          color: link,
          opacity: 0.35,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none',
          random: false,
          straight: false,
          outModes: { default: 'bounce' }
        },
        opacity: {
          value: { min: 0.2, max: 0.5 }
        },
        size: {
          value: { min: 0.8, max: 2.5 }
        },
        collisions: { enable: false },
        shape: { type: 'circle' }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: true, mode: 'repulse' },
          resize: true
        },
        modes: {
          repulse: { distance: 120, duration: 0.35 }
        }
      }
    };
  }

  function destroyParticles() {
    if (!window.tsParticles) return;
    window.tsParticles.dom().forEach(function(instance){
      if (instance.id === CONTAINER_ID) {
        instance.destroy();
      }
    });
  }

  function loadParticles() {
    if (!window.tsParticles) return;
    var container = document.getElementById(CONTAINER_ID);
    if (!container) return;
    destroyParticles();
    window.tsParticles.load({
      id: CONTAINER_ID,
      options: buildOptions()
    });
  }

  function ensureLibraryReady(callback) {
    if (window.tsParticles && typeof window.tsParticles.load === 'function') {
      callback();
      return;
    }
    clearTimeout(readyTimer);
    readyTimer = setTimeout(function(){ ensureLibraryReady(callback); }, 120);
  }

  function scheduleReload() {
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(loadParticles, 200);
  }

  document.addEventListener('DOMContentLoaded', function(){
    if (!document.getElementById(CONTAINER_ID)) return;
    ensureLibraryReady(loadParticles);
  });

  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        scheduleReload();
      }
    });
  });

  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

})();
