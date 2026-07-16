// ===================== Storage & SRS =====================
const STORAGE_KEY = "speakCoachState_v1";
const BOX_INTERVAL_DAYS = [0, 1, 2, 4, 7, 15]; // index = box (1..5), box 0 = not learned yet

function pad2(n) { return String(n).padStart(2, "0"); }
function todayStr(d = new Date()) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}
function addDays(dateStr, n) {
  const [y, m, day] = dateStr.split("-").map(Number);
  const d = new Date(y, m - 1, day);
  d.setDate(d.getDate() + n);
  return todayStr(d);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { cards: {}, streak: { lastDate: null, count: 0 }, dailyLog: {} };
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}
let STATE = loadState();

function getCard(id) {
  if (!STATE.cards[id]) STATE.cards[id] = { box: 0, nextReview: todayStr() };
  return STATE.cards[id];
}
function markLearned(id) {
  const c = getCard(id);
  if (c.box === 0) {
    c.box = 1;
    c.nextReview = addDays(todayStr(), BOX_INTERVAL_DAYS[1]);
    saveState();
  }
}
function reviewCard(id, remembered) {
  const c = getCard(id);
  if (remembered) {
    c.box = Math.min(5, c.box + 1);
  } else {
    c.box = 1;
  }
  c.nextReview = addDays(todayStr(), BOX_INTERVAL_DAYS[c.box]);
  saveState();
}
function logToday(patch) {
  const t = todayStr();
  if (!STATE.dailyLog[t]) STATE.dailyLog[t] = { newWords: 0, reviewed: 0 };
  Object.keys(patch).forEach(k => STATE.dailyLog[t][k] = (STATE.dailyLog[t][k] || 0) + patch[k]);
  saveState();
}
function bumpStreak() {
  const t = todayStr();
  if (STATE.streak.lastDate === t) return;
  const yesterday = addDays(t, -1);
  if (STATE.streak.lastDate === yesterday) {
    STATE.streak.count += 1;
  } else {
    STATE.streak.count = 1;
  }
  STATE.streak.lastDate = t;
  saveState();
}

// ===================== Data helpers =====================
function allWords() {
  return VOCAB_DATA.topics.flatMap(t => t.words.map(w => ({ ...w, topicId: t.id, topicName: t.name })));
}
function allPhrases() {
  return VOCAB_DATA.topics.flatMap(t => t.phrases.map(p => ({ ...p, topicId: t.id, topicName: t.name })));
}
function getTopic(id) {
  return VOCAB_DATA.topics.find(t => t.id === id);
}
function dueCards(limit = 20) {
  const t = todayStr();
  return allWords().filter(w => {
    const c = getCard(w.id);
    return c.box > 0 && c.nextReview <= t;
  }).slice(0, limit);
}
function newWordsForTopic(topicId, limit = 8) {
  const topic = getTopic(topicId);
  return topic.words.filter(w => getCard(w.id).box === 0).slice(0, limit);
}
function todayTopic() {
  const list = topicsForMode(getMode());
  const dayIndex = Math.floor(Date.now() / 86400000) % list.length;
  return list[dayIndex];
}

// ===================== Mode (Công việc / Đời sống) =====================
const MODE_KEY = "speakCoachMode_v1";
function getMode() {
  return localStorage.getItem(MODE_KEY) || "work";
}
function setMode(mode) {
  localStorage.setItem(MODE_KEY, mode);
}
function topicsForMode(mode) {
  return VOCAB_DATA.topics.filter(t => t.category === mode || t.category === "core");
}
function setActiveModeUI(mode) {
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
}
document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) return;
    setMode(btn.dataset.mode);
    setActiveModeUI(btn.dataset.mode);
    const activeView = document.querySelector(".view.active").id.replace("view-", "");
    if (activeView === "dashboard") renderDashboard();
    if (activeView === "deck") renderDeckView();
    if (activeView === "mindmap") renderMindmapView();
  });
});

