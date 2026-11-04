# Alex-Billu-PORTFOLIO — Cinematic 3D Personal Developer Portfolio

> **High-Performance, Zero-Build Interactive 3D Developer Portfolio & Research Showcase**  
> Engineered by **Alex** — AI Developer & Full Stack Developer. Built with vanilla modern JavaScript, Three.js (WebGL), GSAP, and a strict monochrome design system.

---

## Table of Contents

1. [Developer Profile & Personal Information](#1-developer-profile--personal-information)
   - [Core Identity & Professional Focus](#core-identity--professional-focus)
   - [Key Achievements & Honors](#key-achievements--honors)
   - [Curriculum Vitae / Dual Resumes](#curriculum-vitae--dual-resumes)
   - [Core Technical Skills Matrix](#core-technical-skills-matrix)
   - [Complete Portfolio Projects Catalog (15 Flagships)](#complete-portfolio-projects-catalog-15-flagships)
2. [Project Overview](#2-project-overview)
3. [Project Structure](#3-project-structure)
4. [Technology Stack](#4-technology-stack)
5. [Code Documentation & Architecture](#5-code-documentation--architecture)
   - [Client-Side Router & Page Lifecycle](#client-side-router--page-lifecycle)
   - [Interactive 3D WebGL Yin-Yang Background Engine](#interactive-3d-webgl-yin-yang-background-engine)
   - [Dynamic SVG Procedural Visuals Engine](#dynamic-svg-procedural-visuals-engine)
   - [Interactive Terminal Emulator](#interactive-terminal-emulator)
   - [Command Palette & Quick Search](#command-palette--quick-search)
   - [Dual Resume PDF Viewer & Tooling](#dual-resume-pdf-viewer--tooling)
   - [Skills Showcase & Live Search / Filter Engine](#skills-showcase--live-search--filter-engine)
6. [Animations & Visual Effects Catalog](#6-animations--visual-effects-catalog)
7. [Color System & Theme Tokens](#7-color-system--theme-tokens)
8. [UI/UX Design, Layout & Spacing](#8-uiux-design-layout--spacing)
9. [Interactive Features & Easter Eggs](#9-interactive-features--easter-eggs)
10. [Installation & Setup](#10-installation--setup)
11. [Execution & Deployment Guide](#11-execution--deployment-guide)
12. [Dependencies & External Libraries](#12-dependencies--external-libraries)
13. [Performance & Optimization Strategies](#13-performance--optimization-strategies)
14. [Customization Guide](#14-customization-guide)
15. [Future Roadmap & Potential Improvements](#15-future-roadmap--potential-improvements)

---

## 1. Developer Profile & Personal Information

### Core Identity & Professional Focus

| Attribute | Details |
| :--- | :--- |
| **Name** | **Alex** (Alex S) |
| **Professional Role** | **AI Developer \| Full Stack Developer** |
| **Department / Major** | **Information Technology** |
| **Core Interests** | Artificial Intelligence, Machine Learning, Deep Learning, Generative AI & Agentic Workflows, Full Stack Engineering, Cyber Security, Software Architecture |
| **Professional Mindset** | `Learn > Build > Break > Fix > Improve` |
| **Primary Location** | India |
| **Contact Email** | [s.alex5544321@gmail.com](mailto:s.alex5544321@gmail.com) |
| **LinkedIn Profile** | [linkedin.com/in/alex-s-05454a317](https://www.linkedin.com/in/alex-s-05454a317) |
| **GitHub Organization** | [github.com/Alex-Billu](https://github.com/Alex-Billu) |
| **Portfolio Deployment**| [alex-billu.github.io/Alex-Billu-PORTFOLIO/](https://alex-billu.github.io/Alex-Billu-PORTFOLIO/) |

### Key Achievements & Honors

* 🏆 **1st Prize in Web Development** — Recognized for designing and engineering high-impact, responsive, standards-compliant web architectures with fluid interactivity and modern UI principles.
* 🥇 **Hackathon Winner** — Awarded top honors in rapid-prototyping competitive hackathons, transforming problem statements into scalable production-grade AI & Full Stack prototypes under strict deadlines.
* 🌐 **International Conference Presenter 2025** — Selected and delivered technical research presentations on machine learning and computational applications at an international academic conference.
* 🛡️ **Diploma in Cyber Security** — Certified in threat modeling, vulnerability assessment, secure coding patterns, defensive cyber protocols, and threat intelligence.
* 📜 **Full Stack Development Certified** — Comprehensive validation in modern web architecture, distributed RESTful APIs, database design, and end-to-end full stack application delivery.
* 💻 **Multi-Language Software Certifications** — Validated programming proficiencies across **Python, Java, C, and C++**.

---

### Curriculum Vitae / Dual Resumes

The portfolio features a built-in interactive dual-resume viewer equipped with embedded rendering, zoom stepping, fullscreen capability, and direct download links for two specialized tracks:

```
public/
├── resume-fullstack.pdf      # General / Full Stack Developer Resume
└── resume-ai-ml.pdf          # AI / Machine Learning Developer Resume
```

1. **General / Full Stack Developer Resume (`public/resume-fullstack.pdf`)**:
   - Focus: Web engineering, distributed microservices, RESTful & GraphQL APIs, relational & NoSQL databases, cloud deployment, DevOps, secure authentication, and end-to-end application lifecycle.
   - Direct Download: [Alex-S-FullStack-Developer-Resume.pdf](file:///d:/3D-portfolio/alex-portfolio/public/resume-fullstack.pdf)
2. **AI / Machine Learning Developer Resume (`public/resume-ai-ml.pdf`)**:
   - Focus: Deep learning, PyTorch/TensorFlow pipelines, Computer Vision (YOLO, OpenCV, MediaPipe), NLP, Graph Neural Networks (GNNs), LLM fine-tuning, RAG (Retrieval-Augmented Generation), Bioinformatics, and MLOps.
   - Direct Download: [Alex-S-AI-ML-Developer-Resume.pdf](file:///d:/3D-portfolio/alex-portfolio/public/resume-ai-ml.pdf)

---

### Core Technical Skills Matrix

Curated from the portfolio’s data sources (`public/skills-data.js` and `index.html`), spanning 14 technical domains and over 110 verified competencies:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           ALEX S — TECHNICAL SKILL TREE                         │
└─────────────────────────────────────────────────────────────────────────────────┘
  ├── [AI & Machine Learning]
  │   └── PyTorch, TensorFlow, OpenCV, YOLOv8/v11, MediaPipe, Scikit-Learn,
  │       Keras, Deep Learning, Graph Neural Networks (PyG), Scientific Computing
  ├── [Generative AI & LLMs]
  │   └── LLM Fine-Tuning, RAG Architecture, LangChain, LlamaIndex, Prompt Engineering,
  │       Autonomous AI Agents, Vector Embeddings, Hugging Face Transformers
  ├── [Frontend Engineering]
  │   └── React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS,
  │       Three.js (WebGL), GSAP, Responsive System Design, Semantic UI/UX
  ├── [Backend & Distributed Systems]
  │   └── Python, Node.js, Express.js, FastAPI, Flask, RESTful APIs, GraphQL,
  │       WebSockets, JWT/OAuth Authentication, Microservices
  ├── [Databases & Persistence]
  │   └── PostgreSQL, MySQL, SQLite, MongoDB, Redis Caching, Vector Databases
  │       (ChromaDB, Pinecone, FAISS), Prisma ORM, Firebase Firestore
  ├── [Security & Cyber Analysis]
  │   └── Threat Detection, Scam Analysis, Content Verification, OWASP Hardening,
  │       Vulnerability Scanning, Digital Forensics, Cryptography Basics
  ├── [Android Development]
  │   └── Java, Kotlin, Android Studio, XML Layouts, MVVM, Room DB, Retrofit,
  │       Google Maps API, Foreground Location Services, SMS / Telephony Integration
  ├── [DevOps, Cloud & Infrastructure]
  │   └── Git, GitHub Actions, Docker Containers, Linux / Bash, Postman, Vercel,
  │       Google Cloud Platform (GCP), Nginx, Static Asset Optimization
  └── [Core Languages & Fundamentals]
      └── Python, C, C++, Java, JavaScript, TypeScript, SQL, Bash
```

---

### Complete Portfolio Projects Catalog (15 Flagships)

All 15 flagship projects are represented in the portfolio data layer ([`public/projects-data.js`](file:///d:/3D-portfolio/alex-portfolio/public/projects-data.js)), complete with interactive procedural SVG viewports, technical specs, system architecture blueprints, and repository references:

| # | Project ID | Title | Domain / Category | Primary Tech Stack | Source / Demo |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **01** | `nelix-ai` | **Nelix AI** | AI & Machine Learning | Python, AI/ML, NLP, React, FastAPI | [GitHub](https://github.com/Alex-Billu) |
| **02** | `ai-scam-detector` | **AI Scam Detector** | AI & Machine Learning | Python, Machine Learning, NLP, Flask, Scikit-Learn | [GitHub](https://github.com/Alex-Billu) |
| **03** | `mobile-addiction-prediction` | **Mobile Addiction Prediction** | AI & Machine Learning | Python, Flask, Machine Learning, Firebase, JavaScript | [GitHub](https://github.com/Alex-Billu) |
| **04** | `disease-detection-system` | **Disease Detection System** | AI & Machine Learning | Python, Machine Learning, Deep Learning, Scikit-Learn | [GitHub](https://github.com/Alex-Billu) |
| **05** | `smart-interview-ai` | **Smart Interview AI** | AI & Machine Learning | Python, AI/ML, NLP, React, Speech-to-Text | [GitHub](https://github.com/Alex-Billu) |
| **06** | `dna-proximity-3d-gnn` | **DNA Proximity 3D Reconstruction Using GNNs** | Advanced Research | Python, PyTorch Geometric, Graph Neural Networks, Plotly | [GitHub](https://github.com/Alex-Billu) |
| **07** | `pathogen-genomics-ai` | **Pathogen Genomics AI** | Advanced Research | Python, Bioinformatics, Machine Learning, Deep Learning, Biopython | [GitHub](https://github.com/Alex-Billu) |
| **08** | `smart-garment` | **Smart Garment** | Full Stack & Web | Python, Flask, MySQL, Machine Learning, Bootstrap | [GitHub](https://github.com/Alex-Billu) |
| **09** | `kmch-smartmed-ai` | **KMCH SmartMed AI** | Full Stack & Web | Python, Flask, MySQL, Machine Learning, HTML5, CSS3 | [GitHub](https://github.com/Alex-Billu) |
| **10** | `saferoute` | **SafeRoute** | Android Development | Java, Android SDK, Firebase, Google Maps API, GPS Services | [GitHub](https://github.com/Alex-Billu) |
| **11** | `school-website` | **School Website** | Web Development | HTML5, CSS3, JavaScript, Responsive UI, Form Validation | [GitHub](https://github.com/Alex-Billu) |
| **12** | `personal-3d-portfolio` | **Personal 3D Portfolio** | Web Development | Vanilla JavaScript, Three.js (WebGL), GSAP, CSS3 Custom Properties | [GitHub](https://github.com/Alex-Billu/Alex-Billu-PORTFOLIO) · [Live](https://alex-billu.github.io/Alex-Billu-PORTFOLIO/) |
| **13** | `mobile-shop-management` | **Mobile Shop Management System** | Android Development | Java, Android Studio, SQLite, XML Layouts, Material Design | [GitHub](https://github.com/Alex-Billu) |
| **14** | `campus-sustainability-system` | **Campus Sustainability Management System** | Advanced Research | Python, Machine Learning, Flask, Data Analytics, Chart.js | [GitHub](https://github.com/Alex-Billu) |
| **15** | `bas-ai` | **BAS-AI – Human Activity Recognition** | Advanced Research | Python, Computer Vision, Deep Learning, MediaPipe, OpenCV | [GitHub](https://github.com/Alex-Billu) |

#### Detailed Project Overviews

1. **Nelix AI (`nelix-ai`)**:
   - *Description*: Conversational intelligence assistant engineered for multi-turn intent resolution, contextual query comprehension, and task orchestration.
   - *Architecture*: `User Input -> Context Engine -> NLP Classifier / Vector Index -> Response Generator -> Real-time UI`.
   - *Capabilities*: Multi-turn dialogue history, intelligent fallback routing, lightweight response latency (<120ms).

2. **AI Scam Detector (`ai-scam-detector`)**:
   - *Description*: Real-time cyber threat detection engine that inspects suspicious URLs, fraudulent SMS patterns, phishing emails, and malicious digital artifacts using natural language scoring.
   - *Architecture*: `Raw Content -> URL Deobfuscator -> TF-IDF / Tokenizer -> Scikit-Learn Ensemble -> Risk Assessment Matrix`.
   - *Capabilities*: Phishing pattern heuristics, confidence scoring, explainable alert categorization.

3. **Mobile Addiction Prediction (`mobile-addiction-prediction`)**:
   - *Description*: Behavioral intelligence system predicting digital dependency scores based on screen-time telemetry, bedtime interaction, notification frequencies, and app-switching rates. Includes automated app-locking and OTP overrides.
   - *Architecture*: `Telemetry Collection -> Behavioral Feature Store -> Random Forest Classifier -> Addiction Index -> Intervention Controller`.

4. **Disease Detection System (`disease-detection-system`)**:
   - *Description*: Multi-pathology clinical diagnostic support pipeline that processes patient vitals, biochemical readings, and symptomatic profiles to output preliminary predictive likelihoods.
   - *Architecture*: `Biomarker Input -> Standardizer -> Deep Neural Classifier -> Multi-Class Risk Output -> Clinical Summary`.

5. **Smart Interview AI (`smart-interview-ai`)**:
   - *Description*: Interactive career prep platform that conducts simulated technical and behavioral interviews, analyzes textual and vocal responses, and generates metric-driven critique cards.
   - *Architecture*: `Audio/Text Input -> Semantic Parser -> Rubric Evaluator -> Feedback Matrix -> Progress Dashboard`.

6. **DNA Proximity 3D Reconstruction Using GNNs (`dna-proximity-3d-gnn`)**:
   - *Description*: Advanced computational structural biology model utilizing pairwise contact matrices (Hi-C data) and Graph Convolutional Networks to predict spatial 3D chromatin confirmations. Evaluates against Classical Multidimensional Scaling (MDS) via RMSE.
   - *Architecture*: `Proximity Matrix -> Graph Topology -> PyTorch GNN Encoder -> 3D Coordinate Mapping -> Plotly Interactive Visualization`.

7. **Pathogen Genomics AI (`pathogen-genomics-ai`)**:
   - *Description*: Genomic surveillance platform for screening antimicrobial resistance (AMR) markers, mutational drift, and viral sequence variants in bacterial and viral FASTA/FASTQ reads.
   - *Architecture*: `FASTA Input -> BioPython K-mer Extractor -> Variant Classifier -> AMR Risk Scoring -> Surveillance Report`.

8. **Smart Garment (`smart-garment`)**:
   - *Description*: Integrated e-commerce prototype coupled with algorithmic anthropometric sizing prediction, reducing return rates by mapping user dimensions to garment grading standards.
   - *Architecture*: `Measurement Input -> Regression Model -> Size Recommendation -> Inventory Match -> Checkout API`.

9. **KMCH SmartMed AI (`kmch-smartmed-ai`)**:
   - *Description*: Hospital and clinical triage intelligence portal streamlining appointment booking, real-time doctor availability, medication tracking, and basic symptomatic triage.
   - *Architecture*: `Patient Request -> Triage Classifier -> Department Router -> Doctor Availability Cache -> Confirmation Dispatch`.

10. **SafeRoute (`saferoute`)**:
    - *Description*: Native Android personal safety tracking system running persistent background location tracking, geofence monitoring, panic triggers, and automated SMS SOS dispatches.
    - *Architecture*: `Android Location Service -> Geofencing API -> Background Watcher -> SMS Manager -> Firebase Telemetry`.

11. **School Website (`school-website`)**:
    - *Description*: High-speed, responsive educational institution web portal featuring course catalogs, announcements, staff directories, and client-side admissions inquiries.
    - *Architecture*: `Modular HTML5 Shell -> Modern Flex/Grid Layout -> DOM Event Bus -> Client-side Validation`.

12. **Personal 3D Portfolio (`personal-3d-portfolio`)**:
    - *Description*: The current portfolio application — a zero-dependency, buildless, cinematic, single-page interactive 3D WebGL developer showcase.
    - *Architecture*: `Hash Router -> Three.js WebGL Engine -> DOM Renderer -> SVG Procedural Engine -> Interactive CLI`.

13. **Mobile Shop Management System (`mobile-shop-management`)**:
    - *Description*: Android offline-first inventory management, point-of-sale invoicing, stock threshold warnings, and profit telemetry powered by a local Room/SQLite database.
    - *Architecture*: `Android Activity/Fragment -> ViewModel -> Repository Pattern -> SQLite/Room DB -> Sales Telemetry`.

14. **Campus Sustainability Management System (`campus-sustainability-system`)**:
    - *Description*: Environmental monitoring system analyzing electrical consumption, water metrics, and waste generation logs to model campus carbon footprint reduction plans.
    - *Architecture*: `Sensor Logs -> Data Cleaning Pipeline -> Predictive Energy Model -> Anomaly Detector -> Visual Dashboards`.

15. **BAS-AI – Human Activity Recognition (`bas-ai`)**:
    - *Description*: Real-time computer vision system leveraging MediaPipe skeletal topology tracking and deep neural networks to recognize, classify, and log physical human movement in video feeds.
    - *Architecture*: `Video Frame -> MediaPipe Pose Landmarks -> 33-Keypoint Normalizer -> Temporal LSTM Classifier -> Activity State`.

---

## 2. Project Overview

The **Alex S 3D Developer Portfolio** is an ultra-fast, zero-framework, single-page application (SPA) created to deliver a luxury, cinematic developer brand experience without the baggage of heavy node modules or complex build pipelines.

### Design Concept & Philosophy
* **Pure Craftsmanship**: Engineered with raw, vanilla web standards (HTML5, CSS3 Custom Properties, vanilla JavaScript ES6+).
* **Cinematic 3D Integration**: A persistent WebGL Three.js background rendering a custom extruded Yin-Yang geometry, multiple orbital gyroscopes, metallic planetary satellites, and an ambient 1,400-star galaxy field.
* **Strict Monochrome Aesthetics**: A curated palette constructed purely out of deep blacks, crisp whites, translucent greys, and metallic gradients. Color is deliberately avoided to direct 100% focus toward typography, geometry, contrast, and technical depth.
* **Tactile Interactivity**: Featuring 3D perspective mouse tilt, radial cursor spotlights, a functioning UNIX-style terminal emulator, a global keyboard command palette (`Ctrl+K`), custom audio-less boot sequences, and responsive HUD diagnostics.
* **Accessibility & Reduced Motion**: Automatically honors the user’s operating system preferences (`prefers-reduced-motion: reduce`) by disabling intense animations and stabilizing 3D cameras.

---

## 3. Project Structure

The project maintains a clean, flat architecture where all source code, assets, styles, and data definitions are immediately readable and editable without transpilation:

```
alex-portfolio/
│
├── index.html                     # Main application entry point:
│                                  #   - Global HTML document structure
│                                  #   - CSS design tokens & master stylesheet
│                                  #   - Three.js WebGL 3D Yin-Yang engine
│                                  #   - Hash-based client-side router
│                                  #   - Terminal emulator & Command Palette
│                                  #   - Dual PDF resume viewer logic
│
├── README.md                      # Comprehensive project & developer documentation
│
└── public/
    ├── three.min.js               # Bundled Three.js r128 WebGL library (603 KB)
    ├── projects-data.js           # Single Source of Truth for all 15 flagship projects
    ├── projects-visuals.js        # Procedural SVG generator for cards & project heroes
    ├── projects-gallery.js        # Projects section: category filters, search, modal router
    ├── projects-gallery.css       # Projects gallery stylesheet (glassmorphism, 3D tilt)
    ├── skills-data.js             # 14 categories & 111 technical skills definitions
    ├── skills-gallery.js          # Skills page engine: filtering, searching, counter stats
    ├── skills-gallery.css         # Skills page styling, glass cards, badge layouts
    ├── resume-fullstack.pdf       # General / Full Stack Developer Resume (PDF)
    └── resume-ai-ml.pdf           # AI / Machine Learning Developer Resume (PDF)
```

---

## 4. Technology Stack

### Core Technologies
* **Language**: Vanilla JavaScript (Modern ECMAScript / ES6+), HTML5 Semantic Shell, CSS3 with Modern Layouts (Flexbox, CSS Grid, `@property`).
* **3D Graphics & WebGL**: [Three.js r128](file:///d:/3D-portfolio/alex-portfolio/public/three.min.js) (`THREE.WebGLRenderer`, `THREE.ExtrudeGeometry`, `THREE.Points`, `THREE.MeshStandardMaterial`, `THREE.ACESFilmicToneMapping`).
* **Animation & Transitions**: Native `requestAnimationFrame` loops, GSAP 3.12.5 (loaded via CDN as fallback), native CSS3 keyframes, native `document.startViewTransition()` API.
* **Typography**:
  - Display Font: `Bricolage Grotesque` (Variable weights 200–800)
  - Body Font: `Instrument Sans` (Variable 400–700)
  - Monospace Font: `JetBrains Mono` (Weights 400, 600, 800)
  - Handwritten Accent: `Caveat` (Weight 700)
* **Icons & Visuals**: Pure inline vector SVGs — zero external icon fonts or heavy raster images.

---

## 5. Code Documentation & Architecture

### Client-Side Router & Page Lifecycle

Implemented entirely inside [`index.html`](file:///d:/3D-portfolio/alex-portfolio/index.html) through the `route()` function. The system binds directly to the browser’s `hashchange` event:

```javascript
// index.html - Route Dispatcher
function route() {
  var h = location.hash.replace(/^#\/?/, ''),
      seg = h.split('/'),
      r = seg[0] || 'home',
      app = document.getElementById('app');

  // Notify 3D background of current route for camera/object choreography
  if (window.setYinYangRoute) window.setYinYangRoute(r);

  // Render view template
  var html = (r === 'projects' && seg[1])
    ? R.project(seg[1])
    : (R[r] && r !== 'project' && r !== 'nf' ? R[r]() : R.nf());

  app.innerHTML = html;
  document.title = (T[r] && T[r] !== T.home ? T[r] + ' – Alex S' : T.home);

  // Synchronize navigation link states
  [].forEach.call(document.querySelectorAll('#nav a'), function(a) {
    if (a.dataset.r === r) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });

  window.scrollTo(0, 0);
  app.focus({ preventScroll: true });

  // Page entrance animation trigger
  app.classList.remove('enter');
  void app.offsetWidth;
  app.classList.add('enter');

  // Initialize view-specific subsystems
  tw(); reveal(); prog(); fx2(); initTerm();
  if (r === 'resume') initResume();
  if (r === 'projects' && !seg[1] && window.initProjectsGallery) window.initProjectsGallery();
  if (r === 'skills' && window.initSkillsGallery) window.initSkillsGallery();
}
```

#### Routes Table
* `#/` (or empty): **Home** — Hero, typewriter, photo ring, pipeline flow, dual marquees, 3 flagship cards, stat counters, and terminal.
* `#/projects`: **Projects Gallery** — Filter tabs (All, AI/ML, Full Stack, Android, Research), real-time search, 4 flagship featured cards, and 15 regular cards.
* `#/projects/:id`: **Project Detail View** — High-resolution procedural SVG hero, full description, key capabilities, architecture diagram, built-with badges, repository and demo buttons.
* `#/skills`: **Skills Matrix** — 14 categorized glass cards, search filter, tech badges, category counters.
* `#/resume`: **Resume Hub** — Interactive PDF viewer, tab switcher, zoom controls, fullscreen handler.
* `#/about`: **About Alex** — Portrait, biography, 5-stage career timeline, and official recognition cards.
* `#/contact`: **Contact Portal** — Direct mailto action, copyable communication channels, social links.

---

### Interactive 3D WebGL Yin-Yang Background Engine

Located inside [`index.html`](file:///d:/3D-portfolio/alex-portfolio/index.html) (`init3DYinYangBackground()`), rendering on `<canvas id="yinyang-canvas">`:

```
                 [PerspectiveCamera @ z=7.8]
                             │
                      [scene: THREE.Scene]
                             │
     ┌───────────────────────┼────────────────────────┐
     ▼                       ▼                        ▼
[Yin-Yang Mesh Group] [4× Orbital Rings]    [1400-Particle Galaxy]
  ├── White Extruded Half   ├── Inner Ring (R=2.25)   └── THREE.Points
  ├── Black Extruded Half   ├── Mid Ring 1 (R=2.85)       (AdditiveBlending,
  ├── Outer Bezel Rim       ├── Mid Ring 2 (R=3.50)        canvas sprite,
  └── Metallic Orbs (Dots)  └── Outer Ring (R=4.25)        vortex rotation)
```

#### Key Technical Parameters:
1. **Extruded Geometry Math**:
   - Master Radius: `R = 1.68`
   - Secondary Arcs: `R_mid = 0.84`
   - Dot Cutout: `r_dot = 0.28`
   - Extrusion Depth: `0.30` with `bevelThickness: 0.065`, `bevelSegments: 5`.
2. **Materials**:
   - White Half: `THREE.MeshStandardMaterial({ color: 0xf5f6fa, roughness: 0.22, metalness: 0.18 })`
   - Black Half: `THREE.MeshStandardMaterial({ color: 0x0c0d10, roughness: 0.28, metalness: 0.58 })`
   - Outer Bezel: `THREE.MeshStandardMaterial({ color: 0xd6d8e0, roughness: 0.14, metalness: 0.92 })`
3. **Scroll Momentum Flywheel**:
   - Base rotational velocity on the Z axis is `0.52 rad/s`.
   - On page scroll, delta velocity is captured: `targetScrollVelocity += Math.min(Math.abs(delta) * 0.04, 5.0)`.
   - Dampened every frame: `scrollVelocity += (targetScrollVelocity - scrollVelocity) * 0.09; targetScrollVelocity *= 0.92`.
   - As the user scrolls, the Yin-Yang spins faster in a silky-smooth, inertia-driven physical rotation.
4. **No Mouse-Follow by Design**:
   - The camera is strictly locked to an isometric coordinate `(0, 0, 7.8)`, guaranteeing that the 3D element remains a stable background anchor that never distracts from foreground content.

---

### Dynamic SVG Procedural Visuals Engine

Defined in [`public/projects-visuals.js`](file:///d:/3D-portfolio/alex-portfolio/public/projects-visuals.js), this engine procedurally generates intricate, high-tech animated SVG graphics for each project category:

* **Neural / AI Graphs**: Renders nodes, dynamic synaptic linkages, pulsed signal rings, and coordinate axes.
* **Cyber Security Radar**: Renders concentric targeting graticules, rotating scanner sweeps, and detected risk vectors.
* **GNN 3D Molecular Helices**: Renders dual-strand sinusoidal DNA coordinates with interconnecting base-pair rungs and atom vertices.
* **Full Stack Server Architecture**: Renders layered database cylinders, API gateways, load balancers, and glowing packet channels.
* **Mobile / Telemetry Screens**: Renders device bezels, battery meters, live usage charts, and geofence tracking pins.

Every SVG is rendered inline with vector markup, resulting in zero external HTTP requests and infinite sharp scaling at 4K+ displays.

---

### Interactive Terminal Emulator

Defined in [`index.html`](file:///d:/3D-portfolio/alex-portfolio/index.html) (`initTerm()`), providing a complete UNIX-style terminal interface:

```
alex@portfolio:~$ help
help        list commands
whoami      who I am
neofetch    system info
ls          list sections
projects    my projects
skills      my stack
resume      view my resume
journey     timeline
contact     get in touch
open <x>    go to a page or project
yinyang     toggle / boost 3D background
theme       invert colors
matrix      enter the matrix
clear       clear the screen
```

#### Easter Egg: `sudo hire alex`
Typing `sudo hire alex` grants root permission:
```
alex@portfolio:~$ sudo hire alex
Permission granted. Opening the contact page...
```
The terminal pauses for 900ms and smoothly routes the browser directly to `#/contact`.

---

### Command Palette & Quick Search

Accessible at any time via:
- Keyboard Shortcut: `Ctrl + K` or `Cmd + K`
- Forward Slash: `/` (when not focused on an input)
- Header Button: `Search` button in the primary navigation

Provides instant fuzzy searching across all 6 main pages, all 15 projects, and instant actions (theme inversion, matrix rain, direct email).

---

### Dual Resume PDF Viewer & Tooling

Defined in [`index.html`](file:///d:/3D-portfolio/alex-portfolio/index.html) (`initResume()`):
* **Tab Switcher**: Toggle between Full Stack and AI/ML resumes without reloading.
* **State Verification**: Uses `fetch()` HEAD requests and fallback `XMLHttpRequest` to verify file existence before rendering.
* **Zoom Stepper**: Scalable from 60% to 180% using CSS transforms applied to the iframe viewport.
* **Native Fullscreen**: Supports the HTML5 Fullscreen API on `#resume-viewer-card`.
* **Mobile Optimization**: Detects small screens and presents a streamlined "Open PDF in Viewer" touch bar.

---

### Skills Showcase & Live Search / Filter Engine

Defined in [`public/skills-gallery.js`](file:///d:/3D-portfolio/alex-portfolio/public/skills-gallery.js) and [`public/skills-data.js`](file:///d:/3D-portfolio/alex-portfolio/public/skills-data.js):
* **Real-time Filter Pills**: `All`, `AI & ML`, `Frontend`, `Backend`, `Mobile`, `Cloud & DevOps`, `Security`, `Databases`.
* **Sub-String Text Search**: Dynamically matches against both category titles and individual skill names.
* **Telemetry Counters**: Computes and updates active category counts and technology tallies on the fly.
* **3D Mouse Tilt on Glass Cards**: Every skill card tracks cursor coordinates to deliver a subtle 3D rotational tilt.

---

## 6. Animations & Visual Effects Catalog

| # | Effect Name | Implementation Mechanism | Properties / Values |
| :---: | :--- | :--- | :--- |
| **01** | **3D Yin-Yang Rotation** | Three.js WebGL render loop | Base Z-spin `0.52 rad/s`, organic float `sin(t)*0.08` |
| **02** | **Scroll Flywheel Momentum** | JS scroll listener + damping | Multiplies rotation up to 5× with smooth exponential decay |
| **03** | **Gyroscopic Orbital Rings** | Three.js 4-tier ring hierarchy | Radii `2.25` to `4.25`, counter-rotating on Z & Y axes |
| **04** | **1400-Star Galaxy Vortex** | `THREE.Points` + particle sprite | Canvas-generated radial texture, gentle vortex drift |
| **05** | **Boot Screen Handwriting** | Inline SVG stroke dashoffset | `hello-stroke` keyframe, 2.4s cubic-bezier draw |
| **06** | **Typewriter Hero Loop** | Vanilla JS `tw()` interval | 4 cycling phrases, 55ms typing, 28ms backspacing, 1700ms pause |
| **07** | **Scroll Progress Indicator** | Fixed `#bar` with `scaleX()` | Passive scroll listener tracking `scrollY / maxScroll` |
| **08** | **Infinite Double Marquee** | CSS animation `@keyframes marq` | 38s linear loop; reverse variant for second tier; pause on hover |
| **09** | **Cubic Stat Counter Count-Up**| `IntersectionObserver` + RAF | Cubic easing `1 - pow(1-p, 3)` over 1300ms duration |
| **10** | **Staggered Word Entrance** | Split span `.hw` + CSS translate | `translateY(46px) rotate(4deg)` -> 0, staggered by `--w * 100ms` |
| **11** | **Scroll Reveal System** | IntersectionObserver + `.rv.in` | `translateY(26px)` -> 0, 65ms stagger per element group |
| **12** | **Glitch Logo Hover** | CSS `clip-path` keyframes | Multi-sliced step animation mimicking digital signal glitch |
| **13** | **Page Route Transitions** | `.page.enter` CSS class | `opacity: 0, translateY(14px)` -> 1, 0 over 450ms cubic-bezier |
| **14** | **Circular Theme Transition**| `document.startViewTransition` | Radial clip-path expanding circle from clicked coordinates |
| **15** | **Card 3D Perspective Tilt**| `pointermove` -> CSS `--rx/--ry` | `perspective(800px) rotateX(...) rotateY(...)` |
| **16** | **Radial Cursor Spotlight** | CSS `::before` radial gradient | Follows mouse coordinates `--mx`, `--my` across card surface |
| **17** | **Sequential Pipeline Pulse** | CSS animation `@keyframes lit` | 5-stage architectural pipeline flashing sequentially every 5s |
| **18** | **Rotating Conic Card Border**| `@property --ang` conic-gradient| Smooth 360-degree border gradient spin over 5000ms |
| **19** | **Ambient Grain Overlay** | SVG `feTurbulence` filter | Fractal noise overlay fixed at `0.09` opacity across entire body |
| **20** | **Matrix Digital Rain** | Canvas 2D animation loop | Green/white Katakana + binary stream, triggered via Konami code |
| **21** | **Text Hacker Scramble** | RAF random glyph generator | Randomizes chars `01<>/{}#@%$&` before resolving over 850ms |
| **22** | **Magnetic Button Pull** | `pointermove` -> CSS `--tx/--ty` | Buttons subtly gravitate toward cursor when hovered |

---

## 7. Color System & Theme Tokens

The entire project operates on a **strictly enforced monochrome design system**. Color accents have been neutralized into crisp whites, deep blacks, and balanced tones of grey to evoke an architectural, high-fidelity aesthetic.

### Master CSS Custom Properties (`:root`)

```css
:root {
  /* Surface & Base Colors */
  --bg: #000000;                     /* Deepest Black */
  --surface: #0a0a0a;                /* Raised Card Surface */
  --surface-raised: #141414;         /* High-Elevation Elements */
  
  /* Text & Ink Tokens */
  --ink: #ffffff;                    /* Pure White Primary Text */
  --muted: #a6a6a6;                  /* Secondary Muted Text (Grey 65%) */
  --dim: #595959;                    /* Tertiary Dim Text (Grey 35%) */
  
  /* Lines & Dividers */
  --line: #262626;                   /* Subtle Structural Borders */
  --line-strong: #404040;            /* Highlighted Borders */
  
  /* Interactive Accents */
  --accent: #ffffff;                 /* Primary Accent (High-Contrast White) */
  --accent-ink: #000000;             /* Inverted Ink for Buttons */
  --signal: #a6a6a6;                 /* Status Indicator Neutral */
  
  /* Typography Tokens */
  --display: 'Bricolage Grotesque', sans-serif;
  --body: 'Instrument Sans', sans-serif;
  --mono: 'JetBrains Mono', monospace;
  --hand: 'Caveat', cursive;
}

/* Light Theme Inversion (data-theme="light") */
[data-theme="light"] {
  --bg: #ffffff;
  --surface: #f7f7f8;
  --surface-raised: #ededf0;
  --ink: #0a0a0a;
  --muted: #595959;
  --dim: #8c8c8c;
  --line: #e0e0e3;
  --line-strong: #c2c2c7;
  --accent: #0a0a0a;
  --accent-ink: #ffffff;
  --signal: #595959;
}
```

### 3D WebGL Materials Palette
* **Yin-Yang White Shell**: `0xf5f6fa` (Roughness: `0.22`, Metalness: `0.18`)
* **Yin-Yang Black Shell**: `0x0c0d10` (Roughness: `0.28`, Metalness: `0.58`)
* **Bezel Rim & Trim**: `0xd6d8e0` (Roughness: `0.14`, Metalness: `0.92`)
* **Orbital Satellite Spheres**: `0xcccccc` (Roughness: `0.12`, Metalness: `0.92`)
* **Galaxy Particles**: `0xffffff` (Alpha: `0.85`, Additive Blending)

---

## 8. UI/UX Design, Layout & Spacing

### Responsive Breakpoints
* **Desktop (Ultra-Wide)**: `> 1280px` — 4-column project grid, expanded HUD overlay, full Three.js canvas scale.
* **Standard Desktop / Laptop**: `1080px – 1279px` — 3-column project grid, 4-column skills grid.
* **Tablet Landscape / Small Laptop**: `768px – 1079px` — 2-column project grid, adjusted 3D scale (`0.88`).
* **Mobile Devices**: `< 768px` — Single-column stacked cards, vertical resume toolbar, responsive hamburger-free navigation, adjusted 3D scale (`0.72`).

### Spacing & Grid System
* Base Spacing Unit: `8px`.
* Layout Width: `max-width: 1180px; margin: 0 auto; padding: 0 24px;`.
* Card Border Radius: `16px` (regular cards), `24px` (featured flagships and modals).
* Glassmorphism Formula: `background: rgba(12, 12, 12, 0.75); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.12);`.

---

## 9. Interactive Features & Easter Eggs

1. **Konami Code (`↑ ↑ ↓ ↓ ← → ← → B A`)**:
   - Triggers full-screen **Matrix Digital Rain** with Japanese Katakana and binary green glyphs falling across the canvas. Press `Escape` or wait 6.5s to exit.
2. **Real-time Diagnostic HUD (Desktop)**:
   - Floating lower-left heads-up display reporting active router location, live scroll percentage, current rendering FPS, wall-clock time, and availability status.
3. **Audio-less Boot Intro**:
   - Elegant SVG handwriting animation spelling `"hello"` across the screen before gracefully fading away to reveal the portfolio.
4. **Interactive Text Scrambler (`scr()`)**:
   - Hovering over major section headings triggers a digital decipher animation, cycling through matrix characters before snapping to clear text.

---

## 10. Installation & Setup

### Prerequisites
Because this project is engineered using **vanilla web standards**, you do **not** need Node.js, npm, Webpack, or Vite to run it. Any static HTTP server will run the portfolio identically in development and production.

### Cloning the Repository
```bash
git clone https://github.com/Alex-Billu/Alex-Billu-PORTFOLIO.git
cd Alex-Billu-PORTFOLIO
```

---

## 11. Execution & Deployment Guide

### Running Locally

#### Option A: Python 3 Built-in HTTP Server (Recommended)
```bash
python -m http.server 8000
```
Open your browser and navigate to: `http://localhost:8000`

#### Option B: Node.js `serve` / `http-server`
```bash
npx serve .
# or
npx http-server -p 8000
```

#### Option C: VS Code Live Server
* Right-click [`index.html`](file:///d:/3D-portfolio/alex-portfolio/index.html) and select **"Open with Live Server"**.

### Production Deployment

#### GitHub Pages
1. Push the repository to GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment > Source**, select `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder. Click **Save**.
5. Your portfolio is instantly live worldwide at: `https://<username>.github.io/<repo-name>/`.

#### Vercel or Netlify
* Simply drag and drop the root folder into the Netlify / Vercel dashboard. No build command or output directory configuration is needed.

---

## 12. Dependencies & External Libraries

All external assets are either bundled locally in `/public` or pulled via high-availability CDNs:

| Library / Resource | Version | Source | Responsibility |
| :--- | :---: | :---: | :--- |
| **Three.js** | `r128` | Bundled (`public/three.min.js`) | WebGL 3D scene, extruded geometry, camera, lighting, and rendering. |
| **GSAP (GreenSock)** | `3.12.5` | CDN (`cdn.jsdelivr.net`) | Hardware-accelerated animation sequencing and scroll-triggered transitions. |
| **Google Fonts** | Latest | CDN (`fonts.googleapis.com`) | Loads typography: *Bricolage Grotesque*, *Instrument Sans*, *JetBrains Mono*, *Caveat*. |

---

## 13. Performance & Optimization Strategies

1. **Hardware-Accelerated Compositing**:
   - All interactive card tilts and cursor spotlights mutate CSS Custom Properties (`--rx`, `--ry`, `--mx`, `--my`) rather than heavy layout properties, avoiding browser reflows and repaints.
2. **Capped Device Pixel Ratio**:
   - `renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));` prevents GPU throttling on high-DPI screens (Retina / 4K displays).
3. **Passive Event Listeners**:
   - Window scroll and pointermove listeners utilize `{ passive: true }` to guarantee non-blocking 60–120 FPS scrolling.
4. **IntersectionObserver Virtualization**:
   - Complex animations (stat count-ups, section reveals) only activate when scrolled into the active viewport and disconnect immediately once triggered.
5. **Zero Bundler Overhead**:
   - Eliminating bundlers guarantees instant First Contentful Paint (FCP) under 300ms on broadband connections.

---

## 14. Customization Guide

### Modifying Theme Colors
Open [`index.html`](file:///d:/3D-portfolio/alex-portfolio/index.html) and adjust lines 12–35 inside `:root`:
```css
:root {
  --bg: #000000;       /* Change canvas background */
  --surface: #0a0a0a;  /* Change card background */
  --accent: #ffffff;   /* Change primary glow/accent */
}
```

### Adding or Updating Projects
Open [`public/projects-data.js`](file:///d:/3D-portfolio/alex-portfolio/public/projects-data.js). Append or modify an object inside `window.PROJECTS_DATA`:
```javascript
{
  id: "new-project-id",
  number: "16",
  name: "My Next Project",
  category: "AI & Machine Learning",
  tagline: "High-impact tagline here",
  description: "Detailed description of system capabilities.",
  tech: ["Python", "PyTorch", "FastAPI"],
  status: "Active Research",
  accent: "#ffffff",
  github: "https://github.com/Alex-Billu",
  demo: ""
}
```

### Adding New Skills
Open [`public/skills-data.js`](file:///d:/3D-portfolio/alex-portfolio/public/skills-data.js) and locate the relevant category array to append technologies.

---

## 15. Future Roadmap & Potential Improvements

* [ ] **Interactive 3D Project Nodes**: Embed interactive mini-3D WebGL models for each project directly inside the modal view.
* [ ] **Live Interactive AI Chat**: Integrate an on-device WebLLM or lightweight backend assistant to answer questions about Alex's research directly in chat.
* [ ] **Audio Feedback (Optional SFX)**: Introduce subtle, toggleable sci-fi mechanical click sounds on button presses and terminal execution.
* [ ] **PWA / Offline Support**: Add a lightweight Service Worker and web manifest to enable full offline browsing and installation.

---

## License

This project is open-source and released under the **MIT License**.  
Feel free to explore, learn from, and adapt the architecture for your own developer journey.

```
Copyright (c) 2026 Alex S

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">
  <sub>Designed &amp; Engineered with precision by <strong>Alex</strong>. Turning ideas into code, intelligence, and impact.</sub>
</div>
