---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
  .pubs-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--site-text);
  }

  /* Section Titles */
  .pub-section-title {
    font-size: 1.9rem;
    font-weight: 700;
    color: var(--site-text);
    margin: 50px 0 25px 0;
    padding-left: 14px;
    border-left: 6px solid var(--site-primary);
  }

  /* Vertical timeline connector */
  .pub-list {
    list-style: none;
    padding: 0;
    margin-left: 15px;
    border-left: 2px solid var(--site-border);
  }

  /* Publication item */
  .pub-item {
    position: relative;
    padding: 18px 22px;
    margin: 22px 0;
    border-radius: 14px;
    transition: all 0.25s ease;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    box-shadow: var(--card-shadow);
    color: var(--site-text);
    backdrop-filter: blur(6px);
  }

  /* Dot on the timeline */
  .pub-item::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 22px;
    width: 12px;
    height: 12px;
    background: var(--site-primary);
    border-radius: 50%;
    border: 2px solid var(--surface-bg);
    box-shadow: 0 0 0 3px var(--site-border);
  }

  .pub-item:hover {
    background: var(--card-hover-bg);
    border-color: var(--site-primary);
    box-shadow: var(--card-hover-shadow);
    transform: translateY(-4px);
  }

  /* Text styles */
  .pub-title {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--site-text);
  }

  .pub-authors {
    color: var(--muted-text);
    font-style: italic;
    margin-bottom: 4px;
  }

  .pub-source {
    font-size: 0.95rem;
    color: var(--site-primary);
    font-weight: 500;
    margin-bottom: 12px;
  }

  .pub-link {
    color: var(--site-link);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
  }
  .pub-link:hover {
    text-decoration: underline;
    color: var(--site-link-hover);
  }

  /* Variant colors */
  .preprint::before { background: #ef4444; }
  .conference::before { background: #a855f7; }

  @media (max-width: 768px) {
    .pub-item { padding: 16px; }
    .pub-section-title { font-size: 1.6rem; }
  }
</style>

<div class="pubs-container">

<!-- BOOK CHAPTER -->
<h2 class="pub-section-title">Book Chapter</h2>
<ul class="pub-list">
  <li class="pub-item">
    <div class="pub-title">First Course in Machine Learning: Dimensionality Reduction in Machine Learning</div>
    <div class="pub-authors">Chapters: 1, 3</div>
    <div class="pub-source">Elsevier, 2025</div>
    <a class="pub-link" href="https://www.sciencedirect.com/science/article/pii/B9780443328183000095">Read more</a>
  </li>
</ul>

<!-- JOURNAL ARTICLES -->
<h2 class="pub-section-title">Journal Articles</h2>
<ul class="pub-list">
  <li class="pub-item">
    <div class="pub-title">Deciphering Genomic Correlates of Differential Treatment Response Kinetics in Multiple Myeloma</div>
    <div class="pub-authors">Patrick B, <b>A. Ebrahimi</b>, A. Visram, A. Mer</div>
    <div class="pub-source">Clinical Lymphoma, Myeloma & Leukemia, 2025; 25(Suppl. 1): S154</div>
    <a class="pub-link" href="https://doi.org/10.1016/S2152-2650(25)03651-1">DOI</a>
  </li>

  <li class="pub-item">
    <div class="pub-title">Text-Mining Based Feature Selection for Anticancer Drug Response Prediction</div>
    <div class="pub-authors">G. Wu, A. Zaker, <b>A.H. Ebrahimi</b>, S. Tripathi, A. Mer</div>
    <div class="pub-source">Bioinformatics Advances, 2024</div>
    <a class="pub-link" href="https://academic.oup.com/bioinformaticsadvances/article/4/1/vbae047/7644335">Read more</a>
  </li>

  <li class="pub-item">
    <div class="pub-title">HA-BSN: Hardware Acceleration of Bio-SFA and Bio-NICA, Biological Neural Networks, on FPGA with HLS</div>
    <div class="pub-authors"><b>A.H. Ebrahimi</b>, H. Vafaei, M. Asghari, D. Rahmati</div>
    <div class="pub-source">Neurocomputing, 2022</div>
    <a class="pub-link" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4517541">Read more</a>
  </li>
</ul>

<!-- PREPRINTS -->
<h2 class="pub-section-title">Preprints</h2>
<ul class="pub-list">
  <li class="pub-item preprint">
    <div class="pub-title">Artificial Intelligence-enabled Histological Analysis in Preclinical Respiratory Disease Models: A Scoping Review</div>
    <div class="pub-authors">Kuhar, E., Park, J., Jahandideh, F., Komeili, … A., Ebrahimi</div>
    <div class="pub-source">bioRxiv Preprints, 2025</div>
    <a class="pub-link" href="https://doi.org/10.1101/2025.10.07.675857">DOI</a>
  </li>
</ul>

<!-- CONFERENCES -->
<h2 class="pub-section-title">Conference Proceedings</h2>
<ul class="pub-list">
  <li class="pub-item conference">
    <div class="pub-title">From Data Annotation to AI Prediction: Streamlining Histopathology Analysis in ARDS</div>
    <div class="pub-authors"><b>A.H. Ebrahimi</b>, M.R. Zarei, E. Kuhar, P. Karunamurthy, K. Pillagawa, F. Jahandideh, M. Komeili, M. Lalu, A. Mer</div>
    <div class="pub-source">Canadian AI 2025, CAIAC</div>
    <a class="pub-link" href="https://assets.pubpub.org/dwmjptvq/219-31747763773612.pdf">Read more</a>
  </li>

  <li class="pub-item conference">
    <div class="pub-title">Multi-Omic Insights into the Genetic Correlates of Differential Treatment Response Kinetics Effect</div>
    <div class="pub-authors">Patrick B, <b>A. Ebrahimi</b>, A. Visram, S. Mer</div>
    <div class="pub-source">Poster; International Myeloma Society Conference, Sept 2025</div>
  </li>

  <li class="pub-item conference">
    <div class="pub-title">A New Approach for Minimum Dominating Set Problem</div>
    <div class="pub-authors">S. Alipour, <b>A.H. Ebrahimi</b></div>
    <div class="pub-source">ACM CIKM, 2024</div>
    <a class="pub-link" href="https://drive.google.com/file/d/1uzFTRf3CeWSN7075rZLWK_YzQtbxNmG1/view">Read more</a>
  </li>

  <li class="pub-item conference">
    <div class="pub-title">Estimating Stochastic Model Parameters Using Residual Neural Networks</div>
    <div class="pub-authors"><b>A.H. Ebrahimi</b>, H. Vafaei, D. Rahmati</div>
    <div class="pub-source">NIC, 2022</div>
    <a class="pub-link" href="https://cs.ipm.ac.ir/nic/1401/files/Final_proceedings_NIC1401.pdf">Page 128</a>
  </li>
</ul>

</div>