// ===================== Speech (TTS / STT) =====================
// Ranked by naturalness — Chrome's "Google US English" and macOS/iOS's premium
// "Natural"/enhanced voices sound far less robotic than the plain default voice.
const VOICE_PRIORITY = [
  "Google US English", "Google UK English Female",
  "Samantha", "Ava", "Ava (Premium)", "Zoe", "Nicky",
  "Microsoft Aria Online (Natural)", "Microsoft Jenny Online (Natural)", "Microsoft Guy Online (Natural)",
  "Karen", "Moira", "Tessa"
];
let cachedVoice = null;
function pickBestVoice() {
  if (cachedVoice) return cachedVoice;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  for (const name of VOICE_PRIORITY) {
    const match = voices.find(v => v.name === name);
    if (match) { cachedVoice = match; return match; }
  }
  const enLocal = voices.find(v => v.lang === "en-US" && v.localService);
  if (enLocal) { cachedVoice = enLocal; return enLocal; }
  const enUS = voices.find(v => v.lang === "en-US") || voices.find(v => v.lang && v.lang.startsWith("en"));
  cachedVoice = enUS || null;
  return cachedVoice;
}
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => { cachedVoice = null; pickBestVoice(); };
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.94;
  u.pitch = 1.0;
  const voice = pickBestVoice();
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}

// ===================== Emoji mini-scene animation =====================
// Cycles a word's `scene` (2-4 emoji) like a tiny looping GIF so each word
// gets a mini animated "acted out" visual instead of one static icon.
let activeSceneTimers = [];
function clearSceneTimers() {
  activeSceneTimers.forEach(t => clearInterval(t));
  activeSceneTimers = [];
}
function mountScene(containerEl, frames, intervalMs = 1100) {
  if (!containerEl) return;
  if (!frames || frames.length === 0) return;
  if (frames.length === 1) { containerEl.textContent = frames[0]; return; }
  let i = 0;
  containerEl.textContent = frames[0];
  containerEl.classList.add("scene-frame");
  const timer = setInterval(() => {
    i = (i + 1) % frames.length;
    containerEl.classList.remove("scene-pop");
    void containerEl.offsetWidth;
    containerEl.textContent = frames[i];
    containerEl.classList.add("scene-pop");
  }, intervalMs);
  activeSceneTimers.push(timer);
}

function normalizeForScore(s) {
  return s.toLowerCase().replace(/[^a-z0-9' ]/g, "").split(/\s+/).filter(Boolean);
}
function scorePhrase(target, spoken) {
  const t = normalizeForScore(target);
  const s = normalizeForScore(spoken);
  if (t.length === 0) return 0;
  const pool = [...t];
  let matched = 0;
  s.forEach(word => {
    const idx = pool.indexOf(word);
    if (idx !== -1) { matched++; pool.splice(idx, 1); }
  });
  return Math.round((matched / t.length) * 100);
}

function getSpeechRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const r = new SR();
  r.lang = "en-US";
  r.interimResults = false;
  r.maxAlternatives = 1;
  return r;
}

// ===================== Visual polish helpers =====================
function greetingText() {
  const h = new Date().getHours();
  if (h < 11) return "Chào buổi sáng 👋";
  if (h < 14) return "Chào buổi trưa 👋";
  if (h < 18) return "Chào buổi chiều 👋";
  return "Chào buổi tối 👋";
}

function animateCounter(el, target) {
  const start = Number(el.textContent) || 0;
  if (start === target) { el.textContent = target; return; }
  const duration = 500;
  const t0 = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - t0) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(start + (target - start) * eased);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

const CONFETTI_COLORS = ["#D97757", "#6A8E7F", "#D8A13B", "#5B7FA6", "#4F9D69"];
function confettiBurst(count = 60) {
  const layer = document.getElementById("confettiLayer");
  if (!layer) return;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const size = 6 + Math.random() * 6;
    piece.style.width = size + "px";
    piece.style.height = size * 0.4 + "px";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDuration = (2.2 + Math.random() * 1.6) + "s";
    piece.style.animationDelay = (Math.random() * 0.3) + "s";
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 4200);
  }
}

// ===================== Navigation =====================
function showView(name) {
  if (name !== "session") clearSceneTimers();
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  const btn = document.querySelector(`.tab-btn[data-view="${name}"]`);
  if (btn) btn.classList.add("active");
  if (name === "dashboard") renderDashboard();
  if (name === "deck") renderDeckView();
  if (name === "mindmap") renderMindmapView();
  if (name === "stats") renderStatsView();
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

// ===================== Dashboard =====================
function fillTopicSelect(selectEl, selectedId, topics) {
  const list = topics || VOCAB_DATA.topics;
  selectEl.innerHTML = "";
  list.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = `${t.icon} ${t.name}`;
    if (t.id === selectedId) opt.selected = true;
    selectEl.appendChild(opt);
  });
}

