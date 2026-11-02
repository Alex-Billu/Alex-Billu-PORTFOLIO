/**
 * Alex S – Projects Data
 * 15 Production, Research & Full Stack Projects
 */
(function() {
  var root = typeof window !== 'undefined' ? window : globalThis;
  root.PROJECTS_DATA = [
    {
      id: "nelix-ai",
      number: "01",
      name: "Nelix AI",
      tagline: "Conversational Intelligence & Automated Assistant",
      category: "AI & ML",
      categories: ["AI & ML", "Web Development"],
      status: "AI Platform",
      featured: true,
      accent: "#00f3ff",
      description: "An intelligent AI-powered assistant designed to simplify user interactions through conversational intelligence, automated assistance, and smart information processing.",
      tech: ["Python", "AI/ML", "NLP", "React"],
      features: [
        "Conversational intelligence engine with context-aware multi-turn dialogues",
        "Automated assistance pipeline for complex query decomposition and task execution",
        "Smart information processing with semantic search and summarization",
        "Modern React-based dynamic interface with real-time streaming responses"
      ],
      architecture: "User Query Input → NLP Processing & Intent Extraction → Context Memory Store → AI/ML Reasoning Engine → Response Synthesis & Action Dispatch → React Frontend Stream",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "ai-assistant"
    },
    {
      id: "ai-scam-detector",
      number: "02",
      name: "AI Scam Detector",
      tagline: "Intelligent Cyber Threat Detection & Risk Analysis",
      category: "AI & ML",
      categories: ["AI & ML"],
      status: "Cybersecurity ML",
      featured: false,
      accent: "#f43f5e",
      description: "An AI-powered cybersecurity solution that analyzes suspicious messages, URLs, and digital content to identify potential scams and fraudulent activities. Provides intelligent threat detection and risk analysis.",
      tech: ["Python", "Machine Learning", "NLP", "Flask"],
      features: [
        "Multi-channel content analysis for suspicious SMS, email, and web URLs",
        "NLP-based phishing and fraudulent pattern classification models",
        "Real-time heuristic risk scoring with confidence indicators",
        "Lightweight Flask RESTful API for rapid integration into security scanners"
      ],
      architecture: "Suspicious Payload (URL/Text) → Feature Extraction (Lexical, Semantic, Domain Reputation) → ML Classification Pipeline → Threat Severity Engine → Risk Report & Alert Dashboard",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "security-shield"
    },
    {
      id: "mobile-addiction-prediction",
      number: "03",
      name: "Mobile Addiction Prediction",
      tagline: "Predictive Behavior Analytics & Digital Wellbeing Platform",
      category: "AI & ML",
      categories: ["AI & ML", "Android"],
      status: "Digital Wellbeing ML",
      featured: false,
      accent: "#8b5cf6",
      description: "A machine learning application that analyzes smartphone usage, screen time, social media activity, gaming habits, and sleep behavior to predict mobile addiction levels. Includes usage analytics, app-locking functionality, OTP-based unlocking, notifications, and personalized recommendations.",
      tech: ["Python", "Flask", "Machine Learning", "Firebase", "HTML", "CSS", "JavaScript"],
      features: [
        "Multi-dimensional behavioral analytics across screen time, social apps, gaming, and sleep patterns",
        "Supervised ML classification predicting addiction vulnerability levels",
        "Automated app-locking mechanism triggered upon exceeding threshold limits",
        "Secure OTP-based unlocking workflow with accountability controls",
        "Personalized habit-remediation tips and push notifications via Firebase"
      ],
      architecture: "Usage Telemetry & Behavioral Metrics → ML Feature Normalization → Predictive Model (Risk Level Categorization) → Flask Backend / Firebase Sync → Intervention Controller (OTP Lock / Smart Alerts)",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "behavior-analytics"
    },
    {
      id: "disease-detection-system",
      number: "04",
      name: "Disease Detection System",
      tagline: "AI-Powered Medical Diagnostic & Indicator Screening",
      category: "AI & ML",
      categories: ["AI & ML", "Research"],
      status: "Healthcare Diagnostic Research",
      featured: false,
      accent: "#10b981",
      description: "An AI-based healthcare solution that analyzes medical input data to identify potential disease indicators and generate preliminary prediction results.",
      tech: ["Python", "Machine Learning", "Deep Learning"],
      features: [
        "Automated clinical parameter extraction and biomarker correlation analysis",
        "Ensemble machine learning and deep neural networks for multi-class pathology screening",
        "Confidence-weighted risk indicators with decision interpretability",
        "Preliminary diagnostic reporting designed to assist clinical workflows"
      ],
      architecture: "Patient Biomarkers & Clinical Records → Data Imputation & Normalization → Deep Learning Feature Extractor → Disease Indicator Classifier → Diagnostic Probability & Risk Summary",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "medical-neural"
    },
    {
      id: "smart-interview-ai",
      number: "05",
      name: "Smart Interview AI",
      tagline: "Automated Mock Interviews, Evaluation & Feedback Platform",
      category: "AI & ML",
      categories: ["AI & ML", "Web Development"],
      status: "Interactive AI Platform",
      featured: false,
      accent: "#38bdf8",
      description: "An AI-powered interview preparation platform that helps candidates practice interviews, evaluate responses, improve communication, and receive intelligent feedback.",
      tech: ["Python", "AI/ML", "NLP", "React"],
      features: [
        "Dynamic question generation adapted to candidate role and experience level",
        "Speech-to-text response ingestion with NLP semantic relevance evaluation",
        "Communication metrics assessing articulation, clarity, pacing, and sentiment",
        "Actionable scoring reports highlighting strengths and targeted areas for improvement"
      ],
      architecture: "Video/Audio Response Stream → Speech Transcription & Acoustic Feature Extraction → NLP Response Evaluator → Feedback Generation Engine → Interactive Candidate Dashboard",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "interview-waveform"
    },
    {
      id: "dna-proximity-3d-gnn",
      number: "06",
      name: "DNA Proximity 3D Reconstruction Using GNNs",
      tagline: "Computational Biology & Graph Neural Spatial Modeling",
      category: "Research",
      categories: ["Research", "AI & ML"],
      status: "Advanced Research",
      featured: false,
      accent: "#ec4899",
      description: "An advanced computational biology project that reconstructs 3D DNA structures using pairwise proximity information and Graph Neural Networks. Includes Ground Truth, Spectral-MDS, GNN reconstruction, uncertainty visualization, and RMSE-based performance evaluation.",
      tech: ["Python", "PyTorch", "Graph Neural Networks", "Plotly"],
      features: [
        "Pairwise contact matrix modeling representing spatial chromosomal proximity",
        "Spectral-MDS (Multidimensional Scaling) initialization for spatial coordinate grounding",
        "Geometric Graph Neural Network (GNN) architectures optimizing 3D spatial conformation",
        "Spatial uncertainty estimation and 3D point cloud visualization using Plotly",
        "Rigorous RMSE and distance-matrix correlation benchmarks against Ground Truth structures"
      ],
      architecture: "Hi-C Chromatin Proximity Matrix → Contact Graph Construction → Spectral-MDS Initial Embedding → PyTorch Geometric GNN Spatial Refinement → 3D Coordinate Prediction → Plotly Volumetric Renderer & RMSE Evaluation",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "dna-3d-graph"
    },
    {
      id: "pathogen-genomics-ai",
      number: "07",
      name: "Pathogen Genomics AI",
      tagline: "Genomic Sequence Profiling & Resistance Prediction",
      category: "Research",
      categories: ["Research", "AI & ML"],
      status: "Flagship Research",
      featured: true,
      accent: "#14b8a6",
      description: "An AI-driven genomic analysis platform that processes DNA sequences to identify mutations, predict potential antibiotic resistance, monitor pathogen patterns, and generate genomic risk reports.",
      tech: ["Python", "Bioinformatics", "Machine Learning", "Deep Learning"],
      features: [
        "Automated DNA sequence alignment, variant calling, and mutation hotspot detection",
        "Deep learning predictive models identifying SNPs linked to antibiotic resistance",
        "Epidemiological pattern tracking across emerging viral and bacterial strains",
        "Automated genomic risk report generation with molecular mechanism summaries"
      ],
      architecture: "Raw FASTA/FASTQ Genomic Sequences → BioPython Sequence Alignment & Variant Calling → Deep Learning Feature Encoder → Resistance Classification Model → Surveillance Dashboard & Genomic Risk Report",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "pathogen-helix"
    },
    {
      id: "smart-garment",
      number: "08",
      name: "Smart Garment",
      tagline: "AI-Powered Apparel Platform & Intelligent Size Prediction",
      category: "Full Stack",
      categories: ["Full Stack", "Web Development"],
      status: "Flagship Full Stack",
      featured: true,
      accent: "#f59e0b",
      description: "An AI-powered garment shopping platform combining online shopping with intelligent clothing size prediction. Helps users discover suitable clothing sizes through personalized measurements and smart recommendations.",
      tech: ["Python", "Flask", "MySQL", "Machine Learning", "HTML", "CSS", "JavaScript"],
      features: [
        "Full stack e-commerce catalog with cart, product filters, and checkout flow",
        "Machine learning size prediction engine based on anthropometric body measurements",
        "Personalized clothing fit calculator minimizing size uncertainty and return rates",
        "Relational MySQL database handling inventory, user profiles, and order telemetry"
      ],
      architecture: "User Measurements Input → ML Size Estimation Regressor → Personalized Fit Matrix → E-Commerce Product Catalog (Flask / MySQL) → Dynamic Frontend Size Advisor",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "smart-garment-cad"
    },
    {
      id: "kmch-smartmed-ai",
      number: "09",
      name: "KMCH SmartMed AI",
      tagline: "Real-Time Hospital Queue & Appointment Management",
      category: "Full Stack",
      categories: ["Full Stack", "Web Development"],
      status: "Full Stack Medical System",
      featured: false,
      accent: "#06b6d4",
      description: "A smart hospital appointment management platform where patients can explore departments, select doctors, view available appointment slots, and book consultations. Includes real-time appointment updates and doctor-side notifications.",
      tech: ["Next.js", "React", "Node.js", "Express.js", "SQLite", "Socket.IO", "Tailwind CSS"],
      features: [
        "Comprehensive medical department directory with doctor profiles and specialties",
        "Real-time interactive slot reservation preventing double bookings via Socket.IO",
        "Dedicated doctor portal with live patient queue updates and consultation management",
        "High-speed Next.js frontend styled with modern responsive Tailwind CSS"
      ],
      architecture: "Next.js Patient Portal → Express.js API Gateway → SQLite Database Engine ⇄ Socket.IO Bi-Directional Event Bus ⇄ Doctor Real-Time Consultation Console",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "hospital-queue"
    },
    {
      id: "saferoute",
      number: "10",
      name: "SafeRoute",
      tagline: "Location-Aware Personal Safety & Emergency Assistance",
      category: "Android",
      categories: ["Android", "Full Stack"],
      status: "Mobile Safety App",
      featured: false,
      accent: "#ef4444",
      description: "A location-aware personal safety application designed to help users access safer routes and emergency assistance through an intuitive mobile interface.",
      tech: ["React Native", "Expo", "Python", "Flask", "SQLite"],
      features: [
        "Geospatial route safety calculation weighting street lighting, transit hubs, and incident density",
        "Live GPS tracking with breadcrumb location broadcasting to trusted contacts",
        "One-touch emergency SOS alert triggering instant geo-coordinates and distress beacons",
        "Cross-platform mobile application powered by React Native and Expo"
      ],
      architecture: "React Native Mobile Client (Expo Location API) → RESTful Flask Gateway → Geospatial Safety Scoring Engine (SQLite) → Push Notification & Emergency SMS Relay",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "saferoute-map"
    },
    {
      id: "school-website",
      number: "11",
      name: "School Website",
      tagline: "Modern Institutional Web Portal & Digital Campus Showcase",
      category: "Web Development",
      categories: ["Web Development"],
      status: "Institutional Web Portal",
      featured: false,
      accent: "#6366f1",
      description: "A professional school website designed to establish a digital presence for educational institutions. Includes information about academics, facilities, admissions, announcements, and school activities.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      features: [
        "Clean modular architectural layout showcasing academic curricula and faculty profiles",
        "Interactive campus facilities gallery with visual showcases",
        "Admissions guidance portal with downloadable prospectuses and application workflows",
        "Dynamic school activity bulletin with announcement notifications"
      ],
      architecture: "React SPA Component Architecture → Modular Content Routing → Interactive Academic Catalog & Admissions Engine → Responsive Cross-Browser UI",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "school-portal"
    },
    {
      id: "personal-3d-portfolio",
      number: "12",
      name: "Personal 3D Portfolio",
      tagline: "Interactive 3D Engineering Showcase & Cybernetic Gallery",
      category: "Web Development",
      categories: ["Web Development"],
      status: "Active Production Site",
      featured: false,
      accent: "#a855f7",
      description: "An interactive 3D developer portfolio showcasing projects, skills, achievements, and professional experience through immersive animations and modern visual design.",
      tech: ["React", "Next.js", "Three.js", "React Three Fiber", "Tailwind CSS", "GSAP", "Framer Motion"],
      features: [
        "Hardware-accelerated 3D WebGL background with gyroscopic orbital physics",
        "Mouse-reactive 3D tilt cards with perspective lighting and animated gradient borders",
        "Interactive terminal emulator with custom CLI commands and Matrix mode easter egg",
        "Integrated dual-resume PDF viewer with dynamic zoom, download, and fullscreen capabilities",
        "Seamless client-side hash routing with GPU-optimized view transitions"
      ],
      architecture: "Three.js WebGL Render Engine + GSAP Motion System → Vanilla High-Performance Router → Interactive Terminal & Command Dispatcher → 3D Project Showcase & Document Portals",
      github: "https://github.com/Alex-Billu/Alex-Billu-PORTFOLIO",
      demo: "https://alex-billu.github.io/Alex-Billu-PORTFOLIO/",
      visualType: "portfolio-3d"
    },
    {
      id: "mobile-shop-management",
      number: "13",
      name: "Mobile Shop Management System",
      tagline: "Native Android Product, Inventory & Customer Management",
      category: "Android",
      categories: ["Android"],
      status: "Native Android App",
      featured: false,
      accent: "#f97316",
      description: "An Android-based application designed to manage mobile shop products, inventory, customer information, and sales operations.",
      tech: ["Android Studio", "Java", "Firebase"],
      features: [
        "Real-time product cataloging with IMEI tracking, stock counts, and price tiers",
        "Cloud-synchronized customer CRM with purchase histories and warranty records",
        "Sales billing generator with dynamic invoice calculations and PDF export",
        "Firebase Realtime Database and Cloud Authentication backend"
      ],
      architecture: "Android Native App (Java MVC) → Android Hardware & Barcode Camera APIs → Firebase Authentication & Realtime Database ⇄ Cloud Sync & Sales Analytics Reports",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "android-inventory"
    },
    {
      id: "campus-sustainability-system",
      number: "14",
      name: "Campus Sustainability Management System",
      tagline: "Environmental Telemetry Monitoring & AI Conservation Engine",
      category: "Research",
      categories: ["Research", "Full Stack", "Android"],
      status: "Enterprise Research Platform",
      featured: false,
      accent: "#22c55e",
      description: "A campus sustainability platform that monitors energy consumption, water usage, transportation, waste management, and carbon footprint. Provides sustainability insights and AI-based recommendations.",
      tech: ["Java", "Java Swing", "AI-based Recommendations"],
      features: [
        "Multi-utility monitoring capturing power consumption, water meters, and transit loads",
        "Automated carbon footprint quantification and greenhouse gas emissions auditing",
        "Anomaly detection flagging utility leaks and unexpected energy surges",
        "AI recommendation engine proposing actionable conservation strategies and reduction targets"
      ],
      architecture: "Utility Sensor & Telemetry Data Streams → Java Analytics Processing Engine → Carbon Calculation & Anomaly Detection Modules → AI Optimization Recommender → Java Swing Interactive Operational Console",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "campus-eco"
    },
    {
      id: "bas-ai",
      number: "15",
      name: "BAS-AI – Human Activity Recognition",
      tagline: "On-board Space Experiment Telemetry & Vision Prototype (SIH 26174)",
      category: "Research",
      categories: ["Research", "AI & ML"],
      status: "Flagship Research Prototype",
      featured: true,
      accent: "#3b82f6",
      description: "An AI-based human activity recognition prototype developed around the SIH Problem Statement 26174. Uses computer vision, object detection, pose estimation, and deep learning to recognize activities such as approaching, picking, transferring, opening, and closing objects. Includes confidence scoring and a simulated telemetry dashboard.",
      note: "Presented as a hackathon prototype, not an officially deployed ISRO system.",
      tech: ["Python", "OpenCV", "YOLO", "MediaPipe", "PyTorch", "React", "TypeScript", "Node.js", "Socket.IO"],
      features: [
        "Developed around Smart India Hackathon (SIH) Problem Statement 26174 for space experiment monitoring",
        "Computer vision pipeline integrating MediaPipe 33-keypoint skeletal tracking and YOLO object localization",
        "Temporal deep learning recognition for 5 critical action phases: approaching, picking, transferring, opening, closing",
        "Real-time confidence scoring engine with temporal sequence smoothing and anomaly detection",
        "Simulated mission control telemetry dashboard built with React, TypeScript, Node.js, and Socket.IO"
      ],
      architecture: "Video Stream Ingestion → YOLO Object Bounding & MediaPipe Skeletal Keypoints → Spatial-Temporal Feature Extractor (PyTorch) → Action Classification Engine (Approaching, Picking, Transferring, Opening, Closing) → WebSocket Server → React/TypeScript Ground Station Telemetry Dashboard",
      github: "https://github.com/Alex-Billu",
      demo: null,
      visualType: "space-telemetry"
    }
  ];

  // Helper dictionary lookup by id
  root.PROJECTS_BY_ID = {};
  root.PROJECTS_DATA.forEach(function(p) {
    root.PROJECTS_BY_ID[p.id] = p;
  });
})();
