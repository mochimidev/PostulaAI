import multer from "multer";
import { analyzeResumePdf } from "../src/js/openaiClient.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024
  }
});

export const uploadPdf = upload.single("resumePdf");

export async function analyzeResumeController(req, res) {
  try {
    const jobDescription = req.body?.jobDescription;
    const pdfFile = req.file;

    if (!pdfFile) {
      return res.status(400).json({ error: "Se requiere un archivo PDF en resumePdf." });
    }

    if (typeof jobDescription !== "string" || !jobDescription.trim()) {
      return res.status(400).json({ error: "Se requiere jobDescription." });
    }

    const result = await analyzeResumePdf({
      pdfBuffer: pdfFile.buffer,
      jobDescription
    });

    return res.status(200).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error inesperado.";
    return res.status(500).json({ error: message });
  }
}