function renderDashboard() {
  setActiveModeUI(getMode());
  document.getElementById("greeting").textContent = greetingText();
  animateCounter(document.getElementById("streakNum"), STATE.streak.count || 0);
  animateCounter(document.getElementById("dueNum"), dueCards(9999).length);
  const learnedCount = allWords().filter(w => getCard(w.id).box === 5).length;
  animateCounter(document.getElementById("masteredNum"), learnedCount);

  const tTopic = todayTopic();
  document.getElementById("todayTopicIcon").textContent = tTopic.icon;
  document.getElementById("todayTopicName").textContent = tTopic.name;

  const picker = document.getElementById("topicPicker");
  fillTopicSelect(picker, tTopic.id, topicsForMode(getMode()));

  document.getElementById("startSessionBtn").onclick = () => {
    startSession(picker.value);
  };
}

// ===================== Session Flow =====================
let SESSION = null;

function startSession(topicId) {
  SESSION = {
    topicId,
    stage: "review",
    reviewQueue: dueCards(15),
    reviewIdx: 0,
    reviewFlipped: false,
    newQueue: newWordsForTopic(topicId, 8),
    newIdx: 0,
    newFlipped: false,
    phraseIdx: 0,
    speakIdx: 0,
    newLearnedCount: 0,
    reviewedCount: 0
  };
  showView("session");
  renderSessionStage();
}

function setSegProgress() {
  const order = ["review", "new", "phrase", "speak", "mindmap"];
  const curIdx = order.indexOf(SESSION.stage);
  document.querySelectorAll(".seg").forEach(seg => {
    const idx = order.indexOf(seg.dataset.stage);
    seg.classList.remove("current", "done");
    if (idx < curIdx) seg.classList.add("done");
    if (idx === curIdx) seg.classList.add("current");
  });
}

function nextStage() {
  const order = ["review", "new", "phrase", "speak", "mindmap", "done"];
  const idx = order.indexOf(SESSION.stage);
  SESSION.stage = order[idx + 1];
  renderSessionStage();
}

function renderSessionStage() {
  setSegProgress();
  const el = document.getElementById("sessionContent");
  if (SESSION.stage === "review") return renderReviewStage(el);
  if (SESSION.stage === "new") return renderNewStage(el);
  if (SESSION.stage === "phrase") return renderPhraseStage(el);
  if (SESSION.stage === "speak") return renderSpeakStage(el);
  if (SESSION.stage === "mindmap") return renderSessionMindmapStage(el);
  if (SESSION.stage === "done") return renderDoneStage(el);
}

function renderReviewStage(el) {
  clearSceneTimers();
  const queue = SESSION.reviewQueue;
  if (queue.length === 0) {
    el.innerHTML = `<div class="empty-state">🎉 Không có thẻ nào cần ôn hôm nay!</div>
      <button class="btn primary big" id="nextBtn">Tiếp tục → Từ mới</button>`;
    document.getElementById("nextBtn").onclick = nextStage;
    return;
  }
  if (SESSION.reviewIdx >= queue.length) {
    el.innerHTML = `<div class="empty-state">✅ Đã ôn xong ${queue.length} thẻ!</div>
      <button class="btn primary big" id="nextBtn">Tiếp tục → Từ mới</button>`;
    document.getElementById("nextBtn").onclick = nextStage;
    return;
  }
  const w = queue[SESSION.reviewIdx];
  el.innerHTML = `
    <p class="muted">Ôn từ cũ &nbsp;•&nbsp; ${SESSION.reviewIdx + 1}/${queue.length}</p>
    <div class="flip-scene">
      <div class="flip-card" id="fc">
        <div class="flip-card-inner">
          <div class="flip-face flip-front">
            <div class="icon" id="fcIconFront">${w.icon}</div>
            <div class="word">${w.word}</div>
            <div class="ipa">${w.ipa}</div>
            <div class="hint">👆 Bấm vào thẻ để xem nghĩa</div>
          </div>
          <div class="flip-face flip-back">
            <div class="icon" id="fcIconBack">${w.icon}</div>
            <div class="meaning">${w.meaning}</div>
            <div class="example">"${w.example}"</div>
            ${w.visual ? `<div class="visual">🎬 ${w.visual}</div>` : ""}
          </div>
        </div>
      </div>
    </div>
    <div class="answer-buttons" id="answerBtns" style="display:none">
      <button class="btn danger" id="forgotBtn">😵 Chưa nhớ</button>
      <button class="btn success" id="rememberBtn">✅ Nhớ rồi</button>
    </div>
  `;
  mountScene(document.getElementById("fcIconFront"), w.scene);
  mountScene(document.getElementById("fcIconBack"), w.scene);
  document.getElementById("fc").onclick = function () {
    if (this.classList.contains("flipped")) return;
    this.classList.add("flipped");
    document.getElementById("answerBtns").style.display = "flex";
    speak(w.word);
  };
  document.getElementById("forgotBtn").onclick = () => {
    reviewCard(w.id, false);
    SESSION.reviewedCount++;
    SESSION.reviewIdx++;
    renderReviewStage(el);
  };
  document.getElementById("rememberBtn").onclick = () => {
    reviewCard(w.id, true);
    SESSION.reviewedCount++;
    SESSION.reviewIdx++;
    renderReviewStage(el);
  };
}

