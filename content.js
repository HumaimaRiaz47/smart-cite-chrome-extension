async function summarizeText(text) {
  if (!window.ai || !window.ai.summarizer) {
    alert("Chrome AI Summarizer not supported in this browser yet.");
    return;
  }

  const summarizer = await window.ai.summarizer.create();
  const summary = await summarizer.summarize(text);
  return summary;
}
