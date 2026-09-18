export const profile = {
  name: "Amirhosein Ebrahimi",
  role: "M.A.Sc. in Biomedical Engineering with a Specialization in Bioinformatics",
  location: "Ottawa / Canada",
  email: "amirh.ebrahimi1377@gmail.com",
  avatar: "/images/Profile.png",
  cv: "/CV___AHE.pdf",
  links: {
    github: "https://github.com/EbrahimiAmirHosein",
    linkedin: "https://www.linkedin.com/in/amirhosein-ebrahimi",
    scholar: "https://scholar.google.com/citations?user=9pHZaXQAAAAJ&hl=en",
  },
};

export const about = {
  intro:
    "Hi, I'm Amirhossein Ebrahimi, an AI/ML researcher and engineer with four years of advanced research experience. I completed my Master of Applied Science in Biomedical Engineering with a specialization in Artificial Intelligence at the University of Ottawa.",
  narrative:
    "My work spans deep learning, computer vision, time-series analysis, generative modeling, and biomedical AI. I focus particularly on computational pathology and whole-slide histopathology imaging, including weakly supervised learning, medical-image analysis, and rigorous model evaluation and validation. I develop end-to-end Python machine-learning workflows, from data preparation and feature engineering through model development, experimentation, and validation.",
  interestsLead:
    "My research interests include:",
  interests: [
    "Machine Learning and Deep Learning",
    "Computer Vision",
    "Computational Pathology",
    "Bioinformatics",
    "Generative Modeling",
    "Explainable and Reliable AI",
  ],
};

export const researchIntro =
  "I work at the intersection of artificial intelligence and pathology, focusing on building models that help interpret histology slides and extract meaningful patterns from tissue samples. My work involves developing training pipelines, designing practical AI workflows for researchers, and exploring new ways deep learning can support biological discovery.";

export const currentResearch = {
  title: "Current Research: LungInsight",
  body:
    "LungInsight aims to improve how researchers assess lung injury in preclinical models of Acute Lung Injury (ALI). We are developing easy-to-use AI tools that can analyze histological images more quickly, consistently, and accurately than current manual methods. By reducing bias and adding clear, explainable outputs, our approach helps standardize image evaluation across labs. Ultimately, LungInsight supports faster, more reliable research that can deepen our understanding of lung diseases and help guide new treatments.",
  link: "https://lunginsight.ai/",
  linkLabel: "Explore LungInsight",
};

export const experience = [
  {
    role: "Research Assistant",
    org: "Mer Lab",
    orgLink: "https://merlab.github.io/",
    meta: "University of Ottawa • Computational Biology & Machine Learning",
    supervisors: [
      { name: "Dr. Arvind Mer", link: "https://www.uottawa.ca/faculty-medicine/dr-arvind-mer" },
    ],
    points: [
      {
        text: "Text-Mining Feature Selection for anticancer drug-response prediction",
        link: "https://academic.oup.com/bioinformaticsadvances/article/4/1/vbae047/7644335",
      },
      { text: "Research in machine learning for drug discovery and biological data analysis" },
    ],
    date: "May 2023 – Present",
  },
  {
    role: "Research Assistant",
    org: "IPM: Institute for Research in Fundamental Sciences",
    orgLink: "http://www.ipm.ac.ir/",
    meta: "School of Computer Science",
    supervisors: [
      { name: "Dara Rahmati", link: "https://scholar.google.com/citations?user=xwJgOl0AAAAJ" },
      { name: "Amirhosein Hadian", link: "https://scholar.google.com/citations?user=qbOoaykAAAAJ" },
    ],
    points: [
      { text: "Estimating drift–diffusion model parameters using deep learning" },
      {
        text:
          "Machine Learning Textbook: Co-authoring chapters on dimensionality reduction & feature selection",
      },
      { text: "Hardware acceleration of Bio-SFA & Bio-NICA neural models" },
      { text: "Designed a new distributed algorithm for the Minimum Dominating Set problem" },
    ],
    date: "Aug 2020 – Jul 2024",
  },
  {
    role: "Research Assistant & Developer",
    org: "CMP Lab",
    orgLink: "https://cmplab.sbu.ac.ir/",
    meta: "Computational & Mathematical Psychology Laboratory",
    supervisors: [
      { name: "Jamal Amani Rad", link: "https://scholar.google.com/citations?user=LA2VT8kAAAAJ" },
      { name: "Amirhosein Hadian", link: "https://scholar.google.com/citations?user=qbOoaykAAAAJ" },
    ],
    points: [
      { text: "Developed behavioral & cognitive science research tasks:" },
    ],
    subPoints: [
      "Motion Discriminator Task",
      "Stereotypical Job Beliefs Task",
      "Temporal Bisection Task",
      "Wisconsin Card Sorting Task",
    ],
    date: "Jan 2021 – 2023",
  },
];

