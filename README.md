# CareerFit AI 🎯
### Free AI Job Match Analyzer — No Signup, No Credit Card, No Cost

> Built for students. Zero friction. Just paste and go.

🔗 **Live:** [careerfit-ai.vercel.app](https://careerfit-ai.vercel.app)
⭐ **Star this repo** if it helped you land an interview!

![Free](https://img.shields.io/badge/Price-Free%20Forever-brightgreen)
![Students](https://img.shields.io/badge/Built%20For-Students-blue)
![Powered by Llama](https://img.shields.io/badge/AI-Llama%203.3%2070B-orange)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)

---

## 🤔 The Problem

Students spend hours applying to jobs blindly:
- No idea if your resume matches the JD
- Find out visa sponsorship isn't available **after** the interview
- Write the same generic cover message for every role
- Get ghosted because you missed 5 keywords the ATS was scanning for

**CareerFit AI solves all of this in under 10 seconds — for free.**

---

## ✨ What You Get

| Feature | Description |
|---|---|
| 🎯 **Match Score 0–100** | How well your resume fits this specific role |
| ✅ **Strengths** | What makes you a strong candidate |
| ⚠️ **Gap Detection** | Exactly what you're missing |
| 🔑 **Keyword Analysis** | ATS keywords matched vs missing |
| 🌍 **Visa Risk Check** | Will they sponsor? Honest upfront answer |
| ✍️ **Cover Pitch** | Personalized 3-4 sentence pitch, ready to copy |
| 💡 **Resume Tips** | How to tailor your resume for this exact role |

---

## 🚀 Deploy in 5 Minutes (Free)

### Step 1 — Get a free Groq API key
1. Go to **[console.groq.com](https://console.groq.com)**
2. Sign up with Google or email — **no credit card**
3. Click **API Keys** → **Create API Key**
4. Copy your key (starts with `gsk_...`)

### Step 2 — Fork & deploy to Vercel
1. Click **Fork** on this GitHub repo
2. Go to **[vercel.com](https://vercel.com)** → Sign up free with GitHub
3. Click **Add New Project** → Import your forked repo
4. Under **Environment Variables**, add:
   ```
   Name:  GROQ_API_KEY
   Value: gsk_your_key_here
   ```
5. Click **Deploy** → Done! 🎉

Your site is live at `https://your-project.vercel.app`

**Total cost: $0. Forever.**

---

## 📁 Project Structure

```
careerfit-ai/
├── public/
│   └── index.html        # The entire frontend (one file!)
├── api/
│   └── analyze.js        # Serverless API route (hides your Groq key)
├── vercel.json           # Vercel routing config
└── README.md
```

---

## 🛠️ Tech Stack

```
Frontend   →  Vanilla HTML + CSS + JS  (zero dependencies)
AI Model   →  Llama 3.3 70B via Groq   (free, fast, accurate)
Backend    →  Vercel Serverless         (free tier, auto-scales)
Hosting    →  Vercel                   (free)
```

**Why Groq?**
- ✅ Free tier — no credit card required
- ✅ Llama 3.3 70B — high quality open-source model
- ✅ Blazing fast inference (~2-3 seconds per analysis)
- ✅ Generous rate limits for student use

---

## 💻 Run Locally

```bash
# Clone
git clone https://github.com/sri-harshini/careerfit-ai.git
cd careerfit-ai

# Install Vercel CLI
npm install -g vercel

# Add your Groq key to .env.local
echo "GROQ_API_KEY=gsk_your_key_here" > .env.local

# Run locally
vercel dev
```

Open `http://localhost:3000`

---

## 🌍 Why This Matters for Students

- **International students (F1/OPT)** get instant visa risk warnings
- **New grads** stop wasting time on poor-fit roles
- **Career switchers** know exactly what gaps to address
- **Everyone** applies smarter with a personalized pitch

Jobscan charges **$50/month** for similar features. This is **free forever**.

---

## 🤝 Contributing

Ideas for improvements:
- [ ] PDF resume upload & parsing
- [ ] Save analysis history
- [ ] Salary range estimation
- [ ] Chrome extension
- [ ] Multi-language support
- [ ] Company culture fit scoring

PRs welcome! Open an issue first to discuss.

---

## 📄 License

MIT — free to use, fork, and deploy for any student or nonprofit purpose.

---

## 👩‍💻 Built By

**Sri Harshini Vemula** · Software Engineer & AI/ML Specialist

Currently @ Palantir · MS CS @ Youngstown State University

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://linkedin.com/in/sri-harshini-vemula)
[![Email](https://img.shields.io/badge/Email-shvemula09@gmail.com-red)](mailto:shvemula09@gmail.com)

---

*If this helped you land an offer — please ⭐ star the repo and share it with other students!*
