---
layout: archive
title: "🚀 Projects"
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
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    background: #fff;
    padding-bottom: 15px;
    text-align: center;
    display: block;
  }

  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .project-content {
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
    display: inline-block;
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

  .hidden {
    display: none; /* Hide extra projects initially */
  }

  .load-more-btn {
    display: block;
    margin: 30px auto;
    padding: 12px 20px;
    font-size: 1em;
    font-weight: bold;
    color: white;
    background-color: #27ae60;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }

  .load-more-btn:hover {
    background-color: #219150;
  }
</style>

<div class="projects-container" id="projectsContainer">

  <!-- FIRST 9 PROJECTS (VISIBLE INITIALLY) -->

<div class="project-card">
	<img src="/images/birds.jpeg" alt="Bird Classification" class="project-image">
	<div class="project-content">
		<div class="project-title">Sound Bird Classification</div>
		<div class="project-description">Classifying bird sounds using machine learning techniques.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Bird-Clasif-Sysc5405" class="project-link">🔗 View
			Project</a>
	</div>
</div>


<div class="project-card">
	<img src="/images/cancer.png" alt="Feature Selection and Cancer Detection" class="project-image">
	<div class="project-content">
		<div class="project-title">Feature Selection and Cancer Detection</div>
		<div class="project-description">Using machine learning models and feature selection techniques to detect
			cancer.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Feature-Selection-and-Cancer-Detection/tree/main"
			class="project-link">🔗 View Project</a>
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
		<a href="https://github.com/EbrahimiAmirHosein/Vulnerability-Detection" class="project-link">🔗 View
			Project</a>
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


<div class="project-card">
	<img src="/images/accelerator.png" alt="Bio-SFA Bio-NICA Accelerator" class="project-image">
	<div class="project-content">
		<div class="project-title">Bio-SFA & Bio-NICA Accelerator</div>
		<div class="project-description">Developing hardware accelerators for bio-inspired networks.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Bio-SFA-bio-NICA-accelerator" class="project-link">🔗 View
			Project</a>
	</div>
</div>

  <!-- REMAINING PROJECTS (HIDDEN INITIALLY) -->

<div class="project-card hidden">
	<img src="/images/ResNet.png" alt="Parameter Estimation using Residual Neural Network" class="project-image">
	<div class="project-content">
		<div class="project-title">Parameter Estimation using Residual Neural Network</div>
		<div class="project-description">A practical approach for estimating stochastic processes, even when
			likelihood functions are unknown.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Parameter-estimation-using-residual-neural-network"
			class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/nn.png" alt="Comment Verification Using Neural Networks" class="project-image">
	<div class="project-content">
		<div class="project-title">Comment Verification Using Neural Networks</div>
		<div class="project-description">Developing a system to verify user comments on Digikala using deep learning
			techniques.</div>
		<a href="https://github.com/EbrahimiAmirHosein/comment_verification" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/GAN.png" alt="Generative Adversarial Networks (GANs) Practice" class="project-image">
	<div class="project-content">
		<div class="project-title">Generative Adversarial Networks (GANs) Practice</div>
		<div class="project-description">Implementing different GAN architectures and training methodologies.</div>
		<a href="https://github.com/EbrahimiAmirHosein/GAN-practice" class="project-link">🔗 View Project</a>
	</div>
</div>


<div class="project-card hidden">
	<img src="/images/graphs.png" alt="Minimum Dominating Set in Graphs" class="project-image">
	<div class="project-content">
		<div class="project-title">Minimum Dominating Set in Graphs</div>
		<div class="project-description">A novel approach to solving the MDS and MTDS problems efficiently.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Distributed-algorithms-for-minimum-dominating-set"
			class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/RS-GNN.png" alt="Recommender System" class="project-image">
	<div class="project-content">
		<div class="project-title">Recommender System</div>
		<div class="project-description">Using Graph Neural Networks and classic approaches.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Recommender-System" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/EmotionR.jpg" alt="Face Recognition" class="project-image">
	<div class="project-content">
		<div class="project-title">Face Recognition using ResNet</div>
		<div class="project-description">Detecting facial emotions with deep learning.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Face-Recognition" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/motion.png" alt="Motion Discriminator" class="project-image">
	<div class="project-content">
		<div class="project-title">Motion Discriminator</div>
		<div class="project-description">Cognitive and neural models for decision-making.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Motion-discriminator" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/job.png" alt="Stereotypical Job Beliefs" class="project-image">
	<div class="project-content">
		<div class="project-title">Stereotypical Job Beliefs</div>
		<div class="project-description">Assessing gender biases in job roles.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Stereotypical-beliefs-about-jobs" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/Temp.png" alt="Temporal Bisection" class="project-image">
	<div class="project-content">
		<div class="project-title">Temporal Bisection</div>
		<div class="project-description">Studying time perception by measuring and comparing stimulus durations.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Temporal-Bisection" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/winsc.png" alt="Wisconsin Task" class="project-image">
	<div class="project-content">
		<div class="project-title">Wisconsin Task</div>
		<div class="project-description">A neuropsychological test assessing cognitive flexibility, abstract thinking,
			and working memory.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Wisconsin-Card-Sorting-Test" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/svd.png" alt="Singular Value Decomposition" class="project-image">
	<div class="project-content">
		<div class="project-title">Singular Value Decomposition</div>
		<div class="project-description">Implementation of the SVD algorithm in C for efficient matrix factorization.
		</div>
		<a href="https://github.com/EbrahimiAmirHosein/Singular-value-decomposition" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/sig.png" alt="Signal Generator - ARM STM32" class="project-image">
	<div class="project-content">
		<div class="project-title">Signal Generator - ARM STM32</div>
		<div class="project-description">Designing a signal generator using ARM STM32 microcontrollers.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Signal-Generator-ARM-stm32" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/timer.png" alt="8086 Timer" class="project-image">
	<div class="project-content">
		<div class="project-title">8086 Timer</div>
		<div class="project-description">Designing a programmable timer in the 8086 assembly using Proteus.</div>
		<a href="https://github.com/EbrahimiAmirHosein/8086-Timer-In-Proteus" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card hidden">
	<img src="/images/pong.png" alt="PONG Game" class="project-image">
	<div class="project-content">
		<div class="project-title">PONG Game</div>
		<div class="project-description">A classic Pong game implemented in 8086 assembly using the Emu8086 framework.
		</div>
		<a href="https://github.com/EbrahimiAmirHosein/PONG-Game-in-8086-assembly" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<button class="load-more-btn" id="loadMoreBtn">🔽 Load More</button>

<script>
  document.getElementById("loadMoreBtn").addEventListener("click", function () {
    let hiddenProjects = document.querySelectorAll(".project-card.hidden");

    hiddenProjects.forEach((project, index) => {
      setTimeout(() => {
        project.classList.remove("hidden");
        project.style.display = "block"; // Ensure it forces reflow
      }, index * 100); // Adds a smooth reveal effect
    });

    // Hide the button after all projects are shown
    setTimeout(() => {
      this.style.display = "none";
    }, hiddenProjects.length * 100 + 300);
  });
</script>
