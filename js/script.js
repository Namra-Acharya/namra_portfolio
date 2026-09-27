'use strict';
/* ============================================================
   NAMRA ACHARYA — portfolio interactions (vanilla JS)
   Sections: config · header · nav · scroll · reveal ·
             modal · copy email · signal visual
   ============================================================ */

/* ---------- Config (edit these) ---------- */
const CONFIG = {
  email: 'namraaacharya@gmail.com', /* TODO: replace with your real email */
  resume: 'assets/resume/BCI_ML_Resume.pdf'
};

const prefersReducedMotion =
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Helpers ---------- */
const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

// Keep any hardcoded mailto links in sync with CONFIG.email.
$$('a[href^="mailto:"]').forEach(function (link) {
  link.href = 'mailto:' + CONFIG.email;
});
const contactEmailEl = $('#contactEmail');
if (contactEmailEl) contactEmailEl.textContent = CONFIG.email;

/* ============================================================
   1. Header — sticky + compact after scroll
   ============================================================ */
const siteHeader = $('#siteHeader');

function updateHeaderState() {
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
}

/* ============================================================
   2. Smooth scrolling with sticky-header offset
   ============================================================ */
function scrollToHash(hash) {
  const target = document.getElementById(hash) || document.querySelector(hash);
  if (!target) return;

  const headerOffset = siteHeader.getBoundingClientRect().height + 8;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  closeMobileNav();

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
}

$$('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    const href = link.getAttribute('href');
    if (href.length > 1) {
      event.preventDefault();
      scrollToHash(href.slice(1));
    } else {
      event.preventDefault();
    }
  });
});

/* ============================================================
   3. Back to top
   ============================================================ */
const backToTop = $('#backToTop');

function updateBackToTop() {
  backToTop.classList.toggle('is-visible', window.scrollY > 640);
}

backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});

/* ============================================================
   4. Mobile navigation
   ============================================================ */
const navToggle = $('#navToggle');

function setNavOpen(open) {
  if (open) {
    siteHeader.classList.add('nav-open');
  } else {
    siteHeader.classList.remove('nav-open');
  }
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Toggle navigation menu');
}

function closeMobileNav() {
  if (siteHeader.classList.contains('nav-open')) {
    setNavOpen(false);
  }
}

navToggle.addEventListener('click', function () {
  setNavOpen(!siteHeader.classList.contains('nav-open'));
});

$$('.nav-link').forEach(function (link) {
  link.addEventListener('click', closeMobileNav);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeMobileNav();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 768) closeMobileNav();
});

document.addEventListener('click', function (event) {
  if (!siteHeader.classList.contains('nav-open')) return;
  const inHeader = event.target.closest('.site-header');
  if (!inHeader) closeMobileNav();
});

/* ============================================================
   5. Active section detection (nav indicator)
   ============================================================ */
const NAV_ORDER = ['about', 'projects', 'focus', 'resume', 'education', 'contact'];
const SECTION_ORDER = ['about', 'focus', 'projects', 'bci', 'ml', 'engineering', 'experience', 'education', 'credentials', 'resume-area', 'contact'];
const navLinks = Array.from($$('.nav-link'));
const sectionEls = SECTION_ORDER.map(function (id) {
  return document.getElementById(id);
}).filter(Boolean);

function sectionIndex(id) {
  const i = SECTION_ORDER.indexOf(id);
  return i === -1 ? -1 : i;
}

function currentSectionId() {
  const probe = window.scrollY + window.innerHeight * 0.36;
  let current = null;
  for (const el of sectionEls) {
    if (el.getBoundingClientRect().top + window.scrollY <= probe) {
      current = el.id;
    } else {
      break;
    }
  }
  return current;
}

function updateActiveNav() {
  const current = currentSectionId();
  const curIdx = sectionIndex(current);

  let target = null;
  for (const id of NAV_ORDER) {
    if (sectionIndex(id) <= curIdx) target = id;
  }

  navLinks.forEach(function (link) {
    const active = link.dataset.nav === target;
    link.classList.toggle('is-active', active);
  });
}

/* ============================================================
   6. Scroll listener (throttled)
   ============================================================ */
let scrollTick = false;
window.addEventListener('scroll', function () {
  if (scrollTick) return;
  scrollTick = true;
  requestAnimationFrame(function () {
    updateHeaderState();
    updateBackToTop();
    updateActiveNav();
    scrollTick = false;
  });
}, { passive: true });

updateHeaderState();
updateBackToTop();
updateActiveNav();

/* ============================================================
   7. Scroll reveal animations
   ============================================================ */
const revealEls = $$('.reveal');

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );
  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });
} else {
  revealEls.forEach(function (el) {
    el.classList.add('is-visible');
  });
}

/* ============================================================
   8. Project modal
   ============================================================ */
