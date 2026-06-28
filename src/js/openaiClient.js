import OpenAI from "openai";
import pdfParse from "pdf-parse";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const MODEL = "gpt-4o-mini";

export async function analyzeResumePdf({ pdfBuffer, jobDescription }) {
  try {
    if (!pdfBuffer || !Buffer.isBuffer(pdfBuffer)) {
      throw new Error("El archivo PDF es invalido.");
    }

    if (typeof jobDescription !== "string" || !jobDescription.trim()) {
      throw new Error("La descripcion del empleo es obligatoria.");
    }

    const extracted = await extractPdfText(pdfBuffer);
    const analysis = await requestOpenAIAnalysis({
      resumeText: extracted.text,
      jobDescription: jobDescription.trim()
    });

    return {
      ...analysis,
      resumeText: extracted.text,
      pdfPages: extracted.numpages
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error inesperado al analizar el curriculum.";
    throw new Error(message);
  }
}

async function extractPdfText(pdfBuffer) {
  try {
    const data = await pdfParse(pdfBuffer);
    const text = (data.text || "").replace(/\s+\n/g, "\n").trim();

    if (!text) {
      throw new Error("No se pudo extraer texto util del PDF.");
    }

    return { text, numpages: data.numpages || 0 };
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo leer el archivo PDF.";
    throw new Error(`Error leyendo PDF: ${message}`);
  }
}

async function requestOpenAIAnalysis({ resumeText, jobDescription }) {
  const systemPrompt = [
    "Eres un analista ATS experto en compatibilidad de CV vs vacantes.",
    "Compara el CV con la descripcion del empleo.",
    "Devuelve estrictamente un objeto JSON valido, sin markdown, sin texto extra y sin bloques de codigo.",
    'La respuesta debe tener exactamente estas claves: "puntaje_compatibilidad", "fortalezas", "habilidades_faltantes", "mejoras_sugeridas".',
    '"puntaje_compatibilidad" debe ser un numero entero entre 0 y 100.',
    '"fortalezas", "habilidades_faltantes" y "mejoras_sugeridas" deben ser arrays de strings breves y concretos.'
  ].join(" ");

  const userPrompt = [
    "CV extraido:",
    resumeText,
    "",
    "Descripcion del empleo:",
    jobDescription,
    "",
    "Genera el JSON solicitado comparando ambos textos."
  ].join("\n");

  const response = await openai.chat.completions.create({
    model: MODEL,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt }
    ],
    temperature: 0.2
  });

  const content = response.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("La API de OpenAI no devolvio contenido.");
  }

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error("La respuesta de OpenAI no fue JSON valido.");
  }

  return normalizeAnalysis(parsed);
}

function normalizeAnalysis(value) {
  const score = clampInt(value?.puntaje_compatibilidad, 0, 100);
  const strengths = normalizeStringArray(value?.fortalezas);
  const missingSkills = normalizeStringArray(value?.habilidades_faltantes);
  const improvements = normalizeStringArray(value?.mejoras_sugeridas);

  return {
    puntaje_compatibilidad: score,
    fortalezas: strengths,
    habilidades_faltantes: missingSkills,
    mejoras_sugeridas: improvements
  };
}

function normalizeStringArray(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item).trim()).filter(Boolean);
}

function clampInt(value, min, max) {
  const n = Number.parseInt(String(value), 10);
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}