function renderNewStage(el) {
  clearSceneTimers();
  const queue = SESSION.newQueue;
  if (queue.length === 0 || SESSION.newIdx >= queue.length) {
    logToday({ newWords: SESSION.newLearnedCount, reviewed: SESSION.reviewedCount });
    el.innerHTML = `<div class="empty-state">${queue.length === 0 ? "Chủ đề này bạn đã học hết từ mới rồi! 🎉" : `✅ Đã học ${queue.length} từ mới!`}</div>
      <button class="btn primary big" id="nextBtn">Tiếp tục → Cụm câu giao tiếp</button>`;
    document.getElementById("nextBtn").onclick = nextStage;
    return;
  }
  const w = queue[SESSION.newIdx];
  el.innerHTML = `
    <p class="muted">Từ mới &nbsp;•&nbsp; ${SESSION.newIdx + 1}/${queue.length}</p>
    <div class="flashcard">
      <div class="icon" id="fcIconNew">${w.icon}</div>
      <div class="word">${w.word}</div>
      <div class="ipa">${w.ipa}</div>
      <div class="meaning">${w.meaning}</div>
      <div class="example">"${w.example}"</div>
      ${w.visual ? `<div class="visual">🎬 Hình dung: ${w.visual}</div>` : ""}
      ${w.mnemonic ? `<div class="mnemonic">💡 Mẹo nhớ: ${w.mnemonic}</div>` : ""}
    </div>
    <div class="row" style="justify-content:center">
      <button class="btn ghost" id="listenBtn">🔊 Nghe phát âm</button>
      <button class="btn primary" id="gotItBtn">👍 Đã hiểu, học tiếp</button>
    </div>
  `;
  mountScene(document.getElementById("fcIconNew"), w.scene);
  document.getElementById("listenBtn").onclick = () => speak(w.word + ". " + w.example);
  document.getElementById("gotItBtn").onclick = () => {
    markLearned(w.id);
    SESSION.newLearnedCount++;
    SESSION.newIdx++;
    renderNewStage(el);
  };
  speak(w.word);
}

function renderPhraseStage(el) {
  const topic = getTopic(SESSION.topicId);
  const phrases = topic.phrases;
  el.innerHTML = `<p class="muted">Nghe và hiểu nghĩa các cụm câu thường dùng trong chủ đề <strong>${topic.name}</strong>:</p>
    <div id="phraseList"></div>
    <button class="btn primary big" id="nextBtn">Tiếp tục → Luyện nói</button>`;
  const list = document.getElementById("phraseList");
  phrases.forEach(p => {
    const div = document.createElement("div");
    div.className = "phrase-item";
    div.innerHTML = `
      <div class="en">${p.phrase}</div>
      <div class="vi">${p.meaning}</div>
      ${p.hook ? `<div class="hook">🎬 <strong>Hình dung:</strong> ${p.hook}</div>` : ""}
      ${p.context ? `<div class="ctx">📌 ${p.context}</div>` : ""}
      <div class="actions"><button class="btn ghost listen-btn">🔊 Nghe</button></div>
    `;
    div.querySelector(".listen-btn").onclick = () => speak(p.phrase);
    list.appendChild(div);
  });
  document.getElementById("nextBtn").onclick = nextStage;
}

