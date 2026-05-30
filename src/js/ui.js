export function renderAnalysis(analysis) {
  setText("scoreLabel", `${analysis.score}/100`);
  setText("scoreValue", analysis.score);
  setText("scoreInsight", getScoreInsight(analysis.score));
  setStyle("scoreGauge", "--score", analysis.score);
  setText("skillFitLabel", `${analysis.skills.filter((skill) => skill.status === "matched").length} of ${analysis.skills.length}`);

  renderList("strengthsList", analysis.strengths);
  renderList("missingSkillsList", analysis.missingSkills);
  renderList("improvementsList", analysis.improvements);
  renderList("certificationsList", analysis.certifications);
  renderTags("keywordList", analysis.keywords);
  renderTags("technologiesList", analysis.technologies);
  renderProgress("progressList", analysis.progress);
  renderSkills("skillCards", analysis.skills);

  setText("summaryText", analysis.ai.summary);
  setText("compatibilityText", analysis.ai.compatibility);
  setText("suggestionsText", analysis.ai.suggestions);
  setText("recruiterText", analysis.ai.recruiter);
}

export function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2800);
}

function renderList(id, items) {
  const node = document.getElementById(id);
  node.replaceChildren(...items.map((item) => createElement("li", item)));
}

function renderTags(id, items) {
  const node = document.getElementById(id);
  node.replaceChildren(...items.map((item) => createElement("span", item, "tag")));
}

function renderProgress(id, items) {
  const node = document.getElementById(id);
  node.replaceChildren(
    ...items.map((item) => {
      const wrapper = createElement("div", "", "progress-item");
      wrapper.innerHTML = `
        <div class="progress-meta"><span>${escapeHtml(item.label)}</span><strong>${item.value}%</strong></div>
        <div class="progress-track"><div class="progress-fill" style="--value: ${item.value}%"></div></div>
      `;
      return wrapper;
    })
  );
}

function renderSkills(id, items) {
  const node = document.getElementById(id);
  node.replaceChildren(
    ...items.map((item) => {
      const card = createElement("div", "", `skill-card ${item.status === "missing" ? "missing" : ""}`);
      card.innerHTML = `
        <span class="skill-dot" aria-hidden="true"></span>
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.fit)}</span>
      `;
      return card;
    })
  );
}

function createElement(tag, text, className) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function setStyle(id, property, value) {
  document.getElementById(id).style.setProperty(property, value);
}

function getScoreInsight(score) {
  if (score >= 85) return "Excellent match. Small keyword and tooling refinements could lift visibility.";
  if (score >= 70) return "Strong match with clear opportunities to improve ATS keyword coverage.";
  if (score >= 55) return "Moderate fit. Prioritize missing skills and role-specific proof points.";
  return "Low fit. Reframe the resume around the job's core requirements before applying.";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[character];
  });
}
