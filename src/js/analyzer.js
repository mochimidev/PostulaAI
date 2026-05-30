import { baseAnalysis } from "./demoData.js";

const importantTerms = [
  "sql",
  "python",
  "looker",
  "tableau",
  "dbt",
  "amplitude",
  "mixpanel",
  "experimentation",
  "a/b testing",
  "retention",
  "activation",
  "segmentation",
  "event tracking",
  "growth analytics",
  "cloud data warehouse",
  "reverse etl"
];

export function analyzeResume(resumeText, jobDescription) {
  const resume = normalize(resumeText);
  const job = normalize(jobDescription);
  const jobTerms = importantTerms.filter((term) => job.includes(term));
  const matchedTerms = jobTerms.filter((term) => resume.includes(term));
  const missingTerms = jobTerms.filter((term) => !resume.includes(term));
  const coverage = jobTerms.length ? matchedTerms.length / jobTerms.length : 0.65;
  const lengthSignal = Math.min(1, resumeText.trim().length / 1200);
  const impactSignal = hasImpactMetrics(resumeText) ? 1 : 0.72;
  const score = Math.round(55 + coverage * 30 + lengthSignal * 8 + impactSignal * 7);
  const boundedScore = Math.max(35, Math.min(96, score || baseAnalysis.score));

  const analysis = structuredClone(baseAnalysis);
  analysis.score = boundedScore;
  analysis.missingSkills = mergeUnique(formatTerms(missingTerms), baseAnalysis.missingSkills).slice(0, 5);
  analysis.keywords = mergeUnique(formatTerms(missingTerms), baseAnalysis.keywords).slice(0, 10);
  analysis.progress = analysis.progress.map((item) => {
    if (item.label === "Keyword coverage") return { ...item, value: Math.round(coverage * 100) || 78 };
    if (item.label === "ATS structure") return { ...item, value: Math.round(lengthSignal * 100) || 81 };
    if (item.label === "Impact clarity") return { ...item, value: hasImpactMetrics(resumeText) ? 88 : 68 };
    return item;
  });
  analysis.radar = analysis.radar.map((item) => {
    if (item.label === "Keywords") return { ...item, value: Math.round(coverage * 100) || 78 };
    if (item.label === "Clarity") return { ...item, value: Math.round(lengthSignal * 100) || 84 };
    return item;
  });
  analysis.skills = analysis.skills.map((skill) => {
    const isMatched = resume.includes(normalize(skill.name));
    return { ...skill, status: isMatched ? "matched" : skill.status };
  });
  analysis.ai.compatibility = `This resume currently scores ${boundedScore}/100 against the target posting. It shows strong alignment on ${matchedTerms.slice(0, 4).join(", ") || "core role requirements"}, while the clearest ATS opportunities are ${formatTerms(missingTerms).slice(0, 3).join(", ") || "more exact job-title keywords"}.`;

  return analysis;
}

function normalize(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function hasImpactMetrics(value) {
  return /\b\d+%|\$\d+|\b\d+k\b|\b\d+\s+(users|customers|accounts|teams)\b/i.test(value);
}

function formatTerms(terms) {
  return terms.map((term) =>
    term
      .split(" ")
      .map((part) => (part.length <= 3 ? part.toUpperCase() : part[0].toUpperCase() + part.slice(1)))
      .join(" ")
  );
}

function mergeUnique(primary, fallback) {
  return [...new Set([...primary.filter(Boolean), ...fallback])];
}