export const publications = [
  {
    group: "Book Chapter",
    items: [
      {
        title:
          "First Course in Machine Learning: Dimensionality Reduction in Machine Learning",
        authors: "Chapters: 1, 3",
        source: "Elsevier, 2025",
        link: "https://www.sciencedirect.com/science/article/pii/B9780443328183000095",
        linkLabel: "Read more",
      },
    ],
  },
  {
    group: "Journal Articles",
    items: [
      {
        title:
          "Artificial Intelligence-enabled Histological Analysis in Pre-clinical Respiratory Disease Models: A Scoping Review",
        authors: "E. Kuhar, J. Park, F. Jahandideh, M. Komeili, …, A. Ebrahimi",
        highlightAuthor: "A. Ebrahimi",
        source: "European Respiratory Review, 2026; 35(180):250243",
        link: "https://publications.ersnet.org/content/errev/35/180/250243.abstract",
        linkLabel: "Read more",
      },
      {
        title:
          "Deciphering Genomic Correlates of Differential Treatment Response Kinetics in Multiple Myeloma",
        authors: "Patrick B, A. Ebrahimi, A. Visram, A. Mer",
        highlightAuthor: "A. Ebrahimi",
        source: "Clinical Lymphoma, Myeloma & Leukemia, 2025; 25(Suppl. 1):S154",
        link: "https://doi.org/10.1016/S2152-2650(25)03651-1",
        linkLabel: "DOI",
      },
      {
        title: "Text-Mining Based Feature Selection for Anticancer Drug Response Prediction",
        authors: "G. Wu, A. Zaker, A.H. Ebrahimi, S. Tripathi, A. Mer",
        highlightAuthor: "A.H. Ebrahimi",
        source: "Bioinformatics Advances, 2024",
        link: "https://academic.oup.com/bioinformaticsadvances/article/4/1/vbae047/7644335",
        linkLabel: "Read more",
      },
      {
        title:
          "HA-BSN: Hardware Acceleration of Bio-SFA and Bio-NICA, Biological Neural Networks, on FPGA with HLS",
        authors: "A.H. Ebrahimi, H. Vafaei, M. Asghari, D. Rahmati",
        highlightAuthor: "A.H. Ebrahimi",
        source: "Neurocomputing, 2022",
        link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4517541",
        linkLabel: "Read more",
      },
    ],
  },
  {
    group: "Conference Proceedings",
    items: [
      {
        title: "OmicSieve: A General Omics Framework for Compact Component Embeddings",
        authors: "A.H. Ebrahimi, R. Afiz, A. Mer",
        highlightAuthor: "A.H. Ebrahimi",
        source:
          "2026 IEEE Conference on Computational Intelligence in Bioinformatics and Computational Biology (CIBCB 2026)",
      },
      {
        title:
          "From Data Annotation to AI Prediction: Streamlining Histopathology Analysis in ARDS",
        authors:
          "A.H. Ebrahimi, M.R. Zarei, E. Kuhar, P. Karunamurthy, K. Pillagawa, F. Jahandideh, M. Komeili, M. Lalu, A. Mer",
        highlightAuthor: "A.H. Ebrahimi",
        source: "Canadian AI 2025, CAIAC",
        link: "https://assets.pubpub.org/dwmjptvq/219-31747763773612.pdf",
        linkLabel: "Read more",
      },
      {
        title: "A New Approach for Minimum Dominating Set Problem",
        authors: "S. Alipour, A.H. Ebrahimi",
        highlightAuthor: "A.H. Ebrahimi",
        source: "ACM CIKM, 2024",
        link: "https://drive.google.com/file/d/1uzFTRf3CeWSN7075rZLWK_YzQtbxNmG1/view",
        linkLabel: "Read more",
      },
      {
        title: "Estimating Stochastic Model Parameters Using Residual Neural Networks",
        authors: "A.H. Ebrahimi, H. Vafaei, D. Rahmati",
        highlightAuthor: "A.H. Ebrahimi",
        source: "NIC, 2022",
        link: "https://cs.ipm.ac.ir/nic/1401/files/Final_proceedings_NIC1401.pdf",
        linkLabel: "Page 128",
      },
    ],
  },
];