function renderSpeakStage(el) {
  const topic = getTopic(SESSION.topicId);
  const phrases = topic.phrases;
  const hasSTT = !!getSpeechRecognition();
  if (SESSION.speakIdx >= phrases.length) {
    el.innerHTML = `<div class="empty-state">🎤 Đã luyện nói xong ${phrases.length} câu!</div>
      <button class="btn primary big" id="nextBtn">Tiếp tục → Mindmap</button>`;
    document.getElementById("nextBtn").onclick = nextStage;
    return;
  }
  const p = phrases[SESSION.speakIdx];
  el.innerHTML = `
    <p class="muted">Luyện nói &nbsp;•&nbsp; ${SESSION.speakIdx + 1}/${phrases.length}</p>
    <div class="speak-box">
      <div class="flashcard">
        <div class="word" style="font-size:22px">${p.phrase}</div>
        <div class="meaning" style="font-size:16px">${p.meaning}</div>
      </div>
      <button class="btn ghost" id="listenBtn">🔊 Nghe mẫu</button>
      ${hasSTT ? `<button class="mic-btn" id="micBtn">🎤</button><p class="muted">Bấm mic rồi nói theo câu trên</p>` :
        `<p class="muted">⚠️ Trình duyệt này không hỗ trợ nhận diện giọng nói. Hãy dùng Chrome trên máy tính/Android, hoặc chỉ tự nói theo và tự chấm.</p>`}
      <div id="sttResult"></div>
    </div>
    <div class="row" style="justify-content:center; margin-top:14px">
      <button class="btn primary" id="nextPhraseBtn">Câu tiếp theo →</button>
    </div>
  `;
  document.getElementById("listenBtn").onclick = () => speak(p.phrase);
  document.getElementById("nextPhraseBtn").onclick = () => {
    SESSION.speakIdx++;
    renderSpeakStage(el);
  };
  if (hasSTT) {
    const micBtn = document.getElementById("micBtn");
    micBtn.onclick = () => {
      const rec = getSpeechRecognition();
      micBtn.classList.add("listening");
      micBtn.textContent = "🔴";
      rec.onresult = (e) => {
        const said = e.results[0][0].transcript;
        const score = scorePhrase(p.phrase, said);
        let cls = "poor", label = "Cần luyện thêm 💪";
        if (score >= 80) { cls = "great"; label = "Xuất sắc! 🎉"; confettiBurst(35); }
        else if (score >= 50) { cls = "ok"; label = "Khá ổn 👍"; }
        document.getElementById("sttResult").innerHTML = `
          <div class="transcript-box">Bạn nói: "<em>${said}</em>"</div>
          <div class="score-result ${cls}">${label} — độ khớp ${score}%</div>
        `;
      };
      rec.onerror = () => {
        document.getElementById("sttResult").innerHTML = `<div class="score-result poor">Không nghe rõ, thử lại nhé (cần cho phép quyền micro).</div>`;
      };
      rec.onend = () => {
        micBtn.classList.remove("listening");
        micBtn.textContent = "🎤";
      };
      rec.start();
    };
  }
}

function renderSessionMindmapStage(el) {
  const topic = getTopic(SESSION.topicId);
  el.innerHTML = `<p class="muted">Tổng kết chủ đề <strong>${topic.name}</strong> bằng mindmap — bấm vào từ để nghe lại:</p>
    <div id="sessionMindmap"></div>
    <div class="mm-legend">
      <span class="mm-legend-item"><i class="mm-dot mm-dot-bud"></i>Chưa học</span>
      <span class="mm-legend-item"><i class="mm-dot mm-dot-leaf"></i>Đang học</span>
      <span class="mm-legend-item"><i class="mm-dot mm-dot-gold"></i>Đã thuộc</span>
    </div>
    <div id="sessionMindmapDetail" class="mindmap-detail"><span class="muted">Bấm vào 1 nhánh để nghe & xem nghĩa.</span></div>
    <button class="btn primary big" id="finishBtn">🏁 Hoàn thành buổi học</button>`;
  renderMindmapSVG(document.getElementById("sessionMindmap"), topic, document.getElementById("sessionMindmapDetail"));
  document.getElementById("finishBtn").onclick = () => {
    bumpStreak();
    nextStage();
  };
}

