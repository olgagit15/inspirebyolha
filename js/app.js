(function () {
'use strict';

var data = window.PortfolioData;
var UI = data.UI;
var SEG = data.SEG;
var CASES = data.CASES;
var REVIEWS = data.REVIEWS;
var SKILLS = data.SKILLS;
var POWER_SKILLS = data.POWER_SKILLS;
var TALKS = data.TALKS;
var JOBS = data.JOBS;
var CERTS = data.CERTS;
var REC_URL = data.REC_URL;
var RECS = data.RECS;
var LI_SVG = data.LI_SVG;
var NAV = data.NAV;

/* ================= state & helpers ================= */
var lang = 'en';
try { var sl = localStorage.getItem('lang'); if (sl === 'en' || sl === 'uk') lang = sl; } catch (e) {}
var filter = 'all';
var highlight = null; // skill label (EN) used as a stable key

function t(v) { return v == null ? '' : (typeof v === 'string' ? v : (v[lang] != null ? v[lang] : v.en)); }
function u(k) { return t(UI[k]); }
function $(s, r) { return (r || document).querySelector(s); }
function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
function caseById(id) { for (var i = 0; i < CASES.length; i++) if (CASES[i].id === id) return CASES[i]; return null; }

/* ================= covers & visuals ================= */
function tamCircles() {
  return '<div class="cover cv-tam" aria-hidden="true"><div class="circles">' +
    '<div class="c c1"><div><small>TAM</small><b>$500M–$1B</b></div></div>' +
    '<div class="c c2"><div><small>SAM</small><b>~$165M</b></div></div>' +
    '<div class="c c3"><div><small>SOM</small><b>$5–25M</b></div></div></div></div>';
}
function cover(c) {
  if (c.cover === 'tam') return tamCircles();
  if (c.cover === 'bars') {
    return '<div class="cover cv-bars" aria-hidden="true">' + REVIEWS.slice(0, 4).map(function (r) {
      return '<div class="r"><div class="l"><span>' + t(r) + '</span><span>' + r.v + '%</span></div><div class="t"><div class="f" style="width:' + (r.v / 19.7 * 100) + '%"></div></div></div>';
    }).join('') + '</div>';
  }
  if (c.cover === 'type') {
    return '<div class="cover cv-type" aria-hidden="true"><span class="lbl">ROI · EveryMail</span><span class="big">5.28×</span><span class="mid">$4.11</span><span class="lbl">' + (lang === 'uk' ? 'net LTV на користувача тріалу' : 'net LTV per trial user') + '</span></div>';
  }
  return '<div class="cover cv-phone"><img src="assets/images/cases/strava-match/strava-2.webp" alt="" loading="lazy" width="444" height="818"></div>';
}
function reviewBars() {
  return '<div class="chart" role="figure" aria-label="' + (lang === 'uk' ? 'Частка проблем серед 269 відгуків' : 'Share of problems across 269 reviews') + '"><div class="ttl">' +
    (lang === 'uk' ? 'Частка від 269 відгуків' : 'Share of 269 reviews') + '</div>' +
    REVIEWS.map(function (r) {
      var n = r.n ? ' <small>(' + r.n + (lang === 'uk' ? ' відгуки' : ' reviews') + ')</small>' : '';
      return '<div class="bar"><div class="top"><span>' + t(r) + '</span><b>' + r.v + '%' + n + '</b></div><div class="track"><div class="fill" style="width:' + (r.v / 19.7 * 100) + '%"></div></div></div>';
    }).join('') + '</div>';
}
function figure(src, w, h, cap, cls) {
  return '<figure class="figure ' + (cls || '') + '"><button type="button" class="frame" data-lb="' + src + '" data-cap="' + cap.replace(/"/g, '&quot;') + '" aria-label="' + u('enlarge') + '"><img src="' + src + '" alt="' + cap.replace(/"/g, '&quot;') + '" loading="lazy" width="' + w + '" height="' + h + '"></button><figcaption>' + cap + '</figcaption></figure>';
}

/* ================= home ================= */
function caseCard(c) { return PortfolioBlocks.caseCard(c, t, u, cover); }
function renderHome() {
  var segs = ['all'];
  var html = '' +
  '<section class="hero" id="home" data-sec="home"><div class="wrap hero-grid">' +
    '<div class="hero-photo rv"><img src="assets/images/profile/olga.webp" alt="' + u('name') + '" width="720" height="1053" fetchpriority="high"></div>' +
    '<div class="rv hero-copy"><p class="hero-hi">' + u('hi') + '</p><h1 class="hero-title">' + u('heroTitle') + '</h1>' +
      '<p class="hero-pitch">' + u('heroPitch') + '</p>' +
      '<div class="hero-cta"><a class="btn btn-primary" href="https://t.me/millway_o" target="_blank" rel="noopener noreferrer">' + u('contact') + ' <span class="arr">→</span></a>' +
      '<a class="btn btn-secondary" href="#/cases">' + u('seeCases') + '</a></div>' +
      '</div>' +
  '</div></section>' +

  '<section class="block" id="experience" data-sec="experience" style="padding-top:0"><div class="wrap"><div class="sec-head rv"><h2 class="sec-title">' + u('expTitle') + '</h2></div>' +
    '<div class="about-card rv"><ol class="career">' + JOBS.map(function (j) {
      return '<li><span class="career-when">' + t(j.when) + '</span><div><span class="career-role">' + t(j.role) + '</span>' + (j.path ? '<span class="career-path">' + t(j.path) + '</span>' : '') + '<span class="career-co">' + t(j.co) + '</span></div></li>';
    }).join('') + '</ol>' +
    '<div class="about-side"><div class="fact"><p class="eyebrow">' + u('domains') + '</p><p>Healthcare · Legaltech</p></div></div></div>' +
    '<div class="skill-group experience-power rv"><h3>Power skills</h3><div class="tags">' + POWER_SKILLS.map(function (s) {
      return '<span class="tag skill">' + t(s) + '</span>';
    }).join('') + '</div></div></div></section>' +

  '<section class="block" id="cases" data-sec="cases" style="padding-top:0"><div class="wrap"><div class="sec-head rv"><h2 class="sec-title">' + u('casesTitle') + '</h2></div>' +
    '<div class="filters rv" role="group" aria-label="' + u('cases') + '">' + segs.map(function (s) {
      return '<button type="button" class="filter" data-filter="' + s + '" aria-pressed="' + (filter === s) + '">' + u(s) + '</button>';
    }).join('') + '</div><div id="hlNote"></div>' +
    '<div class="cases-grid">' + CASES.map(caseCard).join('') +
      '<article class="cases-coming rv" aria-label="' + u('moreCasesTitle') + ' ' + u('moreCasesSoon') + '">' +
        '<div class="cases-coming-art" aria-hidden="true"><div class="cases-coming-orbit"></div>' +
          '<div class="cases-coming-note"><span class="cases-coming-label">IDEA · 01</span>' +
            '<svg viewBox="0 0 64 64" fill="none"><path d="M22 40.5c0-5.3-7-8-7-17a17 17 0 1 1 34 0c0 9-7 11.7-7 17H22Z" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/><path d="M24 46h16m-14 5h12m-10 5h8M32 1v5M9.5 9.5l4 4m37-4-4 4M3 25h6m46 0h6" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>' +
            '<span class="cases-coming-lines"></span><span class="cases-coming-lines short"></span>' +
          '</div><span class="cases-coming-star star-one">✳</span><span class="cases-coming-star star-two">✳</span>' +
        '</div><div class="cases-coming-copy"><h3>' + u('moreCasesTitle') + '</h3><p>' + u('moreCasesSoon') + '</p>' +
          '<div class="cases-coming-rule"><span></span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span></div>' +
        '</div></article></div><p class="empty-note" id="emptyNote" hidden>' + u('empty') + '</p></div></section>' +

  '<section class="block" id="skills" data-sec="skills" style="padding-top:0"><div class="wrap"><div class="sec-head rv"><h2 class="sec-title">' + u('skillsTitle') + '</h2></div>' +
    '<div class="skills-grid">' + SKILLS.map(function (g) {
      return '<div class="skill-group rv' + (g.wide ? ' wide' : '') + '"><h3>' + t(g.g) + '</h3><div class="tags">' + g.items.map(function (s) {
        var cls = 'tag ' + (g.tool ? 'tool' : 'skill') + (s.c.length >= 2 ? ' key' : '');
        if (!s.c.length) return '<span class="' + cls + '">' + t(s) + '</span>';
        return '<button type="button" class="' + cls + '" data-skill="' + s.en + '" aria-pressed="' + (highlight === s.en) + '">' + t(s) + '</button>';
      }).join('') + '</div></div>';
    }).join('') + '</div></div></section>' +

  '<section class="block" id="speaking" data-sec="speaking" style="padding-top:0"><div class="wrap"><div class="sec-head rv"><h2 class="sec-title">' + u('speakingTitle') + '</h2></div>' +
    TALKS.map(function (k) {
      return '<article class="talk rv"><div class="talk-date"><span class="badge" style="align-self:flex-start;background:var(--surface)">' + u('speaker') + '</span><div><div class="d">' + k.d + '</div><div class="m">' + t(k.m) + '</div></div></div>' +
        '<div><h3>' + t(k.title) + '</h3><div class="talk-meta"><span>' + u('event') + ': <b>' + t(k.event) + '</b></span></div>' +
        '<p class="desc">' + t(k.desc) + '</p></div></article>';
    }).join('') + '</div></section>' +

  '<section class="block" id="certifications" data-sec="certifications" style="padding-top:0"><div class="wrap"><div class="sec-head rv"><h2 class="sec-title">' + u('certsTitle') + '</h2></div>' +
    '<div class="certs">' + CERTS.map(function (c) {
      var body = '<div class="cert-body"><p>' + t(c.org) + '</p><p>' + t(c.date) + '</p></div>';
      var action = c.img ? '<button type="button" class="btn btn-secondary btn-sm cert-open" data-lb="' + c.img + '" data-cap="' + t(c.title) + '" aria-label="' + u('certificate') + ': ' + t(c.title) + '">' + u('certificate') + '</button>' : '';
      return '<article class="cert rv"><div class="cert-heading"><h3>' + t(c.title) + '</h3>' + action + '</div>' + body + '</article>';
    }).join('') + '</div></div></section>' +

  '<section class="block" id="recommendations" data-sec="recommendations" style="padding-top:0"><div class="wrap"><div class="sec-head rv"><span class="eyebrow">' + u('recommendations') + '</span><h2 class="sec-title">' + u('recTitle') + '</h2></div>' +
    '<div class="recs">' + RECS.map(function (r) {
      return '<article class="rec rv"><span class="rec-mark" aria-hidden="true">\u201C</span>' +
        '<blockquote lang="en"><p>' + r.text + '</p></blockquote>' +
        (lang === 'uk' ? '<p class="rec-note">' + u('recOrig') + '</p>' : '') +
        '<div class="rec-foot"><div class="rec-who"><p class="rec-role">' + t(r.role) + '</p><p class="rec-meta">' + t(r.rel) + ' \u00B7 ' + t(r.when) + '</p></div>' +
        '<a class="icon-btn rec-in" href="' + r.url + '" target="_blank" rel="noopener noreferrer" aria-label="' + u('recView') + '" title="' + u('recView') + '">' + LI_SVG + '</a></div></article>';
    }).join('') + '</div>' +
    '<div class="recs-more rv"><a class="btn btn-primary" href="' + REC_URL + '" target="_blank" rel="noopener noreferrer">' + u('recAll') + ' <span class="arr" aria-hidden="true">\u2197</span></a></div></div></section>';
  return html;
}

/* ================= case page ================= */
function renderCase(c) {
  var lead = c.detailLead == null ? t(c.line) : t(c.detailLead);
  var i = CASES.indexOf(c), next = CASES[(i + 1) % CASES.length];
  var secs = c.sections.slice();
  var visual = c.cover === 'phone'
    ? '<div class="case-visual rv"><div class="cover cv-phone"><img src="assets/images/cases/strava-match/strava-1.webp" alt="Strava.Match — home with match notification" width="438" height="824"><img src="assets/images/cases/strava-match/strava-2.webp" alt="Strava.Match — onboarding: find a partner who actually shows up" width="444" height="818"><img src="assets/images/cases/strava-match/strava-3.webp" alt="Strava.Match — fitness level question" width="420" height="816"></div></div>'
    : (c.id === 'email-subscription'
      ? ''
      : (c.cover === 'type' ? '<div class="case-visual rv">' + cover(c) + '</div>' : ''));
  var luna = '<div class="creative-gallery">' +
    figure('assets/images/cases/market-research/luna-creative.webp', 680, 682, lang === 'uk' ? 'Приклад рекламного креативу Luna Period Tracker.' : 'Ad creative example for Luna Period Tracker.', 'narrow') +
    figure('assets/images/cases/market-research/luna-ugc-creative.webp', 458, 792, lang === 'uk' ? 'Приклад рекламного креативу про непередбачуваний цикл.' : 'Ad creative about an unpredictable period.', 'narrow creative-portrait') +
    '</div>';
  var body = secs.map(function (s) {
    var b = t(s.body).replace('__TAM__', tamCircles()).replace('__BARS__', reviewBars()).replace('__LUNA__', luna);
    return PortfolioBlocks.caseSection(s, b, t);
  }).join('');
  var skills = t(c.skills).map(function (s) { return '<span class="tag skill">' + s + '</span>'; }).join('');
  var tools = c.tools.map(function (s) { return '<span class="tag tool">' + s + '</span>'; }).join('');
  var list = c.artifacts.filter(function (a) { return a.url; });
  var arts = list.map(function (a) { return '<a class="btn btn-primary" href="' + a.url + '" target="_blank" rel="noopener noreferrer">' + t(a.label) + ' <span class="arr" aria-hidden="true">↗</span></a>'; }).join('');
  var docs = list.length ? '<div class="cta-row rv" style="margin-top:0">' + arts + '</div>' : '';
  var kit = '<section class="cs kit rv" id="s-kit"><h2>' + (tools ? u('skillsLbl') + ' · ' + u('toolsLbl') : u('skillsLbl')) + '</h2>' +
    '<div class="kit-row"><p class="eyebrow">' + u('skillsLbl') + '</p><div class="tags">' + skills + '</div></div>' +
    (tools ? '<div class="kit-row"><p class="eyebrow">' + u('toolsLbl') + '</p><div class="tags">' + tools + '</div></div>' : '') + '</section>';
  var toc = secs.map(function (s) { return '<li><a href="#s-' + s.id + '" data-toc="s-' + s.id + '">' + t(s.h).replace(/^(Part|Частина) 2 — .*/, lang === 'uk' ? 'Залучення' : 'Acquisition') + '</a></li>'; }).join('') +
    '<li><a href="#s-kit" data-toc="s-kit">' + u('skillsLbl') + '</a></li>';

  return '<article class="case-page"><div class="wrap">' +
    '<a class="back" href="#/cases"><span aria-hidden="true">←</span> ' + u('allCases') + '</a>' +
    '<header class="case-hero rv"><h1 tabindex="-1">' + t(c.title) + '</h1>' + (lead ? '<p class="lead">' + lead + '</p>' : '') +
      (c.team ? '<div class="meta-row"><div class="item"><p class="eyebrow">' + u('format') + '</p><p><span class="badge">' + u('teamProject') + '</span></p></div></div>' : '') +
      '</header>' + visual +
    '<div class="case-layout"><nav class="toc" aria-label="' + u('story') + '"><p class="eyebrow">' + u('story') + '</p><ol>' + toc + '</ol></nav>' +
    '<div class="case-sections">' + body + docs + kit +
      '<a class="next rv" href="#/case/' + next.id + '"><span class="eyebrow">' + u('nextCase') + '</span><span class="t">' + t(next.short) + ' <span aria-hidden="true">→</span></span></a>' +
    '</div></div></div></article>';
}

/* ================= chrome: nav, i18n, theme ================= */
function renderNav() {
  var links = NAV.map(function (k) { return '<a href="#/' + (k === 'home' ? '' : k) + '" data-nav="' + k + '">' + u(k) + '</a>'; }).join('');
  $('#nav').innerHTML = links;
  $('#mobileNav').innerHTML = links + '<a href="https://www.linkedin.com/in/olhatereshchenko/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a class="btn btn-primary" href="assets/documents/Olga_Tereshchenko_CV.pdf" target="_blank" rel="noopener" data-cv style="color:var(--bg);border:0;justify-content:center">' + u('cv') + '</a>';
}
function setActive(k) {
  $$('[data-nav]').forEach(function (a) { var on = a.dataset.nav === k; a.classList.toggle('active', on); if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
}
function applyStatic() {
  document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';
  $$('[data-i18n]').forEach(function (el) { el.textContent = u(el.dataset.i18n); });
  $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
  $('#themeBtn').setAttribute('aria-label', u('theme'));
  $('#menuBtn').setAttribute('aria-label', u('menu'));
  renderNav();
}

/* ================= router ================= */
var spy = null, reveal = null;
function parse() {
  var h = location.hash.replace(/^#\/?/, '');
  var m = h.match(/^case\/([\w-]+)/);
  if (m) return { view: 'case', id: m[1] };
  return { view: 'home', sec: NAV.indexOf(h) > -1 || h === 'skills' ? h : '' };
}
function render(scroll) {
  var r = parse(), app = $('#app');
  if (spy) spy.disconnect();
  if (r.view === 'case') {
    var c = caseById(r.id);
    if (!c) { location.replace('#/cases'); return; }
    app.innerHTML = renderCase(c);
    document.title = t(c.short) + ' — ' + u('name');
    setActive('cases');
    if (scroll) { window.scrollTo(0, 0); var h1 = $('h1', app); if (h1) h1.focus({ preventScroll: true }); }
    watchToc();
  } else {
    app.innerHTML = renderHome();
    document.title = u('name') + ' — Product Manager';
    applyFilter(); applyHighlight();
    var sec = r.sec && r.sec !== 'home' ? r.sec : '';
    if (scroll) {
      var target = sec && document.getElementById(sec);
      if (target) { revealAll(); target.scrollIntoView(); target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
      else window.scrollTo(0, 0);
    }
    setActive(sec || 'home');
    watchSections();
  }
  observeReveal();
  closeMenu();
}

function watchSections() {
  if (!('IntersectionObserver' in window)) return;
  spy = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var k = e.target.dataset.sec;
      setActive(k === 'skills' ? 'cases' : k);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('[data-sec]').forEach(function (s) { spy.observe(s); });
  spy.observe($('#contact'));
  $('#contact').dataset.sec = 'contact';
}
function watchToc() {
  if (!('IntersectionObserver' in window)) return;
  spy = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      $$('[data-toc]').forEach(function (a) { a.classList.toggle('active', a.dataset.toc === e.target.id); });
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  $$('.cs').forEach(function (s) { spy.observe(s); });
}
var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function revealAll() { $$('.rv').forEach(function (el) { el.classList.add('in'); }); }
function observeReveal() {
  if (reduce || !('IntersectionObserver' in window)) { revealAll(); return; }
  if (reveal) reveal.disconnect();
  reveal = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('.rv:not(.in)').forEach(function (el) { reveal.observe(el); });
}

/* ================= cases filter & skill highlight ================= */
function applyFilter() {
  $$('.case-card').forEach(function (el) { el.hidden = !(filter === 'all' || el.dataset.seg === filter); });
  $$('[data-filter]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.filter === filter)); });
  var en = $('#emptyNote'); if (en) en.hidden = $$('.case-card').some(function (el) { return !el.hidden; });
}
function findSkill(en) {
  for (var i = 0; i < SKILLS.length; i++) for (var j = 0; j < SKILLS[i].items.length; j++) if (SKILLS[i].items[j].en === en) return SKILLS[i].items[j];
  return null;
}
function applyHighlight() {
  var s = highlight && findSkill(highlight), note = $('#hlNote');
  $$('.case-card').forEach(function (el) {
    var hit = !!s && s.c.indexOf(el.dataset.id) > -1;
    el.classList.toggle('hit', hit); el.classList.toggle('dim', !!s && !hit);
  });
  $$('[data-skill]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.skill === highlight)); });
  if (note) note.innerHTML = s ? '<p class="hl-note">' + u('showing') + ': <span class="tag skill">' + t(s) + '</span><button type="button" class="btn btn-secondary btn-sm" data-clear>' + u('clear') + ' ×</button></p>' : '';
}

/* ================= events ================= */
document.addEventListener('click', function (e) {
  var el = e.target.closest('[data-cv],[data-filter],[data-skill],[data-clear],[data-lang],[data-lb],#themeBtn,#menuBtn,[data-toc]');
  var cvLink = e.target.closest('[data-cv]');
  var cvDownload = e.target.closest('#cvvDl');
  var navLink = e.target.closest('#nav a, #mobileNav a');
  var languageButton = e.target.closest('[data-lang]');
  var caseCardEl = e.target.closest('.case-card');
  var imageButton = e.target.closest('[data-lb]');
  var contactLink = e.target.closest('a[href^="mailto:"], a[href*="linkedin.com"], a[href*="t.me/"]');

  // Відстежуємо лише потрібні взаємодії, не передаючи персональні дані.
  if (cvLink) {
    if (typeof gtag === 'function') gtag('event', 'cv_open', { location: cvLink.closest('#contact-footer') ? 'footer' : 'header' });
  }
  if (cvDownload && typeof gtag === 'function') gtag('event', 'cv_download');
  if (navLink) {
    var href = navLink.getAttribute('href') || '';
    var linkTarget = href.indexOf('#/') === 0 ? href : (navLink.hasAttribute('data-cv') ? 'cv' : 'linkedin');
    if (typeof gtag === 'function') gtag('event', 'nav_click', {
      location: navLink.closest('#mobileNav') ? 'mobile_nav' : 'header',
      link_text: navLink.textContent.trim(),
      link_target: linkTarget
    });
  }
  if (languageButton && languageButton.dataset.lang !== lang && typeof gtag === 'function') {
    gtag('event', 'language_change', { language: languageButton.dataset.lang });
  }
  if (contactLink) {
    var contactLocation = contactLink.closest('#header') ? 'header' : (contactLink.closest('#contact-footer') ? 'footer' : (contactLink.closest('.hero-cta') ? 'hero' : ''));
    if (contactLocation && typeof gtag === 'function') {
      gtag('event', 'contact_click', {
        method: contactLink.getAttribute('href').indexOf('mailto:') === 0 ? 'email' : (contactLink.getAttribute('href').indexOf('t.me/') > -1 ? 'telegram' : 'linkedin'),
        location: contactLocation
      });
    }
  }
  if (caseCardEl) {
    var caseTitle = caseCardEl.querySelector('.case-title');
    if (caseTitle && typeof gtag === 'function') gtag('event', 'case_open', {
      case_id: caseCardEl.dataset.id,
      case_title: caseTitle.textContent.trim()
    });
  }
  if (imageButton && typeof gtag === 'function') {
    var casePage = imageButton.closest('.case-page');
    var caseHeading = casePage && casePage.querySelector('h1');
    var imageParams = {};
    if (caseHeading) imageParams.case_title = caseHeading.textContent.trim();
    gtag('event', 'image_open', imageParams);
  }

  if (!el) {
    var a = e.target.closest('a[href^="#/"]');
    if (a && a.getAttribute('href') === location.hash) { e.preventDefault(); render(true); }
    return;
  }
  if (el.dataset.filter) { filter = el.dataset.filter; highlight = null; applyFilter(); applyHighlight(); }
  else if (el.dataset.skill) {
    highlight = highlight === el.dataset.skill ? null : el.dataset.skill;
    filter = 'all'; applyFilter(); applyHighlight();
  }
  else if (el.hasAttribute('data-clear')) { highlight = null; applyHighlight(); }
  else if (el.dataset.lang) {
    if (el.dataset.lang === lang) return;
    lang = el.dataset.lang;
    try { localStorage.setItem('lang', lang); } catch (x) {}
    var y = window.scrollY; applyStatic(); render(false); revealAll(); window.scrollTo(0, y);
  }
  else if (el.hasAttribute('data-cv')) { if (cvOK()) { e.preventDefault(); openCv(); } }
  else if (el.dataset.lb) { openLb(el.dataset.lb, el.dataset.cap || ''); }
  else if (el.id === 'themeBtn') {
    var th = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = th;
    if (typeof gtag === 'function') gtag('event', 'theme_toggle', { theme: th });
  }
  else if (el.id === 'menuBtn') { var open = !$('#mobileNav').classList.contains('open'); $('#mobileNav').classList.toggle('open', open); el.setAttribute('aria-expanded', String(open)); }
  else if (el.dataset.toc) { e.preventDefault(); var s = document.getElementById(el.dataset.toc); if (s) s.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }
});
function closeMenu() { $('#mobileNav').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false'); }
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

/* CV viewer: in-page PDF where the browser can show it; otherwise the link opens the PDF in a new tab. */
var cvv = $('#cvv');
function cvOK() {
  var ios = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  return !!(cvv && cvv.showModal && navigator.pdfViewerEnabled && !ios);
}
function openCv() {
  $('#cvvTitle').textContent = u('name') + ' \u2014 CV';
  $('#cvvDlT').textContent = u('cvDownload');
  $('#cvvClose').setAttribute('aria-label', u('cvClose'));
  var f = $('#cvvFrame'); if (!f.getAttribute('src')) f.setAttribute('src', 'assets/documents/Olga_Tereshchenko_CV.pdf#view=FitH');
  cvv.showModal();
}
if (cvv) {
  $('#cvvClose').addEventListener('click', function () { cvv.close(); });
  cvv.addEventListener('click', function (e) { if (e.target === cvv) cvv.close(); });
}

var lb = $('#lb');
function openLb(src, cap) {
  $('#lbImg').src = src; $('#lbImg').alt = cap; $('#lbCap').textContent = cap;
  if (lb.showModal) lb.showModal(); else window.open(src, '_blank', 'noopener');
}
$('#lbClose').addEventListener('click', function () { lb.close(); });
lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });

window.addEventListener('scroll', function () { $('#header').classList.toggle('scrolled', window.scrollY > 8); }, { passive: true });
window.addEventListener('hashchange', function () {
  if (!location.hash || location.hash.indexOf('#/') === 0) {
    render(true);
    // Початковий page_view уже надсилає gtag('config').
    if (typeof gtag === 'function') gtag('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: location.hash || '/'
    });
  }
});

$('#year').textContent = new Date().getFullYear();
applyStatic();
render(true);
})();
