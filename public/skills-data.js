/**
 * Alex S – Skills Catalog (14 Specialized Engineering Categories)
 * Structured technical competencies with scalable monochrome SVGs,
 * domain classifications, and metadata for interactive filtering & search.
 */
(function() {
  var root = typeof window !== 'undefined' ? window : globalThis;

  var SKILLS_DATA = [
  {
    "id": "ai-ml",
    "number": "01",
    "name": "Artificial Intelligence & Machine Learning",
    "filterGroup": "AI/ML",
    "filterTags": [
      "AI/ML"
    ],
    "icon": "pytorch",
    "description": "Deep learning models, supervised learning architectures, statistical prediction pipelines, and tensor operations.",
    "skills": [
      {
        "name": "PyTorch",
        "icon": "pytorch",
        "tag": "Core",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\"1.5\"/></svg>"
      },
      {
        "name": "TensorFlow",
        "icon": "tensorflow",
        "tag": "Deep Learning",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 3v18M3 8l9-5 9 5M3 8l9 5 9-5M3 16l9 5 9-5\"/></svg>"
      },
      {
        "name": "Scikit-Learn",
        "icon": "scikit",
        "tag": "Statistical ML",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"7\" cy=\"7\" r=\"3\"/><circle cx=\"17\" cy=\"7\" r=\"3\"/><circle cx=\"12\" cy=\"17\" r=\"3\"/><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"/><line x1=\"8\" y1=\"10\" x2=\"11\" y2=\"15\"/><line x1=\"16\" y1=\"10\" x2=\"13\" y2=\"15\"/></svg>"
      },
      {
        "name": "XGBoost",
        "icon": "xgboost",
        "tag": "Tree Ensembles",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 18l5-6-5-6h4l3 4 3-4h4l-5 6 5 6h-4l-3-4-3 4H4z\"/></svg>"
      },
      {
        "name": "Deep Learning",
        "icon": "deeplearning",
        "tag": "Neural Nets",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"5\" cy=\"6\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"19\" cy=\"6\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><line x1=\"7\" y1=\"7\" x2=\"10\" y2=\"11\"/><line x1=\"7\" y1=\"17\" x2=\"10\" y2=\"13\"/><line x1=\"14\" y1=\"11\" x2=\"17\" y2=\"7\"/><line x1=\"14\" y1=\"13\" x2=\"17\" y2=\"17\"/></svg>"
      },
      {
        "name": "Neural Networks",
        "icon": "neural",
        "tag": "CNN / RNN",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/><path d=\"M9 11l6-4M9 13l6 4\"/></svg>"
      },
      {
        "name": "Pandas",
        "icon": "pandas",
        "tag": "Dataframes",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"3\"/><line x1=\"9\" y1=\"4\" x2=\"9\" y2=\"20\"/><line x1=\"15\" y1=\"4\" x2=\"15\" y2=\"20\"/><line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\"/></svg>"
      },
      {
        "name": "NumPy",
        "icon": "numpy",
        "tag": "Matrix Math",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"8\" height=\"8\" rx=\"1\"/><rect x=\"13\" y=\"3\" width=\"8\" height=\"8\" rx=\"1\"/><rect x=\"3\" y=\"13\" width=\"8\" height=\"8\" rx=\"1\"/><rect x=\"13\" y=\"13\" width=\"8\" height=\"8\" rx=\"1\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\"1.5\"/></svg>"
  },
  {
    "id": "genai-agents",
    "number": "02",
    "name": "Generative AI, LLMs & Agents",
    "filterGroup": "AI/ML",
    "filterTags": [
      "AI/ML"
    ],
    "icon": "agents",
    "description": "Autonomous AI reasoning agents, multi-stage RAG pipelines, vector semantic indexing, and model alignment.",
    "skills": [
      {
        "name": "LangChain",
        "icon": "langchain",
        "tag": "Agent Framework",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71\"/><path d=\"M15 7l2 2\"/></svg>"
      },
      {
        "name": "LlamaIndex",
        "icon": "llamaindex",
        "tag": "Data Indexing",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 19.5A2.5 2.5 0 016.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z\"/><line x1=\"9\" y1=\"7\" x2=\"15\" y2=\"7\"/><line x1=\"9\" y1=\"11\" x2=\"13\" y2=\"11\"/></svg>"
      },
      {
        "name": "OpenAI API",
        "icon": "openai",
        "tag": "GPT Models",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 3v9l7.8 4.5\"/><path d=\"M12 12l-7.8 4.5\"/></svg>"
      },
      {
        "name": "Hugging Face",
        "icon": "huggingface",
        "tag": "Open Models",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"9\" cy=\"10\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"10\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M8 15s1.5 2 4 2 4-2 4-2\"/></svg>"
      },
      {
        "name": "RAG Pipelines",
        "icon": "rag",
        "tag": "Hybrid Retrieval",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 6h16M4 12h10M4 18h16\"/><circle cx=\"19\" cy=\"12\" r=\"2\"/><path d=\"M17 12h-3\"/></svg>"
      },
      {
        "name": "AI Agents",
        "icon": "agents",
        "tag": "Tool Use",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"10\" rx=\"2\"/><circle cx=\"12\" cy=\"5\" r=\"2\"/><path d=\"M12 7v4M8 16h.01M16 16h.01\"/></svg>"
      },
      {
        "name": "Prompt Engineering",
        "icon": "prompt",
        "tag": "Few-Shot",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"4 17 10 11 4 5\"/><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"/></svg>"
      },
      {
        "name": "Fine-Tuning",
        "icon": "finetuning",
        "tag": "LoRA / QLoRA",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"/><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"/><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"/><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"/><circle cx=\"4\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"10\" r=\"2\"/><circle cx=\"20\" cy=\"14\" r=\"2\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"10\" rx=\"2\"/><circle cx=\"12\" cy=\"5\" r=\"2\"/><path d=\"M12 7v4M8 16h.01M16 16h.01\"/></svg>"
  },
  {
    "id": "computer-vision",
    "number": "03",
    "name": "Computer Vision & Spatial AI",
    "filterGroup": "AI/ML",
    "filterTags": [
      "AI/ML"
    ],
    "icon": "opencv",
    "description": "Real-time edge detection, YOLO object detection, kinematic pose tracking, and spatial 3D reconstruction.",
    "skills": [
      {
        "name": "OpenCV",
        "icon": "opencv",
        "tag": "Image Processing",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"6\" r=\"3.5\"/><circle cx=\"6\" cy=\"16\" r=\"3.5\"/><circle cx=\"18\" cy=\"16\" r=\"3.5\"/><path d=\"M9.5 8.5l-2 5M14.5 8.5l2 5M9 17h6\"/></svg>"
      },
      {
        "name": "YOLO (v8/v11)",
        "icon": "yolo",
        "tag": "Object Detection",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"6\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"21\"/><line x1=\"3\" y1=\"12\" x2=\"6\" y2=\"12\"/><line x1=\"18\" y1=\"12\" x2=\"21\" y2=\"12\"/></svg>"
      },
      {
        "name": "MediaPipe",
        "icon": "mediapipe",
        "tag": "Pose Tracking",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"4\" r=\"2\"/><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"14\"/><path d=\"M7 10l5-2 5 2M8 20l4-6 4 6\"/></svg>"
      },
      {
        "name": "Pose Estimation",
        "icon": "pose",
        "tag": "Joint Kinematics",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"4\" r=\"2\"/><path d=\"M12 6v7M6 9l6 2 6-2M8 20l4-7 4 7\"/></svg>"
      },
      {
        "name": "Object Detection",
        "icon": "objectdetect",
        "tag": "Bounding Boxes",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>"
      },
      {
        "name": "Image Segmentation",
        "icon": "segmentation",
        "tag": "Mask R-CNN",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12a8 8 0 0116 0M4 12a8 8 0 0016 0\"/><line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"/></svg>"
      },
      {
        "name": "3D Reconstruction",
        "icon": "reconstruction",
        "tag": "Spatial Pointclouds",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2l9 5v10l-9 5-9-5V7l9-5z\"/><path d=\"M12 22V12M21 7l-9 5-9-5\"/></svg>"
      },
      {
        "name": "Video Telemetry",
        "icon": "telemetry",
        "tag": "Frame Analytics",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M3 12h4l3 8 4-16 3 8h4\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"6\" r=\"3.5\"/><circle cx=\"6\" cy=\"16\" r=\"3.5\"/><circle cx=\"18\" cy=\"16\" r=\"3.5\"/><path d=\"M9.5 8.5l-2 5M14.5 8.5l2 5M9 17h6\"/></svg>"
  },
  {
    "id": "nlp",
    "number": "04",
    "name": "Natural Language Processing (NLP)",
    "filterGroup": "AI/ML",
    "filterTags": [
      "AI/ML"
    ],
    "icon": "transformers",
    "description": "Transformer self-attention architectures, dense vector embeddings, sentiment analysis, and conversational intelligence.",
    "skills": [
      {
        "name": "Transformers",
        "icon": "transformers",
        "tag": "Self-Attention",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"7\" height=\"6\" rx=\"1\"/><rect x=\"14\" y=\"4\" width=\"7\" height=\"6\" rx=\"1\"/><rect x=\"8.5\" y=\"14\" width=\"7\" height=\"6\" rx=\"1\"/><path d=\"M6.5 10v2a2 2 0 002 2h7a2 2 0 002-2v-2\"/></svg>"
      },
      {
        "name": "BERT Models",
        "icon": "bert",
        "tag": "Encoder Repr.",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M9 12h6M12 9v6\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>"
      },
      {
        "name": "NLTK",
        "icon": "nltk",
        "tag": "Linguistics",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 7V4h16v3M9 20h6M12 4v16\"/></svg>"
      },
      {
        "name": "SpaCy",
        "icon": "spacy",
        "tag": "Industrial NLP",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z\"/><path d=\"M8 7h8M8 11h6M8 15h4\"/></svg>"
      },
      {
        "name": "Vector Embeddings",
        "icon": "embeddings",
        "tag": "Semantic Space",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"6\" cy=\"6\" r=\"2\"/><circle cx=\"18\" cy=\"8\" r=\"2\"/><circle cx=\"12\" cy=\"18\" r=\"2\"/><path d=\"M7.5 7.5L16.5 8.5M7 8l4 8M17 9.5l-4 7\"/></svg>"
      },
      {
        "name": "Sentiment Analysis",
        "icon": "sentiment",
        "tag": "Classification",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"/><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"/><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"/></svg>"
      },
      {
        "name": "Tokenization",
        "icon": "tokenization",
        "tag": "BPE / WordPiece",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"6\" width=\"6\" height=\"12\" rx=\"1\"/><rect x=\"11\" y=\"6\" width=\"4\" height=\"12\" rx=\"1\"/><rect x=\"17\" y=\"6\" width=\"4\" height=\"12\" rx=\"1\"/></svg>"
      },
      {
        "name": "Semantic Search",
        "icon": "semantic",
        "tag": "Cosine Distance",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/><path d=\"M11 8v6M8 11h6\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"7\" height=\"6\" rx=\"1\"/><rect x=\"14\" y=\"4\" width=\"7\" height=\"6\" rx=\"1\"/><rect x=\"8.5\" y=\"14\" width=\"7\" height=\"6\" rx=\"1\"/><path d=\"M6.5 10v2a2 2 0 002 2h7a2 2 0 002-2v-2\"/></svg>"
  },
  {
    "id": "frontend-core",
    "number": "05",
    "name": "Frontend Engineering & Frameworks",
    "filterGroup": "Frontend",
    "filterTags": [
      "Frontend"
    ],
    "icon": "react",
    "description": "Production single-page applications, component architectures, type-safe reactive state, and web lifecycles.",
    "skills": [
      {
        "name": "React.js",
        "icon": "react",
        "tag": "Component UI",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"4\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"4\" transform=\"rotate(60 12 12)\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"4\" transform=\"rotate(120 12 12)\"/><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Next.js",
        "icon": "nextjs",
        "tag": "App Router / SSR",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9 8v8l7.5-9v8\"/></svg>"
      },
      {
        "name": "TypeScript",
        "icon": "typescript",
        "tag": "Type Safety",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><path d=\"M7 8h6M10 8v8M15 11.5c.5-.8 1.4-1 2.2-.7.8.4 1.1 1.2 1.1 2 0 1.5-2.2 1.5-2.2 3.2h2.4\"/></svg>"
      },
      {
        "name": "JavaScript (ES6+)",
        "icon": "javascript",
        "tag": "Modern Standard",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><path d=\"M9 16c0 1.5-1 2-2 2-1 0-1.5-.5-1.5-1M15 11.5c.5-.8 1.4-1 2.2-.7.8.4 1.1 1.2 1.1 2 0 1.5-2.2 1.5-2.2 3.2h2.4\"/></svg>"
      },
      {
        "name": "HTML5 Semantic",
        "icon": "html5",
        "tag": "DOM Structure",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"4 2 20 2 18 19 12 22 6 19 4 2\"/><polyline points=\"8 7 16 7 15.5 12 8.5 12\"/></svg>"
      },
      {
        "name": "Web Standards",
        "icon": "webstandards",
        "tag": "W3C Compliance",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 3a15 15 0 010 18M12 3a15 15 0 000 18\"/></svg>"
      },
      {
        "name": "State Management",
        "icon": "statemgmt",
        "tag": "Context / Hooks",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"17\" r=\"3\"/><circle cx=\"18\" cy=\"17\" r=\"3\"/><path d=\"M10.5 7.5L7.5 14.5M13.5 7.5l3 7M9 17h6\"/></svg>"
      },
      {
        "name": "Component Systems",
        "icon": "components",
        "tag": "Modular Architecture",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"/><polyline points=\"2 17 12 22 22 17\"/><polyline points=\"2 12 12 17 22 12\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"4\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"4\" transform=\"rotate(60 12 12)\"/><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"4\" transform=\"rotate(120 12 12)\"/><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill=\"currentColor\"/></svg>"
  },
  {
    "id": "styling-ui",
    "number": "06",
    "name": "UI/UX & Modern Styling Systems",
    "filterGroup": "Frontend",
    "filterTags": [
      "Frontend"
    ],
    "icon": "tailwind",
    "description": "Monochrome glassmorphic design systems, adaptive layouts, fluid fluid typography, and micro-interactions.",
    "skills": [
      {
        "name": "Tailwind CSS",
        "icon": "tailwind",
        "tag": "Utility-First",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6 13c1.5-3 3.5-3.5 5.5-2 1.5 1 2.5 1.5 4.5.5 3-1.5 4-4.5 4-4.5s-1.5 3-3.5 3.5c-1.5 1-2.5.5-4.5 1.5-3 1.5-4 4.5-4 4.5z\"/><path d=\"M2 17c1.5-3 3.5-3.5 5.5-2 1.5 1 2.5 1.5 4.5.5 3-1.5 4-4.5 4-4.5s-1.5 3-3.5 3.5c-1.5 1-2.5.5-4.5 1.5-3 1.5-4 4.5-4 4.5z\"/></svg>"
      },
      {
        "name": "Modern CSS3",
        "icon": "css3",
        "tag": "Variables & Layout",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"4 2 20 2 18 19 12 22 6 19 4 2\"/><path d=\"M8 7h8l-.5 4.5H9l.3 3.5 2.7.7 2.7-.7.2-2.5\"/></svg>"
      },
      {
        "name": "CSS Grid & Flexbox",
        "icon": "gridflex",
        "tag": "Responsive Flow",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"/><line x1=\"3\" y1=\"15\" x2=\"21\" y2=\"15\"/><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"/><line x1=\"15\" y1=\"3\" x2=\"15\" y2=\"21\"/></svg>"
      },
      {
        "name": "Glassmorphism",
        "icon": "glassmorphism",
        "tag": "Frosted Surfaces",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"5\" width=\"14\" height=\"14\" rx=\"3\" stroke-dasharray=\"3 3\"/><rect x=\"7\" y=\"7\" width=\"14\" height=\"14\" rx=\"3\"/></svg>"
      },
      {
        "name": "Responsive Layouts",
        "icon": "responsive",
        "tag": "Mobile First",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"14\" rx=\"2\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"21\"/><rect x=\"15\" y=\"9\" width=\"5\" height=\"7\" rx=\"1\"/></svg>"
      },
      {
        "name": "Design Systems",
        "icon": "designsystems",
        "tag": "Consistent Tokens",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"7\" cy=\"7\" r=\"3\"/><rect x=\"13\" y=\"4\" width=\"7\" height=\"6\" rx=\"1\"/><polygon points=\"4 15 9 15 6.5 20 4 15\"/><path d=\"M14 15h6v5h-6z\"/></svg>"
      },
      {
        "name": "Micro-Interactions",
        "icon": "interactions",
        "tag": "Feedback States",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3\"/></svg>"
      },
      {
        "name": "Accessibility (a11y)",
        "icon": "a11y",
        "tag": "ARIA & Focus",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"4\" r=\"2\"/><path d=\"M4 8h16M12 8v6M7 21l5-7 5 7\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6 13c1.5-3 3.5-3.5 5.5-2 1.5 1 2.5 1.5 4.5.5 3-1.5 4-4.5 4-4.5s-1.5 3-3.5 3.5c-1.5 1-2.5.5-4.5 1.5-3 1.5-4 4.5-4 4.5z\"/><path d=\"M2 17c1.5-3 3.5-3.5 5.5-2 1.5 1 2.5 1.5 4.5.5 3-1.5 4-4.5 4-4.5s-1.5 3-3.5 3.5c-1.5 1-2.5.5-4.5 1.5-3 1.5-4 4.5-4 4.5z\"/></svg>"
  },
  {
    "id": "creative-3d",
    "number": "07",
    "name": "3D Web & Creative Computing",
    "filterGroup": "Frontend",
    "filterTags": [
      "Frontend",
      "Tools"
    ],
    "icon": "threejs",
    "description": "Hardware-accelerated WebGL graphics, dynamic Three.js viewports, GLSL shaders, and cinematic GSAP timelines.",
    "skills": [
      {
        "name": "Three.js",
        "icon": "threejs",
        "tag": "WebGL Engine",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"3 4 21 4 12 20 3 4\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"/></svg>"
      },
      {
        "name": "React Three Fiber",
        "icon": "r3f",
        "tag": "Declarative 3D",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z\"/><ellipse cx=\"12\" cy=\"11\" rx=\"5\" ry=\"2\"/></svg>"
      },
      {
        "name": "WebGL & Canvas",
        "icon": "webgl",
        "tag": "GPU Pipeline",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><polygon points=\"12 4 19 8 19 16 12 20 5 16 5 8 12 4\"/></svg>"
      },
      {
        "name": "GSAP Motion",
        "icon": "gsap",
        "tag": "Kinetic Animation",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>"
      },
      {
        "name": "ScrollTrigger",
        "icon": "scrolltrigger",
        "tag": "Scroll Sync",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"6\" y=\"3\" width=\"12\" height=\"18\" rx=\"6\"/><line x1=\"12\" y1=\"7\" x2=\"12\" y2=\"10\"/></svg>"
      },
      {
        "name": "Canvas 2D Rendering",
        "icon": "canvas",
        "tag": "Procedural Art",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 19l7-7 3 3-7 7-3-3z\"/><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"/><circle cx=\"11\" cy=\"11\" r=\"2\"/></svg>"
      },
      {
        "name": "Kinetic Physics",
        "icon": "physics",
        "tag": "Damped Motion",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M19.07 4.93l-4.24 4.24M9.17 14.83L4.93 19.07\"/></svg>"
      },
      {
        "name": "GLSL Shaders",
        "icon": "shaders",
        "tag": "Vertex / Fragment",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 3a9 9 0 019 9H3a9 9 0 019-9z\"/><path d=\"M6 12a6 6 0 0012 0H6z\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"3 4 21 4 12 20 3 4\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"/></svg>"
  },
  {
    "id": "backend-apis",
    "number": "08",
    "name": "Backend Engineering & Frameworks",
    "filterGroup": "Backend",
    "filterTags": [
      "Backend"
    ],
    "icon": "nodejs",
    "description": "High-throughput REST APIs, asynchronous ASGI microservices, bidirectional WebSockets, and system middleware.",
    "skills": [
      {
        "name": "Node.js",
        "icon": "nodejs",
        "tag": "Event-Driven",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z\"/><path d=\"M9 10l3 2 3-2v4\"/></svg>"
      },
      {
        "name": "Express.js",
        "icon": "express",
        "tag": "HTTP Routing",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"3\"/><path d=\"M7 10h4M7 14h6M15 10h2M15 14h2\"/></svg>"
      },
      {
        "name": "FastAPI",
        "icon": "fastapi",
        "tag": "Async Python",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"13 2 4 14 11 14 10 22 20 10 13 10 13 2\"/></svg>"
      },
      {
        "name": "Flask",
        "icon": "flask",
        "tag": "Modular Python",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 3h6M10 3v5l-4.5 9A2 2 0 007.3 20h9.4a2 2 0 001.8-3L14 8V3\"/></svg>"
      },
      {
        "name": "RESTful APIs",
        "icon": "restapi",
        "tag": "API Contracts",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/><circle cx=\"7\" cy=\"7\" r=\"1\"/><circle cx=\"10\" cy=\"7\" r=\"1\"/></svg>"
      },
      {
        "name": "WebSockets",
        "icon": "websockets",
        "tag": "Bidirectional",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12a8 8 0 0116 0M7 12a5 5 0 0110 0M10 12a2 2 0 014 0\"/><line x1=\"12\" y1=\"14\" x2=\"12\" y2=\"21\"/><circle cx=\"12\" cy=\"21\" r=\"1\"/></svg>"
      },
      {
        "name": "Socket.IO",
        "icon": "socketio",
        "tag": "Real-Time Telemetry",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l4 2\"/></svg>"
      },
      {
        "name": "Async Services",
        "icon": "asyncservices",
        "tag": "Non-Blocking I/O",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21.5 2v6h-6M21.34 15.57a10 10 0 11-.57-8.38l5.67-5.19\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z\"/><path d=\"M9 10l3 2 3-2v4\"/></svg>"
  },
  {
    "id": "programming-langs",
    "number": "09",
    "name": "Programming Languages",
    "filterGroup": "Backend",
    "filterTags": [
      "Backend",
      "Tools"
    ],
    "icon": "python",
    "description": "Multi-paradigm software engineering spanning data science, systems programming, and high-performance applications.",
    "skills": [
      {
        "name": "Python",
        "icon": "python",
        "tag": "AI / Data / Backend",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2C8 2 8 4 8 4v3h4v1H6S3 8 3 12s2 4 2 4h2v-2s0-2 2-2h5s2 0 2-2V4s0-2-4-2z\"/><circle cx=\"10\" cy=\"5\" r=\"1\" fill=\"currentColor\"/><path d=\"M12 22c4 0 4-2 4-2v-3h-4v-1h6s3 0 3-4-2-4-2-4h-2v2s0 2-2 2h-5s-2 0-2 2v5s0 2 4 2z\"/><circle cx=\"14\" cy=\"19\" r=\"1\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Java",
        "icon": "java",
        "tag": "OOP & Android",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3\"/></svg>"
      },
      {
        "name": "C",
        "icon": "c",
        "tag": "Low-Level Systems",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15 9a4.5 4.5 0 100 6\"/></svg>"
      },
      {
        "name": "C++",
        "icon": "cpp",
        "tag": "Algorithms & STL",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"9\" cy=\"12\" r=\"7\"/><path d=\"M11 9a3.5 3.5 0 100 6M16 11v2M15 12h2M20 11v2M19 12h2\"/></svg>"
      },
      {
        "name": "TypeScript",
        "icon": "typescript",
        "tag": "Type-Safe Web",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><path d=\"M7 8h6M10 8v8M15 11.5c.5-.8 1.4-1 2.2-.7.8.4 1.1 1.2 1.1 2 0 1.5-2.2 1.5-2.2 3.2h2.4\"/></svg>"
      },
      {
        "name": "JavaScript",
        "icon": "javascript",
        "tag": "Full Stack Web",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><path d=\"M9 16c0 1.5-1 2-2 2-1 0-1.5-.5-1.5-1M15 11.5c.5-.8 1.4-1 2.2-.7.8.4 1.1 1.2 1.1 2 0 1.5-2.2 1.5-2.2 3.2h2.4\"/></svg>"
      },
      {
        "name": "SQL",
        "icon": "sql",
        "tag": "Relational Queries",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"5\" rx=\"8\" ry=\"3\"/><path d=\"M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5\"/><path d=\"M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3\"/></svg>"
      },
      {
        "name": "Shell / Bash",
        "icon": "bash",
        "tag": "Linux Automation",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"4 17 10 11 4 5\"/><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2C8 2 8 4 8 4v3h4v1H6S3 8 3 12s2 4 2 4h2v-2s0-2 2-2h5s2 0 2-2V4s0-2-4-2z\"/><circle cx=\"10\" cy=\"5\" r=\"1\" fill=\"currentColor\"/><path d=\"M12 22c4 0 4-2 4-2v-3h-4v-1h6s3 0 3-4-2-4-2-4h-2v2s0 2-2 2h-5s-2 0-2 2v5s0 2 4 2z\"/><circle cx=\"14\" cy=\"19\" r=\"1\" fill=\"currentColor\"/></svg>"
  },
  {
    "id": "databases-vectors",
    "number": "10",
    "name": "Databases & Vector Stores",
    "filterGroup": "Backend",
    "filterTags": [
      "Backend",
      "Cloud"
    ],
    "icon": "sql",
    "description": "Relational ACID compliance, document schemas, in-memory caching, and vector indexing for LLM retrieval.",
    "skills": [
      {
        "name": "PostgreSQL",
        "icon": "postgresql",
        "tag": "Relational RDBMS",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"6\" rx=\"8\" ry=\"3\"/><path d=\"M4 6v8c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 10c0 1.66 3.58 3 8 3s8-1.34 8-3\"/><path d=\"M12 17v5\"/></svg>"
      },
      {
        "name": "MySQL",
        "icon": "mysql",
        "tag": "Structured Data",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"5\" rx=\"8\" ry=\"3\"/><path d=\"M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5\"/><path d=\"M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7\"/></svg>"
      },
      {
        "name": "SQLite",
        "icon": "sqlite",
        "tag": "Embedded Database",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"5\" rx=\"7\" ry=\"2.5\"/><path d=\"M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5\"/></svg>"
      },
      {
        "name": "MongoDB",
        "icon": "mongodb",
        "tag": "Document Store",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2C9 7 6 11 6 15a6 6 0 0012 0c0-4-3-8-6-13z\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"/></svg>"
      },
      {
        "name": "Redis",
        "icon": "redis",
        "tag": "In-Memory Caching",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"/><polygon points=\"12 8 2 13 12 18 22 13 12 8\"/><polyline points=\"2 17 12 22 22 17\"/></svg>"
      },
      {
        "name": "ChromaDB",
        "icon": "chromadb",
        "tag": "Vector Search",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"1\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Pinecone",
        "icon": "pinecone",
        "tag": "Managed Vectors",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2l4 7h-8l4-7zM12 9l6 7H6l6-7zM12 16l7 6H5l7-6z\"/></svg>"
      },
      {
        "name": "Firebase Firestore",
        "icon": "firestore",
        "tag": "Realtime NoSQL",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"5\" rx=\"8\" ry=\"3\"/><path d=\"M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5\"/><path d=\"M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3\"/></svg>"
  },
  {
    "id": "mobile-dev",
    "number": "11",
    "name": "Mobile Application Development",
    "filterGroup": "Mobile",
    "filterTags": [
      "Mobile"
    ],
    "icon": "android",
    "description": "Native Android architectures, cross-platform React Native / Expo applications, and hardware sensor telemetry.",
    "skills": [
      {
        "name": "Android Studio",
        "icon": "android",
        "tag": "IDE & SDK",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 10a8 8 0 0116 0v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8z\"/><line x1=\"7\" y1=\"4\" x2=\"9\" y2=\"7\"/><line x1=\"17\" y1=\"4\" x2=\"15\" y2=\"7\"/><circle cx=\"9\" cy=\"12\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"12\" r=\"1\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Java (Android)",
        "icon": "java",
        "tag": "Native Architecture",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3\"/></svg>"
      },
      {
        "name": "React Native",
        "icon": "reactnative",
        "tag": "Cross-Platform",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"7\" y=\"2\" width=\"10\" height=\"20\" rx=\"2\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4\" ry=\"2\" transform=\"rotate(30 12 12)\"/></svg>"
      },
      {
        "name": "Expo",
        "icon": "expo",
        "tag": "Mobile Toolchain",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"12 3 2 12 12 21 22 12 12 3\"/><polygon points=\"12 8 7 12 12 16 17 12 12 8\"/></svg>"
      },
      {
        "name": "Mobile System UI",
        "icon": "mobileui",
        "tag": "Touch Ergonomics",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"3\"/><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"/></svg>"
      },
      {
        "name": "Sensors & GPS",
        "icon": "sensors",
        "tag": "Telemetry / Location",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v3M12 19v3M2 12h3M19 12h3\"/></svg>"
      },
      {
        "name": "Offline Storage",
        "icon": "offlinestore",
        "tag": "SQLite / Local",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/><line x1=\"8\" y1=\"15\" x2=\"8.01\" y2=\"15\"/><line x1=\"12\" y1=\"15\" x2=\"16\" y2=\"15\"/></svg>"
      },
      {
        "name": "Push Notifications",
        "icon": "pushnotifs",
        "tag": "Background Tasks",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9\"/><path d=\"M13.73 21a2 2 0 01-3.46 0\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 10a8 8 0 0116 0v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8z\"/><line x1=\"7\" y1=\"4\" x2=\"9\" y2=\"7\"/><line x1=\"17\" y1=\"4\" x2=\"15\" y2=\"7\"/><circle cx=\"9\" cy=\"12\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"12\" r=\"1\" fill=\"currentColor\"/></svg>"
  },
  {
    "id": "cloud-infra",
    "number": "12",
    "name": "Cloud & Serverless Infrastructure",
    "filterGroup": "Cloud",
    "filterTags": [
      "Cloud"
    ],
    "icon": "gcp",
    "description": "Distributed cloud architectures, serverless micro-runtimes, object storage, and edge content distribution.",
    "skills": [
      {
        "name": "Google Cloud (GCP)",
        "icon": "gcp",
        "tag": "Cloud Platform",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6.5 19h11a4.5 4.5 0 00.5-8.97A7 7 0 004.1 11.5 4.5 4.5 0 006.5 19z\"/></svg>"
      },
      {
        "name": "Firebase Cloud",
        "icon": "firebase",
        "tag": "Auth & Hosting",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 18L7 3l4 8-7 7zM12 11l2-4 6 11-8-7zM4 18l8 4 8-4-8-7-8 7z\"/></svg>"
      },
      {
        "name": "Vercel",
        "icon": "vercel",
        "tag": "Edge Deployment",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"12 3 22 20 2 20 12 3\"/></svg>"
      },
      {
        "name": "Netlify",
        "icon": "netlify",
        "tag": "Static / Serverless",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"12 2 3 9 5 19 12 22 19 19 21 9 12 2\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"/></svg>"
      },
      {
        "name": "Serverless Functions",
        "icon": "serverless",
        "tag": "FaaS Compute",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>"
      },
      {
        "name": "Cloud Storage",
        "icon": "cloudstorage",
        "tag": "Blob Storage",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"6\" rx=\"7\" ry=\"2.5\"/><path d=\"M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6\"/></svg>"
      },
      {
        "name": "REST Endpoints",
        "icon": "restapi",
        "tag": "Public Gateways",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/><circle cx=\"7\" cy=\"7\" r=\"1\"/><circle cx=\"10\" cy=\"7\" r=\"1\"/></svg>"
      },
      {
        "name": "Edge CDN",
        "icon": "edgecdn",
        "tag": "Global Cache",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><line x1=\"3\" y1=\"12\" x2=\"9\" y2=\"12\"/><line x1=\"15\" y1=\"12\" x2=\"21\" y2=\"12\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6.5 19h11a4.5 4.5 0 00.5-8.97A7 7 0 004.1 11.5 4.5 4.5 0 006.5 19z\"/></svg>"
  },
  {
    "id": "cybersecurity",
    "number": "13",
    "name": "Cybersecurity & Threat Detection",
    "filterGroup": "Security",
    "filterTags": [
      "Security"
    ],
    "icon": "scamdetect",
    "description": "Adversarial threat analysis, AI scam detection models, URL phishing heuristics, and authentication standards.",
    "skills": [
      {
        "name": "Scam Detection",
        "icon": "scamdetect",
        "tag": "AI Threat Models",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></svg>"
      },
      {
        "name": "Threat Modeling",
        "icon": "threatmodel",
        "tag": "Attack Surfaces",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"/><polyline points=\"2 17 12 22 22 17\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/></svg>"
      },
      {
        "name": "URL Phishing Analysis",
        "icon": "phishing",
        "tag": "Heuristic Scanners",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"/></svg>"
      },
      {
        "name": "JWT & Auth Flow",
        "icon": "jwt",
        "tag": "Session Tokens",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0110 0v4\"/></svg>"
      },
      {
        "name": "Vulnerability Auditing",
        "icon": "vulnaudit",
        "tag": "Code Inspection",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/><path d=\"M11 7v4M11 15h.01\"/></svg>"
      },
      {
        "name": "Cryptographic Hashing",
        "icon": "cryptohash",
        "tag": "SHA-256 / bcrypt",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"4 7 4 4 20 4 20 7\"/><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"/></svg>"
      },
      {
        "name": "Input Sanitization",
        "icon": "sanitization",
        "tag": "XSS / SQLi Guard",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><polyline points=\"9 12 11 14 15 10\"/></svg>"
      },
      {
        "name": "Secure Web Design",
        "icon": "securedesign",
        "tag": "CORS / CSP / HTTPS",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M9 12l2 2 4-4\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></svg>"
  },
  {
    "id": "devops-tools",
    "number": "14",
    "name": "DevOps, CI/CD & Developer Tools",
    "filterGroup": "Tools",
    "filterTags": [
      "Tools"
    ],
    "icon": "git",
    "description": "Git flow collaboration, Docker container sandboxing, automated CI pipelines, and developer debugging toolsets.",
    "skills": [
      {
        "name": "Git",
        "icon": "git",
        "tag": "Version Control",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"9\" r=\"3\"/><path d=\"M6 9v6M9 6h3a3 3 0 013 3\"/></svg>"
      },
      {
        "name": "GitHub / Actions",
        "icon": "github",
        "tag": "CI/CD Automation",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22\"/></svg>"
      },
      {
        "name": "Docker",
        "icon": "docker",
        "tag": "Containerization",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 12.5c-.8 0-1.6.3-2.2.8-.5-.8-1.4-1.3-2.3-1.3-.4 0-.8.1-1.2.3-.5-1.5-1.9-2.5-3.5-2.5H12V7h-2V5H8v2H6v2.8H4c-1.1 0-2 .9-2 2v2.7c0 3.3 2.7 6 6 6h8c3.3 0 6-2.7 6-6z\"/><rect x=\"8\" y=\"7\" width=\"2\" height=\"2\"/><rect x=\"11\" y=\"7\" width=\"2\" height=\"2\"/><rect x=\"14\" y=\"7\" width=\"2\" height=\"2\"/></svg>"
      },
      {
        "name": "Postman",
        "icon": "postman",
        "tag": "API Testing",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"/><polygon points=\"22 2 15 22 11 13 2 9 22 2\"/></svg>"
      },
      {
        "name": "Linux CLI",
        "icon": "linux",
        "tag": "Bash & SysAdmin",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"13\" rx=\"7\" ry=\"9\"/><circle cx=\"9\" cy=\"9\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"9\" r=\"1\" fill=\"currentColor\"/><path d=\"M10 13c1 1 3 1 4 0M8 21l4-2 4 2\"/></svg>"
      },
      {
        "name": "Vite",
        "icon": "vite",
        "tag": "HMR Bundler",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>"
      },
      {
        "name": "npm / pnpm",
        "icon": "npm",
        "tag": "Package Mgmt",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"1\"/><path d=\"M7 8v8h4v-5h3v5h3V8H7z\"/></svg>"
      },
      {
        "name": "Profiling & Debugging",
        "icon": "profiling",
        "tag": "DevTools",
        "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><polyline points=\"12 6 12 12 16 14\"/><path d=\"M12 2v2M12 20v2M2 12h2M20 12h2\"/></svg>"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"9\" r=\"3\"/><path d=\"M6 9v6M9 6h3a3 3 0 013 3\"/></svg>"
  }
];

  // Build index by ID and compute domain statistics
  var BY_ID = {};
  var ALL_TECHS = [];
  var DOMAIN_COUNTS = {
    'All': SKILLS_DATA.length,
    'AI/ML': 0,
    'Frontend': 0,
    'Backend': 0,
    'Mobile': 0,
    'Cloud': 0,
    'Security': 0,
    'Tools': 0
  };

  SKILLS_DATA.forEach(function(cat) {
    BY_ID[cat.id] = cat;
    cat.skills.forEach(function(s) {
      if (ALL_TECHS.indexOf(s.name) === -1) {
        ALL_TECHS.push(s.name);
      }
    });

    (cat.filterTags || [cat.filterGroup]).forEach(function(tag) {
      if (typeof DOMAIN_COUNTS[tag] === 'number') {
        DOMAIN_COUNTS[tag]++;
      }
    });
  });

  root.SKILLS_DATA = SKILLS_DATA;
  root.SKILLS_BY_ID = BY_ID;
  root.SKILLS_TOTAL_TECHS = ALL_TECHS.length;
  root.SKILLS_DOMAIN_COUNTS = DOMAIN_COUNTS;
})();
