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
  const dayIndex = Math.floor(Date.now() / 86400000) % VOCAB_DATA.topics.length;
  return VOCAB_DATA.topics[dayIndex];
}

// ===================== Speech (TTS / STT) =====================
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.92;
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang === "en-US") || voices.find(v => v.lang.startsWith("en"));
  if (enVoice) u.voice = enVoice;
  window.speechSynthesis.speak(u);
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

// ===================== Navigation =====================
function showView(name) {
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
function fillTopicSelect(selectEl, selectedId) {
  selectEl.innerHTML = "";
  VOCAB_DATA.topics.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = `${t.icon} ${t.name}`;
    if (t.id === selectedId) opt.selected = true;
    selectEl.appendChild(opt);
  });
}

function renderDashboard() {
  document.getElementById("streakNum").textContent = STATE.streak.count || 0;
  document.getElementById("dueNum").textContent = dueCards(9999).length;
  const learnedCount = allWords().filter(w => getCard(w.id).box === 5).length;
  document.getElementById("masteredNum").textContent = learnedCount;

  const tTopic = todayTopic();
  document.getElementById("todayTopicName").textContent = `${tTopic.icon} ${tTopic.name}`;

  const picker = document.getElementById("topicPicker");
  fillTopicSelect(picker, tTopic.id);

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
    <div class="flashcard" id="fc">
      <div class="icon">${w.icon}</div>
      <div class="word">${w.word}</div>
      <div class="ipa">${w.ipa}</div>
      <div id="fcBack" style="display:none">
        <div class="meaning">${w.meaning}</div>
        <div class="example">"${w.example}"</div>
      </div>
      <div class="hint">👆 Bấm vào thẻ để xem nghĩa</div>
    </div>
    <div class="answer-buttons" id="answerBtns" style="display:none">
      <button class="btn danger" id="forgotBtn">😵 Chưa nhớ</button>
      <button class="btn success" id="rememberBtn">✅ Nhớ rồi</button>
    </div>
  `;
  document.getElementById("fc").onclick = () => {
    document.getElementById("fcBack").style.display = "block";
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
      <div class="icon">${w.icon}</div>
      <div class="word">${w.word}</div>
      <div class="ipa">${w.ipa}</div>
      <div class="meaning">${w.meaning}</div>
      <div class="example">"${w.example}"</div>
      ${w.mnemonic ? `<div class="mnemonic">💡 Mẹo nhớ: ${w.mnemonic}</div>` : ""}
    </div>
    <div class="row" style="justify-content:center">
      <button class="btn ghost" id="listenBtn">🔊 Nghe phát âm</button>
      <button class="btn primary" id="gotItBtn">👍 Đã hiểu, học tiếp</button>
    </div>
  `;
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
        if (score >= 80) { cls = "great"; label = "Xuất sắc! 🎉"; }
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
      <h2 style="color:var(--text)">Hoàn thành buổi học hôm nay!</h2>
      <p>Bạn đã ôn ${SESSION.reviewedCount} thẻ cũ và học ${SESSION.newLearnedCount} từ mới.</p>
      <p>Chuỗi ngày học liên tiếp: 🔥 ${STATE.streak.count}</p>
    </div>
    <button class="btn primary big" id="backBtn">← Về trang chủ</button>
  `;
  document.getElementById("backBtn").onclick = () => showView("dashboard");
}

// ===================== Deck Browse =====================
function renderDeckView() {
  const picker = document.getElementById("deckTopicPicker");
  if (!picker.dataset.bound) {
    fillTopicSelect(picker, VOCAB_DATA.topics[0].id);
    picker.addEventListener("change", () => renderDeckGrid(picker.value));
    picker.dataset.bound = "1";
  } else {
    fillTopicSelect(picker, picker.value);
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
  const picker = document.getElementById("mindmapTopicPicker");
  if (!picker.dataset.bound) {
    fillTopicSelect(picker, VOCAB_DATA.topics[0].id);
    picker.addEventListener("change", () => drawMindmap(picker.value));
    picker.dataset.bound = "1";
  } else {
    fillTopicSelect(picker, picker.value);
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

function renderMindmapSVG(container, topic, detailContainer) {
  const words = topic.words;
  const W = 640, H = 640, cx = W / 2, cy = H / 2, r = 240;
  let svg = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;max-width:640px;display:block;margin:0 auto">`;
  words.forEach((w, i) => {
    const angle = (2 * Math.PI * i) / words.length - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    svg += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${topic.color}" stroke-width="1.5" opacity="0.5"/>`;
  });
  svg += `<circle cx="${cx}" cy="${cy}" r="60" fill="${topic.color}" />`;
  svg += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" font-size="26">${topic.icon}</text>`;
  svg += `<text x="${cx}" y="${cy + 20}" text-anchor="middle" font-size="11" fill="white" font-weight="600">${escapeXml(topic.name)}</text>`;
  words.forEach((w, i) => {
    const angle = (2 * Math.PI * i) / words.length - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    const box = getCard(w.id).box;
    const fill = box >= 4 ? "#22c55e" : box >= 1 ? "#f59e0b" : "#374151";
    svg += `<g class="mm-node" data-id="${w.id}" style="cursor:pointer">
      <circle cx="${x}" cy="${y}" r="34" fill="${fill}" stroke="#0f1220" stroke-width="2"/>
      <text x="${x}" y="${y - 2}" text-anchor="middle" font-size="20">${w.icon}</text>
      <text x="${x}" y="${y + 44}" text-anchor="middle" font-size="11" fill="#eef0fb">${escapeXml(w.word)}</text>
    </g>`;
  });
  svg += `</svg>`;
  container.innerHTML = svg;
  container.querySelectorAll(".mm-node").forEach(node => {
    node.addEventListener("click", () => {
      const w = words.find(x => x.id === node.dataset.id);
      speak(w.word);
      detailContainer.innerHTML = `
        <strong>${w.icon} ${w.word}</strong> <span class="muted">${w.ipa}</span><br>
        <span style="color:var(--accent-2)">${w.meaning}</span><br>
        <em class="muted">"${w.example}"</em>
        ${w.mnemonic ? `<br><span style="color:#fbbf24">💡 ${w.mnemonic}</span>` : ""}
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
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}
renderDashboard();
