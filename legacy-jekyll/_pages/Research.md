---
layout: archive
title: ""
permalink: /Research/
author_profile: true
---

<style>
  .research-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem 0 2rem;
  }

  /* Intro section */
  .intro-section {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    margin-bottom: 2.25rem;
    flex-wrap: wrap;
  }
  .intro-text {
    flex: 1 1 380px;
    font-size: 1.05rem;
    line-height: 1.65;
    color: var(--muted-text, #4a5d68);
  }
  .intro-gif {
    flex: 1 1 260px;
    max-width: 300px;
    border-radius: 14px;
    box-shadow: var(--card-shadow, 0 4px 12px rgba(0,0,0,0.10));
    border: 1px solid var(--card-border, transparent);
    transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms ease;
  }
  .intro-gif:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: var(--card-hover-shadow);
  }

  /* Section blocks */
  .research-block {
    margin-bottom: 2.5rem;
    padding: 1.25rem 1.25rem 1.25rem 1.15rem;
    border-left: 4px solid var(--site-primary, #0d9488);
    border-radius: 0 14px 14px 0;
    background: var(--card-bg, transparent);
    border-top: 1px solid var(--card-border);
    border-right: 1px solid var(--card-border);
    border-bottom: 1px solid var(--card-border);
    box-shadow: var(--card-shadow);
    transition: transform 280ms ease, box-shadow 280ms ease;
    animation: fade-rise 0.5s both;
  }
  .research-block:hover {
    transform: translateY(-3px);
    box-shadow: var(--card-hover-shadow);
  }
  .research-header {
    font-family: Literata, Georgia, serif;
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--site-text, #15232b);
    margin-bottom: 0.4rem;
  }
  .research-meta {
    color: var(--muted-text, #4a5d68);
    margin-bottom: 0.35rem;
    font-size: 1rem;
  }
  .supervisor {
    font-style: italic;
    color: var(--muted-text, #6b7280);
  }

  .research-image {
    width: 100%;
    max-width: 650px;
    border-radius: 12px;
    margin: 0.85rem 0;
    box-shadow: var(--card-shadow, 0 4px 12px rgba(0,0,0,0.10));
    border: 1px solid var(--card-border, transparent);
  }

  ul.research-list {
    margin: 0.75rem 0 0.4rem 0;
    padding-left: 1.15rem;
  }

  .date-range {
    font-weight: 600;
    color: var(--site-primary, #0d9488);
    margin-top: 0.55rem;
  }

  .section-title {
    font-family: Literata, Georgia, serif;
    font-size: 1.85rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: var(--site-text, #15232b);
    margin-bottom: 1.15rem;
  }

  .current-research {
    margin-bottom: 2.5rem;
    padding: 1.35rem 1.4rem;
    border-radius: 16px;
    background: var(--card-bg, #f1f5f9);
    border: 1px solid var(--card-border, #e2e8f0);
    box-shadow: var(--card-shadow, 0 12px 30px rgba(15, 23, 42, 0.08));
    animation: fade-rise 0.55s both;
  }

  .current-research h3 {
    margin-top: 0;
    font-family: Literata, Georgia, serif;
    font-size: 1.35rem;
    letter-spacing: -0.02em;
    color: var(--site-text, #0f172a);
  }

  .current-research p {
    color: var(--muted-text, #334155);
    line-height: 1.65;
  }

  .current-research a {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.65rem 1.2rem;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--site-primary, #0d9488), var(--site-accent, #0891b2));
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0 8px 18px rgba(13, 148, 136, 0.28);
    transition: transform 220ms ease, filter 220ms ease;
  }
  .current-research a:hover {
    filter: brightness(1.06);
    transform: translateY(-1px);
    color: #fff;
  }
</style>

<div class="research-wrapper">

<h2 class="section-title">Research Interest</h2>

<!-- INTRO SECTION -->
<div class="intro-section">
  <div class="intro-text">
    I work at the intersection of <b>artificial intelligence</b> and <b>pathology</b>, focusing on
    building models that help interpret histology slides and extract meaningful patterns from tissue samples.
    My work involves developing training pipelines, designing practical AI workflows for researchers,
    and exploring new ways deep learning can support biological discovery.
  </div>

  <img src="/files/github-gif-1.gif" class="intro-gif">
</div>

<!-- <img src="/files/github-gif-2.gif" class="intro-gif" style="display:block; margin: 0 auto 40px auto; width: 80%; max-width: 500px;"> -->


<div class="current-research">
  <h3>Current Research: LungInsight</h3>
  <p>
    LungInsight aims to improve how researchers assess lung injury in preclinical models of Acute Lung Injury (ALI).
    We are developing easy-to-use AI tools that can analyze histological images more quickly, consistently,
    and accurately than current manual methods. By reducing bias and adding clear, explainable outputs,
    our approach helps standardize image evaluation across labs. Ultimately, LungInsight supports faster,
    more reliable research that can deepen our understanding of lung diseases and help guide new treatments.
  </p>
  <a href="https://lunginsight.ai/">Explore LungInsight</a>
</div>

<h2 class="section-title">Research Experience</h2>


<!-- MER LAB -->
<div class="research-block">

  <div class="research-header">Research Assistant — <a href="https://merlab.github.io/">Mer Lab</a></div>
  <div class="research-meta">University of Ottawa • Computational Biology & Machine Learning</div>
  <div class="supervisor">Supervised by: <a href="https://www.uottawa.ca/faculty-medicine/dr-arvind-mer">Dr. Arvind Mer</a></div>

  <img class="research-image" src="https://www.uottawa.ca/research-innovation/sites/g/files/bhrskd326/files/2021-10/OVPRI-campus-canal-16x9.jpg">

  <ul class="research-list">
    <li><a href="https://academic.oup.com/bioinformaticsadvances/article/4/1/vbae047/7644335"><b>Text-Mining Feature Selection</b> for anticancer drug-response prediction</a></li>
    <li>Research in machine learning for drug discovery and biological data analysis</li>
  </ul>

  <div class="date-range">May 2023 – Present</div>
</div>


<!-- IPM -->
<div class="research-block">

  <div class="research-header">Research Assistant — <a href="http://www.ipm.ac.ir/">IPM: Institute for Research in Fundamental Sciences</a></div>
  <div class="research-meta">School of Computer Science</div>
  <div class="supervisor">
    Supervised by:
    <a href="https://scholar.google.com/citations?user=xwJgOl0AAAAJ">Dara Rahmati</a>,
    <a href="https://scholar.google.com/citations?user=qbOoaykAAAAJ">Amirhosein Hadian</a>
  </div>

  <img class="research-image" src="https://www.ipm.ac.ir/img/1000x320/1.jpg">

  <ul class="research-list">
    <li><b>Estimating drift–diffusion model parameters</b> using deep learning</li>
    <li><b>Machine Learning Textbook:</b> Co-authoring chapters on dimensionality reduction & feature selection</li>
    <li>Hardware acceleration of Bio-SFA & Bio-NICA neural models</li>
    <li>Designed a new distributed algorithm for the Minimum Dominating Set problem</li>
  </ul>

  <div class="date-range">Aug 2020 – Jul 2024</div>
</div>


<!-- CMP LAB -->
<div class="research-block">

  <div class="research-header">Research Assistant & Developer — <a href="https://cmplab.sbu.ac.ir/">CMP Lab</a></div>
  <div class="research-meta">Computational & Mathematical Psychology Laboratory</div>
  <div class="supervisor">
    Supervised by:
    <a href="https://scholar.google.com/citations?user=LA2VT8kAAAAJ">Jamal Amani Rad</a>,
    <a href="https://scholar.google.com/citations?user=qbOoaykAAAAJ">Amirhosein Hadian</a>
  </div>

  <img class="research-image" src="https://en.sbu.ac.ir/documents/5971290/0/slider-11.jpg/b9331f1b-0e96-8130-5197-dac9cf2a8521?t=1733818942218&download=true">

  <ul class="research-list">
    <li>Developed behavioral & cognitive science research tasks:</li>
    <ul>
      <li>Motion Discriminator Task</li>
      <li>Stereotypical Job Beliefs Task</li>
      <li>Temporal Bisection Task</li>
      <li>Wisconsin Card Sorting Task</li>
    </ul>
  </ul>

  <div class="date-range">Jan 2021 – 2023</div>
</div>

</div>
