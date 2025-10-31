# smart-cite-chrome-extension
A Chrome Extension that helps students and researchers instantly find academic sources using Chrome’s built-in AI APIs
# 📚 Smart Cite — AI-Enhanced Academic Source Finder

### 🚀 Google Chrome Built-in AI Challenge 2025 Submission  
**APIs Used:** Chrome Built-in Summarizer API (window.ai.summarizer)  
**Built With:** JavaScript (Manifest V3) • HTML • CSS • Chrome AI

---

## 💡 Inspiration

Finding academic sources online is slow.  
You highlight a sentence, open a new tab, paste it into Google Scholar, and hope for relevant results.  

**Smart Cite** removes that friction by using Chrome’s on-device AI to understand the selected text and automatically open the best matching scholarly results — all in one click, fully client-side.

---

## 🧩 What It Does

1. **Highlight → Right-click → “Find Sources with Smart Cite.”**  
   Smart Cite uses Chrome’s **Summarizer API** behind the scenes to analyze the selected text and extract its key intent or topic.

2. **Instant Scholar Search**  
   It then crafts an optimized query and opens **Google Scholar** with relevant papers, articles, and citations.

3. **Privacy by Design**  
   Everything happens locally in Chrome — no servers, no API keys, no data sharing.

---

## ⚙️ How We Built It

| Component | Description |
|------------|-------------|
| `background.js` | Creates the context-menu and executes the citation finder. |
| `content.js` | Uses **Summarizer API** to distill user-selected text into a concise query string. |
| `manifest.json` | Defines extension settings (Manifest V3). |
| `popup.html` + `style.css` | Glass-style modern UI with quick usage tips. |

**AI API Used**

- 🧠 **Summarizer API** — Converts long or complex highlighted text into a short semantic summary used purely for **query generation**.  
  - Enables more accurate and relevant search results.  
  - Runs entirely on-device via **Gemini Nano**.  

---

## 🎯 Problem It Solves

- Researchers and students waste time copy-pasting text into Google Scholar.  
- Queries are often too long or vague.  
- Smart Cite automatically interprets the context of any highlighted text and finds precise academic matches instantly.

---

## 🧭 Future Plans

- Integrate **Proofreader API** to help refine scholarly writing.  
- Add **Translator API** for multilingual academic search.  
- Experiment with **Writer API** to auto-generate citation notes.

---

## 🧪 Installation Instructions

1. Download or clone this repo.  
2. Open Chrome → `chrome://extensions`.  
3. Turn on **Developer Mode** (top-right).  
4. Click **Load unpacked** → select this folder.  
5. Highlight any text on a webpage → Right-click → **Find Sources with Smart Cite**.  
6. A new tab opens with Google Scholar results tailored by Chrome AI.

---

## 🎥 Demo Video

**YouTube Link:** [https://youtu.be/iOBOzxU7CaU]


---

## ⚖️ License

[MIT License](LICENSE)

---

> 🧠 Smart Cite — Turning Highlighted Text into Academic Insights, Powered by Chrome AI.

