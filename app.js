// State management for GitHub Foundations Certification Prep (GH-900)
// Complete 75-Question Assessment Engine with LocalStorage, Real-time Search, and Weighted Analytics

// Official GitHub Foundations Exam Domain Blueprint & Weightings
const DOMAIN_DEFINITIONS = [
  {
    key: "D1",
    name: "Domain 1: Introduction to Git and GitHub",
    shortName: "Introduction to Git & GitHub",
    weight: 0.22, // 22%
    weightDisplay: "22%"
  },
  {
    key: "D2",
    name: "Domain 2: Working with GitHub Repositories",
    shortName: "Working with GitHub Repositories",
    weight: 0.08, // 8%
    weightDisplay: "8%"
  },
  {
    key: "D3",
    name: "Domain 3: Collaboration Features",
    shortName: "Collaboration Features (PRs & Issues)",
    weight: 0.30, // 30%
    weightDisplay: "30%"
  },
  {
    key: "D4",
    name: "Domain 4: Modern Development",
    shortName: "Modern Dev (Actions, Codespaces, Copilot)",
    weight: 0.13, // 13%
    weightDisplay: "13%"
  },
  {
    key: "D5",
    name: "Domain 5: Project Management",
    shortName: "Project Management (Projects & Milestones)",
    weight: 0.07, // 7%
    weightDisplay: "7%"
  },
  {
    key: "D6",
    name: "Domain 6: Privacy, Security, and Administration",
    shortName: "Privacy, Security & Administration",
    weight: 0.10, // 10%
    weightDisplay: "10%"
  },
  {
    key: "D7",
    name: "Domain 7: Benefits of GitHub Community",
    shortName: "Benefits of GitHub Community",
    weight: 0.10, // 10%
    weightDisplay: "10%"
  }
];

// Modular 5-Session Configuration (15 questions each = 75 total questions)
const sessionConfigs = [
  {
    id: 1,
    title: "Session 1: Git & Repos",
    theme: "theme-blue",
    icons: [
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline>',
      '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
      '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>'
    ],
    getQuestions: () => window.session1Questions || []
  },
  {
    id: 2,
    title: "Session 2: Collaboration",
    theme: "theme-dark",
    icons: [
      '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>'
    ],
    getQuestions: () => window.session2Questions || []
  },
  {
    id: 3,
    title: "Session 3: Modern Dev",
    theme: "theme-indigo",
    icons: [
      '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
      '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
      '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>'
    ],
    getQuestions: () => window.session3Questions || []
  },
  {
    id: 4,
    title: "Session 4: Security & Admin",
    theme: "theme-teal",
    icons: [
      '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
      '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>'
    ],
    getQuestions: () => window.session4Questions || []
  },
  {
    id: 5,
    title: "Session 5: Mock Final Exam",
    theme: "theme-amber",
    icons: [
      '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
      '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>'
    ],
    getQuestions: () => window.session5Questions || []
  }
];

const STORAGE_KEY = 'gh_foundations_prep_v2';

let currentSession = 1;
const state = {
  answers: {},
  submitted: {},
  scores: {},
  filter: 'all',
  searchQuery: ''
};

// Exam Simulation Timer (45 minutes per practice batch)
let timerSeconds = 45 * 60;
let timerInterval = null;
let timerRunning = true;
let timerSaveCounter = 0;

// DOM Element references
const foldersTrackEl = document.getElementById('foldersTrack');
const totalQuestionsHeaderEl = document.getElementById('totalQuestionsHeader');
const sessionTitleEl = document.getElementById('sessionTitle');
const answeredProgressBadge = document.getElementById('answeredProgressBadge');
const questionsContainer = document.getElementById('questionsContainer');
const submitBtn = document.getElementById('submitBtn');
const submitBtnText = document.getElementById('submitBtnText');
const timerDisplay = document.getElementById('timerDisplay');
const filterChipsContainer = document.getElementById('filterChipsContainer');
const searchBarWrapper = document.getElementById('searchBarWrapper');
const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const searchToggleBtn = document.getElementById('searchToggleBtn');

