/**
 * Alex S – Futuristic Projects Showcase Logic
 * Handles 3D Tilt, GSAP Scroll Staggers, Dynamic Filtering, Search, and Fullscreen Project Details Modal.
 */
(function() {
  var root = typeof window !== 'undefined' ? window : globalThis;
  function esc(s) {
    if (!s) return "";
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var activeCategory = "All";
  var searchQuery = "";
  var currentModalProjectId = null;
  var RM = typeof matchMedia !== 'undefined' ? matchMedia("(prefers-reduced-motion:reduce)").matches : false;

  // Filter Categories Definition
  var CATEGORIES = ["All", "AI & ML", "Full Stack", "Web Development", "Android", "Research"];

  function getFilteredProjects() {
    var list = root.PROJECTS_DATA || [];
    return list.filter(function(p) {
      // Category check
      var catMatch = false;
      if (activeCategory === "All") {
        catMatch = true;
      } else if (p.categories && p.categories.indexOf(activeCategory) > -1) {
        catMatch = true;
      } else if (p.category === activeCategory) {
        catMatch = true;
      }

      if (!catMatch) return false;

      // Search query check
      if (!searchQuery) return true;
      var q = searchQuery.toLowerCase();
      var inName = p.name.toLowerCase().indexOf(q) > -1;
      var inDesc = p.description.toLowerCase().indexOf(q) > -1;
      var inTagline = (p.tagline || "").toLowerCase().indexOf(q) > -1;
      var inTech = p.tech.some(function(t) { return t.toLowerCase().indexOf(q) > -1; });

      return inName || inDesc || inTagline || inTech;
    });
  }

  function getCategoryCount(cat) {
    var list = root.PROJECTS_DATA || [];
    if (cat === "All") return list.length;
    return list.filter(function(p) {
      return (p.categories && p.categories.indexOf(cat) > -1) || p.category === cat;
    }).length;
  }

  // Render a single featured card
  function renderFeaturedCard(p) {
    var accent = p.accent || "#ffffff";
    var visualSVG = root.renderProjectVisual ? root.renderProjectVisual(p, true) : "";

    var techPills = (p.tech || []).slice(0, 5).map(function(t) {
      return '<li class="featured-tech-pill">' + esc(t) + '</li>';
    }).join("");

    var githubBtn = "";
    if (p.github) {
      githubBtn = '<a class="icon-btn-link" href="' + esc(p.github) + '" target="_blank" rel="noopener noreferrer" title="View Repository / Profile" onclick="event.stopPropagation()">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>' +
      '</a>';
    }

    var demoBtn = "";
    if (p.demo) {
      demoBtn = '<a class="icon-btn-link" href="' + esc(p.demo) + '" target="_blank" rel="noopener noreferrer" title="Live Interactive Demo" onclick="event.stopPropagation()">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>' +
      '</a>';
    }

    return '<article class="featured-card" data-id="' + esc(p.id) + '" style="--card-accent:' + accent + '" role="button" tabindex="0" aria-label="View details for ' + esc(p.name) + '">' +
      '<div class="featured-visual-viewport">' +
        visualSVG +
        '<span class="featured-status-ribbon"><i></i>' + esc(p.status || "Featured Flagship") + '</span>' +
      '</div>' +
      '<div class="featured-body">' +
        '<div class="featured-meta-row">' +
          '<span class="featured-num">#' + esc(p.number) + ' // FLAGSHIP</span>' +
          '<span class="featured-cat-tag">' + esc(p.category) + '</span>' +
        '</div>' +
        '<h3 class="featured-title">' + esc(p.name) + '</h3>' +
        '<div class="featured-tagline">' + esc(p.tagline || "") + '</div>' +
        '<p class="featured-desc">' + esc(p.description) + '</p>' +
        '<ul class="featured-tech-stack" aria-label="Tech stack">' + techPills + '</ul>' +
        '<div class="featured-actions">' +
          '<button type="button" class="btn-details-main" data-open-modal="' + esc(p.id) + '">' +
            '<span>Explore Architecture</span>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' +
          '</button>' +
          '<div class="featured-quick-links">' + githubBtn + demoBtn + '</div>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  // Render a regular 3D card
  function renderRegularCard(p) {
    var accent = p.accent || "#ffffff";
    var visualSVG = root.renderProjectVisual ? root.renderProjectVisual(p, false) : "";

    var techTags = (p.tech || []).slice(0, 4).map(function(t) {
      return '<li class="card-tech-tag">' + esc(t) + '</li>';
    }).join("");

    return '<div class="card-3d-wrap">' +
      '<article class="proj-card-3d" data-id="' + esc(p.id) + '" style="--card-accent:' + accent + '" role="button" tabindex="0" aria-label="View details for ' + esc(p.name) + '">' +
        '<div class="card-thumbnail-box">' +
          visualSVG +
          '<span class="card-num-watermark">#' + esc(p.number) + '</span>' +
          '<span class="card-cat-badge">' + esc(p.category) + '</span>' +
        '</div>' +
        '<div class="card-content">' +
          '<div class="card-title-row">' +
            '<h3 class="card-project-title">' + esc(p.name) + '</h3>' +
          '</div>' +
          '<div class="card-status-sub">' + esc(p.tagline || p.status) + '</div>' +
          '<p class="card-description-text">' + esc(p.description) + '</p>' +
          '<ul class="card-tech-list" aria-label="Technologies">' + techTags + '</ul>' +
          '<div class="card-footer-action">' +
            '<span class="card-view-btn">' +
              'View Specifications' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' +
            '</span>' +
          '</div>' +
        '</div>' +
      '</article>' +
    '</div>';
  }

  // Main Projects View Generator
  root.renderProjectsSection = function() {
    var allProjects = root.PROJECTS_DATA || [];
    var featured = allProjects.filter(function(p) { return p.featured; });
    var filtered = getFilteredProjects();

    var filterTabsHTML = CATEGORIES.map(function(cat) {
      var isActive = cat === activeCategory;
      var count = getCategoryCount(cat);
      return '<button type="button" class="filter-tab-btn ' + (isActive ? 'active' : '') + '" data-cat="' + esc(cat) + '">' +
        '<span>' + esc(cat) + '</span>' +
        '<span class="filter-tab-count">' + count + '</span>' +
      '</button>';
    }).join("");

    var featuredCardsHTML = featured.map(renderFeaturedCard).join("");
    var regularCardsHTML = filtered.map(renderRegularCard).join("");

    var resultsFeedback = filtered.length === allProjects.length
      ? 'Showing all ' + filtered.length + ' projects'
      : 'Showing ' + filtered.length + ' of ' + allProjects.length + ' projects in <strong>' + esc(activeCategory) + '</strong>';

    return '<div class="projects-showcase-container">' +
      '<div class="projects-hero-header">' +
        '<span class="projects-badge-pill">Autonomous Systems // Full Stack // Deep Learning</span>' +
        '<h1 class="projects-title-glitch">Featured Engineering &amp; Research</h1>' +
        '<p class="projects-lede">An interactive gallery of 15 intelligent systems spanning Artificial Intelligence, Machine Learning, Full Stack Architecture, Mobile Engineering, and Computational Biology.</p>' +
      '</div>' +

      '<!-- 1. Featured Flagship Showcase -->' +
      '<section class="featured-section" aria-label="Featured flagship prototypes">' +
        '<div class="featured-header-bar">' +
          '<div class="featured-header-title">' +
            '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>' +
            '<span>Key Flagship Prototypes</span>' +
          '</div>' +
          '<span style="font-family:var(--mono);font-size:12px;color:var(--muted)">4 High-Impact Systems</span>' +
        '</div>' +
        '<div class="featured-grid">' + featuredCardsHTML + '</div>' +
      '</section>' +

      '<!-- 2. Interactive Filter & Search Controls -->' +
      '<div class="filter-search-controls" role="search" aria-label="Filter and search projects">' +
        '<div class="filter-tabs-row" role="tablist" aria-label="Project category filters">' +
          filterTabsHTML +
        '</div>' +
        '<div class="search-input-wrap">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
          '<input type="text" id="project-search-input" class="project-search-input" placeholder="Search by name, capability, or tech stack (e.g. PyTorch, YOLO, Flask, React)..." value="' + esc(searchQuery) + '" aria-label="Search projects">' +
          '<button type="button" id="search-clear-btn" class="search-clear-btn" aria-label="Clear search">&times;</button>' +
        '</div>' +
        '<div class="search-results-feedback">' +
          '<span>' + resultsFeedback + '</span>' +
          '<span style="font-size:11px;opacity:0.7">Mouse-reactive 3D perspective enabled</span>' +
        '</div>' +
      '</div>' +

      '<!-- 3. All Projects 3D Cards Grid -->' +
      '<section class="gallery-grid" id="projects-gallery-grid" aria-label="Project showcase grid">' +
        (filtered.length > 0
          ? regularCardsHTML
          : '<div style="grid-column:1/-1;padding:48px;text-align:center;color:var(--muted);background:var(--surface);border-radius:18px;border:1px dashed var(--line);font-family:var(--mono)">No matching projects found for &ldquo;' + esc(searchQuery) + '&rdquo;. Try clearing filters.</div>') +
      '</section>' +
    '</div>' +

    '<!-- 4. Project Details Modal -->' +
    '<div id="project-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-hidden="true">' +
      '<div class="modal-dialog-box" id="modal-dialog-content"></div>' +
    '</div>';
  };

  // Render content inside the project details modal
  function renderModalContent(projectId) {
    var p = root.PROJECTS_BY_ID[projectId] || root.PROJECTS_DATA[0];
    if (!p) return "";

    currentModalProjectId = p.id;
    var all = root.PROJECTS_DATA || [];
    var currentIndex = all.findIndex(function(item) { return item.id === p.id; });
    var prev = all[(currentIndex - 1 + all.length) % all.length];
    var next = all[(currentIndex + 1) % all.length];

    var accent = p.accent || "#ffffff";
    var visualSVG = root.renderProjectVisual ? root.renderProjectVisual(p, true) : "";

    var featuresHTML = (p.features || []).map(function(f) {
      return '<li class="modal-feature-item">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
        '<span>' + esc(f) + '</span>' +
      '</li>';
    }).join("");

    var techPills = (p.tech || []).map(function(t) {
      return '<li class="featured-tech-pill" style="font-size:13px;padding:6px 14px">' + esc(t) + '</li>';
    }).join("");

    var alertBox = "";
    if (p.note) {
      alertBox = '<div class="modal-alert-box">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>' +
        '<span><strong>Notice:</strong> ' + esc(p.note) + '</span>' +
      '</div>';
    }

    var githubAction = "";
    if (p.github) {
      githubAction = '<a class="btn p" href="' + esc(p.github) + '" target="_blank" rel="noopener noreferrer">' +
        '<span>View on GitHub</span>' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:6px;vertical-align:-2px"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>' +
      '</a>';
    }

    var demoAction = "";
    if (p.demo) {
      demoAction = '<a class="btn" href="' + esc(p.demo) + '" target="_blank" rel="noopener noreferrer">' +
        '<span>Live Interactive Site</span>' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:6px;vertical-align:-2px"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>' +
      '</a>';
    }

    return '<button type="button" class="modal-close-btn" id="modal-close-trigger" aria-label="Close project specifications dialog">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
      '</button>' +
      '<div class="modal-hero-viewport" style="--card-accent:' + accent + '">' +
        visualSVG +
      '</div>' +
      '<div class="modal-content-inner" style="--card-accent:' + accent + '">' +
        '<div class="modal-meta-bar">' +
          '<div class="modal-badge-group">' +
            '<span class="modal-num-badge">PROJECT #' + esc(p.number) + ' / 15</span>' +
            '<span class="modal-status-badge">' + esc(p.status || "Completed") + '</span>' +
            '<span style="font-family:var(--mono);font-size:12px;color:var(--muted)">' + esc(p.category) + '</span>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<h2 class="modal-title">' + esc(p.name) + '</h2>' +
          (p.tagline ? '<p class="modal-tagline">' + esc(p.tagline) + '</p>' : '') +
        '</div>' +
        '<p class="modal-desc">' + esc(p.description) + '</p>' +
        alertBox +
        '<div>' +
          '<div class="modal-section-title">Key Capabilities &amp; Technical Highlights</div>' +
          '<ul class="modal-features-list">' + featuresHTML + '</ul>' +
        '</div>' +
        (p.architecture ? '<div>' +
          '<div class="modal-section-title">System Architecture &amp; Data Pipeline</div>' +
          '<div class="modal-arch-box"><code>' + esc(p.architecture) + '</code></div>' +
        '</div>' : '') +
        '<div>' +
          '<div class="modal-section-title">Complete Technology Stack</div>' +
          '<ul class="featured-tech-stack">' + techPills + '</ul>' +
        '</div>' +
        '<div class="modal-actions-footer">' +
          '<div class="modal-links-group">' +
            githubAction + demoAction +
            '<a class="btn" href="#/contact">Discuss This Project</a>' +
          '</div>' +
          '<div class="modal-nav-group">' +
            '<button type="button" class="btn" id="modal-prev-btn" data-nav-id="' + esc(prev.id) + '">&larr; Prev</button>' +
            '<button type="button" class="btn p" id="modal-next-btn" data-nav-id="' + esc(next.id) + '">Next &rarr;</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  root.openProjectModal = function(projectId) {
    var modal = document.getElementById("project-modal");
    var dialog = document.getElementById("modal-dialog-content");
    if (!modal || !dialog) return;

    dialog.innerHTML = renderModalContent(projectId);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Bind inside controls
    var closeBtn = document.getElementById("modal-close-trigger");
    if (closeBtn) closeBtn.onclick = root.closeProjectModal;

    var prevBtn = document.getElementById("modal-prev-btn");
    if (prevBtn) {
      prevBtn.onclick = function() {
        root.openProjectModal(prevBtn.dataset.navId);
      };
    }

    var nextBtn = document.getElementById("modal-next-btn");
    if (nextBtn) {
      nextBtn.onclick = function() {
        root.openProjectModal(nextBtn.dataset.navId);
      };
    }

    // GSAP Dialog Stagger if available
    if (root.gsap && !RM) {
      root.gsap.fromTo(dialog, 
        { scale: 0.94, opacity: 0, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }
  };

  root.closeProjectModal = function() {
    var modal = document.getElementById("project-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentModalProjectId = null;
  };

  // Keyboard navigation for modal
  if (typeof document !== 'undefined') {
    document.addEventListener("keydown", function(e) {
      var modal = document.getElementById("project-modal");
      if (!modal || !modal.classList.contains("open")) return;

      if (e.key === "Escape") {
        root.closeProjectModal();
      } else if (e.key === "ArrowLeft") {
        var prevBtn = document.getElementById("modal-prev-btn");
        if (prevBtn) root.openProjectModal(prevBtn.dataset.navId);
      } else if (e.key === "ArrowRight") {
        var nextBtn = document.getElementById("modal-next-btn");
        if (nextBtn) root.openProjectModal(nextBtn.dataset.navId);
      }
    });

    // Click outside to close
    document.addEventListener("click", function(e) {
      var modal = document.getElementById("project-modal");
      if (modal && e.target === modal) {
        root.closeProjectModal();
      }
    });
  }

  // 3D Tilt interaction logic
  function setup3DTilt() {
    if (RM) return;

    document.addEventListener("pointermove", function(e) {
      var card = e.target.closest && (e.target.closest(".proj-card-3d") || e.target.closest(".featured-card"));
      if (!card) return;

      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      card.style.setProperty("--mx", x + "px");
      card.style.setProperty("--my", y + "px");

      var px = (x / rect.width) - 0.5;
      var py = (y / rect.height) - 0.5;

      var maxTilt = card.classList.contains("featured-card") ? 6 : 9;
      var rotY = px * maxTilt;
      var rotX = -py * maxTilt;

      card.style.transform = "perspective(1000px) rotateX(" + rotX.toFixed(2) + "deg) rotateY(" + rotY.toFixed(2) + "deg) translateZ(8px)";
    });

    document.addEventListener("pointerout", function(e) {
      var card = e.target.closest && (e.target.closest(".proj-card-3d") || e.target.closest(".featured-card"));
      if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      }
    });
  }

  // Interactive binding on projects page render
  root.initProjectsGallery = function() {
    setup3DTilt();

    // 1. Filter tabs clicks
    var tabs = document.querySelectorAll(".filter-tab-btn");
    [].forEach.call(tabs, function(btn) {
      btn.onclick = function() {
        var cat = btn.dataset.cat;
        if (!cat || cat === activeCategory) return;
        activeCategory = cat;
        rerenderGrid();
      };
    });

    // 2. Search input handling
    var searchInput = document.getElementById("project-search-input");
    var clearBtn = document.getElementById("search-clear-btn");

    if (searchInput) {
      searchInput.oninput = function() {
        searchQuery = searchInput.value.trim();
        if (clearBtn) clearBtn.style.display = searchQuery ? "block" : "none";
        rerenderGrid();
      };
    }

    if (clearBtn) {
      clearBtn.onclick = function() {
        if (searchInput) searchInput.value = "";
        searchQuery = "";
        clearBtn.style.display = "none";
        rerenderGrid();
      };
    }

    // 3. Card click delegation
    document.addEventListener("click", function(e) {
      var card = e.target.closest && (e.target.closest(".proj-card-3d") || e.target.closest(".featured-card"));
      if (card && !e.target.closest(".icon-btn-link")) {
        var id = card.dataset.id;
        if (id) {
          root.openProjectModal(id);
        }
      }
    });

    // 4. GSAP Section Stagger Entrance
    if (root.gsap && !RM) {
      root.gsap.from(".projects-hero-header > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
      });

      root.gsap.from(".featured-card", {
        y: 35,
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
        ease: "power3.out"
      });

      root.gsap.from(".card-3d-wrap", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        delay: 0.35,
        ease: "power3.out"
      });
    }
  };

  // Re-render only gallery grid & controls during active filter changes without full-page reloads
  function rerenderGrid() {
    var container = document.querySelector(".projects-showcase-container");
    if (!container) return;

    var app = document.getElementById("app");
    if (app) {
      app.innerHTML = root.renderProjectsSection();
      root.initProjectsGallery();
      var input = document.getElementById("project-search-input");
      if (input && searchQuery) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    }
  }

})();
