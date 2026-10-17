import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

const INSUFFICIENT_INFO_SENTENCE =
  'The uploaded textbook does not provide enough information to answer this confidently.';

// API Status & Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    model: 'gemini-3.8-flash',
  });
});

// AI Tutor Chat Route with strict textbook grounding
app.post('/api/chat', async (req, res) => {
  try {
    const {
      courseCode,
      courseTitle,
      unitTitle,
      topicTitle,
      question,
      messages,
      textbookPassages,
    } = req.body;

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error: 'api_key_missing',
        message: 'Server GEMINI_API_KEY is not configured. Falling back to local textbook retrieval engine.',
      });
    }

    const ai = new GoogleGenAI({});

    // Build concise textbook grounding context from the active course ONLY
    const passagesText = Array.isArray(textbookPassages) && textbookPassages.length > 0
      ? textbookPassages.map((p: any, idx: number) => `
[PASSAGE ${idx + 1}]
Source Reference: ${p.reference || `${courseCode}, ${unitTitle || 'Unit'}`}
Topic: ${p.title}
Textbook Content:
${p.content}
${Array.isArray(p.definitions) && p.definitions.length > 0 ? `Definitions: ${p.definitions.map((d: any) => `${d.term}: ${d.definition} (${d.sourceAuthor || ''})`).join('; ')}` : ''}
${p.simplified ? `Key Takeaway: ${p.simplified.keyTakeaway}` : ''}
`).join('\n---\n')
      : 'No verified textbook passages available for this query.';

    const systemInstruction = `You are StudyVault AI Tutor for the course "${courseCode}: ${courseTitle}".

STRICT TEXTBOOK-ONLY KNOWLEDGE POLICY:
1. The uploaded course textbook passages provided below are your EXCLUSIVE source of academic knowledge.
2. DO NOT use internet searches, general AI knowledge, outside textbooks, or assumptions to fill gaps.
3. Preserve the textbook's original definitions, terminology, classifications, examples, theories, named authors, formulas, tables, and distinctions.
4. If the provided textbook passages do NOT contain enough information to answer confidently, you MUST respond with this EXACT sentence and nothing else:
"${INSUFFICIENT_INFO_SENTENCE}"
5. Never silently supplement missing information with outside knowledge.
6. When explaining, make difficult concepts easier to understand in clear, everyday English without changing their meaning.
7. Break concepts into smaller steps and suggest helpful follow-up questions to check the student's understanding.
8. Always cite the relevant chapter, unit, section, or page number from the provided passages.

VERIFIED TEXTBOOK PASSAGES:
${passagesText}`;

    const formattedHistory = Array.isArray(messages)
      ? messages.slice(-4).map((m: any) => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }],
        }))
      : [];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        ...formattedHistory,
        {
          role: 'user',
          parts: [{ text: question }],
        },
      ],
      config: {
        systemInstruction,
        temperature: 0.2, // Low temperature for factual fidelity to textbook
      },
    });

    const reply = response.text || INSUFFICIENT_INFO_SENTENCE;
    const firstRef = textbookPassages?.[0]?.reference || `${courseCode}, ${unitTitle || 'Textbook'}`;

    res.json({
      reply,
      sourceReference: firstRef,
      engine: 'gemini_grounded',
      model: 'gemini-3.8-flash',
    });
  } catch (error: any) {
    console.error('Gemini chat proxy error:', error);
    res.status(500).json({
      error: 'generation_failed',
      message: error?.message || 'Failed to generate response',
    });
  }
});

// Unit Written Exam Evaluation Route
app.post('/api/evaluate', async (req, res) => {
  try {
    const { question, userAnswer, passMark = 7 } = req.body;

    if (!question || !userAnswer) {
      return res.status(400).json({ error: 'Question and userAnswer are required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error: 'api_key_missing',
        message: 'Server GEMINI_API_KEY is not configured. Falling back to local textbook rubric evaluator.',
      });
    }

    const ai = new GoogleGenAI({});

    const systemInstruction = `You are the official Academic Examiner for StudyVault AI.
You evaluate student written examination responses strictly against the official course textbook marking scheme and rubric points.

EVALUATION RULES:
1. Award an integer score out of ${question.maxMarks || 10}.
2. The pass mark is ${passMark} out of ${question.maxMarks || 10}. A score of ${passMark} or above is "Passed"; below is "Not Yet Passed".
3. Do NOT penalize the student simply because sentence structure differs from the textbook. Accept different wording when it accurately expresses the same meaning and includes the necessary concepts.
4. Assess:
   - Whether the student understands the question.
   - Whether important rubric points are included.
   - Whether the explanation is accurate.
   - Whether key concepts or technical terms were omitted or misused.
   - Whether any incorrect claims or contradictions were made.
5. Provide structured JSON matching:
{
  "score": number, // 0 to ${question.maxMarks || 10}
  "passed": boolean, // score >= ${passMark}
  "pointsIncluded": string[], // points accurately covered
  "pointsMissed": string[], // essential concepts left out
  "inaccurateStatements": string[], // inaccurate claims
  "terminologyCheck": string[], // analysis of technical terms
  "corrections": string[], // specific corrections using the textbook
  "suggestedAnswer": string, // model answer based on the textbook
  "howToImprove": string[], // actionable advice
  "feedbackExplanation": string // scannable summary
}`;

    const prompt = `QUESTION PROMPT:
${question.prompt}

SOURCE REFERENCE:
${question.sourceReference}

OFFICIAL TEXTBOOK MODEL ANSWER:
${question.expectedAnswerGuide}

KEY RUBRIC POINTS:
${JSON.stringify(question.keyRubricPoints)}

STUDENT'S WRITTEN RESPONSE:
"${userAnswer}"

Please evaluate and output strictly valid JSON according to the instructions.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        temperature: 0.1,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: any) {
    console.error('Gemini evaluation proxy error:', error);
    res.status(500).json({
      error: 'evaluation_failed',
      message: error?.message || 'Evaluation failed',
    });
  }
});

// Mount Vite middleware in development
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`StudyVault AI full-stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