function renderDoneStage(el) {
  el.innerHTML = `
    <div class="empty-state">
      <div style="font-size:50px">🎉</div>
      <h2>Hoàn thành buổi học hôm nay!</h2>
      <p>Bạn đã ôn ${SESSION.reviewedCount} thẻ cũ và học ${SESSION.newLearnedCount} từ mới.</p>
      <p>Chuỗi ngày học liên tiếp: 🔥 ${STATE.streak.count}</p>
    </div>
    <button class="btn primary big" id="backBtn">← Về trang chủ</button>
  `;
  confettiBurst(90);
  document.getElementById("backBtn").onclick = () => showView("dashboard");
}

// ===================== Deck Browse =====================
function renderDeckView() {
  setActiveModeUI(getMode());
  const picker = document.getElementById("deckTopicPicker");
  const topics = topicsForMode(getMode());
  const keepId = topics.some(t => t.id === picker.value) ? picker.value : topics[0].id;
  fillTopicSelect(picker, keepId, topics);
  if (!picker.dataset.bound) {
    picker.addEventListener("change", () => renderDeckGrid(picker.value));
    picker.dataset.bound = "1";
  }
  renderDeckGrid(picker.value);
}

function renderDeckGrid(topicId) {
  const topic = getTopic(topicId);
  const grid = document.getElementById("deckGrid");
  grid.innerHTML = "";
  topic.words.forEach(w => {
    const box = getCard(w.id).box;
    const div = document.createElement("div");
    div.className = `deck-card box-${box}`;
    div.innerHTML = `<div class="icon">${w.icon}</div><div class="word">${w.word}</div><div class="box-badge">${box === 0 ? "chưa học" : "box " + box + "/5"}</div>`;
    div.onclick = () => {
      speak(w.word);
      div.innerHTML = `<div class="icon">${w.icon}</div><div class="word">${w.word}</div><div class="box-badge">${w.meaning}</div>`;
      setTimeout(() => renderDeckGrid(topicId), 2500);
    };
    grid.appendChild(div);
  });
}

// ===================== Mindmap =====================
function renderMindmapView() {
  setActiveModeUI(getMode());
  const picker = document.getElementById("mindmapTopicPicker");
  const topics = topicsForMode(getMode());
  const keepId = topics.some(t => t.id === picker.value) ? picker.value : topics[0].id;
  fillTopicSelect(picker, keepId, topics);
  if (!picker.dataset.bound) {
    picker.addEventListener("change", () => drawMindmap(picker.value));
    picker.dataset.bound = "1";
  }
  drawMindmap(picker.value);
}
function drawMindmap(topicId) {
  const topic = getTopic(topicId);
  const container = document.getElementById("mindmapContainer");
  const detail = document.getElementById("mindmapDetail");
  detail.innerHTML = `<span class="muted">Bấm vào 1 nhánh để nghe & xem nghĩa.</span>`;
  renderMindmapSVG(container, topic, detail);
}

function wrapLabel(text, maxCharsPerLine) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  words.forEach(w => {
    const candidate = current ? current + " " + w : w;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = w;
    } else {
      current = candidate;
    }
  });
  if (current) lines.push(current);
  return lines.slice(0, 2);
}

const BRANCH_COLORS = ["#C2410C", "#15803D", "#1D4ED8", "#A16207", "#7C3AED", "#BE123C", "#0F766E", "#B45309"];