export const projects = [
  {
    title: "TCGA-Histology-Hub",
    image: "/images/TCGA-HUB.png",
    description:
      "Central hub for downloading, organizing, and summarizing TCGA histology slide data via the GDC API. Supports patient-specific filtering.",
    link: "https://github.com/EbrahimiAmirHosein/TCGA-Histology-Hub/tree/main/data",
  },
  {
    title: "LungInsightAnnotation",
    image: "/images/LUNGINSIGHTANNOTATION.png",
    description:
      "A serverless dockerized application to streamline histological annotation of lung tissue, especially for ARDS studies.",
    link: "https://github.com/EbrahimiAmirHosein/LungHistoNet",
  },
  {
    title: "Multi-Cohort ML Pipeline for Multiple Myeloma",
    image: "/images/ML_MM.png",
    description:
      "Predict early treatment response and survival outcomes using RNA-seq and microarray gene expression data. Includes Kaplan–Meier survival analysis.",
    link: "https://github.com/EbrahimiAmirHosein/MyelomaResponseNet",
  },
  {
    title: "Sound Bird Classification",
    image: "/images/birds.jpeg",
    description: "Classifying bird sounds using machine learning techniques.",
    link: "https://github.com/EbrahimiAmirHosein/Bird-Clasif-Sysc5405",
  },
  {
    title: "Text-Mining Based Feature Selection for Anticancer Drug Response Prediction",
    image: "/images/text-feature.jpeg",
    description:
      "Text-mined gene features outperform traditional methods for predicting anticancer drug response.",
    link: "https://github.com/EbrahimiAmirHosein/text_features",
  },
  {
    title: "Feature Selection and Cancer Detection",
    image: "/images/cancer.png",
    description:
      "Using machine learning models and feature selection techniques to detect cancer.",
    link: "https://github.com/EbrahimiAmirHosein/Feature-Selection-and-Cancer-Detection/tree/main",
  },
  {
    title: "Microscopic Image Converter (Pathology)",
    image: "/images/converter.png",
    description: "Firefly tool to convert microscopic images (MRXS to SVS).",
    link: "https://github.com/EbrahimiAmirHosein/MRXS_to_SVS",
  },
  {
    title: "Vulnerability Detection",
    image: "/images/vuln.png",
    description: "Using ML for cybersecurity threat detection.",
    link: "https://github.com/EbrahimiAmirHosein/Vulnerability-Detection",
  },
  {
    title: "TempoGaze",
    image: "/images/gaze.png",
    description: "Estimating gaze duration and location.",
    link: "https://github.com/EbrahimiAmirHosein/TempoGaze",
  },
  {
    title: "Bio-SFA & Bio-NICA Accelerator",
    image: "/images/accelerator.png",
    description: "Developing hardware accelerators for bio-inspired networks.",
    link: "https://github.com/EbrahimiAmirHosein/Bio-SFA-bio-NICA-accelerator",
  },
  {
    title: "Parameter Estimation using Residual Neural Network",
    image: "/images/ResNet.png",
    description:
      "A practical approach for estimating stochastic processes, even when likelihood functions are unknown.",
    link: "https://github.com/EbrahimiAmirHosein/Parameter-estimation-using-residual-neural-network",
  },
  {
    title: "Comment Verification Using Neural Networks",
    image: "/images/nn.png",
    description:
      "Developing a system to verify user comments on Digikala using deep learning techniques.",
    link: "https://github.com/EbrahimiAmirHosein/comment_verification",
  },
  {
    title: "Generative Adversarial Networks (GANs) Practice",
    image: "/images/GAN.png",
    description: "Implementing different GAN architectures and training methodologies.",
    link: "https://github.com/EbrahimiAmirHosein/GAN-practice",
  },
  {
    title: "Minimum Dominating Set in Graphs",
    image: "/images/graphs.png",
    description: "A novel approach to solving the MDS and MTDS problems efficiently.",
    link: "https://github.com/EbrahimiAmirHosein/Distributed-algorithms-for-minimum-dominating-set",
  },
  {
    title: "Recommender System",
    image: "/images/RS-GNN.png",
    description: "Using Graph Neural Networks and classic approaches.",
    link: "https://github.com/EbrahimiAmirHosein/Recommender-System",
  },
  {
    title: "Face Recognition using ResNet",
    image: "/images/EmotionR.jpg",
    description: "Detecting facial emotions with deep learning.",
    link: "https://github.com/EbrahimiAmirHosein/Face-Recognition",
  },
  {
    title: "Motion Discriminator",
    image: "/images/motion.png",
    description: "Cognitive and neural models for decision-making.",
    link: "https://github.com/EbrahimiAmirHosein/Motion-discriminator",
  },
  {
    title: "Stereotypical Job Beliefs",
    image: "/images/job.png",
    description: "Assessing gender biases in job roles.",
    link: "https://github.com/EbrahimiAmirHosein/Stereotypical-beliefs-about-jobs",
  },
  {
    title: "Temporal Bisection",
    image: "/images/Temp.png",
    description:
      "Studying time perception by measuring and comparing stimulus durations.",
    link: "https://github.com/EbrahimiAmirHosein/Temporal-Bisection",
  },
  {
    title: "Wisconsin Task",
    image: "/images/winsc.png",
    description:
      "A neuropsychological test assessing cognitive flexibility, abstract thinking, and working memory.",
    link: "https://github.com/EbrahimiAmirHosein/Wisconsin-Card-Sorting-Test",
  },
  {
    title: "Singular Value Decomposition",
    image: "/images/svd.png",
    description:
      "Implementation of the SVD algorithm in C for efficient matrix factorization.",
    link: "https://github.com/EbrahimiAmirHosein/Singular-value-decomposition",
  },
  {
    title: "Signal Generator - ARM STM32",
    image: "/images/sig.png",
    description: "Designing a signal generator using ARM STM32 microcontrollers.",
    link: "https://github.com/EbrahimiAmirHosein/Signal-Generator-ARM-stm32",
  },
  {
    title: "8086 Timer",
    image: "/images/timer.png",
    description: "Designing a programmable timer in the 8086 assembly using Proteus.",
    link: "https://github.com/EbrahimiAmirHosein/8086-Timer-In-Proteus",
  },
  {
    title: "PONG Game",
    image: "/images/pong.png",
    description:
      "A classic Pong game implemented in 8086 assembly using the Emu8086 framework.",
    link: "https://github.com/EbrahimiAmirHosein/PONG-Game-in-8086-assembly",
  },
];
