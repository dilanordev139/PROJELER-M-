/* ==========================================================================
   1. DOM ELEMAN SEÇİMLERİ
   ========================================================================== */
const timerDisplay = document.getElementById("timer-display"); // Ana sayaç metin alanı
const circleProgress = document.getElementById("circle-progress");// Ana ilerleme çemberi (SVG)
const circleGhost = document.getElementById("circle-ghost");// Hayalet seans çemberi (SVG)
const dialTicksGroup = document.getElementById("dial-ticks-group");// Saat kadranı çentiklerini içeren SVG grup elemanı

const btnStart = document.getElementById("btn-start");// Başlat butonu
const btnPause = document.getElementById("btn-pause");// Duraklat butonu
const btnReset = document.getElementById("btn-reset");// Sıfırla butonu
const modeTabs = document.querySelectorAll(".mode-tab-btn");// Mod seçimi butonları

const taskInput = document.getElementById("task-input");// Tek görev terminali metin alanı  
const btnLockTask = document.getElementById("btn-lock-task");// Tek görev terminali kilitleme butonu

const chainCountText = document.getElementById("chain-count-text");// Zincir sayısını gösteren metin alanı
const chainDotsBar = document.getElementById("chain-dots-bar");// Zincir çubuklarını içeren kapsayıcı div

const ghostTelemetryBadge = document.getElementById("ghost-telemetry-badge");
const ghostStatusIcon = document.getElementById("ghost-status-icon");
const ghostStatusText = document.getElementById("ghost-status-text");

const btnToggleSound = document.getElementById("btn-toggle-sound");
const soundIcon = document.getElementById("sound-icon");

const dumpModalOverlay = document.getElementById("dump-modal-overlay");
const btnOpenDump = document.getElementById("btn-open-dump");
const btnCloseDump = document.getElementById("btn-close-dump");
const dumpForm = document.getElementById("dump-form");
const dumpInput = document.getElementById("dump-input");
const dumpItemsList = document.getElementById("dump-items-list");

const reportModalOverlay = document.getElementById("report-modal-overlay");
const btnCloseReport = document.getElementById("btn-close-report");
const btnConfirmReport = document.getElementById("btn-confirm-report");
const reportScore = document.getElementById("report-score");
const reportTabSwitches = document.getElementById("report-tab-switches");
const reportGhostResult = document.getElementById("report-ghost-result");

/* ==========================================================================
   2. SİSTEM DEĞİŞKENLERİ VE DURUM YÖNETİMİ
   ========================================================================== */
const RADIUS = 102;                        // İlerleme çemberinin yarıçapı (piksel)
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // Çember çevre uzunluğu (~640.88px)

let totalSeconds = 1500;                   // Aktif modun toplam süresi (Varsayılan: 25dk = 1500sn)
let remainingSeconds = totalSeconds;       // Geriye kalan saniye
let timerInterval = null;                  // setInterval referans kimliği
let isTaskLocked = false;                  // Görev terminali kilitli mi?
let soundEnabled = true;                   // Akustik sesler aktif mi?

// Telemetri ve Analitik Verileri
let sessionActivityCount = 0;              // Seans boyunca fare/klavye etkileşim sayısı
let sessionTabSwitchCount = 0;             // Seans boyunca sekme terk sayısı
let completedChainCount = 0;               // Tamamlanan günün zincir seans sayısı

/* ==========================================================================
   3. ÇEMBER VE KADRAN ÇENTİKLERİNİN OLUŞTURULMASI
   ========================================================================== */
// Ana ve hayalet çemberin başlangıç sınır değerlerini çevre uzunluğuna ayarlar
circleProgress.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;
circleProgress.style.strokeDashoffset = "0";
circleGhost.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;
circleGhost.style.strokeDashoffset = "0";

// SVG içerisine 60 adet saat kadranı çentiği çizen fonksiyon
function renderDialTicks() {
  dialTicksGroup.innerHTML = "";
  const centerX = 140;
  const centerY = 140;
  const tickRadius = 120; // Çentiklerin yerleşeceği dış çember yarıçapı

  for (let i = 0; i < 60; i++) {
    const angleDeg = i * 6; // 360 derece / 60 çentik = her çentik 6 derecedir
    const angleRad = (angleDeg * Math.PI) / 180;
    const isMajor = i % 5 === 0; // Her 5 dakikada bir (5, 10, 15...) daha uzun çentik
    const tickLength = isMajor ? 8 : 4;

    const x1 = centerX + (tickRadius - tickLength) * Math.cos(angleRad);
    const y1 = centerY + (tickRadius - tickLength) * Math.sin(angleRad);
    const x2 = centerX + tickRadius * Math.cos(angleRad);
    const y2 = centerY + tickRadius * Math.sin(angleRad);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("class", isMajor ? "dial-tick major" : "dial-tick");
    dialTicksGroup.appendChild(line);
  }
}
renderDialTicks();

