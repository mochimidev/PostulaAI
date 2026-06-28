import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { analyzeResumeController, uploadPdf } from "./analyzeResumeController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/analyze", uploadPdf, analyzeResumeController);

app.listen(port, () => {
  console.log(`PostulaAI API listening on port ${port}`);
});
