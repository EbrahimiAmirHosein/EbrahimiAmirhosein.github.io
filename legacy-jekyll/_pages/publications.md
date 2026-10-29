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
    padding: 1.5rem 0 2rem;
    color: var(--site-text);
  }

  /* Section Titles */
  .pub-section-title {
    font-family: Literata, Georgia, serif;
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--site-text);
    margin: 2.5rem 0 1.35rem 0;
    padding-left: 0.9rem;
    border-left: 4px solid var(--site-primary);
  }

  /* Vertical timeline connector */
  .pub-list {
    list-style: none;
    padding: 0;
    margin-left: 0.85rem;
    border-left: 2px solid var(--site-border);
  }

  /* Publication item */
  .pub-item {
    position: relative;
    padding: 1.15rem 1.35rem;
    margin: 1.15rem 0;
    border-radius: 16px;
    transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 280ms ease,
      border-color 280ms ease,
      background 280ms ease;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    box-shadow: var(--card-shadow);
    color: var(--site-text);
    backdrop-filter: blur(8px);
    animation: fade-rise 0.5s both;
  }

  /* Dot on the timeline */
  .pub-item::before {
    content: "";
    position: absolute;
    left: -11px;
    top: 1.45rem;
    width: 12px;
    height: 12px;
    background: var(--site-primary);
    border-radius: 50%;
    border: 2px solid var(--surface-bg);
    box-shadow: 0 0 0 3px var(--site-primary-soft);
  }

  .pub-item:hover {
    background: var(--card-hover-bg);
    border-color: var(--site-primary);
    box-shadow: var(--card-hover-shadow);
    transform: translateY(-4px);
  }

  /* Text styles */
  .pub-title {
    font-family: Literata, Georgia, serif;
    font-size: 1.12rem;
    font-weight: 600;
    letter-spacing: -0.015em;
    margin-bottom: 0.4rem;
    color: var(--site-text);
    line-height: 1.4;
  }

  .pub-authors {
    color: var(--muted-text);
    font-style: italic;
    margin-bottom: 0.3rem;
  }

  .pub-source {
    font-size: 0.95rem;
    color: var(--site-primary);
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .pub-link {
    color: var(--site-link);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.92rem;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }

  .pub-link:hover {
    text-decoration: underline;
    color: var(--site-link-hover);
  }

  /* Variant colors */
  .preprint::before {
    background: #f43f5e;
  }

  .conference::before {
    background: var(--site-accent, #0891b2);
  }

  @media (max-width: 768px) {
    .pub-item {
      padding: 1rem;
    }

    .pub-section-title {
      font-size: 1.45rem;
    }
  }
</style>

<div class="pubs-container">

  <!-- JOURNAL ARTICLES -->
  <h2 class="pub-section-title">Journal Articles</h2>
  <ul class="pub-list">

    <li class="pub-item">
      <div class="pub-title">
        Artificial Intelligence-enabled Histological Analysis in Pre-clinical Respiratory Disease Models: A Scoping Review
      </div>
      <div class="pub-authors">
        E. Kuhar, J. Park, F. Jahandideh, M. Komeili, A. Sadeknury, N. Kang, P. Karunamurthy, M.R. Zarei,
        <b>A.H. Ebrahimi</b>, S.E. Gill, P.C. Liaw, D.A. Fergusson, D.J. Stewart, A. Mer, M.M. Lalu
      </div>
      <div class="pub-source">
        European Respiratory Review, 2026; 35(180):250243
      </div>
      <a
        class="pub-link"
        href="https://doi.org/10.1183/16000617.0243-2025"
      >
        DOI
      </a>
    </li>

    <li class="pub-item">
      <div class="pub-title">
        High-Performance and Configurable SW/HW Co-Design of Biologically Plausible Neural Networks
      </div>
      <div class="pub-authors">
        <b>A.H. Ebrahimi</b>, H. Vafaei, M. Asghari, A. Sadr, D. Rahmati
      </div>
      <div class="pub-source">
        ACM Transactions on Reconfigurable Technology and Systems (TRETS), 2026 (in press)
      </div>
    </li>

    <li class="pub-item">
      <div class="pub-title">
        Text-Mining Based Feature Selection for Anticancer Drug Response Prediction
      </div>
      <div class="pub-authors">
        G. Wu, A. Zaker, <b>A.H. Ebrahimi</b>, S. Tripathi, A. Mer
      </div>
      <div class="pub-source">
        Bioinformatics Advances, 2024; 4(1):vbae047
      </div>
      <a
        class="pub-link"
        href="https://doi.org/10.1093/bioadv/vbae047"
      >
        DOI
      </a>
    </li>

  </ul>

  <!-- CONFERENCE PROCEEDINGS -->
  <h2 class="pub-section-title">Conference Proceedings</h2>
  <ul class="pub-list">

    <li class="pub-item conference">
      <div class="pub-title">
        OmicSieve: A General Omics Framework for Compact Component Embeddings
      </div>
      <div class="pub-authors">
        <b>A.H. Ebrahimi</b>, R. Afiz, A. Mer
      </div>
      <div class="pub-source">
        2026 IEEE Conference on Computational Intelligence in Bioinformatics and Computational Biology (CIBCB 2026) (in press)
      </div>
    </li>

    <li class="pub-item conference">
      <div class="pub-title">
        From Data Annotation to AI Prediction: Streamlining Histopathology Analysis in Acute Respiratory Distress Syndrome
      </div>
      <div class="pub-authors">
        <b>A.H. Ebrahimi</b>, M.R. Zarei, E. Kuhar, P. Karunamurthy,
        K. Pillagawa, F. Jahandideh, M. Komeili, M. Lalu, A. Mer
      </div>
      <div class="pub-source">
        Proceedings of the 38th Canadian Conference on Artificial Intelligence (Canadian AI 2025)
      </div>
      <a
        class="pub-link"
        href="https://doi.org/10.21428/594757db.38c6c547"
      >
        DOI
      </a>
    </li>

    <li class="pub-item conference">
      <div class="pub-title">
        A New Approach for Minimum Dominating Set Problem
      </div>
      <div class="pub-authors">
        S. Alipour, <b>A.H. Ebrahimi</b>
      </div>
      <div class="pub-source">
        ACM CIKM, 2024
      </div>
      <a
        class="pub-link"
        href="https://drive.google.com/file/d/1uzFTRf3CeWSN7075rZLWK_YzQtbxNmG1/view"
      >
        Read more
      </a>
    </li>

    <li class="pub-item conference">
      <div class="pub-title">
        Estimating Stochastic Model Parameters Using Residual Neural Networks
      </div>
      <div class="pub-authors">
        <b>A.H. Ebrahimi</b>, H. Vafaei, D. Rahmati
      </div>
      <div class="pub-source">
        NIC, 2022
      </div>
      <a
        class="pub-link"
        href="https://cs.ipm.ac.ir/nic/1401/files/Final_proceedings_NIC1401.pdf"
      >
        Page 128
      </a>
    </li>

  </ul>

  <!-- BOOK CHAPTER -->
  <h2 class="pub-section-title">Book Chapter</h2>
  <ul class="pub-list">
    <li class="pub-item">
      <div class="pub-title">
        Basics of Machine Learning
      </div>
      <div class="pub-authors">
        <b>A.H. Ebrahimi</b>, H.V. Sefat, J.A. Rad
      </div>
      <div class="pub-source">
        Chapter 1 in Dimensionality Reduction in Machine Learning (J.A. Rad, S. Chakraverty, K. Parand, Eds.), pp. 3–38, Elsevier, 2025
      </div>
      <a
        class="pub-link"
        href="https://doi.org/10.1016/B978-0-44-332818-3.00009-5"
      >
        DOI
      </a>
    </li>
  </ul>

  <!-- CONFERENCE ABSTRACT -->
  <h2 class="pub-section-title">Conference Abstract</h2>
  <ul class="pub-list">
    <li class="pub-item">
      <div class="pub-title">
        Deciphering Genomic Correlates of Differential Treatment Response Kinetics in Multiple Myeloma
      </div>
      <div class="pub-authors">
        B. Patrick, <b>A.H. Ebrahimi</b>, A. Visram, A. Mer
      </div>
      <div class="pub-source">
        Clinical Lymphoma, Myeloma &amp; Leukemia, 2025; 25(Suppl. 2):S153–S154 (poster, 22nd International Myeloma Society Annual Meeting, Toronto)
      </div>
      <a
        class="pub-link"
        href="https://doi.org/10.1016/S2152-2650(25)03651-1"
      >
        DOI
      </a>
    </li>
  </ul>

</div>