/* ==========================================================================
   4. SES MOTORU (WEB AUDIO API - SIFIR HARİCİ DOSYA)
   ========================================================================== */
let audioCtx = null;

// Kullanıcı sayfayla ilk etkileşime girdiğinde AudioContext'i güvenle başlatır
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// Mekanik klik sesi (Butonlara basıldığında çalar)
function playClickSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.04);

  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.04);
}

// 432Hz Tibet Çanağı Gong Sesi (Seans başarıyla bittiğinde çalar)
function playTibetanBowlSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  const fundamentals = [432, 864, 1296]; // Harmonik ses katmanları

  fundamentals.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    const initialVol = 0.25 / (idx + 1);
    gain.gain.setValueAtTime(initialVol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 3.5);
  });
}

// Ses Aç/Kapat Buton Olay Dinleyicisi
btnToggleSound.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundIcon.textContent = soundEnabled ? "🔔" : "🔕";
  playClickSound();
});

/* ==========================================================================
   5. GÜNÜN ZİNCİRİ (CHAIN) MEKANİZMASI
   ========================================================================== */
function initChain() {
  const savedChain = localStorage.getItem("aerofocus_chain");
  completedChainCount = savedChain ? parseInt(savedChain, 10) : 0;
  renderChain();
}

function renderChain() {
  chainDotsBar.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const dot = document.createElement("div");
    dot.className = i < completedChainCount ? "chain-dot filled" : "chain-dot";
    chainDotsBar.appendChild(dot);
  }
  chainCountText.textContent = `${completedChainCount} / 8 SEANS`;
}

function incrementChain() {
  completedChainCount = Math.min(completedChainCount + 1, 8);
  localStorage.setItem("aerofocus_chain", completedChainCount);
  renderChain();
}
initChain();

/* ==========================================================================
   6. SAYAÇ VE ÇEMBER GÜNCELLEME ALGORİTMASI (SAAT YÖNÜNDE)
   ========================================================================== */
function updateDisplay() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  timerDisplay.textContent = formatted;
  document.title = `(${formatted}) AeroFocus`;

  // İlerleme oranını hesaplar (0 = başlangıç, 1 = bitiş)
  const progressFraction = 1 - (remainingSeconds / totalSeconds);
  
  // scaleY(-1) ve -90deg rotasyon sayesinde pozitif offset çizgiyi saat yönünde (clockwise) tüketir
  const offset = CIRCUMFERENCE * progressFraction;
  circleProgress.style.strokeDashoffset = offset;

  // Hayalet seans çemberini saat yönünde günceller
  updateGhostSession(progressFraction);
}

/* ==========================================================================
   7. HAYALET SEANS (GHOST SESSION) YARIŞ MOTORU
   ========================================================================== */
function updateGhostSession(currentProgressFraction) {
  if (timerInterval === null) return;

  // Hayaletin hedef temposunu simüle eder
  const ghostProgressFraction = Math.min(currentProgressFraction * 1.04, 1);
  const ghostOffset = CIRCUMFERENCE * ghostProgressFraction;
  circleGhost.style.strokeDashoffset = ghostOffset;

  // Kullanıcının dünkü hayalete göre önde veya geride olduğunu kontrol eder
  if (sessionTabSwitchCount > 0 || currentProgressFraction < ghostProgressFraction) {
    ghostTelemetryBadge.className = "ghost-telemetry";
    ghostStatusIcon.textContent = "▼";
    ghostStatusText.textContent = "HAYALET: SENİ GEÇTİ";
  } else {
    ghostTelemetryBadge.className = "ghost-telemetry ahead";
    ghostStatusIcon.textContent = "▲";
    ghostStatusText.textContent = "HAYALET: ÖNDESİN";
  }
}

/* ==========================================================================
   8. SAYAÇ KONTROLLERİ (BAŞLAT / DURAKLAT / SIFIRLA)
   ========================================================================== */
function startTimer() {
  if (timerInterval !== null) return;
  playClickSound();

  btnStart.disabled = true;
  btnPause.disabled = false;

  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateDisplay();

    // Seans Tamamlandığında
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      btnStart.disabled = false;
      btnPause.disabled = true;

      playTibetanBowlSound();
      incrementChain();
      showFlightReport();
    }
  }, 1000);
}

function pauseTimer() {
  if (timerInterval !== null) {
    playClickSound();
    clearInterval(timerInterval);
    timerInterval = null;
    btnStart.disabled = false;
    btnPause.disabled = true;
  }
}

function resetTimer() {
  playClickSound();
  pauseTimer();
  remainingSeconds = totalSeconds;
  sessionActivityCount = 0;
  sessionTabSwitchCount = 0;
  updateDisplay();
  ghostTelemetryBadge.className = "ghost-telemetry";
  ghostStatusIcon.textContent = "▲";
  ghostStatusText.textContent = "HAYALET: BEKLEMEDE";
  circleGhost.style.strokeDashoffset = "0";
}

