import type { VercelRequest, VercelResponse } from '@vercel/node';

// This is your API route: /api/gemini
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    // Get the resume text from the frontend
    const { text } = req.body;

    if (!text) {
      res.status(400).json({ error: 'No text provided' });
      return;
    }

    // Here you would call your AI backend (Google Gemini, OpenAI, etc.)
    // For now, we just simulate an improved version
    const improvedText = text.toUpperCase(); // <-- placeholder logic

    // Return improved text
    res.status(200).json({ improvedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