const PROJECT_DATA = {
  'motor-imagery-eeg-bci': {
    num: 'P.01',
    title: 'Motor Imagery EEG BCI',
    status: 'IN PROGRESS',
    overview:
      'An EEG preprocessing and feature-extraction pipeline built for motor imagery classification. Raw EEG is processed into clean, epoched, feature-ready segments for machine learning.',
    problem:
      'Motor imagery produces subtle, spatially distributed changes in EEG that are hard to separate from noise, artifacts, and unrelated brain activity. The pipeline must isolate task-relevant signal without leaking information across train and test.',
    approach: [
      'Raw EEG import and channel selection with MNE-Python',
      'Filtering and artifact handling to reduce noise and drift',
      'Epoching aligned to motor imagery cues',
      'Frequency-band and spatial feature extraction',
      'Classification with scikit-learn models under cross-validation'
    ],
    technology: ['Python', 'MNE-Python', 'NumPy', 'SciPy', 'scikit-learn', 'EEG'],
    statusDetail:
      'In progress — preprocessing and feature-extraction stages are being developed. No accuracy figures will be reported until the full pipeline is validated.',
    future: [
      'Complete left/right motor-imagery decoding',
      'Cross-validation and temporal generalization design',
      'Model comparison and honest error analysis',
      'Reproducible configuration and documentation'
    ]
  },
  'automated-ml-pipeline': {
    num: 'P.02',
    title: 'Automated Machine Learning Pipeline',
    status: 'COMPLETE',
    overview:
      'An end-to-end machine learning workflow that moves a dataset from raw input to an evaluated model with a clean, repeatable structure.',
    problem:
      'Ad-hoc pipelines produce fragile, unreproducible results. The workflow standardizes the common stages — loading, cleaning, encoding, feature processing, training, and comparison — behind a modular interface.',
    approach: [
      'Missing-value handling and type coercion',
      'Categorical encoding and feature processing',
      'Configurable preprocessing for numeric features',
      'Model training with scikit-learn estimators',
      'Systematic model comparison and evaluation'
    ],
    technology: ['Python', 'Pandas', 'NumPy', 'scikit-learn'],
    statusDetail:
      'Complete — core workflow implemented and exercised on tabular datasets.',
    future: [
      'Extend to time-series and signal data',
      'Add experiment tracking and configuration files',
      'Package the workflow as a reusable library'
    ]
  },
  'iris-ai-assistant': {
    num: 'P.03',
    title: 'IRIS — AI Desktop Assistant',
    status: 'COMPLETE',
    overview:
      'A modular desktop assistant that connects LLM APIs to application control and task execution.',
    problem:
      'LLM APIs can answer questions but cannot act on the machine. IRIS is structured so intent can be translated into concrete desktop actions through a clean tool layer.',
    approach: [
      'Modular architecture separating API, tools, and execution layers',
      'Application control and window management',
      'Keyboard and mouse automation for task execution',
      'Task pipelines built from composable actions',
      'LLM API integration with structured tool calling'
    ],
    technology: ['Python', 'LLM APIs', 'Automation', 'Computer Control'],
    statusDetail:
      'Complete — core modules built and integrated. The assistant performs discrete, user-authorized actions only.',
    future: [
      'Error recovery and confirmation flows',
      'Plugin system for new tools',
      'Safe-by-default action permissions'
    ]
  }
};

const modalOverlay = $('#projectModal');
const modalBody = $('#modalBody');
const modalKicker = $('#modalKicker');
const modalTitleEl = $('#modalTitle');
const modalCloseBtn = $('#modalCloseBtn');
let lastFocused = null;

function modalSections(data) {
  const list = (items) =>
    '<ul>' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
  const tech =
    '<div class="modal-tech">' +
    data.technology.map(function (t) { return '<span>' + t + '</span>'; }).join('') +
    '</div>';

  return (
    '<section class="modal-section"><h4>Overview</h4><p>' + data.overview + '</p></section>' +
    '<section class="modal-section"><h4>Problem</h4><p>' + data.problem + '</p></section>' +
    '<section class="modal-section"><h4>Approach</h4>' + list(data.approach) + '</section>' +
    '<section class="modal-section"><h4>Technology</h4>' + tech + '</section>' +
    '<section class="modal-section"><h4>Current Status</h4><p>' + data.statusDetail + '</p></section>' +
    '<section class="modal-section"><h4>Future Work</h4>' + list(data.future) + '</section>'
  );
}

