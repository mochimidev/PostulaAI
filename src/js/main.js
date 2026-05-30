import { analyzeResume } from "./analyzer.js";
import { drawRadarChart } from "./charts.js";
import { baseAnalysis, demoJobDescription, demoResume } from "./demoData.js";
import { getChartTheme, initTheme } from "./theme.js";
import { renderAnalysis, showToast } from "./ui.js";

const resumeInput = document.getElementById("resumeInput");
const jobInput = document.getElementById("jobInput");
const analyzeButton = document.getElementById("analyzeButton");
const loadDemoButtons = [document.getElementById("loadDemo"), document.getElementById("loadDemoTop")];
const uploadPdfButton = document.getElementById("uploadPdf");
const radarCanvas = document.getElementById("radarChart");

let currentAnalysis = baseAnalysis;

initTheme(document.getElementById("themeToggle"), redrawRadar);
loadDemoData();
renderAll(baseAnalysis);

loadDemoButtons.forEach((button) => button.addEventListener("click", loadDemoData));

uploadPdfButton.addEventListener("click", () => {
  showToast("PDF upload is reserved for a future parser integration.");
});

analyzeButton.addEventListener("click", () => {
  const resumeText = resumeInput.value.trim();
  const jobDescription = jobInput.value.trim();

  if (!resumeText || !jobDescription) {
    showToast("Paste both a resume and a job description before analyzing.");
    return;
  }

  currentAnalysis = analyzeResume(resumeText, jobDescription);
  renderAll(currentAnalysis);
  document.getElementById("dashboard").scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener("resize", debounce(redrawRadar, 120));

function loadDemoData() {
  resumeInput.value = demoResume;
  jobInput.value = demoJobDescription;
  currentAnalysis = analyzeResume(demoResume, demoJobDescription);
  renderAll(currentAnalysis);
  showToast("Realistic demo resume and job posting loaded.");
}

function renderAll(analysis) {
  renderAnalysis(analysis);
  redrawRadar();
}

function redrawRadar() {
  drawRadarChart(radarCanvas, currentAnalysis.radar, getChartTheme());
}

function debounce(callback, delay) {
  let timer;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => callback(...args), delay);
  };
}
