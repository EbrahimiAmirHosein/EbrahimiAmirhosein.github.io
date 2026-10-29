---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.archive a[href*="CV"] {
  display: inline-flex;
  align-items: center;
  margin-top: 0.35rem;
  padding: 0.7rem 1.25rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none !important;
  color: #fff !important;
  background: linear-gradient(135deg, var(--site-primary), var(--site-accent));
  box-shadow: 0 10px 24px rgba(13, 148, 136, 0.3);
  transition: transform 220ms ease, filter 220ms ease;
}
.archive a[href*="CV"]:hover {
  filter: brightness(1.06);
  transform: translateY(-1px);
  color: #fff !important;
}
.cv-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.cv-viewer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.cv-viewer canvas {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  background: #fff;
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
}
.cv-viewer__status {
  color: var(--muted-text);
  font-size: 0.95rem;
}
</style>

<div class="cv-actions">
  <a href="/files/CV___AHE.pdf" download="CV___AHE.pdf">Download CV</a>
  <a href="/files/CV___AHE.pdf" target="_blank" rel="noopener">Open CV in new tab</a>
</div>

<div id="cv-viewer" class="cv-viewer">
  <p class="cv-viewer__status">Loading CV…</p>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script>
(function () {
  var container = document.getElementById('cv-viewer');
  var status = container.querySelector('.cv-viewer__status');

  if (!window.pdfjsLib) {
    status.textContent = 'The CV preview could not be loaded. Please use the buttons above.';
    return;
  }

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  function renderPage(pdf, num) {
    return pdf.getPage(num).then(function (page) {
      /* Render at device resolution for the container width so text stays sharp on phones */
      var cssWidth = container.clientWidth;
      var base = page.getViewport({ scale: 1 });
      var scale = (cssWidth / base.width) * (window.devicePixelRatio || 1);
      var viewport = page.getViewport({ scale: scale });

      var canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.setAttribute('aria-label', 'CV page ' + num);
      container.appendChild(canvas);

      return page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;
    });
  }

  pdfjsLib.getDocument('/files/CV___AHE.pdf').promise.then(function (pdf) {
    status.remove();
    var chain = Promise.resolve();
    for (var i = 1; i <= pdf.numPages; i++) {
      chain = chain.then(renderPage.bind(null, pdf, i));
    }
    return chain;
  }).catch(function () {
    status.textContent = 'The CV preview could not be loaded. Please use the buttons above.';
  });
})();
</script>
