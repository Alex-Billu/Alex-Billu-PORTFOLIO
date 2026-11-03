/**
 * Alex S – Skills Gallery Script
 * Handles real-time search, category filtering, 3D card tilt,
 * staggered GSAP entrance animations, and high-performance rendering.
 */

(function () {
  var root = typeof window !== 'undefined' ? window : globalThis;

  function esc(s) {
    var d = typeof document !== 'undefined' ? document.createElement('div') : null;
    if (d) {
      d.textContent = s || '';
      return d.innerHTML;
    }
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Active filter & search state
  var currentFilter = 'All';
  var currentSearch = '';

  /**
   * Render HTML for a single technology chip with SVG logo
   */
  function renderTechChip(skill, isMatch) {
    var matchClass = isMatch ? ' match-highlight' : '';
    return (
      '<li class="skills-tech-item' + matchClass + '" title="' + esc(skill.name) + (skill.tag ? ' (' + esc(skill.tag) + ')' : '') + '">' +
        (skill.iconSvg || '') +
        '<span>' + esc(skill.name) + '</span>' +
      '</li>'
    );
  }

  /**
   * Render HTML for a single category card
   */
  function renderCategoryCard(cat, searchQuery) {
    var q = (searchQuery || '').trim().toLowerCase();
    var hasQuery = q.length > 0;
    var matchedTechCount = 0;

    var techChips = (cat.skills || []).map(function (s) {
      var isMatch = hasQuery && s.name.toLowerCase().indexOf(q) > -1;
      if (isMatch) matchedTechCount++;
      return renderTechChip(s, isMatch);
    }).join('');

    return (
      '<div class="skills-card-wrap" data-id="' + esc(cat.id) + '">' +
        '<article class="skills-card" role="region" aria-label="' + esc(cat.name) + '">' +
          '<span class="skills-card-watermark" aria-hidden="true">#' + esc(cat.number) + '</span>' +
          '<div class="skills-card-head">' +
            '<div class="skills-cat-icon-box" aria-hidden="true">' +
              (cat.iconSvg || '') +
            '</div>' +
            '<span class="skills-cat-badge">' + esc(cat.filterGroup) + '</span>' +
          '</div>' +
          '<h3 class="skills-card-title">' + esc(cat.name) + '</h3>' +
          '<p class="skills-card-desc">' + esc(cat.description) + '</p>' +
          '<ul class="skills-tech-list">' +
            techChips +
          '</ul>' +
        '</article>' +
      '</div>'
    );
  }

  /**
   * Render entire Skills Page Template
   */
  function renderSkillsSection() {
    var data = root.SKILLS_DATA || [];
    var totalCats = data.length || 14;
    var totalTechs = root.SKILLS_TOTAL_TECHS || 111;
    var counts = root.SKILLS_DOMAIN_COUNTS || {};

    var filterKeys = [
      { key: 'All', label: 'All' },
      { key: 'AI/ML', label: 'AI & ML' },
      { key: 'Frontend', label: 'Frontend' },
      { key: 'Backend', label: 'Backend' },
      { key: 'Mobile', label: 'Mobile' },
      { key: 'Cloud', label: 'Cloud' },
      { key: 'Security', label: 'Security' },
      { key: 'Tools', label: 'Tools' }
    ];

    var filterButtons = filterKeys.map(function (f) {
      var count = counts[f.key] || 0;
      var activeClass = f.key === currentFilter ? ' active' : '';
      return (
        '<button type="button" class="skills-filter-btn' + activeClass + '" data-filter="' + esc(f.key) + '">' +
          '<span>' + esc(f.label) + '</span>' +
          '<span class="skills-filter-count">' + count + '</span>' +
        '</button>'
      );
    }).join('');

    var cardsHTML = data.map(function (cat) {
      return renderCategoryCard(cat, currentSearch);
    }).join('');

    return (
      '<div class="skills-page-wrap">' +
        '<div class="skills-header-section">' +
          '<div class="skills-badge-tag">' +
            '<span class="skills-badge-dot"></span>' +
            '<span>Technical Competencies &bull; 14 Categories</span>' +
          '</div>' +
          '<h1 class="skills-main-title">Skills &amp; Technical Stack</h1>' +
          '<p class="skills-lede-text">' +
            'A structured, production-tested inventory of engineering capabilities spanning artificial intelligence, modern web architectures, systems programming, and cyber threat detection.' +
          '</p>' +
        '</div>' +

        '<div class="skills-stats-ribbon">' +
          '<div class="skills-stat-card">' +
            '<span class="skills-stat-num">' + totalCats + '</span>' +
            '<span class="skills-stat-label">Specialized Categories</span>' +
          '</div>' +
          '<div class="skills-stat-card">' +
            '<span class="skills-stat-num">' + totalTechs + '+</span>' +
            '<span class="skills-stat-label">Technologies &amp; Tools</span>' +
          '</div>' +
          '<div class="skills-stat-card">' +
            '<span class="skills-stat-num">7</span>' +
            '<span class="skills-stat-label">Engineering Domains</span>' +
          '</div>' +
          '<div class="skills-stat-card">' +
            '<span class="skills-stat-num">100%</span>' +
            '<span class="skills-stat-label">Hands-On Built Systems</span>' +
          '</div>' +
        '</div>' +

        '<div class="skills-controls-bar">' +
          '<div class="skills-search-wrapper">' +
            '<svg class="skills-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
              '<circle cx="11" cy="11" r="8"></circle>' +
              '<line x1="21" y1="21" x2="16.65" y2="16.65"></line>' +
            '</svg>' +
            '<input type="text" id="skills-search-input" class="skills-search-input" placeholder="Search technologies or categories (e.g. PyTorch, React, YOLO, Docker, Security)..." value="' + esc(currentSearch) + '" autocomplete="off" spellcheck="false" aria-label="Search skills and technologies">' +
            '<button type="button" id="skills-search-clear" class="skills-search-clear' + (currentSearch ? ' visible' : '') + '" aria-label="Clear search">&times;</button>' +
          '</div>' +

          '<div class="skills-filters-row">' +
            '<div class="skills-filter-buttons" id="skills-filter-group" role="tablist" aria-label="Skill domain filters">' +
              filterButtons +
            '</div>' +
            '<div class="skills-live-results" id="skills-live-count">' +
              'Showing ' + totalCats + ' of ' + totalCats + ' categories' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="skills-grid-container" id="skills-grid-container">' +
          cardsHTML +
        '</div>' +
      '</div>'
    );
  }

  /**
   * Setup 3D mouse tilt and dynamic spotlight on cards
   */
  function bindCardTilt(container) {
    if (!container) return;
    var cards = container.querySelectorAll('.skills-card');

    [].forEach.call(cards, function (card) {
      function onMove(e) {
        if (window.RM) return; // Reduced motion
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var px = x / rect.width - 0.5;
        var py = y / rect.height - 0.5;

        card.style.setProperty('--rx', (-py * 12).toFixed(2) + 'deg');
        card.style.setProperty('--ry', (px * 12).toFixed(2) + 'deg');
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
      }

      function onLeave() {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      }

      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', onLeave);
    });
  }

  /**
   * Filter and re-render the cards grid in place with animations
   */
  function updateGrid() {
    var container = document.getElementById('skills-grid-container');
    var liveCount = document.getElementById('skills-live-count');
    if (!container) return;

    var data = root.SKILLS_DATA || [];
    var q = currentSearch.trim().toLowerCase();

    var filtered = data.filter(function (cat) {
      // 1. Domain Filter
      var matchDomain = currentFilter === 'All' ||
        (cat.filterTags && cat.filterTags.indexOf(currentFilter) > -1) ||
        cat.filterGroup === currentFilter;

      if (!matchDomain) return false;

      // 2. Search Query Filter
      if (!q) return true;

      if (cat.name.toLowerCase().indexOf(q) > -1) return true;
      if (cat.description.toLowerCase().indexOf(q) > -1) return true;
      if (cat.filterGroup.toLowerCase().indexOf(q) > -1) return true;

      // Check skills
      var matchSkill = (cat.skills || []).some(function (s) {
        return s.name.toLowerCase().indexOf(q) > -1 || (s.tag && s.tag.toLowerCase().indexOf(q) > -1);
      });
      return matchSkill;
    });

    if (liveCount) {
      liveCount.textContent = 'Showing ' + filtered.length + ' of ' + data.length + ' categories';
    }

    if (filtered.length === 0) {
      container.innerHTML = (
        '<div class="skills-empty-state">' +
          '<div class="skills-empty-icon">' +
            '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">' +
              '<circle cx="11" cy="11" r="8"></circle>' +
              '<line x1="21" y1="21" x2="16.65" y2="16.65"></line>' +
              '<line x1="8" y1="11" x2="14" y2="11"></line>' +
            '</svg>' +
          '</div>' +
          '<h3>No matching skills found</h3>' +
          '<p>We couldn’t find any technology or category matching “' + esc(currentSearch) + '”. Try clearing your search or switching filter categories.</p>' +
          '<button type="button" class="btn p" id="skills-reset-btn">Reset Filters &amp; Search</button>' +
        '</div>'
      );

      var resetBtn = document.getElementById('skills-reset-btn');
      if (resetBtn) {
        resetBtn.onclick = function () {
          currentFilter = 'All';
          currentSearch = '';
          var input = document.getElementById('skills-search-input');
          var clear = document.getElementById('skills-search-clear');
          if (input) input.value = '';
          if (clear) clear.classList.remove('visible');
          var buttons = document.querySelectorAll('.skills-filter-btn');
          [].forEach.call(buttons, function (b) {
            b.classList.toggle('active', b.dataset.filter === 'All');
          });
          updateGrid();
        };
      }
      return;
    }

    container.innerHTML = filtered.map(function (cat) {
      return renderCategoryCard(cat, currentSearch);
    }).join('');

    bindCardTilt(container);

    // Stagger animation with GSAP if available
    if (typeof gsap !== 'undefined' && !window.RM) {
      gsap.fromTo(
        container.querySelectorAll('.skills-card-wrap'),
        { opacity: 0, y: 16, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.025, ease: 'power2.out', clearProps: 'all' }
      );
    }
  }

  /**
   * Initialize interactive listeners on Skills page
   */
  function initSkillsGallery() {
    var searchInput = document.getElementById('skills-search-input');
    var searchClear = document.getElementById('skills-search-clear');
    var filterButtons = document.querySelectorAll('.skills-filter-btn');
    var grid = document.getElementById('skills-grid-container');

    if (!grid) return;

    // Search Input Event
    if (searchInput) {
      searchInput.oninput = function () {
        currentSearch = searchInput.value;
        if (searchClear) {
          searchClear.classList.toggle('visible', currentSearch.length > 0);
        }
        updateGrid();
      };

      searchInput.onkeydown = function (e) {
        if (e.key === 'Escape') {
          searchInput.value = '';
          currentSearch = '';
          if (searchClear) searchClear.classList.remove('visible');
          updateGrid();
        }
      };
    }

    // Clear Search Button
    if (searchClear) {
      searchClear.onclick = function () {
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        currentSearch = '';
        searchClear.classList.remove('visible');
        updateGrid();
      };
    }

    // Category Filter Buttons
    [].forEach.call(filterButtons, function (btn) {
      btn.onclick = function () {
        var f = btn.dataset.filter;
        if (!f) return;
        currentFilter = f;

        [].forEach.call(filterButtons, function (b) {
          b.classList.toggle('active', b === btn);
        });

        updateGrid();
      };
    });

    // Initial 3D tilt binding
    bindCardTilt(grid);

    // Initial GSAP stagger entrance for the entire page
    if (typeof gsap !== 'undefined' && !window.RM) {
      gsap.fromTo(
        '.skills-header-section',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.skills-stat-card',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
      );
      gsap.fromTo(
        grid.querySelectorAll('.skills-card-wrap'),
        { opacity: 0, y: 24, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.03, ease: 'power2.out', delay: 0.1, clearProps: 'all' }
      );
    }
  }

  // Export functions to global scope
  root.renderSkillsSection = renderSkillsSection;
  root.initSkillsGallery = initSkillsGallery;

  // Auto-init if DOM is already loaded on skills route
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      var h = (location.hash || '').replace(/^#\/?/, '').split('/')[0];
      if (h === 'skills') {
        initSkillsGallery();
      }
    });
  }
})();