// Initialize Application
function initApp() {
  // Setup default state structure
  sessionConfigs.forEach(conf => {
    state.answers[conf.id] = {};
    state.submitted[conf.id] = false;
    state.scores[conf.id] = null;
  });

  // Load persistent progress from LocalStorage
  loadStateFromStorage();

  updateTotalHeaderCount();
  renderFoldersCarousel();
  setupTimer();
  attachEvents();
  renderSession();
  updateFolderBadges();
  
  setTimeout(updateCarouselArrows, 100);
}

// LocalStorage Persistence Handlers
function saveStateToStorage() {
  try {
    const data = {
      answers: state.answers,
      submitted: state.submitted,
      scores: state.scores,
      currentSession: currentSession,
      timerSeconds: timerSeconds,
      timerRunning: timerRunning,
      lastSaved: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      if (parsed.answers) {
        Object.keys(parsed.answers).forEach(id => {
          state.answers[id] = parsed.answers[id] || {};
        });
      }
      if (parsed.submitted) {
        Object.keys(parsed.submitted).forEach(id => {
          state.submitted[id] = Boolean(parsed.submitted[id]);
        });
      }
      if (parsed.scores) {
        Object.keys(parsed.scores).forEach(id => {
          state.scores[id] = parsed.scores[id] || null;
        });
      }
      if (parsed.currentSession && sessionConfigs.some(c => c.id === parsed.currentSession)) {
        currentSession = parsed.currentSession;
      }
      if (typeof parsed.timerSeconds === 'number' && parsed.timerSeconds > 0) {
        timerSeconds = parsed.timerSeconds;
      }
      if (typeof parsed.timerRunning === 'boolean') {
        timerRunning = parsed.timerRunning;
      }
    }
  } catch (e) {
    console.warn('LocalStorage load error:', e);
  }
}

// Helper: All 75 Questions Aggregator
function getAllAssessmentQuestions() {
  let list = [];
  sessionConfigs.forEach(conf => {
    list = list.concat(conf.getQuestions());
  });
  return list;
}

// Question Weighting Calculation
function getQuestionExamWeight(q) {
  const domainDef = DOMAIN_DEFINITIONS.find(d => d.name === q.domain);
  if (!domainDef) {
    return { percentStr: '1.3%', pointsStr: '13' };
  }
  const allQuestions = getAllAssessmentQuestions();
  const domainQuestions = allQuestions.filter(item => item.domain === q.domain);
  const count = domainQuestions.length || 1;
  const weightPct = ((domainDef.weight / count) * 100).toFixed(1);
  const scaledPts = Math.round((domainDef.weight / count) * 1000);
  return {
    percentStr: `${weightPct}%`,
    pointsStr: `${scaledPts}`
  };
}

function getSessionConfig(sessionId) {
  return sessionConfigs.find(c => c.id === sessionId) || sessionConfigs[0];
}

function getQuestions(sessionId) {
  const conf = getSessionConfig(sessionId);
  return conf.getQuestions();
}

function updateTotalHeaderCount() {
  const total = getAllAssessmentQuestions().length;
  if (totalQuestionsHeaderEl) {
    totalQuestionsHeaderEl.textContent = `Official Assessment • ${total} Questions`;
  }
}

