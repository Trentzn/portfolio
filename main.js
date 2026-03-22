const contentData = {
    boot: `***************************************************
*  ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL 7.1.0  *
*          TRENTON HORNER - PERSONAL PORTFOLIO    *
***************************************************

> INITIALIZING BOOT SEQUENCE...
> KERNEL LOADED: USF_CYBER_SEC_V3
> LOADING PROFILE: TRENTON_HORNER [USF '26]
> STATUS: CYBERSECURITY STUDENT & DEVELOPER

WELCOME TO THE OFFICIAL ARCHIVE OF TRENTON HORNER.
NAVIGATE VIA THE TOP TERMINAL TABS:
- STAT: BIOGRAPHY & SYSTEM SPECS
- DATA: MISSION LOGS & PROJECTS
- IMG: VISUAL DATA GALLERY
- MSG: SEND SECURE TRANSMISSION

SYSTEM READY. AWAITING USER INPUT._`,
    about: `[ TRENTON HORNER - PERSONNEL ARCHIVE ]
POSITION: ASPIRING INFORMATION SECURITY PROFESSIONAL
LOCATION: TAMPA, FL | SECTOR 813

[ EXECUTIVE SUMMARY ]
Aspiring information security professional with a genuine interest in network security principles and protocols. Proficient in Linux command line and foundational networking concepts like TCP/IP, with hands-on experience using SIEM tools such as Splunk and the Elastic Stack. Applied fundamental access control concepts by configuring use and file permissions via the Linux command line in a lab environment.

[ EDUCATIONAL ARCHIVE ]
- DEGREE: Bachelor of Science in Cybersecurity
- INSTITUTION: University of South Florida (USF)
- EXPECTED GRADUATION: MAY 2026
- INSTITUTIONAL GPA: 3.82
- SCHOLARSHIPS: Florida Medallion, USF Scholars Gold Award
- KEY COURSEWORK: Linux CLI, Computer Networks, Info Security

[ CERTIFICATIONS ]
- InsightAppSec Certified Specialist (JUNE 2025)
- Oracle Cloud Infrastructure AI Foundations (SEPT 2025)

[ TECHNICAL PROFICIENCIES ]
- PLATFORMS: iOS, Unix, Linux (Kali, Parrot, Ubuntu), Windows
- LANGUAGES: C, SQL, HTML, CSS, Python, KQL
- TOOLS: Bash, Regex, SIEM (Splunk/Elastic), Wireshark, Ghidra, VMware

[ FIELD PROJECTS ]
1. CLOUD LORA-GPS (IOT TRACKER)
   - End-to-end telemetry system for off-grid hardware.
   - Integrated Firebase cloud and Google Maps JS API.
2. INTRUSION DETECTION SYSTEM (SNORT)
   - Installed and monitored real-time network traffic.
   - Developed custom black/white list rules.
3. PERSONAL PORTFOLIO WEBSITE (THIS TERMINAL)
   - Fully responsive RobCo-themed interface.
   - Deployed via GitHub Pages with custom DNS.

[ PROFESSIONAL EXPERIENCE ]
- APP TESTER & AI DATA TRAINER | UBER AI SOLUTIONS
  (OCT 2025 - JAN 2026)
  * Analyzed 20+ UI/UX glitches; delivered technical feedback.
  * Executed precise data labeling for model efficiency.
- VOLUNTEER | HUMANE SOCIETY OF TAMPA BAY
  (MAY 2022 - MARCH 2023)
  * Coordinated daily routines and support protocols.`,
    projects: `[ DATA - PROJECTS ]

1. VAULT-TEC DEFENDER (Firewall Simulation)
   - Status: ACTIVE
   - Summary: A Python-based script simulating packet filtering.

2. GHOUL-NET SCANNER (Nmap Wrapper)
   - Status: COMPLETED
   - Summary: Automated security auditing tool.

3. CLOUD LORA-GPS (IoT Tracker)
   - Status: IN PROGRESS [JAN 2026 - PRESENT]
   - Summary: End-to-end geographic tracking with Firebase integration.
   [ <button class="sub-link" data-target="project_lora">VIEW DETAILED LOG: LORA_01</button> ]

4. PIP-ARCHIVE (Encrypted Database)
   - Status: IN PROGRESS
   - Summary: SQLite implementation with AES-256 encryption.`,
    project_lora: `[ TERMINAL LOG: LORA_01 ]
PROJECT: CLOUD-CONNECTED LORA GPS TRACKING SYSTEM
DATE: JANUARY 2026 - PRESENT
STATUS: IN PROGRESS

[ PROJECT OVERVIEW ]
Developed a complete end-to-end IoT geographic tracking system. Utilizes LoRa (Long Range) frequencies to track off-grid hardware and relays telemetry through a cloud database to a live web dashboard.

<div class="log-gallery">
    <img src="img4.jpg" alt="LoRa Node" class="log-img">
    <img src="img5.jpg" alt="Gateway" class="log-img">
    <img src="img6.png" alt="Live Map" class="log-img">
</div>

[ TECH STACK & HARDWARE ]
- HARDWARE: Heltec ESP32 V3, GT-U7 GPS, LoRa Antennas.
- LANGUAGES: C++ (Embedded), JavaScript, HTML, CSS.
- CLOUD/APIs: Firebase Realtime Database, Google Maps JS API.

[ SYSTEM ARCHITECTURE ]
1. ROVER NODE: Battery-powered ESP32 processes NMEA sentences, formats JSON payloads, and broadcasts via 915MHz LoRa.
2. BASE NODE: Secondary ESP32 acting as a Wi-Fi Gateway. Catches LoRa packets and pushes telemetry to Firebase via HTTP PUT.
3. WEB INTERFACE: Self-contained HTML/JS application fetches coordinates and dynamically updates Google Maps markers.

[ ENGINEERING HIGHLIGHTS ]
- DECOUPLED CLOUD: Firebase persistence ensures last-known GPS coordinates remain visible even if hardware loses power.
- MEMORY OPTIMIZATION: Custom C++ memory buffers engineered to prevent leaks on low-memory ESP32 chips.
- API RATE LIMITING: Strict data-throttling algorithms implemented to maintain operation under Google Cloud free tiers.

[ <button class="sub-link" data-target="projects">RETURN TO DATA LOGS</button> ]`,
    gallery: `[ IMG - GALLERY ]
> LOADING VISUAL DATA...

(Select an image for full-screen analysis)

[ LORA_HARDWARE_NODE.IMG ]
[ LORA_BASE_GATEWAY.IMG ]
[ LIVE_MAP_TRACKING.IMG ]
[ VAULT_BOY_HACKER.IMG ]
[ NETWORK_TOPOLOGY.IMG ]
[ USF_COLLEGIATE.IMG ]`,
    contact: `[ MSG - CONTACT ]
> SEND TRANSMISSION TO T. HORNER

EMAIL: horner.t@usf.edu
LINKEDIN: linkedin.com/in/trenton-horner
LOCATION: TAMPA, FL (VAULT 813)

> INPUT MESSAGE:_`
};

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const SoundManager = {
    enabled: true,
    playClick() {
        if (!this.enabled) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    },
    playBlip() {
        if (!this.enabled) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    },
    playScroll() {
        if (!this.enabled) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.02);
    }
};

