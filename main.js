/* ---------- Inline icons (no binary assets) ---------- */

const ICONS = {
    about: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="28" height="20" rx="2" fill="#dfe6f5" stroke="#0a246a" stroke-width="1.5"/>
        <circle cx="10" cy="15" r="4" fill="#0a246a"/>
        <path d="M4 24c0-4 4-6 6-6s6 2 6 6" fill="#0a246a"/>
        <rect x="18" y="11" width="9" height="2" fill="#0a246a"/>
        <rect x="18" y="15" width="9" height="2" fill="#0a246a"/>
        <rect x="18" y="19" width="6" height="2" fill="#0a246a"/>
    </svg>`,
    experience: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="12" width="26" height="15" rx="2" fill="#a06a35" stroke="#5c3a1a" stroke-width="1.5"/>
        <rect x="11" y="7" width="10" height="6" rx="1" fill="none" stroke="#5c3a1a" stroke-width="1.5"/>
        <rect x="3" y="17" width="26" height="3" fill="#5c3a1a"/>
    </svg>`,
    projects: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9c0-1.1.9-2 2-2h7l3 3h12c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9z" fill="#ffd257" stroke="#8a6400" stroke-width="1.5"/>
    </svg>`,
    lora: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="24" r="2.5" fill="#1a7a3a"/>
        <path d="M9 24a7 7 0 0 1 14 0" fill="none" stroke="#1a7a3a" stroke-width="2"/>
        <path d="M4 24a12 12 0 0 1 24 0" fill="none" stroke="#1a7a3a" stroke-width="2"/>
    </svg>`,
    contact: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="26" height="18" rx="2" fill="#ffffff" stroke="#0a246a" stroke-width="1.5"/>
        <path d="M4 8l12 9 12-9" fill="none" stroke="#0a246a" stroke-width="1.5"/>
    </svg>`
};

/* ---------- Content renderers ---------- */

function formatSections(text) {
    return text.split('\n').map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
            return `<div class="section-header">${line}</div>`;
        }
        if (trimmed === '') {
            return '<div class="line-spacer"></div>';
        }
        return `<div class="line">${line}</div>`;
    }).join('');
}

function renderAbout() {
    return `
        <div class="profile-card">
            <img src="trenton-profile.png" alt="Trenton Horner" class="profile-thumb">
            <div>
                <div class="profile-name">TRENTON HORNER</div>
                <div class="profile-role">HPC Systems Administrator I</div>
            </div>
        </div>
        ${formatSections(`[ SUMMARY ]
Cybersecurity graduate turned HPC systems administrator. Experienced with Linux systems administration, SIEM tooling (Splunk, Elastic Stack), and applying access control fundamentals through hands-on lab work.

[ EDUCATION ]
- DEGREE: B.S. in Cybersecurity
- INSTITUTION: University of South Florida (USF)
- GRADUATED: MAY 2026
- GPA: 3.85
- SCHOLARSHIPS: Florida Medallion, USF Scholars Gold Award
- KEY COURSEWORK: Linux CLI, Computer Networks, Info Security

[ CERTIFICATIONS ]
- InsightAppSec Certified Specialist (JUNE 2025)
- Oracle Cloud Infrastructure AI Foundations (SEPT 2025)
- CompTIA Security+ ce (MARCH 2026)
- Cisco CCNA (APRIL 2026)

[ TECHNICAL PROFICIENCIES ]
- PLATFORMS: Linux (Kali, Parrot, Ubuntu), Unix, Windows, iOS
- LANGUAGES: C, SQL, HTML, CSS, Python, KQL, Bash
- TOOLS: SLURM, Bash, Regex, SIEM (Splunk/Elastic), Wireshark, Ghidra, VMware`)}
    `;
}

function renderExperience() {
    return formatSections('[ PROFESSIONAL EXPERIENCE ]') + `
        <div class="exp-entry">
            <div class="exp-title">HPC Systems Administrator I</div>
            <div class="exp-sub">University of South Florida — June 2026 - Present</div>
            <ul>
                <li>Administer the GAIVI high-performance computing cluster.</li>
                <li>Manage job scheduling and resource allocation via SLURM.</li>
            </ul>
        </div>
        <div class="exp-entry">
            <div class="exp-title">App Tester &amp; AI Data Trainer</div>
            <div class="exp-sub">Uber AI Solutions — Oct 2025 - Jan 2026</div>
            <ul>
                <li>Analyzed 20+ UI/UX glitches; delivered technical feedback.</li>
                <li>Executed precise data labeling for model efficiency.</li>
            </ul>
        </div>
        <div class="exp-entry">
            <div class="exp-title">Volunteer</div>
            <div class="exp-sub">Humane Society of Tampa Bay — May 2022 - Mar 2023</div>
            <ul>
                <li>Coordinated daily routines and support protocols.</li>
            </ul>
        </div>
    `;
}

function renderProjects() {
    return formatSections('[ PROJECTS ]') + `
        <div class="project-entry">
            <div class="project-title">1. PERSONAL PORTFOLIO WEBSITE <span class="project-status status-active">ACTIVE</span></div>
            <div class="project-desc">This Y2K desktop interface, built with HTML/CSS/JS. [MAY 2025 - PRESENT]</div>
        </div>
        <div class="project-entry">
            <div class="project-title">2. SECURENET INTRANET PORTAL (CTF) <span class="project-status status-done">COMPLETED</span></div>
            <div class="project-desc">A credential-verification exercise built around client-side source code analysis. [MARCH 2026]</div>
            <a href="login.html" class="win-link-external">[ LAUNCH SECURENET PORTAL ]</a>
        </div>
        <div class="project-entry">
            <div class="project-title">3. CLOUD LORA-GPS TRACKER <span class="project-status status-progress">IN PROGRESS</span></div>
            <div class="project-desc">End-to-end IoT geographic tracking system with Firebase integration. [JAN 2026 - PRESENT]</div>
            <button class="win-link" data-target="lora">[ OPEN PROJECT LOG ]</button>
        </div>
    `;
}

/* ---------- Popup ad content renderers ---------- */

function renderCongrats() {
    return `
        <div class="popup-congrats">
            <div class="popup-congrats-headline">🎉 CONGRATULATIONS! 🎉</div>
            <div class="popup-congrats-sub">YOU ARE THE 1,000,000<sup>th</sup> VISITOR!</div>
            <button type="button" class="claim-prize-btn popup-3d-btn">CLAIM YOUR PRIZE</button>
            <div class="prize-reveal is-hidden">
                <p>Your prize: absolutely nothing! 🎉 But thanks for stopping by.</p>
            </div>
        </div>
    `;
}

function renderMarquee() {
    const text = '★ GAIVI CLUSTER: ONLINE ★ SLURM QUEUE: NOMINAL ★ UPTIME: 99.9% ★ CYBERSECURITY MODE: ENGAGED ★';
    return `<div class="popup-marquee"><div class="popup-marquee-track">${text}&nbsp;&nbsp;&nbsp;&nbsp;${text}&nbsp;&nbsp;&nbsp;&nbsp;</div></div>`;
}

const SCREENSAVER_ICONS = ['🖥️', '🔒', '💾', '🛰️', '🐧', '🔧', '📡', '⚡', '🗄️', '🔑', '🌐', '💻'];
const SCREENSAVER_COLORS = ['#ff2fa1', '#00e5ff', '#ffd700', '#39ff14', '#ff6a00', '#a259ff'];

function renderScreensaver() {
    const cells = SCREENSAVER_ICONS.map((icon, i) => {
        const bg = SCREENSAVER_COLORS[i % SCREENSAVER_COLORS.length];
        const delay = (i * 0.15).toFixed(2);
        const dur = (1.4 + (i % 3) * 0.3).toFixed(2);
        return `<div class="popup-grid-cell" style="background:${bg};animation-delay:${delay}s;animation-duration:${dur}s;">${icon}</div>`;
    }).join('');
    return `<div class="popup-grid">${cells}</div>`;
}

function renderLora() {
    return formatSections(`[ PROJECT LOG: LORA_GPS_TRACKER ]
STATUS: IN PROGRESS [JANUARY 2026 - PRESENT]

[ OVERVIEW ]
End-to-end IoT geographic tracking system. Uses LoRa (Long Range) frequencies to track off-grid hardware and relays telemetry through a cloud database to a live web dashboard.`) + `
        <div class="thumb-row">
            <img src="img4.jpg" alt="LoRa Node" class="thumb" data-caption="LORA NODE V3 — Field prototyping hardware. ESP32-S3 with GT-U7 GPS and dedicated LoRa radio.">
            <img src="img5.jpg" alt="Gateway" class="thumb" data-caption="GATEWAY BASE — Meshtastic base station serving as the primary node for Tampa-area mesh communication.">
            <img src="img6.png" alt="Live Map" class="thumb" data-caption="LIVE MAP DATA — Real-time LoRa tracking overlay, captured near USF campus.">
        </div>
    ` + formatSections(`[ TECH STACK & HARDWARE ]
- HARDWARE: Heltec ESP32 V3, GT-U7 GPS, LoRa Antennas
- LANGUAGES: C++ (Embedded), JavaScript, HTML, CSS
- CLOUD/APIS: Firebase Realtime Database, Google Maps JS API

[ SYSTEM ARCHITECTURE ]
1. ROVER NODE: Battery-powered ESP32 processes NMEA sentences, formats JSON payloads, and broadcasts via 915MHz LoRa.
2. BASE NODE: Secondary ESP32 acting as a Wi-Fi gateway. Catches LoRa packets and pushes telemetry to Firebase via HTTP PUT.
3. WEB INTERFACE: Self-contained HTML/JS app fetches coordinates and updates Google Maps markers in real time.

[ ENGINEERING HIGHLIGHTS ]
- DECOUPLED CLOUD: Firebase persistence keeps last-known GPS coordinates visible even if hardware loses power.
- MEMORY OPTIMIZATION: Custom C++ buffers engineered to prevent leaks on low-memory ESP32 chips.
- API RATE LIMITING: Data-throttling to stay within Google Cloud free-tier limits.`) + `
        <button class="win-link back-link" data-target="projects">[ BACK TO PROJECTS ]</button>
    `;
}

function renderContact() {
    return `
        <div class="msg-field"><span class="msg-label">TO:</span> T. Horner</div>
        <div class="msg-field"><span class="msg-label">EMAIL:</span> <a href="mailto:trentonhorner@usf.edu" class="win-link-external">trentonhorner@usf.edu</a></div>
        <div class="msg-field"><span class="msg-label">LINKEDIN:</span> <a href="https://www.linkedin.com/in/trenton-horner" target="_blank" class="win-link-external">linkedin.com/in/trenton-horner</a></div>
        <div class="msg-field"><span class="msg-label">LOCATION:</span> Tampa, FL</div>
        <p class="msg-note">&gt; Reach out via email or connect on LinkedIn.</p>
    `;
}

/* ---------- Window config (single source of truth) ---------- */

const WINDOWS = [
    { id: 'about', title: 'About_Me.txt', label: 'About Me', icon: ICONS.about, autoOpen: true, defaultPos: { xPct: 6, yPct: 8 }, width: 380, content: renderAbout },
    { id: 'experience', title: 'Experience.log', label: 'Experience', icon: ICONS.experience, autoOpen: true, defaultPos: { xPct: 48, yPct: 4 }, width: 380, content: renderExperience },
    { id: 'projects', title: 'My_Projects', label: 'Projects', icon: ICONS.projects, autoOpen: true, defaultPos: { xPct: 10, yPct: 48 }, width: 420, content: renderProjects },
    { id: 'lora', title: 'LoRa_GPS_Tracker.log', label: 'LoRa GPS', icon: ICONS.lora, autoOpen: false, defaultPos: { xPct: 22, yPct: 20 }, width: 560, content: renderLora },
    { id: 'contact', title: 'New Message', label: 'Contact', icon: ICONS.contact, autoOpen: true, defaultPos: { xPct: 60, yPct: 44 }, width: 320, content: renderContact }
];

/* ---------- Decorative popup-ad config (not in the main taskbar row) ---------- */

const POPUPS = [
    { id: 'popup-congrats', title: 'CONGRATULATIONS.exe', icon: '🏆', defaultPos: { xPct: 30, yPct: 68 }, width: 300, bodyClass: 'popup-body-flush', content: renderCongrats },
    { id: 'popup-marquee', title: 'system_status.ad', icon: '📢', defaultPos: { xPct: 12, yPct: 6 }, width: 480, bodyClass: 'popup-body-flush', content: renderMarquee },
    { id: 'popup-screensaver', title: 'SYS_SCREENSAVER.scr', icon: '🖥️', defaultPos: { xPct: 58, yPct: 30 }, width: 320, bodyClass: 'popup-body-flush', content: renderScreensaver }
];

function findWindowCfg(id) {
    return WINDOWS.find(w => w.id === id) || POPUPS.find(w => w.id === id);
}

/* ---------- Sound ---------- */

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const SoundManager = {
    enabled: true,
    _tone(freqStart, freqEnd, duration, type = 'square', gainStart = 0.04) {
        if (!this.enabled) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtx.currentTime + duration);
        gain.gain.setValueAtTime(gainStart, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    },
    playClick() { this._tone(800, 400, 0.05); },
    playOpen() { this._tone(440, 660, 0.15, 'sine', 0.05); },
    playClose() { this._tone(660, 330, 0.15, 'sine', 0.05); },
    playError() {
        if (!this.enabled) return;
        [200, 210].forEach(freq => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.3);
        });
    }
};

/* ---------- Window manager ---------- */

const desktopEl = document.getElementById('desktop');
const windowsRoot = document.getElementById('windows-root');
const iconBar = document.getElementById('icon-bar');
const clockEl = document.getElementById('clock');
const muteBtn = document.getElementById('mute-btn');

const openWindows = {};   // id -> { el, minimized }
const lastPositions = {}; // id -> { left, top } in px
let zCounter = 10;
let focusedId = null;

const mq = window.matchMedia('(max-width: 860px)');
let isMobile = mq.matches;
mq.addEventListener('change', e => { isMobile = e.matches; });

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function buildWindowDOM(cfg) {
    const el = document.createElement('div');
    el.className = 'win98-window';
    el.dataset.id = cfg.id;
    el.innerHTML = `
        <div class="win-titlebar">
            <span class="win-title-icon">${cfg.icon}</span>
            <span class="win-title-text">${cfg.title}</span>
            <div class="win-controls">
                <button class="win-btn win-minimize" aria-label="Minimize">_</button>
                <button class="win-btn win-close" aria-label="Close">×</button>
            </div>
        </div>
        <div class="win-body${cfg.bodyClass ? ' ' + cfg.bodyClass : ''}">${cfg.content()}</div>
    `;
    return el;
}

function positionWindow(el, cfg) {
    if (isMobile) return;
    const rect = desktopEl.getBoundingClientRect();
    const pos = lastPositions[cfg.id];
    const left = pos ? pos.left : Math.round(rect.width * cfg.defaultPos.xPct / 100);
    const top = pos ? pos.top : Math.round(rect.height * cfg.defaultPos.yPct / 100);
    el.style.left = left + 'px';
    el.style.top = top + 'px';
    el.style.width = cfg.width + 'px';
}

function attachDrag(el) {
    const titlebar = el.querySelector('.win-titlebar');
    titlebar.addEventListener('pointerdown', (e) => {
        if (isMobile || e.target.closest('.win-btn')) return;
        focusWindow(el.dataset.id);
        const startX = e.clientX;
        const startY = e.clientY;
        const startLeft = el.offsetLeft;
        const startTop = el.offsetTop;
        titlebar.setPointerCapture(e.pointerId);

        function onMove(ev) {
            const rect = desktopEl.getBoundingClientRect();
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            const minLeft = -el.offsetWidth + 80;
            const maxLeft = rect.width - 80;
            const minTop = 0;
            const maxTop = rect.height - 30;
            el.style.left = clamp(startLeft + dx, minLeft, maxLeft) + 'px';
            el.style.top = clamp(startTop + dy, minTop, maxTop) + 'px';
        }
        function onUp() {
            titlebar.removeEventListener('pointermove', onMove);
            titlebar.removeEventListener('pointerup', onUp);
            lastPositions[el.dataset.id] = { left: el.offsetLeft, top: el.offsetTop };
        }
        titlebar.addEventListener('pointermove', onMove);
        titlebar.addEventListener('pointerup', onUp);
    });
}

function openWindow(id, opts = {}) {
    const existing = openWindows[id];
    if (existing) {
        if (existing.minimized) {
            restoreWindow(id);
        } else {
            focusWindow(id);
        }
        return;
    }
    const cfg = findWindowCfg(id);
    if (!cfg) return;
    const el = buildWindowDOM(cfg);
    windowsRoot.appendChild(el);
    positionWindow(el, cfg);
    openWindows[id] = { el, minimized: false };
    attachDrag(el);
    focusWindow(id);
    syncTaskbar();
    if (!opts.silent) SoundManager.playOpen();
    if (isMobile && !opts.silent && !opts.skipScroll) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function closeWindow(id) {
    const state = openWindows[id];
    if (!state) return;
    if (!isMobile) {
        lastPositions[id] = { left: state.el.offsetLeft, top: state.el.offsetTop };
    }
    state.el.remove();
    delete openWindows[id];
    if (focusedId === id) focusedId = null;
    syncTaskbar();
    SoundManager.playClose();
}

function minimizeWindow(id) {
    const state = openWindows[id];
    if (!state) return;
    state.minimized = true;
    state.el.classList.add('win-hidden');
    if (focusedId === id) focusedId = null;
    syncTaskbar();
}

function restoreWindow(id) {
    const state = openWindows[id];
    if (!state) return;
    state.minimized = false;
    state.el.classList.remove('win-hidden');
    focusWindow(id);
    if (isMobile) {
        state.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function focusWindow(id) {
    const state = openWindows[id];
    if (!state) return;
    zCounter += 1;
    state.el.style.zIndex = zCounter;
    Object.entries(openWindows).forEach(([wid, s]) => {
        s.el.classList.toggle('is-active', wid === id);
    });
    focusedId = id;
    syncTaskbar();
}

function syncTaskbar() {
    document.querySelectorAll('.taskbar-btn').forEach(btn => {
        const id = btn.dataset.id;
        const state = openWindows[id];
        const isOpen = !!state && !state.minimized;
        btn.classList.toggle('is-open', isOpen);
        btn.classList.toggle('is-focused', isOpen && focusedId === id);
    });
}

function handleTaskbarClick(id) {
    SoundManager.playClick();
    const state = openWindows[id];
    if (!state) {
        openWindow(id);
        return;
    }
    if (state.minimized) {
        restoreWindow(id);
        return;
    }
    if (focusedId === id) {
        minimizeWindow(id);
    } else {
        focusWindow(id);
        if (isMobile) state.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function buildTaskbar() {
    WINDOWS.forEach(cfg => {
        const btn = document.createElement('button');
        btn.className = 'taskbar-btn';
        btn.dataset.id = cfg.id;
        btn.innerHTML = `<span class="taskbar-icon">${cfg.icon}</span><span class="taskbar-label">${cfg.label}</span>`;
        btn.addEventListener('click', () => handleTaskbarClick(cfg.id));
        iconBar.appendChild(btn);
    });

    const adsBtn = document.createElement('button');
    adsBtn.className = 'taskbar-btn';
    adsBtn.innerHTML = `<span class="taskbar-icon">🎉</span><span class="taskbar-label">More Ads!</span>`;
    adsBtn.addEventListener('click', () => {
        SoundManager.playClick();
        cascadePopups();
    });
    iconBar.appendChild(adsBtn);
}

/* ---------- Popup cascade (load-time + "More Ads!" replay) ---------- */

const POPUP_CASCADE_START_DELAY = 1500;
const POPUP_CASCADE_STEP = 900;
let cascadeRunning = false;

function cascadePopups(opts = {}) {
    if (cascadeRunning) return;
    cascadeRunning = true;
    POPUPS.forEach((cfg, i) => {
        setTimeout(() => {
            const skipScroll = opts.isAutoCascade || i > 0;
            openWindow(cfg.id, { skipScroll });
            if (i === POPUPS.length - 1) cascadeRunning = false;
        }, i * POPUP_CASCADE_STEP);
    });
}

/* Focus-on-click: clicking anywhere in a window brings it to front */
windowsRoot.addEventListener('pointerdown', (e) => {
    const win = e.target.closest('.win98-window');
    if (win) focusWindow(win.dataset.id);
}, true);

/* Delegated clicks: close/minimize buttons, in-content links, thumbnails */
windowsRoot.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.win-close');
    if (closeBtn) {
        SoundManager.playClick();
        closeWindow(closeBtn.closest('.win98-window').dataset.id);
        return;
    }
    const minBtn = e.target.closest('.win-minimize');
    if (minBtn) {
        SoundManager.playClick();
        minimizeWindow(minBtn.closest('.win98-window').dataset.id);
        return;
    }
    const link = e.target.closest('.win-link');
    if (link) {
        SoundManager.playClick();
        openWindow(link.dataset.target);
        return;
    }
    const thumb = e.target.closest('.thumb');
    if (thumb) {
        openLightbox(thumb.getAttribute('src'), thumb.dataset.caption);
        return;
    }
    const claimBtn = e.target.closest('.claim-prize-btn');
    if (claimBtn) {
        SoundManager.playClick();
        claimBtn.parentElement.querySelector('.prize-reveal')?.classList.remove('is-hidden');
        claimBtn.disabled = true;
        return;
    }
});

/* ---------- Lightbox ---------- */

const lightbox = document.getElementById('lightbox');
const lightboxBackdrop = document.getElementById('lightbox-backdrop');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightbox.classList.remove('win-hidden');
    lightboxBackdrop.classList.remove('win-hidden');
    SoundManager.playOpen();
}

function closeLightbox() {
    lightbox.classList.add('win-hidden');
    lightboxBackdrop.classList.add('win-hidden');
    SoundManager.playClose();
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('win-hidden')) closeLightbox();
});

/* ---------- Top bar: clock + mute ---------- */

function updateClock() {
    clockEl.textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

muteBtn.addEventListener('click', () => {
    SoundManager.enabled = !SoundManager.enabled;
    muteBtn.textContent = SoundManager.enabled ? '🔊' : '🔇';
});

/* ---------- Desktop buddy ---------- */

const BUDDY_TIPS = [
    "Did you know? SLURM stands for Simple Linux Utility for Resource Management.",
    "Tip: tmux and screen keep your terminal sessions alive after you disconnect.",
    "Fun fact: the real Y2K bug was about two-digit years, not robots taking over.",
    "Reminder: always request only the compute resources a job actually needs.",
    "This site was designed for 1024×768. You're probably using something bigger. Neat!",
    "Cybersecurity tip: turn on multi-factor authentication. Always."
];
let buddyTipIndex = -1;

function nextBuddyTip() {
    buddyTipIndex = (buddyTipIndex + 1) % BUDDY_TIPS.length;
    return BUDDY_TIPS[buddyTipIndex];
}

const buddyChar = document.getElementById('buddy-char');
const buddyBubble = document.getElementById('buddy-bubble');
const buddyTipText = document.getElementById('buddy-tip-text');
const buddyBubbleClose = document.getElementById('buddy-bubble-close');

if (buddyChar) {
    buddyChar.addEventListener('click', () => {
        SoundManager.playClick();
        buddyTipText.textContent = nextBuddyTip();
        buddyBubble.classList.remove('is-hidden');
    });
    buddyChar.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            buddyChar.click();
        }
    });
    buddyBubbleClose.addEventListener('click', () => {
        buddyBubble.classList.add('is-hidden');
    });
}

/* ---------- Decorative desktop icons ---------- */

const desktopIcons = document.getElementById('desktop-icons');

if (desktopIcons) {
    desktopIcons.addEventListener('click', (e) => {
        const icon = e.target.closest('.desktop-icon');
        if (!icon) return;
        SoundManager.playClick();
        desktopIcons.querySelectorAll('.desktop-icon').forEach(i => i.classList.toggle('is-selected', i === icon));
    });
    desktopIcons.addEventListener('dblclick', (e) => {
        const icon = e.target.closest('.desktop-icon');
        if (!icon) return;
        icon.classList.remove('wiggle');
        void icon.offsetWidth;
        icon.classList.add('wiggle');
        SoundManager.playOpen();
    });
}

/* ---------- Init ---------- */

document.addEventListener('DOMContentLoaded', () => {
    buildTaskbar();
    WINDOWS.filter(w => w.autoOpen).forEach(w => openWindow(w.id, { silent: true }));
    updateClock();
    setInterval(updateClock, 15000);
    setTimeout(() => cascadePopups({ isAutoCascade: true }), POPUP_CASCADE_START_DELAY);
});