function openModal(id) {
  const data = PROJECT_DATA[id];
  if (!data) return;

  modalKicker.textContent = 'PROJECT DETAILS / ' + data.num;
  modalTitleEl.textContent = data.title;
  modalBody.innerHTML = modalSections(data);

  lastFocused = document.activeElement;
  modalOverlay.hidden = false;
  modalOverlay.classList.add('open');
  document.body.classList.add('modal-open');
  modalCloseBtn.focus();
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.classList.remove('modal-open');
  setTimeout(function () {
    if (!modalOverlay.classList.contains('open')) modalOverlay.hidden = true;
  }, 240);
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

modalCloseBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function (event) {
  if (event.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', function (event) {
  if (!modalOverlay.classList.contains('open')) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeModal();
    return;
  }
  if (event.key !== 'Tab') return;

  const focusables = Array.from(modalOverlay.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  ));
  if (!focusables.length) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

/* Card + case-study triggers */
$$('.project-card').forEach(function (card) {
  card.addEventListener('click', function (event) {
    if (event.target.closest('a, button')) return;
    openModal(card.dataset.project);
  });
  card.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(card.dataset.project);
    }
  });
});

$$('[data-case]').forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    openModal(btn.dataset.case);
  });
});

/* ============================================================
   9. Copy email
   ============================================================ */
const copyEmailBtn = $('#copyEmailBtn');
const copyFeedback = $('#copyFeedback');

function flashCopied() {
  copyEmailBtn.classList.add('copied');
  copyFeedback.textContent = 'Email address copied to clipboard';
  setTimeout(function () {
    copyEmailBtn.classList.remove('copied');
    copyFeedback.textContent = '';
  }, 2200);
}

function legacyCopy() {
  const textarea = document.createElement('textarea');
  textarea.value = CONFIG.email;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  textarea.style.pointerEvents = 'none';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
  } catch (_) {
    /* clipboard unavailable */
  }
  document.body.removeChild(textarea);
  flashCopied();
}

copyEmailBtn.addEventListener('click', function () {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(CONFIG.email).then(flashCopied).catch(legacyCopy);
  } else {
    legacyCopy();
  }
});

/* ============================================================
   10. Hero signal visual (canvas, no external libraries)
   ============================================================ */
const signalCanvas = $('#signalCanvas');

function initSignalVisual() {
  const canvas = signalCanvas;
  if (!canvas) return false;

  const W = 720;
  const H = 420;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const MONO = '"JetBrains Mono", "SF Mono", ui-monospace, Consolas, monospace';

  const C = {
    grid: 'rgba(255,255,255,0.04)',
    line: 'rgba(255,255,255,0.11)',
    wave: '#74808f',
    waveDim: '#5f6873',
    accent: '#40b4ff',
    label: '#8b94a4',
    dim: '#5e6775'
  };

  function setFont(size, color) {
    ctx.font = size + 'px ' + MONO;
    ctx.fillStyle = color;
  }

  function drawGrid() {
    ctx.strokeStyle = C.grid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 30; x <= 690; x += 60) {
      ctx.moveTo(x, 56);
      ctx.lineTo(x, 404);
    }
    for (let y = 56; y <= 404; y += 49.7) {
      ctx.moveTo(28, y);
      ctx.lineTo(692, y);
    }
    ctx.stroke();
  }

  function drawTitle(t) {
    ctx.save();
    ctx.fillStyle = C.accent;
    ctx.fillRect(28, 30, 6, 6);
    setFont(11, C.label);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('signal_pipeline.py', 42, 37);

    setFont(10, C.dim);
    ctx.fillText('fs 256 Hz · ch 8', 652, 37);

    ctx.strokeStyle = C.line;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(28, 48);
    ctx.lineTo(692, 48);
    ctx.stroke();
    ctx.restore();
  }

  function plotTrace(cx, cy, x0, x1, amp, phase, color, widthPx, freq, extra) {
    ctx.strokeStyle = color;
    ctx.lineWidth = widthPx;
    ctx.beginPath();
    for (let x = x0; x <= x1; x += 2) {
      const tx = (x - x0) * 0.012 + phase;
      let y = Math.sin(freq[0] * tx + phase * 0.9);
      y += 0.45 * Math.sin(freq[1] * tx - phase * 0.7);
      y += 0.2 * Math.sin(freq[2] * tx + phase * 0.4);
      y += 0.07 * Math.sin(31 * tx + phase);
      const py = cy + y * amp + (extra ? Math.sin(0.5 * phase + x * 0.004) * 5 : 0);
      if (x === x0) ctx.moveTo(x, py);
      else ctx.lineTo(x, py);
    }
    ctx.stroke();
  }

  function drawWaveform(t) {
    const phase = t * 1.15;
    const x0 = 30;
    const x1 = 508;

    plotTrace(212, 0, x0, x1, 46, phase, C.wave, 1.5, [2.1, 4.7, 8.3], false);
    plotTrace(268, 0, x0, x1, 24, phase * 1.4, C.waveDim, 1, [3.1, 6.2, 11], false);

    // moving highlight window
    const win = 92;
    const hx = x0 + ((t * 0.085) % 1) * (x1 - x0 - win);
    ctx.save();
    ctx.strokeStyle = C.line;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(hx, 88);
    ctx.lineTo(hx, 150);
    ctx.moveTo(hx + win, 88);
    ctx.lineTo(hx + win, 150);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = C.accent;
    ctx.fillRect(hx, 84, win, 2);
    ctx.restore();

    setFont(9.5, C.dim);
    ctx.textAlign = 'left';
    ctx.fillText('epoch: 2.5 s', 30, 330);
    ctx.fillText('band-pass: 0.5 – 40 hz', 30, 344);
    setFont(9.5, C.label);
    ctx.fillText('C3', 512, 212);
    ctx.fillText('Fz', 512, 268);
  }

  return { drawGrid, drawTitle, drawWaveform, setFont, C, MONO, W, H };
}

