export async function analyzeWithOpenAI({ resumeText, jobDescription }) {
  const hasBrowserKey = false;

  if (!hasBrowserKey) {
    throw new Error(
      "OpenAI API integration is intentionally disabled in this frontend-only MVP. Add a backend proxy before sending API keys."
    );
  }

  return { resumeText, jobDescription };
}