// Mute Toggle Logic
document.getElementById('mute-btn')?.addEventListener('click', (e) => {
    SoundManager.enabled = !SoundManager.enabled;
    e.target.innerText = `SOUND: ${SoundManager.enabled ? 'ON' : 'OFF'}`;
});

// Scroll Sound Logic
document.getElementById('content').addEventListener('scroll', () => {
    SoundManager.playScroll();
}, { passive: true });

let currentTypingId = 0;

function typeWriter(text, elementId, speed = 5) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    
    currentTypingId++;
    const thisTypingId = currentTypingId;

    const temp = document.createElement('div');
    temp.innerHTML = text;
    const nodes = Array.from(temp.childNodes);
    
    let nodeIndex = 0;
    let charIndex = 0;

    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.innerHTML = '_';
    element.appendChild(cursor);

    function type() {
        if (thisTypingId !== currentTypingId) return; // Cancel if new typewriter started

        if (nodeIndex < nodes.length) {
            const node = nodes[nodeIndex];
            if (node.nodeType === Node.TEXT_NODE) {
                if (charIndex < node.textContent.length) {
                    cursor.before(node.textContent.charAt(charIndex));
                    if (node.textContent.charAt(charIndex) !== ' ') SoundManager.playBlip();
                    charIndex++;
                    setTimeout(type, speed);
                } else {
                    nodeIndex++;
                    charIndex = 0;
                    type(); 
                }
            } else {
                cursor.before(node.cloneNode(true));
                nodeIndex++;
                charIndex = 0;
                type(); 
            }
            const content = document.getElementById('content');
            content.scrollTop = content.scrollHeight;
        }
    }
    type();
}

