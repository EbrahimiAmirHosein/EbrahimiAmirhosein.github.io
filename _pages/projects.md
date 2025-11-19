---
layout: archive
title: " Projects"
permalink: /projects/
author_profile: true
---

<style>
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    min-height: 370px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  .project-image {
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .project-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 15px;
  }

  .project-title {
    font-size: 1.1em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .project-description {
    font-size: 0.9em;
    color: #7f8c8d;
    margin-bottom: 10px;
  }

  .project-link {
    margin-top: auto;
    align-self: flex-start;
    padding: 8px 12px;
    font-size: 0.9em;
    color: white;
    background-color: #3498db;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.3s ease-in-out;
  }

  .project-link:hover {
    background-color: #2980b9;
  }

  /* Optional: restrict first 6 visible */
  .project-card:nth-child(n+7) {
    display: none;
  }

  /* Show all when class added */
  .show-all .project-card {
    display: flex;
  }

  .show-more-btn {
    display: block;
    margin: 25px auto;
    padding: 10px 20px;
    font-size: 1em;
    background-color: #10b981;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .show-more-btn:hover {
    background-color: #059669;
  }
</style>

<div class="projects-container" id="projectsContainer">

<!-- FIRST 6 PROJECTS -->

<div class="project-card">
  <img src="/images/birds.jpeg" alt="Bird Classification" class="project-image">
  <div class="project-content">
    <div class="project-title">Sound Bird Classification</div>
    <div class="project-description">Classifying bird sounds using machine learning techniques.</div>
    <a href="https://github.com/EbrahimiAmirHosein/Bird-Clasif-Sysc5405" class="project-link">🔗 View Project</a>
  </div>
</div>

<div class="project-card">
  <img src="/images/text-feature.jpeg" alt="Text-Mining Based Feature Selection" class="project-image">
  <div class="project-content">
    <div class="project-title">Text-Mining Based Feature Selection for Anticancer Drug Response Prediction</div>
    <div class="project-description">Text-mined gene features outperform traditional methods for predicting anticancer drug response.</div>
    <a href="https://github.com/EbrahimiAmirHosein/text_features" class="project-link">🔗 View Project</a>
  </div>
</div>

<div class="project-card">
  <img src="/images/cancer.png" alt="Feature Selection and Cancer Detection" class="project-image">
  <div class="project-content">
    <div class="project-title">Feature Selection and Cancer Detection</div>
    <div class="project-description">Using machine learning models and feature selection techniques to detect cancer.</div>
    <a href="https://github.com/EbrahimiAmirHosein/Feature-Selection-and-Cancer-Detection/tree/main" class="project-link">🔗 View Project</a>
  </div>
</div>

<div class="project-card">
  <img src="/images/converter.png" alt="Microscopic Image Converter" class="project-image">
  <div class="project-content">
    <div class="project-title">Microscopic Image Converter (Pathology)</div>
    <div class="project-description">Firefly tool to convert microscopic images (MRXS to SVS).</div>
    <a href="https://github.com/EbrahimiAmirHosein/MRXS_to_SVS" class="project-link">🔗 View Project</a>
  </div>
</div>

<div class="project-card">
  <img src="/images/vuln.png" alt="Vulnerability Detection" class="project-image">
  <div class="project-content">
    <div class="project-title">Vulnerability Detection</div>
    <div class="project-description">Using ML for cybersecurity threat detection.</div>
    <a href="https://github.com/EbrahimiAmirHosein/Vulnerability-Detection" class="project-link">🔗 View Project</a>
  </div>
</div>

<div class="project-card">
  <img src="/images/gaze.png" alt="TempoGaze" class="project-image">
  <div class="project-content">
    <div class="project-title">TempoGaze</div>
    <div class="project-description">Estimating gaze duration and location.</div>
    <a href="https://github.com/EbrahimiAmirHosein/TempoGaze" class="project-link">🔗 View Project</a>
  </div>
</div>

<!-- NEW PROJECTS -->

<div class="project-card">
  <img src="/images/ML_MM.png" alt="Multi-Cohort ML Pipeline for Multiple Myeloma" class="project-image">
  <div class="project-content">
    <div class="project-title">Multi-Cohort ML Pipeline for Multiple Myeloma</div>
    <div class="project-description">Predict early treatment response and survival outcomes using RNA-seq and microarray gene expression data. Includes Kaplan–Meier survival analysis.</div>
    <a href="https://github.com/EbrahimiAmirHosein/ML-MM-Pipeline" class="project-link">🔗 View Project</a>
  </div>
</div>

<div class="project-card">
  <img src="/images/TCGA-HUB.png" alt="TCGA Histology Hub" class="project-image">
  <div class="project-content">
    <div class="project-title">TCGA-Histology-Hub</div>
    <div class="project-description">Central hub for downloading, organizing, and summarizing TCGA histology slide data via the GDC API. Supports patient-specific filtering.</div>
    <a href="https://github.com/EbrahimiAmirHosein/TCGA-Histology-Hub" class="project-link">🔗 View Project</a>
  </div>
</div>

<div class="project-card">
  <img src="/images/LUNGINSIGHTANNOTATION.png" alt="LungInsightAnnotation" class="project-image">
  <div class="project-content">
    <div class="project-title">LungInsightAnnotation</div>
    <div class="project-description">A serverless dockerized application to streamline histological annotation of lung tissue, especially for ARDS studies.</div>
    <a href="https://github.com/EbrahimiAmirHosein/LungInsightAnnotation" class="project-link">🔗 View Project</a>
  </div>
</div>

</div>

<!-- Show more button -->
<button class="show-more-btn" id="showMoreBtn">Show All Projects</button>

<script>
  const btn = document.getElementById('showMoreBtn');
  const container = document.getElementById('projectsContainer');

  btn.addEventListener('click', () => {
    container.classList.toggle('show-all');
    btn.textContent = container.classList.contains('show-all') ? 'Show Less' : 'Show All Projects';
  });
</script>
