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
  /* Make the card behave like a vertical flex container */
  display: flex;
  flex-direction: column;
  
  /* Optional: fix the card height so all are uniform. 
     Adjust the value as needed to fit your text + button. */
  min-height: 370px; /* or height: 370px; if you want a strict fixed height */
}

  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

.project-image {
  /* Keep the image height as is or adjust to fit your design */
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}


.project-content {
  /* Expand to fill the remaining vertical space
     and push the button to the bottom */
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
  /* Give some bottom margin if needed */
  margin-bottom: 10px;
}
.project-link {
  /* Button at the bottom of .project-content */
  margin-top: auto; /* push it to bottom if there's extra space */
  align-self: flex-start; /* or center, or flex-end, depending on your preference */
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

</style>

<div class="projects-container" id="projectsContainer">

  <!-- FIRST 6 PROJECTS (VISIBLE INITIALLY) -->

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
	<img src="/images/text-feature.jpeg" alt="Text-Mining Based Feature Selection" class="project-image">
	<div class="project-content">
		<div class="project-title">Text-Mining Based Feature Selection for Anticancer Drug Response Prediction</div>
		<div class="project-description">Text-mined gene features outperform traditional methods for predicting anticancer drug response.</div>
		<a href="https://github.com/EbrahimiAmirHosein/text_features" class="project-link">🔗 View
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

<div class="project-card">
	<img src="/images/ResNet.png" alt="Parameter Estimation using Residual Neural Network" class="project-image">
	<div class="project-content">
		<div class="project-title">Parameter Estimation using Residual Neural Network</div>
		<div class="project-description">A practical approach for estimating stochastic processes, even when
			likelihood functions are unknown.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Parameter-estimation-using-residual-neural-network"
			class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/nn.png" alt="Comment Verification Using Neural Networks" class="project-image">
	<div class="project-content">
		<div class="project-title">Comment Verification Using Neural Networks</div>
		<div class="project-description">Developing a system to verify user comments on Digikala using deep learning
			techniques.</div>
		<a href="https://github.com/EbrahimiAmirHosein/comment_verification" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/GAN.png" alt="Generative Adversarial Networks (GANs) Practice" class="project-image">
	<div class="project-content">
		<div class="project-title">Generative Adversarial Networks (GANs) Practice</div>
		<div class="project-description">Implementing different GAN architectures and training methodologies.</div>
		<a href="https://github.com/EbrahimiAmirHosein/GAN-practice" class="project-link">🔗 View Project</a>
	</div>
</div>


<div class="project-card">
	<img src="/images/graphs.png" alt="Minimum Dominating Set in Graphs" class="project-image">
	<div class="project-content">
		<div class="project-title">Minimum Dominating Set in Graphs</div>
		<div class="project-description">A novel approach to solving the MDS and MTDS problems efficiently.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Distributed-algorithms-for-minimum-dominating-set"
			class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/RS-GNN.png" alt="Recommender System" class="project-image">
	<div class="project-content">
		<div class="project-title">Recommender System</div>
		<div class="project-description">Using Graph Neural Networks and classic approaches.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Recommender-System" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/EmotionR.jpg" alt="Face Recognition" class="project-image">
	<div class="project-content">
		<div class="project-title">Face Recognition using ResNet</div>
		<div class="project-description">Detecting facial emotions with deep learning.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Face-Recognition" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/motion.png" alt="Motion Discriminator" class="project-image">
	<div class="project-content">
		<div class="project-title">Motion Discriminator</div>
		<div class="project-description">Cognitive and neural models for decision-making.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Motion-discriminator" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/job.png" alt="Stereotypical Job Beliefs" class="project-image">
	<div class="project-content">
		<div class="project-title">Stereotypical Job Beliefs</div>
		<div class="project-description">Assessing gender biases in job roles.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Stereotypical-beliefs-about-jobs" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/Temp.png" alt="Temporal Bisection" class="project-image">
	<div class="project-content">
		<div class="project-title">Temporal Bisection</div>
		<div class="project-description">Studying time perception by measuring and comparing stimulus durations.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Temporal-Bisection" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/winsc.png" alt="Wisconsin Task" class="project-image">
	<div class="project-content">
		<div class="project-title">Wisconsin Task</div>
		<div class="project-description">A neuropsychological test assessing cognitive flexibility, abstract thinking,
			and working memory.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Wisconsin-Card-Sorting-Test" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/svd.png" alt="Singular Value Decomposition" class="project-image">
	<div class="project-content">
		<div class="project-title">Singular Value Decomposition</div>
		<div class="project-description">Implementation of the SVD algorithm in C for efficient matrix factorization.
		</div>
		<a href="https://github.com/EbrahimiAmirHosein/Singular-value-decomposition" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/sig.png" alt="Signal Generator - ARM STM32" class="project-image">
	<div class="project-content">
		<div class="project-title">Signal Generator - ARM STM32</div>
		<div class="project-description">Designing a signal generator using ARM STM32 microcontrollers.</div>
		<a href="https://github.com/EbrahimiAmirHosein/Signal-Generator-ARM-stm32" class="project-link">🔗 View
			Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/timer.png" alt="8086 Timer" class="project-image">
	<div class="project-content">
		<div class="project-title">8086 Timer</div>
		<div class="project-description">Designing a programmable timer in the 8086 assembly using Proteus.</div>
		<a href="https://github.com/EbrahimiAmirHosein/8086-Timer-In-Proteus" class="project-link">🔗 View Project</a>
	</div>
</div>

<div class="project-card">
	<img src="/images/pong.png" alt="PONG Game" class="project-image">
	<div class="project-content">
		<div class="project-title">PONG Game</div>
		<div class="project-description">A classic Pong game implemented in 8086 assembly using the Emu8086 framework.
		</div>
		<a href="https://github.com/EbrahimiAmirHosein/PONG-Game-in-8086-assembly" class="project-link">🔗 View
			Project</a>
	</div>
</div>


