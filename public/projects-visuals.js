/**
 * Alex S – Projects Procedural Visualizer
 * Generates custom, domain-specific, futuristic SVG visualizers for all 15 projects.
 * No generic stock photography. 100% authentic technical representations.
 */
(function() {
  var root = typeof window !== 'undefined' ? window : globalThis;
  function esc(s) {
    if (!s) return "";
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  root.renderProjectVisual = function(project, isFeatured) {
    var type = project.visualType || "ai-assistant";
    var accent = project.accent || "#00f3ff";
    var num = project.number || "01";
    var title = esc(project.name);

    var w = 600;
    var h = isFeatured ? 260 : 180;

    var svgStart = '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-label="' + title + ' Visualizer">';
    var defs = '<defs>' +
      '<linearGradient id="g-accent-' + num + '" x1="0%" y1="0%" x2="100%" y2="100%">' +
        '<stop offset="0%" stop-color="' + accent + '" stop-opacity="0.9"/>' +
        '<stop offset="100%" stop-color="' + accent + '" stop-opacity="0.2"/>' +
      '</linearGradient>' +
      '<radialGradient id="g-radial-' + num + '" cx="50%" cy="50%" r="50%">' +
        '<stop offset="0%" stop-color="' + accent + '" stop-opacity="0.25"/>' +
        '<stop offset="100%" stop-color="' + accent + '" stop-opacity="0"/>' +
      '</radialGradient>' +
      '<pattern id="grid-' + num + '" width="30" height="30" patternUnits="userSpaceOnUse">' +
        '<path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>' +
      '</pattern>' +
      '<filter id="glow-' + num + '" x="-20%" y="-20%" width="140%" height="140%">' +
        '<feGaussianBlur stdDeviation="4" result="blur"/>' +
        '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>' +
      '</filter>' +
    '</defs>' +
    '<rect width="' + w + '" height="' + h + '" fill="#07090e"/>' +
    '<rect width="' + w + '" height="' + h + '" fill="url(#grid-' + num + ')"/>' +
    '<circle cx="' + (w/2) + '" cy="' + (h/2) + '" r="' + (h*0.7) + '" fill="url(#g-radial-' + num + ')"/>';

    var svgContent = "";

    switch(type) {
      case "space-telemetry": // BAS-AI
        svgContent =
          '<!-- Skeletal Pose Keypoints Tracking -->' +
          '<g transform="translate(' + (w*0.5 - 70) + ', ' + (h*0.5 - 65) + ')">' +
            '<!-- Pose Bounding Box -->' +
            '<rect x="-10" y="-10" width="160" height="150" fill="none" stroke="' + accent + '" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>' +
            '<rect x="-12" y="-12" width="12" height="12" fill="none" stroke="' + accent + '" stroke-width="2"/>' +
            '<rect x="150" y="-12" width="12" height="12" fill="none" stroke="' + accent + '" stroke-width="2"/>' +
            '<rect x="-12" y="140" width="12" height="12" fill="none" stroke="' + accent + '" stroke-width="2"/>' +
            '<rect x="150" y="140" width="12" height="12" fill="none" stroke="' + accent + '" stroke-width="2"/>' +
            '<!-- Skeletal Bones -->' +
            '<circle cx="70" cy="18" r="14" fill="none" stroke="' + accent + '" stroke-width="2" filter="url(#glow-' + num + ')"/>' +
            '<circle cx="70" cy="18" r="4" fill="' + accent + '"/>' +
            '<line x1="70" y1="32" x2="70" y2="80" stroke="' + accent + '" stroke-width="2.5"/>' +
            '<line x1="45" y1="45" x2="95" y2="45" stroke="' + accent + '" stroke-width="2"/>' +
            '<line x1="45" y1="45" x2="25" y2="70" stroke="' + accent + '" stroke-width="2"/>' +
            '<line x1="25" y1="70" x2="15" y2="95" stroke="' + accent + '" stroke-width="2"/>' +
            '<line x1="95" y1="45" x2="115" y2="65" stroke="' + accent + '" stroke-width="2"/>' +
            '<line x1="115" y1="65" x2="135" y2="80" stroke="' + accent + '" stroke-width="2"/>' +
            '<circle cx="135" cy="80" r="5" fill="#f59e0b" filter="url(#glow-' + num + ')"/>' +
            '<line x1="70" y1="80" x2="50" y2="105" stroke="' + accent + '" stroke-width="2"/>' +
            '<line x1="50" y1="105" x2="45" y2="135" stroke="' + accent + '" stroke-width="2"/>' +
            '<line x1="70" y1="80" x2="90" y2="105" stroke="' + accent + '" stroke-width="2"/>' +
            '<line x1="90" y1="105" x2="95" y2="135" stroke="' + accent + '" stroke-width="2"/>' +
            '<!-- Keypoint nodes -->' +
            '<circle cx="45" cy="45" r="3" fill="#fff"/>' +
            '<circle cx="95" cy="45" r="3" fill="#fff"/>' +
            '<circle cx="25" cy="70" r="3" fill="#fff"/>' +
            '<circle cx="115" cy="65" r="3" fill="#fff"/>' +
            '<circle cx="70" cy="80" r="3.5" fill="#fff"/>' +
            '<!-- Target Tag -->' +
            '<rect x="-8" y="-30" width="156" height="18" rx="4" fill="rgba(10,12,18,0.9)" stroke="' + accent + '" stroke-width="1"/>' +
            '<text x="0" y="-17" font-family="monospace" font-size="9" font-weight="700" fill="' + accent + '">ACTION: PICKING (98.4%)</text>' +
          '</g>' +
          '<!-- Telemetry waveform trace -->' +
          '<path d="M 20 ' + (h - 25) + ' L 90 ' + (h - 25) + ' L 110 ' + (h - 45) + ' L 125 ' + (h - 10) + ' L 140 ' + (h - 35) + ' L 155 ' + (h - 25) + ' L 230 ' + (h - 25) + '" fill="none" stroke="' + accent + '" stroke-width="1.5" opacity="0.8"/>' +
          '<text x="24" y="' + (h - 32) + '" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">TELEMETRY CH-01</text>' +
          '<text x="' + (w - 180) + '" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">SIH 26174 // HAR PROTOTYPE</text>';
        break;

      case "smart-garment-cad": // Smart Garment
        svgContent =
          '<!-- Cybernetic Mannequin & Size CAD Model -->' +
          '<g transform="translate(' + (w*0.5 - 90) + ', ' + (h*0.5 - 70) + ')">' +
            '<!-- Torso wireframe contour -->' +
            '<path d="M 90 20 L 60 40 L 45 90 L 65 140 L 115 140 L 135 90 L 120 40 Z" fill="none" stroke="' + accent + '" stroke-width="2" filter="url(#glow-' + num + ')"/>' +
            '<path d="M 90 20 L 90 140 M 60 40 L 120 40 M 45 90 L 135 90" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>' +
            '<!-- Collar & Neck -->' +
            '<ellipse cx="90" cy="20" rx="16" ry="8" fill="none" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<!-- Dimension Callout: Chest -->' +
            '<line x1="30" y1="55" x2="150" y2="55" stroke="' + accent + '" stroke-width="1" stroke-dasharray="3 3"/>' +
            '<circle cx="30" cy="55" r="3" fill="' + accent + '"/>' +
            '<circle cx="150" cy="55" r="3" fill="' + accent + '"/>' +
            '<rect x="156" y="46" width="76" height="18" rx="4" fill="rgba(10,12,18,0.9)" stroke="' + accent + '" stroke-width="1"/>' +
            '<text x="162" y="59" font-family="monospace" font-size="9" font-weight="700" fill="' + accent + '">CHEST: 98 cm</text>' +
            '<!-- Dimension Callout: Waist -->' +
            '<line x1="40" y1="105" x2="140" y2="105" stroke="' + accent + '" stroke-width="1" stroke-dasharray="3 3"/>' +
            '<circle cx="40" cy="105" r="3" fill="' + accent + '"/>' +
            '<circle cx="140" cy="105" r="3" fill="' + accent + '"/>' +
            '<rect x="146" y="96" width="76" height="18" rx="4" fill="rgba(10,12,18,0.9)" stroke="' + accent + '" stroke-width="1"/>' +
            '<text x="152" y="109" font-family="monospace" font-size="9" font-weight="700" fill="' + accent + '">WAIST: 82 cm</text>' +
          '</g>' +
          '<!-- AI Prediction Badge -->' +
          '<g transform="translate(24, ' + (h - 38) + ')">' +
            '<rect x="0" y="0" width="186" height="22" rx="11" fill="rgba(10,12,18,0.9)" stroke="' + accent + '" stroke-width="1.2"/>' +
            '<circle cx="12" cy="11" r="4" fill="' + accent + '"/>' +
            '<text x="24" y="15" font-family="monospace" font-size="10" font-weight="700" fill="#fff">RECOMMENDED: SIZE M (97.8%)</text>' +
          '</g>';
        break;

      case "ai-assistant": // Nelix AI
        svgContent =
          '<!-- Glowing Conversational Neural Lattice -->' +
          '<g transform="translate(' + (w*0.5) + ', ' + (h*0.5) + ')">' +
            '<circle cx="0" cy="0" r="48" fill="none" stroke="' + accent + '" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.8"/>' +
            '<circle cx="0" cy="0" r="68" fill="none" stroke="' + accent + '" stroke-width="1" opacity="0.4"/>' +
            '<circle cx="0" cy="0" r="28" fill="url(#g-accent-' + num + ')" filter="url(#glow-' + num + ')"/>' +
            '<circle cx="0" cy="0" r="10" fill="#fff"/>' +
            '<!-- Orbiting NLP Nodes -->' +
            '<g transform="rotate(25)">' +
              '<line x1="-80" y1="0" x2="80" y2="0" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>' +
              '<circle cx="-80" cy="0" r="5" fill="' + accent + '"/>' +
              '<circle cx="80" cy="0" r="5" fill="' + accent + '"/>' +
            '</g>' +
            '<g transform="rotate(75)">' +
              '<line x1="-65" y1="0" x2="65" y2="0" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>' +
              '<circle cx="-65" cy="0" r="4" fill="#fff"/>' +
              '<circle cx="65" cy="0" r="4" fill="#fff"/>' +
            '</g>' +
            '<g transform="rotate(-40)">' +
              '<line x1="-90" y1="0" x2="90" y2="0" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>' +
              '<circle cx="-90" cy="0" r="4" fill="' + accent + '"/>' +
              '<circle cx="90" cy="0" r="4" fill="' + accent + '"/>' +
            '</g>' +
          '</g>' +
          '<!-- Streaming Response Equalizer -->' +
          '<g transform="translate(24, ' + (h - 40) + ')">' +
            '<rect x="0" y="14" width="4" height="12" fill="' + accent + '"/>' +
            '<rect x="8" y="6" width="4" height="20" fill="' + accent + '"/>' +
            '<rect x="16" y="2" width="4" height="24" fill="' + accent + '"/>' +
            '<rect x="24" y="10" width="4" height="16" fill="' + accent + '"/>' +
            '<rect x="32" y="4" width="4" height="22" fill="' + accent + '"/>' +
            '<text x="46" y="20" font-family="monospace" font-size="10" font-weight="700" fill="' + accent + '">CONVERSATIONAL INTELLIGENCE</text>' +
          '</g>' +
          '<text x="' + (w - 170) + '" y="30" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">INTENT ENGINE: ONLINE</text>';
        break;

      case "pathogen-helix": // Pathogen Genomics AI
        svgContent =
          '<!-- Double Helix DNA Strand with Mutation Hotspots -->' +
          '<g transform="translate(' + (w*0.5 - 150) + ', ' + (h*0.5 - 45) + ')">' +
            '<!-- Sine Wave Strands -->' +
            '<path d="M 0 45 Q 35 5 70 45 T 140 45 T 210 45 T 280 45 T 320 45" fill="none" stroke="' + accent + '" stroke-width="2.5" filter="url(#glow-' + num + ')"/>' +
            '<path d="M 0 45 Q 35 85 70 45 T 140 45 T 210 45 T 280 45 T 320 45" fill="none" stroke="#fff" stroke-width="2" opacity="0.8"/>' +
            '<!-- Rungs / Base Pairs -->' +
            '<line x1="35" y1="25" x2="35" y2="65" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
            '<line x1="70" y1="45" x2="70" y2="45" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
            '<line x1="105" y1="25" x2="105" y2="65" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
            '<line x1="140" y1="45" x2="140" y2="45" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
            '<line x1="175" y1="25" x2="175" y2="65" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
            '<line x1="210" y1="45" x2="210" y2="45" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
            '<line x1="245" y1="25" x2="245" y2="65" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
            '<line x1="280" y1="45" x2="280" y2="45" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
            '<!-- Mutation Hotspot Marker -->' +
            '<circle cx="175" cy="25" r="7" fill="#f43f5e" filter="url(#glow-' + num + ')"/>' +
            '<circle cx="175" cy="25" r="3" fill="#fff"/>' +
            '<line x1="175" y1="15" x2="175" y2="-10" stroke="#f43f5e" stroke-width="1.2"/>' +
            '<rect x="110" y="-28" width="130" height="18" rx="4" fill="rgba(10,12,18,0.9)" stroke="#f43f5e" stroke-width="1"/>' +
            '<text x="118" y="-16" font-family="monospace" font-size="8.5" font-weight="700" fill="#f43f5e">MUTATION: RESISTANCE +</text>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">GENOMIC SEQUENCE ANALYSIS // A-T C-G VARIANT</text>' +
          '<text x="' + (w - 140) + '" y="28" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">ANTIBIOTIC RISK: HIGH</text>';
        break;

      case "security-shield": // AI Scam Detector
        svgContent =
          '<!-- Security Shield & Packet Threat Scanner -->' +
          '<g transform="translate(' + (w*0.5) + ', ' + (h*0.5) + ')">' +
            '<path d="M 0 -45 L 36 -28 L 36 15 C 36 38 0 52 0 52 C 0 52 -36 38 -36 15 L -36 -28 Z" fill="url(#g-accent-' + num + ')" stroke="' + accent + '" stroke-width="2" filter="url(#glow-' + num + ')"/>' +
            '<path d="M 0 -35 L 26 -22 L 26 12 C 26 30 0 40 0 40 C 0 40 -26 30 -26 12 L -26 -22 Z" fill="none" stroke="#fff" stroke-width="1" opacity="0.6"/>' +
            '<circle cx="0" cy="5" r="6" fill="#fff"/>' +
            '<path d="M 0 -12 L 0 5" stroke="#fff" stroke-width="2" stroke-linecap="round"/>' +
            '<!-- Scanning Radar Rays -->' +
            '<circle cx="0" cy="5" r="75" fill="none" stroke="' + accent + '" stroke-width="1" stroke-dasharray="8 6" opacity="0.4"/>' +
          '</g>' +
          '<g transform="translate(24, ' + (h - 26) + ')">' +
            '<rect x="0" y="-12" width="140" height="18" rx="4" fill="rgba(10,12,18,0.9)" stroke="' + accent + '" stroke-width="1"/>' +
            '<text x="8" y="1" font-family="monospace" font-size="9" font-weight="700" fill="' + accent + '">RISK SCORE: 98.2% FRAUD</text>' +
          '</g>' +
          '<text x="' + (w - 180) + '" y="28" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">URL ENTROPY SCAN: COMPLETE</text>';
        break;

      case "behavior-analytics": // Mobile Addiction Prediction
        svgContent =
          '<!-- 24-hr Behavior Usage & Addiction Meter -->' +
          '<g transform="translate(' + (w*0.5) + ', ' + (h*0.5) + ')">' +
            '<circle cx="0" cy="0" r="50" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="8"/>' +
            '<circle cx="0" cy="0" r="50" fill="none" stroke="' + accent + '" stroke-width="8" stroke-dasharray="220 314" stroke-linecap="round" filter="url(#glow-' + num + ')"/>' +
            '<text x="0" y="5" text-anchor="middle" font-family="monospace" font-size="14" font-weight="800" fill="#fff">7.4h</text>' +
            '<text x="0" y="19" text-anchor="middle" font-family="monospace" font-size="8" fill="' + accent + '">DAILY USAGE</text>' +
            '<!-- Lock Trigger Node -->' +
            '<g transform="translate(45, -35)">' +
              '<rect x="0" y="0" width="18" height="14" rx="2" fill="' + accent + '"/>' +
              '<path d="M 4 0 L 4 -5 C 4 -8 14 -8 14 -5 L 14 0" fill="none" stroke="' + accent + '" stroke-width="2"/>' +
            '</g>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">ML INTERVENTION PROTOCOL: ACTIVE</text>' +
          '<text x="' + (w - 150) + '" y="28" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">SLEEP CORRELATION: -38%</text>';
        break;

      case "medical-neural": // Disease Detection System
        svgContent =
          '<!-- Medical Diagnostic Biomarkers & ECG Monitor -->' +
          '<g transform="translate(0, ' + (h*0.5) + ')">' +
            '<path d="M 20 0 L 140 0 L 160 -35 L 175 40 L 190 -18 L 205 12 L 215 0 L 380 0 L 400 -30 L 415 35 L 430 -12 L 440 0 L ' + (w - 20) + ' 0" fill="none" stroke="' + accent + '" stroke-width="2" filter="url(#glow-' + num + ')"/>' +
          '</g>' +
          '<g transform="translate(' + (w*0.5 - 75) + ', 22)">' +
            '<rect x="0" y="0" width="150" height="22" rx="6" fill="rgba(10,12,18,0.85)" stroke="' + accent + '" stroke-width="1"/>' +
            '<circle cx="12" cy="11" r="4" fill="#10b981"/>' +
            '<text x="22" y="15" font-family="monospace" font-size="9" font-weight="700" fill="#fff">DIAGNOSTIC SCREENING: 96.4%</text>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">CLINICAL BIOMARKER MATRIX // ENSEMBLE DL</text>';
        break;

      case "interview-waveform": // Smart Interview AI
        svgContent =
          '<!-- Speech Spectrogram & Confidence HUD -->' +
          '<g transform="translate(' + (w*0.5 - 120) + ', ' + (h*0.5 - 20) + ')">' +
            '<rect x="0" y="10" width="6" height="20" fill="' + accent + '"/>' +
            '<rect x="14" y="0" width="6" height="40" fill="' + accent + '"/>' +
            '<rect x="28" y="15" width="6" height="15" fill="' + accent + '"/>' +
            '<rect x="42" y="5" width="6" height="30" fill="' + accent + '"/>' +
            '<rect x="56" y="20" width="6" height="10" fill="' + accent + '"/>' +
            '<rect x="70" y="2" width="6" height="38" fill="' + accent + '"/>' +
            '<rect x="84" y="8" width="6" height="26" fill="' + accent + '"/>' +
            '<rect x="98" y="18" width="6" height="12" fill="' + accent + '"/>' +
            '<rect x="112" y="4" width="6" height="34" fill="' + accent + '"/>' +
            '<rect x="126" y="12" width="6" height="20" fill="' + accent + '"/>' +
            '<rect x="140" y="0" width="6" height="42" fill="' + accent + '" filter="url(#glow-' + num + ')"/>' +
            '<rect x="154" y="14" width="6" height="18" fill="' + accent + '"/>' +
            '<rect x="168" y="6" width="6" height="30" fill="' + accent + '"/>' +
            '<rect x="182" y="16" width="6" height="14" fill="' + accent + '"/>' +
            '<rect x="196" y="2" width="6" height="38" fill="' + accent + '"/>' +
            '<rect x="210" y="10" width="6" height="22" fill="' + accent + '"/>' +
            '<rect x="224" y="15" width="6" height="16" fill="' + accent + '"/>' +
          '</g>' +
          '<g transform="translate(24, ' + (h - 26) + ')">' +
            '<text font-family="monospace" font-size="9" font-weight="700" fill="' + accent + '">CLARITY: 94% | WPM: 138 | CONFIDENCE: HIGH</text>' +
          '</g>' +
          '<text x="' + (w - 160) + '" y="28" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">NLP FEEDBACK EVAL: READY</text>';
        break;

      case "dna-3d-graph": // DNA Proximity 3D Reconstruction
        svgContent =
          '<!-- GNN Molecular Graph & Coordinate Projections -->' +
          '<g transform="translate(' + (w*0.5) + ', ' + (h*0.5) + ')">' +
            '<!-- Graph Edges -->' +
            '<line x1="-70" y1="-30" x2="0" y2="-45" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<line x1="0" y1="-45" x2="70" y2="-20" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<line x1="70" y1="-20" x2="45" y2="40" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<line x1="45" y1="40" x2="-35" y2="45" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<line x1="-35" y1="45" x2="-70" y2="-30" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<line x1="0" y1="-45" x2="45" y2="40" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>' +
            '<line x1="-70" y1="-30" x2="45" y2="40" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>' +
            '<line x1="0" y1="-45" x2="-35" y2="45" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>' +
            '<!-- Nodes with Glow -->' +
            '<circle cx="-70" cy="-30" r="7" fill="' + accent + '" filter="url(#glow-' + num + ')"/>' +
            '<circle cx="0" cy="-45" r="8" fill="#fff" filter="url(#glow-' + num + ')"/>' +
            '<circle cx="70" cy="-20" r="6" fill="' + accent + '"/>' +
            '<circle cx="45" cy="40" r="7" fill="' + accent + '"/>' +
            '<circle cx="-35" cy="45" r="6" fill="#fff"/>' +
            '<!-- MDS Coordinate Axes -->' +
            '<line x1="-120" y1="50" x2="-100" y2="50" stroke="#fff" stroke-width="1.5"/>' +
            '<line x1="-120" y1="50" x2="-120" y2="30" stroke="#fff" stroke-width="1.5"/>' +
            '<text x="-95" y="53" font-family="monospace" font-size="8" fill="#fff">X</text>' +
            '<text x="-123" y="25" font-family="monospace" font-size="8" fill="#fff">Y</text>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">SPECTRAL-MDS RECONSTRUCTION // RMSE: 0.042 Å</text>' +
          '<text x="' + (w - 150) + '" y="28" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">PYTORCH GEOMETRIC</text>';
        break;

      case "hospital-queue": // KMCH SmartMed AI
        svgContent =
          '<!-- Real-Time Clinic Pipeline & WebSocket Event Bus -->' +
          '<g transform="translate(' + (w*0.5 - 130) + ', ' + (h*0.5 - 30) + ')">' +
            '<!-- Patient Step 1 -->' +
            '<rect x="0" y="10" width="70" height="40" rx="8" fill="rgba(10,12,18,0.85)" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<text x="14" y="27" font-family="monospace" font-size="9" font-weight="700" fill="#fff">PATIENT</text>' +
            '<text x="12" y="39" font-family="monospace" font-size="8" fill="' + accent + '">PORTAL</text>' +
            '<!-- Connector -->' +
            '<line x1="70" y1="30" x2="100" y2="30" stroke="' + accent + '" stroke-width="2" stroke-dasharray="3 3"/>' +
            '<!-- Hub Step 2 -->' +
            '<circle cx="120" cy="30" r="20" fill="url(#g-accent-' + num + ')" stroke="' + accent + '" stroke-width="1.5" filter="url(#glow-' + num + ')"/>' +
            '<text x="110" y="34" font-family="monospace" font-size="9" font-weight="800" fill="#fff">WS</text>' +
            '<!-- Connector -->' +
            '<line x1="140" y1="30" x2="170" y2="30" stroke="' + accent + '" stroke-width="2" stroke-dasharray="3 3"/>' +
            '<!-- Doctor Step 3 -->' +
            '<rect x="170" y="10" width="80" height="40" rx="8" fill="rgba(10,12,18,0.85)" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<text x="182" y="27" font-family="monospace" font-size="9" font-weight="700" fill="#fff">DOCTOR</text>' +
            '<text x="180" y="39" font-family="monospace" font-size="8" fill="#10b981">LIVE QUEUE</text>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">SOCKET.IO BI-DIRECTIONAL // 0 DOUBLE-BOOKINGS</text>' +
          '<text x="' + (w - 170) + '" y="28" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">DEPARTMENT STATUS: OK</text>';
        break;

      case "saferoute-map": // SafeRoute
        svgContent =
          '<!-- Geospatial Route Grid & Emergency Beacon -->' +
          '<g transform="translate(' + (w*0.5 - 120) + ', ' + (h*0.5 - 45) + ')">' +
            '<!-- Street Grid Lines -->' +
            '<path d="M 0 20 L 240 20 M 0 60 L 240 60 M 0 90 L 240 90 M 40 0 L 40 100 M 120 0 L 120 100 M 200 0 L 200 100" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>' +
            '<!-- Safe Path Green Glow Corridor -->' +
            '<path d="M 40 90 L 40 60 L 120 60 L 120 20 L 200 20" fill="none" stroke="' + accent + '" stroke-width="4" filter="url(#glow-' + num + ')" stroke-linecap="round"/>' +
            '<circle cx="40" cy="90" r="5" fill="#fff"/>' +
            '<circle cx="120" cy="60" r="4" fill="' + accent + '"/>' +
            '<circle cx="200" cy="20" r="6" fill="' + accent + '" filter="url(#glow-' + num + ')"/>' +
            '<!-- Risk Zone Avoided -->' +
            '<circle cx="160" cy="70" r="14" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 3"/>' +
            '<text x="153" y="73" font-family="monospace" font-size="7" fill="#ef4444">HAZARD</text>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">SAFE CORRIDOR SCORING // GPS TELEMETRY ACTIVE</text>' +
          '<text x="' + (w - 150) + '" y="28" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">EMERGENCY SOS: ARMED</text>';
        break;

      case "school-portal": // School Website
        svgContent =
          '<!-- Institutional Portal Wireframe Architecture -->' +
          '<g transform="translate(' + (w*0.5 - 110) + ', ' + (h*0.5 - 40) + ')">' +
            '<rect x="0" y="0" width="220" height="85" rx="8" fill="rgba(10,12,18,0.85)" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<line x1="0" y1="20" x2="220" y2="20" stroke="' + accent + '" stroke-width="1"/>' +
            '<circle cx="12" cy="10" r="3" fill="' + accent + '"/>' +
            '<circle cx="22" cy="10" r="3" fill="#fff"/>' +
            '<circle cx="32" cy="10" r="3" fill="rgba(255,255,255,0.4)"/>' +
            '<!-- Columns -->' +
            '<rect x="14" y="30" width="55" height="42" rx="4" fill="color-mix(in srgb, ' + accent + ' 10%, transparent)" stroke="' + accent + '" stroke-width="1"/>' +
            '<rect x="82" y="30" width="55" height="42" rx="4" fill="color-mix(in srgb, ' + accent + ' 10%, transparent)" stroke="' + accent + '" stroke-width="1"/>' +
            '<rect x="150" y="30" width="55" height="42" rx="4" fill="color-mix(in srgb, ' + accent + ' 10%, transparent)" stroke="' + accent + '" stroke-width="1"/>' +
            '<text x="18" y="44" font-family="monospace" font-size="7" font-weight="700" fill="#fff">ACADEMIC</text>' +
            '<text x="86" y="44" font-family="monospace" font-size="7" font-weight="700" fill="#fff">ADMISSION</text>' +
            '<text x="156" y="44" font-family="monospace" font-size="7" font-weight="700" fill="#fff">CAMPUS</text>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">EDUCATIONAL INSTITUTION PLATFORM // REACT SPA</text>';
        break;

      case "portfolio-3d": // Personal 3D Portfolio
        svgContent =
          '<!-- 3D Polyhedron Wireframe & Render Pipeline -->' +
          '<g transform="translate(' + (w*0.5) + ', ' + (h*0.5) + ')">' +
            '<!-- Isometric 3D Cube Wireframe -->' +
            '<path d="M 0 -35 L 35 -15 L 35 25 L 0 45 L -35 25 L -35 -15 Z" fill="none" stroke="' + accent + '" stroke-width="2" filter="url(#glow-' + num + ')"/>' +
            '<line x1="0" y1="-35" x2="0" y2="45" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<line x1="0" y1="5" x2="35" y2="-15" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<line x1="0" y1="5" x2="-35" y2="-15" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<!-- Orbiting Ring -->' +
            '<ellipse cx="0" cy="5" rx="65" ry="22" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="6 4" opacity="0.6"/>' +
            '<circle cx="58" cy="14" r="4" fill="' + accent + '"/>' +
          '</g>' +
          '<g transform="translate(24, ' + (h - 26) + ')">' +
            '<text font-family="monospace" font-size="9" font-weight="700" fill="' + accent + '">THREE.JS R128 + GSAP // WEBGL 60 FPS SHADER</text>' +
          '</g>' +
          '<text x="' + (w - 170) + '" y="28" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">SPATIAL 3D CANVAS</text>';
        break;

      case "android-inventory": // Mobile Shop Management
        svgContent =
          '<!-- Android Phone Blueprint & Inventory SKU Matrix -->' +
          '<g transform="translate(' + (w*0.5 - 75) + ', ' + (h*0.5 - 48) + ')">' +
            '<!-- Phone Chassis -->' +
            '<rect x="0" y="0" width="55" height="96" rx="8" fill="rgba(10,12,18,0.85)" stroke="' + accent + '" stroke-width="1.5"/>' +
            '<circle cx="27" cy="8" r="2.5" fill="' + accent + '"/>' +
            '<rect x="6" y="16" width="43" height="66" rx="3" fill="color-mix(in srgb, ' + accent + ' 10%, transparent)"/>' +
            '<!-- Laser Barcode Line -->' +
            '<line x1="2" y1="48" x2="53" y2="48" stroke="#ef4444" stroke-width="1.5" filter="url(#glow-' + num + ')"/>' +
            '<!-- Inventory Stock Chart next to device -->' +
            '<g transform="translate(75, 10)">' +
              '<rect x="0" y="0" width="75" height="14" rx="3" fill="rgba(255,255,255,0.06)"/>' +
              '<rect x="0" y="0" width="58" height="14" rx="3" fill="' + accent + '"/>' +
              '<text x="6" y="10" font-family="monospace" font-size="7.5" font-weight="700" fill="#000">IMEI SCAN</text>' +
              '<rect x="0" y="24" width="75" height="14" rx="3" fill="rgba(255,255,255,0.06)"/>' +
              '<rect x="0" y="24" width="42" height="14" rx="3" fill="#fff"/>' +
              '<text x="6" y="34" font-family="monospace" font-size="7.5" font-weight="700" fill="#000">STOCK: 142</text>' +
              '<rect x="0" y="48" width="75" height="14" rx="3" fill="rgba(255,255,255,0.06)"/>' +
              '<rect x="0" y="48" width="65" height="14" rx="3" fill="' + accent + '"/>' +
              '<text x="6" y="58" font-family="monospace" font-size="7.5" font-weight="700" fill="#000">BILLING OK</text>' +
            '</g>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">FIREBASE REALTIME DB // ANDROID STUDIO JAVA</text>';
        break;

      case "campus-eco": // Campus Sustainability System
        svgContent =
          '<!-- Environmental Telemetry & Carbon Offset Radar -->' +
          '<g transform="translate(' + (w*0.5) + ', ' + (h*0.5) + ')">' +
            '<!-- Eco Dial Gauge -->' +
            '<circle cx="0" cy="0" r="45" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="6"/>' +
            '<circle cx="0" cy="0" r="45" fill="none" stroke="' + accent + '" stroke-width="6" stroke-dasharray="190 283" stroke-linecap="round" filter="url(#glow-' + num + ')"/>' +
            '<text x="0" y="4" text-anchor="middle" font-family="monospace" font-size="13" font-weight="800" fill="#fff">-18.4%</text>' +
            '<text x="0" y="18" text-anchor="middle" font-family="monospace" font-size="7.5" fill="' + accent + '">CO2 REDUCED</text>' +
            '<!-- Sensors Nodes -->' +
            '<g transform="translate(-75, -20)">' +
              '<circle cx="0" cy="0" r="12" fill="rgba(10,12,18,0.8)" stroke="' + accent + '" stroke-width="1"/>' +
              '<text x="-9" y="3" font-family="monospace" font-size="7" fill="' + accent + '">kWh</text>' +
            '</g>' +
            '<g transform="translate(75, -20)">' +
              '<circle cx="0" cy="0" r="12" fill="rgba(10,12,18,0.8)" stroke="' + accent + '" stroke-width="1"/>' +
              '<text x="-9" y="3" font-family="monospace" font-size="7" fill="' + accent + '">H2O</text>' +
            '</g>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">SUSTAINABILITY TELEMETRY // AI OPTIMIZATION</text>' +
          '<text x="' + (w - 150) + '" y="28" font-family="monospace" font-size="9" fill="rgba(255,255,255,0.4)">CAMPUS METRICS: LIVE</text>';
        break;

      default:
        svgContent =
          '<g transform="translate(' + (w*0.5) + ', ' + (h*0.5) + ')">' +
            '<circle cx="0" cy="0" r="40" fill="url(#g-accent-' + num + ')" stroke="' + accent + '" stroke-width="2" filter="url(#glow-' + num + ')"/>' +
            '<circle cx="0" cy="0" r="12" fill="#fff"/>' +
          '</g>' +
          '<text x="24" y="' + (h - 22) + '" font-family="monospace" font-size="9" fill="' + accent + '">' + title + ' // PRODUCTION ARCHITECTURE</text>';
    }

    return svgStart + defs + svgContent + '</svg>';
  };
})();