// Dynamically Render Horizontal Folder Carousel
function renderFoldersCarousel() {
  foldersTrackEl.innerHTML = '';
  
  if (sessionConfigs.length > 2) {
    foldersTrackEl.classList.add('carousel-mode');
  } else {
    foldersTrackEl.classList.remove('carousel-mode');
  }

  sessionConfigs.forEach(conf => {
    const qList = conf.getQuestions();
    const isActive = conf.id === currentSession;

    const card = document.createElement('div');
    card.className = `folder-card ${conf.theme} ${isActive ? 'active' : ''}`;
    card.id = `folderCard-${conf.id}`;
    card.onclick = () => switchSession(conf.id);

    const tabSheetsHtml = conf.icons.map(iconSvg => `
      <div class="folder-tab-sheet">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          ${iconSvg}
        </svg>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="folder-inner">
        <div class="folder-paper-tabs">
          ${tabSheetsHtml}
        </div>
        <div class="folder-front-pocket">
          <div class="folder-title">${escapeHtml(conf.title)}</div>
          <div class="folder-meta">
            <span>${qList.length} Questions</span>
            <span class="folder-status-pill" id="folderBadge-${conf.id}">0/${qList.length}</span>
          </div>
        </div>
      </div>
    `;

    foldersTrackEl.appendChild(card);
  });
}

// Carousel Scroll Navigation
function scrollCarousel(direction) {
  const scrollAmount = 205 * direction;
  foldersTrackEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function updateCarouselArrows() {
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const fadeLeft = document.getElementById('fadeEdgeLeft');
  const fadeRight = document.getElementById('fadeEdgeRight');
  if (!foldersTrackEl) return;

  const maxScroll = foldersTrackEl.scrollWidth - foldersTrackEl.clientWidth;
  
  if (maxScroll <= 5) {
    if (prevBtn) prevBtn.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
    if (fadeLeft) fadeLeft.style.opacity = '0';
    if (fadeRight) fadeRight.style.opacity = '0';
    return;
  }

  const currentScroll = foldersTrackEl.scrollLeft;

  if (currentScroll <= 6) {
    if (prevBtn) prevBtn.classList.add('hidden');
    if (fadeLeft) fadeLeft.style.opacity = '0';
  } else {
    if (prevBtn) prevBtn.classList.remove('hidden');
    if (fadeLeft) fadeLeft.style.opacity = '1';
  }

  if (currentScroll >= maxScroll - 6) {
    if (nextBtn) nextBtn.classList.add('hidden');
    if (fadeRight) fadeRight.style.opacity = '0';
  } else {
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (fadeRight) fadeRight.style.opacity = '1';
  }
}

// Timer Logic
function setupTimer() {
  function tick() {
    if (!timerRunning) return;
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "00:00 (Time Expired)";
      return;
    }
    timerSeconds--;
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    // Periodically save timer every 10 seconds to localStorage
    timerSaveCounter++;
    if (timerSaveCounter >= 10) {
      timerSaveCounter = 0;
      saveStateToStorage();
    }
  }
  tick();
  timerInterval = setInterval(tick, 1000);
}

function toggleTimer() {
  timerRunning = !timerRunning;
  const dot = document.querySelector('.timer-dot');
  if (dot) {
    dot.style.background = timerRunning ? '#0969da' : '#94a3b8';
  }
  saveStateToStorage();
}

// Switch Active Session
function switchSession(newSessionId) {
  if (currentSession === newSessionId) return;
  currentSession = newSessionId;
  state.filter = 'all';

  sessionConfigs.forEach(conf => {
    const el = document.getElementById(`folderCard-${conf.id}`);
    if (el) {
      if (conf.id === currentSession) {
        el.classList.add('active');
        el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        el.classList.remove('active');
      }
    }
  });

  saveStateToStorage();
  renderSession();
  updateFolderBadges();
  
  document.querySelector('.app-bottom-section').scrollIntoView({ behavior: 'smooth' });
}

// Update Badges on All Session Folders
function updateFolderBadges() {
  sessionConfigs.forEach(conf => {
    const qList = conf.getQuestions();
    const ansMap = state.answers[conf.id] || {};
    const isSub = state.submitted[conf.id];
    const badgeEl = document.getElementById(`folderBadge-${conf.id}`);
    
    if (badgeEl) {
      if (isSub) {
        const score = state.scores[conf.id];
        badgeEl.textContent = `${score.correct}/${qList.length} (${score.percent}%)`;
      } else {
        const answeredCount = Object.keys(ansMap).filter(k => {
          const val = ansMap[k];
          return Array.isArray(val) ? val.length > 0 : Boolean(val);
        }).length;
        badgeEl.textContent = `${answeredCount}/${qList.length}`;
      }
    }
  });
}

// Search Bar Controls & Real-time Filter
function toggleSearchBar() {
  if (!searchBarWrapper) return;
  const isHidden = searchBarWrapper.style.display === 'none';
  if (isHidden) {
    searchBarWrapper.style.display = 'flex';
    if (searchToggleBtn) searchToggleBtn.classList.add('active');
    if (searchInput) {
      searchInput.focus();
    }
  } else {
    searchBarWrapper.style.display = 'none';
    if (searchToggleBtn) searchToggleBtn.classList.remove('active');
    clearSearch();
  }
}

function handleSearchInput(e) {
  const query = e.target.value;
  state.searchQuery = query;
  if (searchClearBtn) {
    searchClearBtn.style.display = query ? 'flex' : 'none';
  }
  renderSession();
}

function clearSearch() {
  if (searchInput) searchInput.value = '';
  if (searchClearBtn) searchClearBtn.style.display = 'none';
  state.searchQuery = '';
  renderSession();
}

// Render Questions List
function renderSession() {
  const currentConf = getSessionConfig(currentSession);
  const questions = currentConf.getQuestions();
  const isSubmitted = state.submitted[currentSession];
  const userAnswers = state.answers[currentSession] || {};

  sessionTitleEl.textContent = currentConf.title;

  const answeredCount = Object.keys(userAnswers).filter(k => {
    const val = userAnswers[k];
    return Array.isArray(val) ? val.length > 0 : Boolean(val);
  }).length;

  answeredProgressBadge.textContent = `${answeredCount}/${questions.length} Answered`;

  renderFilterChips();

  questionsContainer.innerHTML = '';

  // Minimalist Result Summary Card
  if (isSubmitted) {
    const score = state.scores[currentSession];
    const isPassed = score.percent >= 70;
    const resultCard = document.createElement('div');
    resultCard.className = 'result-summary-card';
    resultCard.innerHTML = `
      <div class="result-card-top">
        <div>
          <div style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${escapeHtml(currentConf.title)}</div>
          <div class="result-score-large">${score.correct} / ${questions.length} <span>(${score.percent}%)</span></div>
        </div>
        <div class="result-status-badge ${isPassed ? 'passed' : 'failed'}">
          ${isPassed ? 'PASSED' : 'REVIEW REQUIRED'}
        </div>
      </div>
      <div class="result-progress-track">
        <div class="result-progress-fill" style="width: ${score.percent}%;"></div>
      </div>
      <div class="result-meta-text">
        <span>Passing Standard: 70% (700/1000 scaled)</span>
        <span>${score.wrong} questions to review</span>
      </div>
      <div class="result-actions-row">
        <button class="result-action-pill-btn primary" onclick="showOverallSummaryModal()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          Exam Analytics & Weighted Summary
        </button>
        <button class="result-action-pill-btn" onclick="retakeSession(${currentSession})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
          Reset Session ${currentSession}
        </button>
      </div>
    `;
    questionsContainer.appendChild(resultCard);
  }

  // Filter Questions based on Search Query and Status Chips
  const query = (state.searchQuery || '').trim().toLowerCase();
  let renderedCount = 0;

  questions.forEach((q, index) => {
    const userAnswer = userAnswers[q.id];
    let isCorrect = false;

    if (isSubmitted) {
      if (q.type === 'multiple') {
        const correctSet = new Set(q.correctAnswer);
        const userSet = new Set(userAnswer || []);
        isCorrect = correctSet.size === userSet.size && [...correctSet].every(item => userSet.has(item));
      } else {
        isCorrect = userAnswer === q.correctAnswer;
      }

      if (state.filter === 'wrong' && isCorrect) return;
      if (state.filter === 'correct' && !isCorrect) return;
    }

    // Real-Time Search Match Filtering
    if (query) {
      const qTextMatch = (q.question || '').toLowerCase().includes(query);
      const qBadgeMatch = (q.domainBadge || '').toLowerCase().includes(query);
      const qDomainMatch = (q.domain || '').toLowerCase().includes(query);
      const qOptionsMatch = q.options.some(opt => (opt.text || '').toLowerCase().includes(query));
      const qExplMatch = isSubmitted && q.explanation ? 
        ((q.explanation.summary || '').toLowerCase().includes(query) || (q.explanation.analysis || '').toLowerCase().includes(query)) : false;

      if (!qTextMatch && !qBadgeMatch && !qDomainMatch && !qOptionsMatch && !qExplMatch) {
        return;
      }
    }

    renderedCount++;

    const weightInfo = getQuestionExamWeight(q);
    const card = document.createElement('div');
    card.className = `question-item-card ${isSubmitted ? (isCorrect ? 'review-correct' : 'review-wrong') : ''}`;
    card.id = `q-card-${q.id}`;

    let statusBadgeHtml = '';
    if (isSubmitted) {
      statusBadgeHtml = isCorrect 
        ? `<div class="q-status-icon correct">● Correct</div>`
        : `<div class="q-status-icon wrong">● Incorrect</div>`;
    }

    const isMulti = q.type === 'multiple';

    let optionsHtml = '';
    q.options.forEach(opt => {
      let isSelected = false;
      if (isMulti) {
        isSelected = Array.isArray(userAnswer) && userAnswer.includes(opt.key);
      } else {
        isSelected = userAnswer === opt.key;
      }

      let extraReviewClass = '';
      let tagHtml = '';
      if (isSubmitted) {
        const isThisKeyCorrect = isMulti ? q.correctAnswer.includes(opt.key) : q.correctAnswer === opt.key;
        if (isThisKeyCorrect) {
          extraReviewClass = 'is-correct-target';
          tagHtml = `<span class="option-tag">Correct Key</span>`;
        } else if (isSelected && !isThisKeyCorrect) {
          extraReviewClass = 'is-wrong-selection';
          tagHtml = `<span class="option-tag">Your Selection</span>`;
        }
      }

      optionsHtml += `
        <div class="option-pill ${isMulti ? 'multiple' : ''} ${isSelected ? 'selected' : ''} ${extraReviewClass}"
             onclick="handleOptionSelect(${q.id}, '${opt.key}', ${isMulti})">
          <div class="option-indicator">
            <div class="option-indicator-dot"></div>
          </div>
          <div class="option-text">
            <span class="option-key">${opt.key}.</span> ${escapeHtml(opt.text)}
          </div>
          ${tagHtml}
        </div>
      `;
    });

    let explanationHtml = '';
    if (isSubmitted) {
      explanationHtml = `
        <div class="explanation-box">
          <div class="explanation-header">Objective Analysis</div>
          <div class="explanation-section"><strong>Summary:</strong> ${escapeHtml(q.explanation.summary)}</div>
          <div class="explanation-section"><strong>Details:</strong> ${escapeHtml(q.explanation.analysis)}</div>
          ${q.explanation.examTip ? `<div class="exam-objective-block"><strong>Exam Objective:</strong> ${escapeHtml(q.explanation.examTip)}</div>` : ''}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="question-header">
        <div class="q-badge-wrap">
          <span class="q-num-badge">Q${index + 1}</span>
          <span class="q-domain-badge">${escapeHtml(q.domainBadge)}</span>
          <span class="q-weight-badge" title="Estimated weight in exam: ~${weightInfo.pointsStr} scaled points">Weight: ~${weightInfo.percentStr}</span>
        </div>
        ${statusBadgeHtml}
      </div>
      <div class="question-text">${escapeHtml(q.question)}</div>
      <div class="options-group">
        ${optionsHtml}
      </div>
      ${explanationHtml}
    `;

    questionsContainer.appendChild(card);
  });

  // Empty Search Results State
  if (renderedCount === 0) {
    const emptyCard = document.createElement('div');
    emptyCard.className = 'search-empty-state';
    emptyCard.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <p style="margin-bottom: 8px;">No questions matched "<strong>${escapeHtml(state.searchQuery)}</strong>"</p>
      <button class="filter-chip" onclick="clearSearch()" style="margin: 0 auto; display: inline-flex;">Clear Search</button>
    `;
    questionsContainer.appendChild(emptyCard);
  }

  // Next / Submit Button Logic
  if (isSubmitted) {
    submitBtn.classList.add('secondary');
    const currentIndex = sessionConfigs.findIndex(c => c.id === currentSession);
    const hasNext = currentIndex < sessionConfigs.length - 1;
    if (hasNext) {
      const nextConf = sessionConfigs[currentIndex + 1];
      submitBtnText.textContent = `Proceed to ${nextConf.title.split(':')[0]}`;
    } else {
      submitBtnText.textContent = "View Overall Exam Summary";
    }
  } else {
    submitBtn.classList.remove('secondary');
    submitBtnText.textContent = `Submit Session ${currentSession} (${answeredCount}/${questions.length})`;
  }
}

// Filter Chips
function renderFilterChips() {
  if (!state.submitted[currentSession]) {
    filterChipsContainer.style.display = 'none';
    return;
  }

  filterChipsContainer.style.display = 'flex';
  const score = state.scores[currentSession];
  const questions = getQuestions(currentSession);

  filterChipsContainer.innerHTML = `
    <div class="filter-chip ${state.filter === 'all' ? 'active' : ''}" onclick="setFilter('all')">
      All Questions (${questions.length})
    </div>
    <div class="filter-chip ${state.filter === 'wrong' ? 'active' : ''}" onclick="setFilter('wrong')">
      Incorrect (${score.wrong})
    </div>
    <div class="filter-chip ${state.filter === 'correct' ? 'active' : ''}" onclick="setFilter('correct')">
      Correct (${score.correct})
    </div>
  `;
}

function setFilter(filterType) {
  state.filter = filterType;
  renderSession();
}

function handleOptionSelect(questionId, optionKey, isMulti) {
  if (state.submitted[currentSession]) {
    return;
  }

  const userAnswers = state.answers[currentSession];

  if (isMulti) {
    let currentArr = userAnswers[questionId] || [];
    if (!Array.isArray(currentArr)) currentArr = [];
    if (currentArr.includes(optionKey)) {
      userAnswers[questionId] = currentArr.filter(k => k !== optionKey);
    } else {
      userAnswers[questionId] = [...currentArr, optionKey];
    }
  } else {
    userAnswers[questionId] = optionKey;
  }

  saveStateToStorage();
  renderSession();
  updateFolderBadges();
}

// Session Submission Handler with Custom Modal Replacement
function handleSubmit() {
  if (state.submitted[currentSession]) {
    const currentIndex = sessionConfigs.findIndex(c => c.id === currentSession);
    const hasNext = currentIndex < sessionConfigs.length - 1;
    if (hasNext) {
      switchSession(sessionConfigs[currentIndex + 1].id);
    } else {
      showOverallSummaryModal();
    }
    return;
  }

  const questions = getQuestions(currentSession);
  const userAnswers = state.answers[currentSession];
  const answeredCount = Object.keys(userAnswers).filter(k => {
    const val = userAnswers[k];
    return Array.isArray(val) ? val.length > 0 : Boolean(val);
  }).length;

  if (answeredCount < questions.length) {
    showConfirm(
      'Submit Incomplete Session?',
      `You have answered ${answeredCount} of ${questions.length} questions in Session ${currentSession}. Do you want to submit and review your score now?`,
      () => processSubmission(questions, userAnswers),
      null,
      'Submit Anyway',
      'confirm'
    );
    return;
  }

  processSubmission(questions, userAnswers);
}

function processSubmission(questions, userAnswers) {
  let correct = 0;
  questions.forEach(q => {
    const uAns = userAnswers[q.id];
    if (q.type === 'multiple') {
      const correctSet = new Set(q.correctAnswer);
      const userSet = new Set(uAns || []);
      if (correctSet.size === userSet.size && [...correctSet].every(item => userSet.has(item))) {
        correct++;
      }
    } else {
      if (uAns === q.correctAnswer) {
        correct++;
      }
    }
  });

  const percent = Math.round((correct / questions.length) * 100);
  state.scores[currentSession] = {
    correct,
    wrong: questions.length - correct,
    percent
  };
  state.submitted[currentSession] = true;

  saveStateToStorage();
  renderSession();
  updateFolderBadges();

  document.querySelector('.app-bottom-section').scrollIntoView({ behavior: 'smooth' });

  // If all sessions are now completed, offer overall summary
  const allSubmitted = sessionConfigs.every(c => state.submitted[c.id]);
  if (allSubmitted) {
    setTimeout(() => {
      showAlert(
        'Assessment Complete!',
        'You have submitted all 5 sessions of the GitHub Foundations assessment. Click the bar chart icon or review your weighted summary to inspect your domain readiness.',
        'success'
      );
    }, 400);
  }
}

// Reset Session (Per Session)
function retakeSession(sessionId = currentSession) {
  showConfirm(
    `Reset Session ${sessionId}?`,
    `Are you sure you want to reset Session ${sessionId}? All answered questions and scores for this session will be cleared. Other sessions will remain safely saved.`,
    () => {
      state.answers[sessionId] = {};
      state.submitted[sessionId] = false;
      state.scores[sessionId] = null;
      state.filter = 'all';
      saveStateToStorage();
      renderSession();
      updateFolderBadges();
      showAlert('Session Reset', `Session ${sessionId} has been cleared.`, 'info');
    },
    null,
    'Reset This Session',
    'warning'
  );
}

// Reset All Sessions (Global Reset)
function resetAllSessions() {
  showConfirm(
    'Reset All 5 Practice Sessions?',
    'This will clear all answers, scores, and review progress across all 75 questions in your local storage. Are you sure you want to start completely fresh?',
    () => {
      sessionConfigs.forEach(conf => {
        state.answers[conf.id] = {};
        state.submitted[conf.id] = false;
        state.scores[conf.id] = null;
      });
      state.filter = 'all';
      timerSeconds = 45 * 60;
      saveStateToStorage();
      renderSession();
      updateFolderBadges();
      showAlert('All Sessions Reset', 'All 75 assessment questions have been reset to fresh state.', 'info');
    },
    null,
    'Reset Everything',
    'warning'
  );
}

// Jump to First Unanswered Question
function jumpToUnanswered() {
  const questions = getQuestions(currentSession);
  const userAnswers = state.answers[currentSession];
  
  for (let q of questions) {
    const val = userAnswers[q.id];
    const isAnswered = Array.isArray(val) ? val.length > 0 : Boolean(val);
    if (!isAnswered) {
      const el = document.getElementById(`q-card-${q.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.borderColor = '#0969da';
        setTimeout(() => {
          el.style.borderColor = '';
        }, 1200);
      }
      return;
    }
  }

  showAlert("Session Complete", "All questions in this session have been answered. You can submit when ready.", "success");
}

// Calculate Overall Weighted Scaled Scores across all 7 Domains
function calculateOverallWeightedScores() {
  const allQuestions = getAllAssessmentQuestions();
  let totalAnswered = 0;
  let totalCorrect = 0;
  let submittedSessionsCount = 0;

  sessionConfigs.forEach(conf => {
    if (state.submitted[conf.id]) {
      submittedSessionsCount++;
    }
  });

  const domainStats = DOMAIN_DEFINITIONS.map(dDef => {
    const questionsInDomain = allQuestions.filter(q => q.domain === dDef.name);
    let answeredInDomain = 0;
    let correctInDomain = 0;

    questionsInDomain.forEach(q => {
      // Find which session this question belongs to
      for (const conf of sessionConfigs) {
        const qList = conf.getQuestions();
        if (qList.some(item => item.id === q.id)) {
          const uAns = (state.answers[conf.id] || {})[q.id];
          const hasAnswer = Array.isArray(uAns) ? uAns.length > 0 : Boolean(uAns);
          if (hasAnswer) answeredInDomain++;

          if (state.submitted[conf.id]) {
            if (q.type === 'multiple') {
              const cSet = new Set(q.correctAnswer);
              const uSet = new Set(uAns || []);
              if (cSet.size === uSet.size && [...cSet].every(item => uSet.has(item))) {
                correctInDomain++;
              }
            } else {
              if (uAns === q.correctAnswer) {
                correctInDomain++;
              }
            }
          }
          break;
        }
      }
    });

    totalAnswered += answeredInDomain;
    totalCorrect += correctInDomain;

    const totalCount = questionsInDomain.length || 1;
    const accuracyPct = Math.round((correctInDomain / totalCount) * 100);
    const weightedPoints = Math.round((correctInDomain / totalCount) * (dDef.weight * 1000));
    const maxPoints = Math.round(dDef.weight * 1000);

    let readinessClass = 'weak';
    let readinessText = 'Needs Study';
    if (accuracyPct >= 80) {
      readinessClass = 'strong';
      readinessText = 'Strong';
    } else if (accuracyPct >= 65) {
      readinessClass = 'moderate';
      readinessText = 'Moderate';
    }

    return {
      key: dDef.key,
      name: dDef.name,
      shortName: dDef.shortName,
      weight: dDef.weight,
      weightDisplay: dDef.weightDisplay,
      totalCount,
      correctCount: correctInDomain,
      accuracyPct,
      weightedPoints,
      maxPoints,
      readinessClass,
      readinessText
    };
  });

  const scaledScore = domainStats.reduce((sum, d) => sum + d.weightedPoints, 0);
  const isPassing = scaledScore >= 700;

  // Identify strengths & weaknesses
  const sortedByAccuracy = [...domainStats].sort((a, b) => b.accuracyPct - a.accuracyPct);
  const strongest = sortedByAccuracy[0];
  const weakest = sortedByAccuracy[sortedByAccuracy.length - 1];

  return {
    scaledScore,
    isPassing,
    totalQuestions: allQuestions.length,
    totalAnswered,
    totalCorrect,
    submittedSessionsCount,
    domainStats,
    strongest,
    weakest
  };
}

// Show Comprehensive Overall Exam Summary Modal
function showOverallSummaryModal() {
  const analytics = calculateOverallWeightedScores();
  
  const domainCardsHtml = analytics.domainStats.map(d => `
    <div class="summary-domain-card">
      <div class="summary-d-top">
        <div class="summary-d-title-group">
          <span class="summary-d-badge">${d.key}</span>
          <span class="summary-d-name">${escapeHtml(d.shortName)}</span>
        </div>
        <span class="summary-d-readiness ${d.readinessClass}">${d.readinessText}</span>
      </div>
      <div class="summary-d-metrics">
        <span>Score: <strong>${d.correctCount}/${d.totalCount}</strong> (${d.accuracyPct}%)</span>
        <span>Weight: <strong>${d.weightDisplay}</strong> • <strong>+${d.weightedPoints}/${d.maxPoints} pts</strong></span>
      </div>
      <div class="summary-d-bar-track">
        <div class="summary-d-bar-fill ${d.readinessClass}" style="width: ${d.accuracyPct}%;"></div>
      </div>
    </div>
  `).join('');

  const summaryHtml = `
    <div class="summary-modal-wrap">
      <!-- Scaled Score Hero Box -->
      <div class="summary-score-hero">
        <div class="summary-hero-row">
          <div>
            <div style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">GH-900 Weighted Scaled Score</div>
            <div class="summary-scaled-score">${analytics.scaledScore} <span>/ 1000 pts</span></div>
          </div>
          <div class="summary-status-pill ${analytics.isPassing ? 'pass' : 'review'}">
            ${analytics.isPassing ? 'PASSED (Exam Ready)' : 'REVIEW RECOMMENDED'}
          </div>
        </div>
        <div class="summary-progress-track">
          <div class="summary-progress-fill ${analytics.isPassing ? 'pass' : ''}" style="width: ${Math.min(100, Math.round(analytics.scaledScore / 10))}%;"></div>
        </div>
        <div class="summary-meta-grid">
          <div class="summary-meta-cell">
            <span class="summary-meta-val">${analytics.totalCorrect} / ${analytics.totalQuestions}</span>
            <span class="summary-meta-lbl">Total Correct</span>
          </div>
          <div class="summary-meta-cell">
            <span class="summary-meta-val">${analytics.submittedSessionsCount} / 5</span>
            <span class="summary-meta-lbl">Sessions Done</span>
          </div>
          <div class="summary-meta-cell">
            <span class="summary-meta-val">700 / 1000</span>
            <span class="summary-meta-lbl">Passing Line</span>
          </div>
        </div>
      </div>

      <!-- Domain Breakdown Section -->
      <div>
        <div class="summary-domains-header">
          <span>Objective Domain Breakdown</span>
          <span>Domain Weight & Accuracy</span>
        </div>
        <div class="summary-domains-list">
          ${domainCardsHtml}
        </div>
      </div>

      <!-- Strategic Cramming Advice -->
      <div class="summary-advice-box">
        <strong>Strategic Cramming Advice:</strong><br>
        • Strongest Domain: <strong>${escapeHtml(analytics.strongest.shortName)}</strong> (${analytics.strongest.accuracyPct}% accuracy).<br>
        • Priority Focus: Spend 15 minutes reviewing <strong>${escapeHtml(analytics.weakest.shortName)}</strong> (${analytics.weakest.accuracyPct}% accuracy, ${analytics.weakest.weightDisplay} of exam).<br>
        • Domain 3 (Collaboration) carries <strong>30%</strong> of the total exam weight—review PR workflows, merge types, and branch protections.
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
        <button class="result-action-pill-btn" onclick="resetAllSessions()" style="color: #dc2626;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
          Reset All 75 Questions
        </button>
      </div>
    </div>
  `;

  showCustomModal({
    title: 'Certification Performance Analytics',
    subtitle: 'GitHub Foundations (GH-900) Official Weighted Blueprint',
    content: summaryHtml,
    type: 'info',
    confirmText: 'Return to Practice',
    isWide: true
  });
}

function attachEvents() {
  submitBtn.addEventListener('click', handleSubmit);
  foldersTrackEl.addEventListener('scroll', updateCarouselArrows);
  window.addEventListener('resize', updateCarouselArrows);

  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleSearchBar();
      }
    });
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

window.addEventListener('DOMContentLoaded', initApp);