function renderMindmapSVG(container, topic, detailContainer) {
  const words = topic.words;
  const wordMap = Object.fromEntries(words.map(w => [w.id, w]));
  const branches = (topic.branches && topic.branches.length)
    ? topic.branches.map(b => ({ label: b.label, words: b.wordIds.map(id => wordMap[id]).filter(Boolean) }))
    : [{ label: null, words }];

  const size = Math.max(600, Math.min(820, 560 + words.length * 9));
  const W = size, H = size, cx = W / 2, cy = H / 2;
  const leafR = size * 0.37;
  const trunkR = size * 0.084;

  let pathSvg = "", nodeSvg = "", labelSvg = "";
  let leafIndex = 0;
  let angleCursor = -Math.PI / 2;
  const TAU = 2 * Math.PI;

  branches.forEach((branch, bi) => {
    const color = BRANCH_COLORS[bi % BRANCH_COLORS.length];
    const sectorAngle = TAU * (branch.words.length / words.length);
    const midAngle = angleCursor + sectorAngle / 2;

    if (branch.label) {
      const blR = leafR * 0.46;
      const blx = cx + blR * Math.cos(midAngle);
      const bly = cy + blR * Math.sin(midAngle);
      const lines = wrapLabel(branch.label, 12);
      const padW = Math.max(...lines.map(l => l.length)) * 5.6 + 16;
      const padH = lines.length * 13 + 12;
      labelSvg += `<g>
        <rect x="${(blx - padW / 2).toFixed(1)}" y="${(bly - padH / 2).toFixed(1)}" width="${padW.toFixed(1)}" height="${padH.toFixed(1)}" rx="${padH / 2}" fill="${color}" opacity="0.94"/>
        <text x="${blx.toFixed(1)}" y="${(bly + (lines.length === 1 ? 4 : -2)).toFixed(1)}" text-anchor="middle" font-size="10.5" fill="white" font-weight="700">${lines.map((l, i) => `<tspan x="${blx.toFixed(1)}" dy="${i === 0 ? 0 : 12}">${escapeXml(l)}</tspan>`).join("")}</text>
      </g>`;
    }

    const n = branch.words.length;
    branch.words.forEach((w, i) => {
      const leafAngle = n === 1 ? midAngle : angleCursor + (sectorAngle * (i + 0.5)) / n;
      const lx = cx + leafR * Math.cos(leafAngle);
      const ly = cy + leafR * Math.sin(leafAngle);

      const c1r = leafR * 0.32;
      const c1x = cx + c1r * Math.cos(midAngle), c1y = cy + c1r * Math.sin(midAngle);
      const c2r = leafR * 0.82;
      const c2x = cx + c2r * Math.cos(leafAngle), c2y = cy + c2r * Math.sin(leafAngle);
      pathSvg += `<path class="mm-branch" d="M ${cx.toFixed(1)} ${cy.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${lx.toFixed(1)} ${ly.toFixed(1)}" stroke="${color}" stroke-width="3" fill="none" opacity="0.62"/>`;

      const box = getCard(w.id).box;
      let radius = 24, fill = "#C8BFA9", ring = "";
      if (box >= 1 && box <= 3) { radius = 29; fill = "url(#leafGrad)"; }
      else if (box >= 4) {
        radius = 33; fill = "url(#goldGrad)";
        ring = `<circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="${radius + 6}" fill="none" stroke="#D8A13B" stroke-width="2" opacity="0.55"/>`;
      }
      const delay = ((leafIndex * 0.18) % 2.4).toFixed(2);
      nodeSvg += `
        <g class="mm-node mm-leaf-group" data-id="${w.id}" style="animation-delay:${delay}s; transform-box:fill-box; transform-origin:center;">
          ${ring}
          <circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="${radius + 3}" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
          <circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="${radius}" fill="${fill}" stroke="#FBF9F4" stroke-width="3"/>
          <ellipse cx="${(lx - radius * 0.3).toFixed(1)}" cy="${(ly - radius * 0.35).toFixed(1)}" rx="${(radius * 0.35).toFixed(1)}" ry="${(radius * 0.2).toFixed(1)}" fill="white" opacity="0.35"/>
          <text x="${lx.toFixed(1)}" y="${(ly + 6).toFixed(1)}" text-anchor="middle" font-size="19">${w.icon}</text>
          <text x="${lx.toFixed(1)}" y="${(ly + radius + 17).toFixed(1)}" text-anchor="middle" font-size="10.5" fill="#2B241C" font-weight="600">${escapeXml(w.word)}</text>
        </g>`;
      leafIndex++;
    });

    angleCursor += sectorAngle;
  });

  const defs = `<defs>
    <radialGradient id="leafGrad" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#8FC993"/><stop offset="100%" stop-color="#4F9D69"/>
    </radialGradient>
    <radialGradient id="goldGrad" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#F3CB7A"/><stop offset="100%" stop-color="#D8A13B"/>
    </radialGradient>
    <radialGradient id="trunkGrad" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="${topic.color}" stop-opacity="0.85"/><stop offset="100%" stop-color="${topic.color}"/>
    </radialGradient>
    <filter id="trunkShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="${topic.color}" flood-opacity="0.35"/>
    </filter>
  </defs>`;

  let svg = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;max-width:720px;display:block;margin:0 auto">`;
  svg += defs + pathSvg + labelSvg;
  svg += `<circle cx="${cx}" cy="${cy}" r="${trunkR}" fill="url(#trunkGrad)" filter="url(#trunkShadow)"/>`;
  svg += `<ellipse cx="${cx - trunkR * 0.28}" cy="${cy - trunkR * 0.32}" rx="${trunkR * 0.32}" ry="${trunkR * 0.22}" fill="white" opacity="0.2"/>`;
  svg += `<text x="${cx}" y="${cy - trunkR * 0.13}" text-anchor="middle" font-size="${trunkR * 0.42}">${topic.icon}</text>`;
  const nameLines = wrapLabel(topic.name, 15);
  svg += `<text x="${cx}" y="${cy + trunkR * 0.26}" text-anchor="middle" font-size="${trunkR * 0.165}" fill="white" font-weight="700">${nameLines.map((line, i) => `<tspan x="${cx}" dy="${i === 0 ? 0 : trunkR * 0.19}">${escapeXml(line)}</tspan>`).join("")}</text>`;
  svg += nodeSvg;
  svg += `</svg>`;
  container.innerHTML = svg;

  container.querySelectorAll(".mm-branch").forEach((p, idx) => {
    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
    p.getBoundingClientRect();
    p.style.transition = `stroke-dashoffset ${0.55 + (idx % 6) * 0.06}s ease ${(idx * 0.045).toFixed(2)}s`;
    requestAnimationFrame(() => { p.style.strokeDashoffset = 0; });
  });

  container.querySelectorAll(".mm-node").forEach(node => {
    node.addEventListener("click", () => {
      const w = wordMap[node.dataset.id];
      speak(w.word);
      detailContainer.innerHTML = `
        <strong>${w.icon} ${w.word}</strong> <span class="muted">${w.ipa}</span><br>
        <span style="color:var(--sage);font-weight:700">${w.meaning}</span><br>
        <em class="muted">"${w.example}"</em>
        ${w.visual ? `<br><span style="color:var(--blue)">🎬 ${w.visual}</span>` : ""}
        ${w.mnemonic ? `<br><span style="color:var(--gold)">💡 ${w.mnemonic}</span>` : ""}
      `;
    });
  });
}
function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ===================== Stats =====================
function renderStatsView() {
  const words = allWords();
  document.getElementById("statTotalWords").textContent = words.length;
  document.getElementById("statLearned").textContent = words.filter(w => getCard(w.id).box > 0).length;
  document.getElementById("statMastered").textContent = words.filter(w => getCard(w.id).box === 5).length;

  const boxCounts = [0, 0, 0, 0, 0, 0];
  words.forEach(w => boxCounts[getCard(w.id).box]++);
  const chart = document.getElementById("boxChart");
  chart.innerHTML = "";
  const max = Math.max(...boxCounts, 1);
  const labels = ["Chưa học", "Box 1", "Box 2", "Box 3", "Box 4", "Box 5 (thuộc)"];
  boxCounts.forEach((count, i) => {
    const wrap = document.createElement("div");
    wrap.className = "box-bar-wrap";
    const heightPct = Math.max(4, (count / max) * 100);
    wrap.innerHTML = `<div class="box-bar-count">${count}</div><div class="box-bar" style="height:${heightPct}%"></div><div class="box-bar-label">${labels[i]}</div>`;
    chart.appendChild(wrap);
  });

  const heatmap = document.getElementById("calendarHeatmap");
  heatmap.innerHTML = "";
  for (let i = 13; i >= 0; i--) {
    const d = addDays(todayStr(), -i);
    const log = STATE.dailyLog[d];
    const div = document.createElement("div");
    div.className = "heat-day" + (log ? " active" : "");
    div.title = d + (log ? ` — ${log.newWords || 0} từ mới, ${log.reviewed || 0} ôn` : " — chưa học");
    div.textContent = d.slice(8, 10);
    heatmap.appendChild(div);
  }
}

// ===================== Init =====================
if ("speechSynthesis" in window) pickBestVoice();
renderDashboard();
