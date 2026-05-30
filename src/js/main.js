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
  showToast("La carga de PDF queda reservada para una futura integracion con parser.");
});

analyzeButton.addEventListener("click", () => {
  const resumeText = resumeInput.value.trim();
  const jobDescription = jobInput.value.trim();

  if (!resumeText || !jobDescription) {
    showToast("Pega un curriculum y una descripcion de empleo antes de analizar.");
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
  showToast("Curriculum y oferta laboral demo cargados.");
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
