// Reusable Modal & Dialog System for GitHub Foundations Prep
// Provides clean, accessible, animated modal dialogs replacing native alert() and confirm()
(function() {
  // Inject modal markup if not already present
  function ensureModalDOMElements() {
    if (document.getElementById('customModalBackdrop')) return;

    const modalHTML = `
      <div class="custom-modal-backdrop" id="customModalBackdrop">
        <div class="custom-modal-card" id="customModalCard" role="dialog" aria-modal="true">
          <div class="custom-modal-header">
            <div class="custom-modal-icon-wrap" id="customModalIcon">
              <!-- Injected dynamically -->
            </div>
            <div class="custom-modal-heading">
              <h3 class="custom-modal-title" id="customModalTitle">Notification</h3>
              <div class="custom-modal-subtitle" id="customModalSubtitle"></div>
            </div>
            <button class="custom-modal-close-btn" id="customModalCloseBtn" aria-label="Close modal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="custom-modal-body" id="customModalBody"></div>
          <div class="custom-modal-footer" id="customModalFooter">
            <button class="custom-modal-btn cancel" id="customModalCancelBtn">Cancel</button>
            <button class="custom-modal-btn confirm" id="customModalConfirmBtn">Confirm</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Event listeners
    const backdrop = document.getElementById('customModalBackdrop');
    const closeBtn = document.getElementById('customModalCloseBtn');

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closeModal();
      }
    });
  }

  const icons = {
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    confirm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
  };

  function closeModal() {
    const backdrop = document.getElementById('customModalBackdrop');
    if (!backdrop) return;
    backdrop.classList.remove('active');
  }

  function showModal({
    title = 'Notification',
    subtitle = '',
    content = '',
    type = 'info', // 'info', 'confirm', 'success', 'warning'
    confirmText = 'OK',
    cancelText = null,
    onConfirm = null,
    onCancel = null,
    isWide = false
  }) {
    ensureModalDOMElements();

    const backdrop = document.getElementById('customModalBackdrop');
    const cardEl = document.getElementById('customModalCard');
    const titleEl = document.getElementById('customModalTitle');
    const subtitleEl = document.getElementById('customModalSubtitle');
    const bodyEl = document.getElementById('customModalBody');
    const iconEl = document.getElementById('customModalIcon');
    const confirmBtn = document.getElementById('customModalConfirmBtn');
    const cancelBtn = document.getElementById('customModalCancelBtn');

    if (isWide) {
      cardEl.classList.add('wide');
    } else {
      cardEl.classList.remove('wide');
    }

    titleEl.textContent = title;
    subtitleEl.textContent = subtitle;
    subtitleEl.style.display = subtitle ? 'block' : 'none';

    if (typeof content === 'string') {
      bodyEl.innerHTML = content;
    } else {
      bodyEl.innerHTML = '';
      bodyEl.appendChild(content);
    }

    iconEl.className = `custom-modal-icon-wrap ${type}`;
    iconEl.innerHTML = icons[type] || icons.info;

    confirmBtn.textContent = confirmText;
    confirmBtn.className = `custom-modal-btn confirm ${type}`;
    
    // Clear and re-bind confirm action
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

    newConfirmBtn.onclick = () => {
      closeModal();
      if (typeof onConfirm === 'function') onConfirm();
    };

    // Cancel Button visibility
    if (cancelText) {
      cancelBtn.style.display = 'inline-flex';
      cancelBtn.textContent = cancelText;

      const newCancelBtn = cancelBtn.cloneNode(true);
      cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);

      newCancelBtn.onclick = () => {
        closeModal();
        if (typeof onCancel === 'function') onCancel();
      };
    } else {
      cancelBtn.style.display = 'none';
    }

    backdrop.classList.add('active');
  }

  // Global convenience helpers
  window.showCustomModal = showModal;
  window.closeCustomModal = closeModal;

  window.showAlert = function(title, message, type = 'info') {
    showModal({
      title,
      content: `<p class="modal-text-content">${message}</p>`,
      type,
      confirmText: 'Got It'
    });
  };

  window.showConfirm = function(title, message, onConfirm, onCancel, confirmText = 'Confirm', type = 'confirm') {
    showModal({
      title,
      content: `<p class="modal-text-content">${message}</p>`,
      type,
      confirmText,
      cancelText: 'Cancel',
      onConfirm,
      onCancel
    });
  };

  // Dedicated Exam Information Modal
  window.showExamGuideModal = function() {
    const guideHtml = `
      <div class="exam-guide-content">
        <div class="exam-guide-stats">
          <div class="guide-stat-box">
            <span class="guide-stat-val">700 / 1000</span>
            <span class="guide-stat-lbl">Passing Scaled Score (~70%)</span>
          </div>
          <div class="guide-stat-box">
            <span class="guide-stat-val">100 Mins</span>
            <span class="guide-stat-lbl">Exam Time (60-75 Questions)</span>
          </div>
        </div>

        <div class="exam-domains-table-wrap">
          <div class="domains-table-header">Official Objective Domains</div>
          <div class="domain-row-item">
            <span class="domain-num">D1</span>
            <span class="domain-name">Introduction to Git & GitHub</span>
            <span class="domain-pct">22%</span>
          </div>
          <div class="domain-row-item">
            <span class="domain-num">D2</span>
            <span class="domain-name">Working with GitHub Repositories</span>
            <span class="domain-pct">8%</span>
          </div>
          <div class="domain-row-item highlight">
            <span class="domain-num">D3</span>
            <span class="domain-name">Collaboration Features (Pull Requests & Issues)</span>
            <span class="domain-pct">30%</span>
          </div>
          <div class="domain-row-item">
            <span class="domain-num">D4</span>
            <span class="domain-name">Modern Development (Actions, Codespaces, Copilot)</span>
            <span class="domain-pct">13%</span>
          </div>
          <div class="domain-row-item">
            <span class="domain-num">D5</span>
            <span class="domain-name">Project Management (Projects & Milestones)</span>
            <span class="domain-pct">7%</span>
          </div>
          <div class="domain-row-item">
            <span class="domain-num">D6</span>
            <span class="domain-name">Privacy, Security & Administration (EMU & 2FA)</span>
            <span class="domain-pct">10%</span>
          </div>
          <div class="domain-row-item">
            <span class="domain-num">D7</span>
            <span class="domain-name">Benefits of GitHub Community (InnerSource & Pages)</span>
            <span class="domain-pct">10%</span>
          </div>
        </div>
      </div>
    `;

    showModal({
      title: 'GitHub Foundations (GH-900)',
      subtitle: 'Official Certification Blueprint & Scoring',
      content: guideHtml,
      type: 'info',
      confirmText: 'Start Practicing'
    });
  };
})();
