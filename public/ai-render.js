// The Founder Signal — AI diagnostics rendering + integration
// Loaded AFTER script.js. Reuses the site's global `lang`, `showScreen`,
// and the data in ai-diagnostic.js. Runs both AI tests through one set of
// screens (#ai-intro / #ai-quiz / #ai-result), plus the #diagnostics chooser.

(function () {
  const $ = (id) => document.getElementById(id);
  let testKey = "leverage";
  let cur = 0;
  let pts = [];
  let lastResult = null;

  const T = () => AI_TESTS[testKey].ui[lang]; // `lang` is the site global
  const C = () => AI_UI[lang];

  // ---- Chooser (translated on language change) ----
  function renderChooser() {
    const c = C();
    $("diag-badge").textContent = c.chooseBadge;
    $("diag-title").textContent = c.chooseTitle;
    $("diag-subtitle").textContent = c.chooseSubtitle;
    // maturity card
    $("diag-mat-title").textContent = c.matTitle;
    $("diag-mat-text").textContent = c.matText;
    // AI cards
    const lv = AI_TESTS.leverage.ui[lang], ds = AI_TESTS.disruption.ui[lang];
    $("diag-lv-title").textContent = lv.cardTitle;
    $("diag-lv-text").textContent = lv.cardText;
    $("diag-ds-title").textContent = ds.cardTitle;
    $("diag-ds-text").textContent = ds.cardText;
  }

  // ---- Intro ----
  function renderIntro() {
    const t = T();
    $("ai-badge").textContent = t.badge;
    $("ai-title").textContent = t.title;
    $("ai-subtitle").textContent = t.subtitle;
    $("ai-start-btn").textContent = t.startBtn;
    $("ai-hint").textContent = t.hint;
    $("ai-intro-back").textContent = "← " + C().chooseTitle;
  }

  // ---- Question ----
  function renderQuestion() {
    const c = C();
    const qs = AI_TESTS[testKey].questions;
    const q = qs[cur];
    $("ai-progress-bar").style.width = (cur / qs.length * 100) + "%";
    $("ai-question-count").textContent = c.questionOf.replace("{n}", cur + 1).replace("{total}", qs.length);
    $("ai-question-text").textContent = q.q[lang];
    const box = $("ai-answers");
    box.innerHTML = "";
    q.answers.forEach((a) => {
      const b = document.createElement("button");
      b.className = "answer-btn";
      b.textContent = a.t[lang];
      b.onclick = () => {
        pts[cur] = a.p;
        cur++;
        cur < qs.length ? renderQuestion() : renderResult(true);
      };
      box.appendChild(b);
    });
    $("ai-back-btn").textContent = cur === 0 ? c.backHome : c.backBtn;
  }

  function riskColor(v) { return v < 40 ? "#34d399" : v < 70 ? "#fbbf24" : "#f87171"; }

  // ---- Result ----
  function renderResult(recalculate) {
    const t = T(), c = C(), test = AI_TESTS[testKey];
    if (recalculate) lastResult = computeTestResult(testKey, pts, lang);
    const res = lastResult;
    if (!res) return;
    showScreen("ai-result");

    const isRisk = test.accent === "risk";
    $("ai-score-label").textContent = t.scoreLabel;
    $("ai-score-value").textContent = res.score;

    // animate ring; risk uses a green→amber→red colour, leverage uses accent
    const circumference = 326.7;
    const fill = $("ai-ring-fill");
    fill.style.stroke = isRisk ? riskColor(res.score) : "var(--accent-strong)";
    $("ai-score-value").style.color = isRisk ? riskColor(res.score) : "var(--text)";
    fill.style.strokeDashoffset = circumference;
    requestAnimationFrame(() => { fill.style.strokeDashoffset = circumference * (1 - res.score / 100); });

    $("ai-band-name").textContent = res.band.name[lang];
    $("ai-band-name").style.color = isRisk ? riskColor(res.score) : "var(--accent)";
    $("ai-band-desc").textContent = res.band.desc[lang];
    $("ai-score-hint").textContent = t.scoreHint;

    $("ai-rec-title").textContent = t.recTitle;
    const ol = $("ai-recs");
    ol.innerHTML = "";
    // recommendation BY SCORE first, then the 3 highest-impact actions
    [res.band.rec[lang], ...res.actions].forEach((r) => {
      const li = document.createElement("li");
      li.textContent = r;
      ol.appendChild(li);
    });

    // sources footer (transparency)
    const links = AI_SOURCES.map((s) =>
      `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join(" · ");
    $("ai-sources").innerHTML = C().sourcesLabel + " " + links;

    // "run the other test" button
    const otherKey = testKey === "leverage" ? "disruption" : "leverage";
    $("ai-other-btn").textContent = "→ " + AI_TESTS[otherKey].ui[lang].scoreLabel;
    $("ai-other-btn").onclick = () => startAITest(otherKey);
    $("ai-retry-btn").textContent = t.retryBtn;

    // reset optional lead form (static labels come from data-i18n via applyTranslations)
    const done = $("ai-email-done"), form = $("ai-email-form");
    if (form) { form.classList.remove("hidden"); form.reset && form.reset(); }
    if (done) done.classList.add("hidden");
  }

  // ---- Public entry point (called from chooser cards / nav) ----
  function startAITest(key) {
    testKey = key;
    cur = 0; pts = []; lastResult = null;
    renderIntro();
    showScreen("ai-intro");
  }
  window.startAITest = startAITest; // also expose globally for inline handlers

  // ---- Wire chooser cards + buttons ----
  function wire() {
    if ($("diag-leverage")) $("diag-leverage").onclick = () => startAITest("leverage");
    if ($("diag-disruption")) $("diag-disruption").onclick = () => startAITest("disruption");

    $("ai-start-btn").onclick = () => { cur = 0; pts = []; renderQuestion(); showScreen("ai-quiz"); };
    $("ai-intro-back").onclick = () => showScreen("diagnostics");
    $("ai-back-btn").onclick = () => {
      if (cur > 0) { cur--; renderQuestion(); }
      else { renderIntro(); showScreen("ai-intro"); }
    };
    $("ai-retry-btn").onclick = () => { cur = 0; pts = []; renderQuestion(); showScreen("ai-quiz"); };

    // optional lead capture (reuses your /api/lead)
    const form = $("ai-email-form");
    if (form) form.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: $("ai-email-input").value,
            quiz: testKey,
            score: lastResult ? lastResult.score : "",
            stage: lastResult ? lastResult.band.name.en : "",
            language: lang
          })
        });
      } catch (_) { /* don't block UX */ }
      form.classList.add("hidden");
      $("ai-email-done").classList.remove("hidden");
    });
  }

  // ---- Keep the "Diagnóstico" nav highlighted on all diagnostic screens ----
  const _showScreen = window.showScreen;
  window.showScreen = function (id, push) {
    _showScreen(id, push);
    const diag = ["diagnostics", "ai-intro", "ai-quiz", "ai-result", "quiz-intro", "quiz", "result"];
    if (diag.includes(id)) {
      document.querySelectorAll(".mainnav button").forEach((b) =>
        b.classList.toggle("active", b.dataset.nav === "diagnostics"));
    }
  };

  // ---- Deep-link / back-button support for the new screens ----
  window.addEventListener("popstate", () => {
    const h = (location.hash || "#").slice(1);
    if (h === "diagnostics" || h === "ai-intro") showScreen(h, false);
    else if (h === "ai-quiz" || h === "ai-result") showScreen("diagnostics", false); // quiz state doesn't survive reload
  });

  // ---- Re-render on language switch (runs alongside setLanguage) ----
  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.addEventListener("click", () => {
      renderChooser();
      if ($("ai-intro").classList.contains("active")) renderIntro();
      if ($("ai-quiz").classList.contains("active")) renderQuestion();
      if ($("ai-result").classList.contains("active")) renderResult(false);
    })
  );

  // ---- Init ----
  wire();
  renderChooser();
  // correct the initial screen if the page was opened on a diagnostics deep-link
  const h0 = (location.hash || "#").slice(1);
  if (h0 === "diagnostics" || h0 === "ai-intro") showScreen(h0, false);
})();