btnStart.addEventListener("click", startTimer);
btnPause.addEventListener("click", pauseTimer);
btnReset.addEventListener("click", resetTimer);

/* ==========================================================================
   9. MOD DEĞİŞTİRME SEKMELERİ (25dk / 5dk / 15dk)
   ========================================================================== */
modeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    playClickSound();
    modeTabs.forEach((b) => b.classList.remove("active"));
    tab.classList.add("active");

    totalSeconds = parseInt(tab.getAttribute("data-time"), 10);
    resetTimer();
  });
});

/* ==========================================================================
   10. TEK GÖREV TERMİNAL KİLİDİ
   ========================================================================== */
btnLockTask.addEventListener("click", () => {
  playClickSound();
  if (!taskInput.value.trim()) return;

  isTaskLocked = !isTaskLocked;
  if (isTaskLocked) {
    taskInput.disabled = true;
    btnLockTask.textContent = "KİLİTLİ";
    btnLockTask.classList.add("locked");
  } else {
    taskInput.disabled = false;
    btnLockTask.textContent = "KİLİTLE";
    btnLockTask.classList.remove("locked");
  }
});

/* ==========================================================================
   11. ETKİLEŞİM & SEKME TERKİ İZLEYİCİSİ (PAGE VISIBILITY API)
   ========================================================================== */
window.addEventListener("mousemove", () => { if (timerInterval) sessionActivityCount++; });
window.addEventListener("keydown", () => { if (timerInterval) sessionActivityCount++; });

// Kullanıcı başka sekmeye geçtiğinde veya geri döndüğünde tetiklenir
document.addEventListener("visibilitychange", () => {
  if (document.hidden && timerInterval !== null) {
    sessionTabSwitchCount++;
    ghostTelemetryBadge.className = "ghost-telemetry";
    ghostStatusIcon.textContent = "▼";
    ghostStatusText.textContent = "DİKKAT: SEKME TERK EDİLDİ";
  }
});

/* ==========================================================================
   12. SEANS SONU SİYAH KUTU RAPORU (FLIGHT REPORT)
   ========================================================================== */
function showFlightReport() {
  const focusScore = Math.max(100 - (sessionTabSwitchCount * 12), 40);
  reportScore.textContent = `%${focusScore}`;
  reportTabSwitches.textContent = `${sessionTabSwitchCount} KEZ`;

  if (sessionTabSwitchCount === 0) {
    reportGhostResult.textContent = "HAYALET SEANS: Kusursuz odak! Geçmiş rekorunu geçtin.";
  } else {
    reportGhostResult.textContent = "HAYALET SEANS: Sekme değişimleri nedeniyle hayalet öne geçti.";
  }

  reportModalOverlay.classList.add("open");
}

btnCloseReport.addEventListener("click", () => {
  reportModalOverlay.classList.remove("open");
});

btnConfirmReport.addEventListener("click", () => {
  reportModalOverlay.classList.remove("open");
  // Otomatik olarak 5 dakikalık kısa molaya geçirir ve sayacı başlatır
  modeTabs[1].click();
  startTimer();
});

/* ==========================================================================
   13. ACİL DÜŞÜNCE DÖKÜM ÇEKMECESİ (BRAIN DUMP & CTRL+BOŞLUK)
   ========================================================================== */
function loadDumpItems() {
  const items = JSON.parse(localStorage.getItem("aerofocus_dumps") || "[]");
  dumpItemsList.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "dump-item";
    li.innerHTML = `
      <span>${item}</span>
      <span class="dump-item-delete" data-index="${index}">&times;</span>
    `;
    dumpItemsList.appendChild(li);
  });
}

btnOpenDump.addEventListener("click", () => {
  playClickSound();
  dumpModalOverlay.classList.add("open");
  dumpInput.focus();
  loadDumpItems();
});

btnCloseDump.addEventListener("click", () => {
  dumpModalOverlay.classList.remove("open");
});

dumpModalOverlay.addEventListener("click", (e) => {
  if (e.target === dumpModalOverlay) dumpModalOverlay.classList.remove("open");
});

// Klavyeden Ctrl + Boşluk kısayoluyla düşünce çekmecesini anında açar
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.code === "Space") {
    e.preventDefault();
    btnOpenDump.click();
  }
});

dumpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = dumpInput.value.trim();
  if (!val) return;

  const items = JSON.parse(localStorage.getItem("aerofocus_dumps") || "[]");
  items.unshift(val);
  localStorage.setItem("aerofocus_dumps", JSON.stringify(items));
  dumpInput.value = "";
  loadDumpItems();
});

dumpItemsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("dump-item-delete")) {
    const idx = parseInt(e.target.getAttribute("data-index"), 10);
    const items = JSON.parse(localStorage.getItem("aerofocus_dumps") || "[]");
    items.splice(idx, 1);
    localStorage.setItem("aerofocus_dumps", JSON.stringify(items));
    loadDumpItems();
  }
});

// Sayfa ilk yüklendiğinde sayacı ve ekranı hazırlar
updateDisplay();