function startSignalPlayback(api) {
  const { ctx, C, W, H, setFont } = api;

  const BANDS = [
    { label: 'δ 1–4', y: 100 },
    { label: 'θ 4–8', y: 168 },
    { label: 'α 8–13', y: 236 },
    { label: 'β 13–30', y: 304 }
  ];
  const NODES = [
    { x: 148, label: 'EEG_SIGNAL' },
    { x: 328, label: 'FEATURE_SPACE' },
    { x: 500, label: 'ML_DECODER' },
    { x: 672, label: 'NEURAL_DATA' }
  ];
  const PIPE_Y = 380;

  function drawBands(t) {
    BANDS.forEach(function (band, bi) {
      setFont(9.5, C.dim);
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(band.label, 526, band.y);

      const heights = [0.35, 0.6, 0.95, 0.7, 0.45];
      const bx = 640;
      for (let i = 0; i < heights.length; i++) {
        const hScale = 0.7 + 0.3 * Math.sin(t * 0.8 + bi * 1.7 + i * 0.9);
        const h = heights[i] * 22 * hScale + 6;
        const accent = bi === 2 && i === 2;
        ctx.fillStyle = accent ? C.accent : C.waveDim;
        ctx.fillRect(bx + i * 15, band.y - h, 8, h);
      }
    });
    setFont(9, C.dim);
    ctx.fillText('PSD (µV²/Hz)', 526, 344);
  }

  function drawPipeline(t) {
    ctx.strokeStyle = C.line;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(NODES[0].x, PIPE_Y);
    for (let i = 1; i < NODES.length; i++) ctx.lineTo(NODES[i].x, PIPE_Y);
    ctx.stroke();

    // segment arrows
    ctx.fillStyle = C.accent;
    NODES.slice(0, -1).forEach(function (node, i) {
      const mx = (node.x + NODES[i + 1].x) / 2;
      ctx.beginPath();
      ctx.moveTo(mx, PIPE_Y);
      ctx.lineTo(mx - 5, PIPE_Y - 3);
      ctx.lineTo(mx - 5, PIPE_Y + 3);
      ctx.closePath();
      ctx.fill();
    });

    // node dots + labels
    NODES.forEach(function (node, i) {
      ctx.beginPath();
      ctx.arc(node.x, PIPE_Y, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = i === NODES.length - 1 ? C.accent : C.label;
      ctx.fill();

      setFont(9.5, i === 0 || i === NODES.length - 1 ? C.accent : C.label);
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.x, PIPE_Y + 15);
    });

    // traveling pulse dot
    const span = NODES[NODES.length - 1].x - NODES[0].x;
    const p = (t * 0.13) % 1;
    const px = NODES[0].x + span * p;
    ctx.beginPath();
    ctx.arc(px, PIPE_Y, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(64, 180, 255, 0.16)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(px, PIPE_Y, 2.4, 0, Math.PI * 2);
    ctx.fillStyle = C.accent;
    ctx.fill();

    setFont(9, C.dim);
    ctx.textAlign = 'left';
    ctx.fillText('decoder: LDA / SVM', 30, PIPE_Y + 22);
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    api.drawGrid();
    api.drawTitle(t);
    api.drawWaveform(t);
    drawBands(t);
    drawPipeline(t);
  }

  if (prefersReducedMotion) {
    draw(6);
    return;
  }

  let tabHidden = false;
  let canvasVisible = true;

  document.addEventListener('visibilitychange', function () {
    tabHidden = document.hidden;
  });

  if ('IntersectionObserver' in window) {
    const vis = new IntersectionObserver(function (entries) {
      canvasVisible = entries[0].isIntersecting;
    }, { threshold: 0.01 });
    vis.observe(signalCanvas);
  }

  const loop = function (now) {
    if (!tabHidden && canvasVisible) draw(now / 1000);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

const signalApi = initSignalVisual();
if (signalApi) startSignalPlayback(signalApi);

/* ============================================================
   11. CREDENTIALS LIBRARY
   ============================================================ */
const pad2 = (n) => String(n).padStart(2, '0');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const CATEGORY_LABELS = {
  'ml-ai': 'Machine Learning / AI',
  'python-data': 'Python / Data',
  'software': 'Software Engineering',
  'systems': 'Systems / Networking',
  'other': 'Other'
};

const CREDENTIALS = [
  {
    id: 'aws-ml-nlp',
    num: 1,
    title: 'AWS Academy Graduate — Machine Learning for Natural Language Processing — Training Badge',
    issuer: 'AWS Academy',
    date: 'May 9, 2026',
    duration: '20 hours',
    category: 'ml-ai',
    verification: 'https://www.credly.com/go/nFd7figY',
    file: 'assets/certificates/AWS_ML.pdf',
    downloadName: 'Namra_Acharya_AWS_ML_NLP.pdf'
  },
  {
    id: 'ibm-docker-essentials',
    num: 2,
    title: 'Docker Essentials: A Developer Introduction',
    issuer: 'IBM',
    date: 'April 13, 2026',
    category: 'software',
    verification: 'https://www.credly.com/badges/8321f8ac-55e3-439b-8244-99c2b5e90e66',
    file: 'assets/certificates/IBMDesign20260413-31-2w7dw1.pdf',
    downloadName: 'Namra_Acharya_IBM_Docker_Essentials.pdf'
  },
  {
    id: 'ibm-python-101',
    num: 3,
    title: 'Python 101 for Data Science',
    issuer: 'IBM / Cognitive Class',
    date: 'February 6, 2025',
    category: 'python-data',
    verification: 'https://courses.guni.skillsnetwork.site/certificates/63af7a74c9624b3cae056187858496f5',
    file: 'assets/certificates/IBM_Python_101_Data_Science.pdf',
    downloadName: 'Namra_Acharya_IBM_Python_101_Data_Science.pdf'
  },
  {
    id: 'datacamp-intro-python',
    num: 4,
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    duration: '4 hours',
    date: 'February 25, 2025',
    category: 'python-data',
    file: 'assets/certificates/DataCamp_Introduction_to_Python.pdf',
    downloadName: 'Namra_Acharya_DataCamp_Introduction_to_Python.pdf'
  },
  {
    id: 'intro-data-mining',
    num: 5,
    title: 'Introduction to Data Mining',
    date: 'January 2026',
    category: 'ml-ai',
    file: 'assets/certificates/Introduction_to_Data_Mining.pdf',
    downloadName: 'Namra_Acharya_Introduction_to_Data_Mining.pdf'
  },
  {
    id: 'ai-beginners-guide',
    num: 6,
    title: 'Artificial Intelligence Beginners Guide',
    date: 'January 2026',
    category: 'ml-ai',
    file: 'assets/certificates/Artificial_Intelligence_Beginners_Guide.pdf',
    downloadName: 'Namra_Acharya_Artificial_Intelligence_Beginners_Guide.pdf'
  },
  {
    id: 'ibm-java-fundamentals',
    num: 7,
    title: 'Java Fundamentals',
    issuer: 'IBM / Ganpat University',
    date: 'November 19, 2024',
    category: 'software',
    verification: 'https://courses.guni.skillsnetwork.site/certificates/c513d957f8a54a389d9d3c04f14f6f5d',
    file: 'assets/certificates/IBM_Java_Fundamentals.pdf',
    downloadName: 'Namra_Acharya_IBM_Java_Fundamentals.pdf'
  },
  {
    id: 'cisco-ccna',
    num: 8,
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'November 5, 2025',
    category: 'systems',
    file: 'assets/certificates/Cisco_CCNA_Switching_Routing_Wireless.pdf',
    downloadName: 'Namra_Acharya_Cisco_CCNA_Switching_Routing_Wireless.pdf'
  },
  {
    id: 'redhat-rh134-82',
    num: 9,
    title: 'Red Hat System Administration II (RH134 - RHA) - Ver. 8.2',
    issuer: 'Red Hat',
    date: 'March 24, 2026',
    type: 'Certificate of Attendance',
    category: 'systems',
    verification: 'https://www.credly.com/badges/e6a22707-7ec0-4633-8170-3fd6a32a4ffa',
    file: 'assets/certificates/RedHat.pdf',
    downloadName: 'Namra_Acharya_RedHat_RH134_v8.2.pdf'
  },
  {
    id: 'redhat-rh134-93',
    num: 10,
    title: 'Red Hat System Administration II (RH134 - RHA) - Ver. 9.3',
    issuer: 'Red Hat',
    date: 'April 22, 2026',
    type: 'Certificate of Attendance',
    category: 'systems',
    verification: 'https://www.credly.com/badges/f229e7a6-63f9-4b50-9af6-6e190891986a',
    file: 'assets/certificates/RedHat2.pdf',
    downloadName: 'Namra_Acharya_RedHat_RH134_v9.3.pdf'
  },
  {
    id: 'wadhwani-21st-century',
    num: 11,
    title: '21st Century Employability Skills Program - Advanced',
    issuer: 'Wadhwani Foundation',
    organization: 'Gujarat Knowledge Society',
    date: 'March 20, 2024',
    category: 'other',
    file: 'assets/certificates/Wadhwani_Employability_Skills.pdf',
    downloadName: 'Namra_Acharya_Wadhwani_Employability_Skills.pdf'
  }
];

/* ---------- Internships (professional experience) ---------- */
const INTERNSHIPS = [
  {
    id: 'labmentix-web-dev',
    num: 1,
    company: 'Labmentix Pvt. Ltd.',
    role: 'Web Development Intern',
    startDate: '01 June 2025',
    endDate: '31 July 2025',
    displayStart: 'Jun 2025',
    displayEnd: 'Jul 2025',
    duration: '2 months',
    description: 'Professional internship experience in web development.',
    certificate: 'assets/Internship/Acharya Namra Sharad Bhai Certificate.pdf',
    downloadName: 'Namra_Acharya_Internship_Labmentix.pdf'
  }
];

/* ---------- File availability & state ---------- */
const credFilesPresent = Object.create(null); // id -> boolean (authoritative over HTTP)
const credState = { filter: 'all', query: '' };

function fileAvailable(id) {
  if (credFilesPresent[id] !== undefined) return credFilesPresent[id];
  return true; // all certificate files are committed; HEAD results refine over HTTP
}

function checkCredentialFiles() {
  const httpish = location.protocol === 'http:' || location.protocol === 'https:';
  if (!httpish) return Promise.resolve();
  return Promise.all(
    CREDENTIALS.map(function (c) {
      return fetch(c.file, { method: 'HEAD' })
        .then(function (r) { credFilesPresent[c.id] = r.ok; })
        .catch(function () { credFilesPresent[c.id] = false; });
    })
  );
}

/* ---------- Summary (count + timeline) ---------- */
const credCountEl = $('#credCount');
const credTimelineEl = $('#credTimeline');
const credStatusEl = $('#credStatus');

function initCredentialSummary() {
  const count = CREDENTIALS.length;
  const years = CREDENTIALS
    .map(function (c) {
      const m = c.date.match(/(20\d{2})/);
      return m ? parseInt(m[1], 10) : null;
    })
    .filter(Boolean);
  credCountEl.textContent = String(count);
  if (years.length) {
    credTimelineEl.textContent = Math.min.apply(null, years) + '–' + Math.max.apply(null, years);
  } else {
    credTimelineEl.textContent = '–';
  }
  credStatusEl.textContent = count + ' credentials in the library';
}

/* ---------- Rendering ---------- */
const credGrid = $('#credGrid');
const credEmpty = $('#credEmpty');
const credSearchInput = $('#credSearchInput');

function filteredCredentials() {
  const q = credState.query.trim().toLowerCase();
  return CREDENTIALS.filter(function (c) {
    const inCategory = credState.filter === 'all' || c.category === credState.filter;
    let inQuery = !q;
    if (q) {
      const hay = (c.title + ' ' + (c.issuer || '') + ' ' + CATEGORY_LABELS[c.category]).toLowerCase();
      inQuery = hay.indexOf(q) !== -1;
    }
    return inCategory && inQuery;
  });
}

function credCardHtml(c) {
  const kicker = c.type ? 'certificate of attendance' : 'certification';
  const kickerClass = c.type ? 'cred-card-kicker attendance' : 'cred-card-kicker';

  let meta = '';
  if (c.issuer) meta += '<div><dt>issuer</dt><dd>' + escapeHtml(c.issuer) + '</dd></div>';
  meta += '<div><dt>date</dt><dd>' + escapeHtml(c.date) + '</dd></div>';
  if (c.duration) meta += '<div><dt>duration</dt><dd>' + escapeHtml(c.duration) + '</dd></div>';

  const verified = c.verification
    ? '<span class="cred-card-verified"><svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg>Verified</span>'
    : '';

  const actions = fileAvailable(c.id)
    ? '<div class="cred-card-actions">' +
        '<button class="btn btn-sm" type="button" data-view-cert="' + c.id + '">' +
          '<svg class="icon" aria-hidden="true"><use href="#i-eye"></use></svg>View Certificate</button>' +
        '<a class="btn btn-sm btn-ghost" href="' + escapeHtml(c.file) + '" download="' + escapeHtml(c.downloadName) + '">' +
          '<svg class="icon" aria-hidden="true"><use href="#i-download"></use></svg>Download</a>' +
      '</div>'
    : '<p class="cred-card-pending">pdf pending — upload ' + escapeHtml(c.file) + '</p>';

  return (
    '<article class="cred-card" role="listitem" tabindex="0" data-view-cert="' + c.id + '" aria-label="' +
      escapeHtml(c.title) + ' — open certificate viewer">' +
      '<div class="cred-card-top">' +
        '<span class="cred-card-icon"><svg class="icon" aria-hidden="true"><use href="#i-award"></use></svg></span>' +
        '<span class="cred-card-id mono">' + pad2(c.num) + '</span>' +
      '</div>' +
      '<p class="' + kickerClass + '">' + escapeHtml(kicker) + '</p>' +
      '<h3 class="cred-card-title">' + escapeHtml(c.title) + '</h3>' +
      '<dl class="cred-card-meta">' + meta + '</dl>' +
      '<div class="cred-card-footer">' +
        '<span class="cred-card-category">' + escapeHtml(CATEGORY_LABELS[c.category]) + '</span>' + verified +
      '</div>' +
      actions +
    '</article>'
  );
}

function renderCredentials() {
  const items = filteredCredentials();
  const html = items.map(credCardHtml).join('');
  credEmpty.hidden = items.length > 0;
  credStatusEl.textContent = items.length + ' of ' + CREDENTIALS.length + ' credentials shown';

  if (prefersReducedMotion || !credGrid.classList.contains('is-swapping')) {
    credGrid.innerHTML = html || '';
    return;
  }
  window.setTimeout(function () {
    credGrid.innerHTML = html || '';
    credGrid.classList.remove('is-swapping');
  }, 150);
}

function queueRenderCredentials() {
  if (prefersReducedMotion) {
    renderCredentials();
    return;
  }
  credGrid.classList.add('is-swapping');
  window.setTimeout(renderCredentials, 60);
}

/* ---------- Filters + search ---------- */
$$('.cred-filter').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.classList.contains('is-active')) return;
    $$('.cred-filter').forEach(function (b) {
      b.classList.remove('is-active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-pressed', 'true');
    credState.filter = btn.dataset.filter;
    queueRenderCredentials();
  });
});