function renderStats(statsText) {
    const lines = statsText.split('\n');
    let html = '';
    lines.forEach(line => {
        if (line.startsWith('[') && line.endsWith(']')) {
            html += `<div class="resume-header">${line}</div>`;
        } else {
            html += `<div>${line}</div>`;
        }
    });
    return html;
}

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        SoundManager.playClick();
        const target = btn.getAttribute('data-target');
        
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const container = document.getElementById('boot-text');
        const banner = document.getElementById('home-banner');
        container.innerHTML = ''; // Clear previous content

        if (target === 'boot') {
            banner.style.display = 'flex';
            typeWriter(contentData.boot, 'boot-text');
        } else {
            banner.style.display = 'none';
            if (target === 'about') {
                const stats = renderStats(contentData.about);
                container.innerHTML = stats;
            } else if (target === 'gallery') {
                container.innerHTML = `<div class="gallery-grid">
                    <div class="gallery-item"><img src="img4.jpg" alt="LoRa Node"><p>> LORA_NODE.IMG</p></div>
                    <div class="gallery-item"><img src="img5.jpg" alt="LoRa Gateway"><p>> LORA_GATEWAY.IMG</p></div>
                    <div class="gallery-item"><img src="img6.png" alt="Live Map"><p>> LIVE_MAP.IMG</p></div>
                    <div class="gallery-item"><img src="img1.png" alt="Vault Boy Hacker"><p>> VAULT_BOY.IMG</p></div>
                    <div class="gallery-item"><img src="img2.png" alt="Network Topology"><p>> NET_TOPOLOGY.IMG</p></div>
                    <div class="gallery-item"><img src="img3.png" alt="USF Logo Terminal"><p>> USF_ARCHIVE.IMG</p></div>
                </div>`;
            } else if (target === 'projects' || target === 'project_lora' || target === 'contact') {
                typeWriter(contentData[target], 'boot-text');
            }
        }
    });
});

// Event Delegation for sub-links within the typing container
document.getElementById('boot-text').addEventListener('click', (e) => {
    if (e.target.classList.contains('sub-link')) {
        const newTarget = e.target.getAttribute('data-target');
        SoundManager.playClick();
        const container = document.getElementById('boot-text');
        container.innerHTML = '';
        typeWriter(contentData[newTarget], 'boot-text');
    }
});

const imageMap = {
    'img1.png': 'VAULT BOY HACKER - Operational security status: SECURE. Personnel authorized for terminal access.',
    'img2.png': 'NETWORK TOPOLOGY - RobCo segmented archive architecture. Shows data redundancy and firewall placement.',
    'img3.png': 'USF LOGO - Collegiate Archive 2026. University of South Florida - Cyber Forensics Division.',
    'img4.jpg': 'LORA NODE V3 - Field prototyping hardware. ESP32-S3 with GT-U7 GPS and dedicated LoRa radio.',
    'img5.jpg': 'GATEWAY BASE - Meshtastic Base Station Alpha. Serving as the primary node for Tampa-area mesh communication.',
    'img6.png': 'LIVE MAP DATA - Real-time LoRa tracking overlay. Captured near USF campus, showing 100% signal reliability.'
};

document.addEventListener('click', (e) => {
    // Modal Expansion logic
    if (e.target.tagName === 'IMG' && (e.target.closest('.gallery-item') || e.target.classList.contains('log-img'))) {
        const src = e.target.getAttribute('src');
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-img');
        const modalDesc = document.getElementById('modal-desc');
        
        modalImg.src = src;
        modal.classList.add('active');
        SoundManager.playClick();
        
        // Use typewriter for the description
        const desc = imageMap[src] || 'UNIDENTIFIED VISUAL DATA. SECTOR: UNKNOWN.';
        typeWriter(desc, 'modal-desc', 20);
    }
    
    // Close modal logic
    if (e.target.id === 'close-modal' || e.target.id === 'image-modal') {
        document.getElementById('image-modal').classList.remove('active');
        SoundManager.playClick();
    }
});

// Initial boot sequence
window.onload = () => {
    typeWriter(contentData.boot, 'boot-text');
};
