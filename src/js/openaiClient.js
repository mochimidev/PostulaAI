export async function analyzeWithOpenAI({ resumeText, jobDescription }) {
  const hasBrowserKey = false;

  if (!hasBrowserKey) {
    throw new Error(
      "La integracion con OpenAI API esta deshabilitada intencionalmente en este MVP frontend-only. Agrega un proxy backend antes de enviar API keys."
    );
  }

  return { resumeText, jobDescription };
}