let credSearchTimer = null;
credSearchInput.addEventListener('input', function () {
  clearTimeout(credSearchTimer);
  credState.query = credSearchInput.value;
  credSearchTimer = window.setTimeout(queueRenderCredentials, 120);
});

/* ---------- Certificate viewer modal ---------- */
const credModal = $('#credModal');
const credModalCloseBtn = $('#credModalCloseBtn');
const credPreview = $('#credPreview');
const credPreviewFrame = $('#credPreviewFrame');
const credOpenPdfBtn = $('#credOpenPdfBtn');
const credDlPdfBtn = $('#credDlPdfBtn');
const credModalKicker = $('#credModalKicker');
const credModalTitleEl = $('#credModalTitle');
const credViewerList = $('#credViewerList');
const credViewerVerify = $('#credViewerVerify');
const credViewerPending = $('#credViewerPending');
const credModalDownloadBtn = $('#credModalDownloadBtn');
let credLastFocused = null;

function openPdfViewer(c) {
  if (!c) return;

  const has = c.fileCheck !== false ? fileAvailable(c.id) : true;
  const num = pad2(c.num);
  const kicker = c.kind === 'I'
    ? 'INTERNSHIP / I.' + num
    : ((c.type ? 'ATTENDANCE / ' : 'CERTIFICATION / ') + 'C.' + num);

  credModalKicker.textContent = kicker;
  credModalTitleEl.textContent = c.title;

  let rows = '';
  if (c.type) rows += '<dt>type</dt><dd>' + escapeHtml(c.type) + '</dd>';
  if (c.issuer) rows += '<dt>issuer</dt><dd>' + escapeHtml(c.issuer) + '</dd>';
  if (c.organization) rows += '<dt>organization</dt><dd>' + escapeHtml(c.organization) + '</dd>';
  rows += '<dt>date</dt><dd>' + escapeHtml(c.date) + '</dd>';
  if (c.category) rows += '<dt>category</dt><dd>' + escapeHtml(CATEGORY_LABELS[c.category]) + '</dd>';
  if (c.duration) rows += '<dt>duration</dt><dd>' + escapeHtml(c.duration) + '</dd>';
  credViewerList.innerHTML = rows;

  if (c.verification) {
    credViewerVerify.hidden = false;
    credViewerVerify.innerHTML =
      '<a class="cred-viewer-verify" href="' + escapeHtml(c.verification) + '" target="_blank" rel="noopener noreferrer">' +
      '<svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>Verify Credential</a>';
  } else {
    credViewerVerify.hidden = true;
  }

  if (has) {
    credViewerPending.hidden = true;
    credPreview.hidden = false;
    credModalDownloadBtn.hidden = false;
    credPreviewFrame.src = c.file;
    credOpenPdfBtn.href = c.file;
    credDlPdfBtn.href = c.file;
    credDlPdfBtn.setAttribute('download', c.downloadName);
    credModalDownloadBtn.href = c.file;
    credModalDownloadBtn.setAttribute('download', c.downloadName);
  } else {
    credPreview.hidden = true;
    credModalDownloadBtn.hidden = true;
    credPreviewFrame.removeAttribute('src');
    credOpenPdfBtn.href = '#';
    credDlPdfBtn.href = '#';
    credModalDownloadBtn.href = '#';
    credViewerPending.hidden = false;
  }

  credLastFocused = document.activeElement;
  credModal.hidden = false;
  credModal.classList.add('open');
  document.body.classList.add('modal-open');
  credModalCloseBtn.focus();
}

