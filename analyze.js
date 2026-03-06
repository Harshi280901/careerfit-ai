export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { resume, jobDescription, jobTitle, visaStatus } = req.body;

  if (!resume || !jobDescription) {
    return res.status(400).json({ error: 'Resume and job description are required' });
  }

  const visaLabels = {
    us_citizen: 'US Citizen',
    green_card: 'Green Card Holder',
    h1b: 'H1B Visa',
    f1_opt: 'F1 OPT (Student Visa)',
    f1_cpt: 'F1 CPT (Student Visa)',
    l1: 'L1 Visa',
    tn: 'TN Visa',
    other: 'Unspecified'
  };

  const systemPrompt = `You are a world-class technical recruiter and AI career coach helping students land jobs.
Analyze the resume and job description carefully. Return ONLY a valid JSON object, no markdown, no explanation:
{
  "matchScore": <0-100>,
  "matchLabel": "<Poor Match|Fair Match|Good Match|Strong Match|Excellent Match>",
  "summary": "<2-3 sentence honest executive summary of fit>",
  "strengths": ["<specific strength from resume>", "<strength 2>", "<strength 3>", "<strength 4>"],
  "gaps": ["<specific gap>", "<gap 2>", "<gap 3>"],
  "keywordsMatched": ["<keyword>","<keyword>","<keyword>","<keyword>","<keyword>","<keyword>"],
  "keywordsMissing": ["<keyword>","<keyword>","<keyword>","<keyword>"],
  "tailoredPitch": "<3-4 sentence personalized pitch for this exact role the student can copy-paste>",
  "resumeTips": ["<specific actionable tip>", "<tip 2>", "<tip 3>"],
  "visaRisk": "<None|Low|Medium|High>",
  "visaNote": "<honest 1-2 sentence assessment of work auth compatibility for this candidate>"
}
Be specific and reference actual content from the resume. Be honest about gaps.`;

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1500,
        temperature: 0.3,
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: `CANDIDATE VISA STATUS: ${visaLabels[visaStatus] || 'Unspecified'}

RESUME:
${resume}

JOB TITLE: ${jobTitle || 'Not specified'}

JOB DESCRIPTION:
${jobDescription}

Return only the JSON object.`
          }
        ]
      })
    });

    if (!groqRes.ok) {
      const err = await groqRes.json();
      throw new Error(err.error?.message || `Groq API error ${groqRes.status}`);
    }

    const data = await groqRes.json();
    const text = data.choices[0].message.content;
    const clean = text.replace(/```json|```/g, '').trim();
    const result = JSON.parse(clean);

    return res.status(200).json(result);

  } catch (err) {
    console.error('Analysis error:', err);
    return res.status(500).json({ error: err.message || 'Analysis failed. Please try again.' });
  }
}