function openCredential(id) {
  const c = CREDENTIALS.find(function (x) { return x.id === id; });
  if (c) openPdfViewer(c);
}

function openInternship(id) {
  const i = INTERNSHIPS.find(function (x) { return x.id === id; });
  if (!i) return;
  openPdfViewer({
    id: i.id,
    num: i.num,
    kind: 'I',
    title: i.role,
    issuer: i.company,
    date: i.startDate + ' – ' + i.endDate,
    duration: i.duration,
    file: i.certificate,
    downloadName: i.downloadName,
    fileCheck: true
  });
}

function closeCredential() {
  credModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  credPreviewFrame.removeAttribute('src');
  setTimeout(function () {
    if (!credModal.classList.contains('open')) credModal.hidden = true;
  }, 240);
  if (credLastFocused && credLastFocused.focus) credLastFocused.focus();
}

credModalCloseBtn.addEventListener('click', closeCredential);

credModal.addEventListener('click', function (event) {
  if (event.target === credModal) closeCredential();
});

document.addEventListener('keydown', function (event) {
  if (!credModal.classList.contains('open')) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeCredential();
    return;
  }
  if (event.key !== 'Tab') return;

  const focusables = Array.from(credModal.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  ));
  if (!focusables.length) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

/* Card + view-certificate triggers */
credGrid.addEventListener('click', function (event) {
  if (event.target.closest('a')) return; // download links keep default behavior
  const card = event.target.closest('.cred-card');
  if (card) openCredential(card.dataset.viewCert);
});

credGrid.addEventListener('keydown', function (event) {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const card = event.target.closest('.cred-card');
  if (card && event.target === card) {
    event.preventDefault();
    openCredential(card.dataset.viewCert);
  }
});

/* ---------- Internships: render + triggers ---------- */
const expList = $('#expList');

function expCardHtml(int) {
  return (
    '<article class="exp-card" role="listitem">' +
      '<div class="exp-topbar">' +
        '<span class="exp-num mono">' + pad2(int.num) + '</span>' +
        '<span class="exp-period mono">' +
          '<span>' + escapeHtml(int.displayStart) + '</span>' +
          '<span class="exp-period-arrow" aria-hidden="true">&rarr;</span>' +
          '<span>' + escapeHtml(int.displayEnd) + '</span>' +
          '<span class="exp-chip">' + escapeHtml(int.duration) + '</span>' +
        '</span>' +
      '</div>' +
      '<h3 class="exp-role">' + escapeHtml(int.role) + '</h3>' +
      '<p class="exp-company">' + escapeHtml(int.company) + '</p>' +
      '<p class="exp-desc">' + escapeHtml(int.description) + '</p>' +
      '<div class="exp-actions">' +
        '<button class="btn btn-sm btn-ghost" type="button" data-int-cert="' + int.id + '">' +
          '<svg class="icon" aria-hidden="true"><use href="#i-eye"></use></svg>View Internship Certificate</button>' +
        '<a class="btn btn-sm btn-ghost" href="' + escapeHtml(int.certificate) + '" target="_blank" rel="noopener noreferrer">' +
          '<svg class="icon" aria-hidden="true"><use href="#i-external"></use></svg>Open PDF</a>' +
        '<a class="btn btn-sm btn-ghost" href="' + escapeHtml(int.certificate) + '" download="' + escapeHtml(int.downloadName) + '">' +
          '<svg class="icon" aria-hidden="true"><use href="#i-download"></use></svg>Download</a>' +
      '</div>' +
    '</article>'
  );
}

function renderInternships() {
  if (!expList) return;
  expList.innerHTML = INTERNSHIPS.map(expCardHtml).join('');
}

expList.addEventListener('click', function (event) {
  if (event.target.closest('a')) return;
  const btn = event.target.closest('button[data-int-cert]');
  if (btn) openInternship(btn.dataset.intCert);
});

/* ---------- Credentials init ---------- */
initCredentialSummary();
renderInternships();
renderCredentials();

checkCredentialFiles().then(function () {
  renderCredentials(); // refresh pending/download states from live HEAD results
});