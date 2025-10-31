chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "smartCite",
    title: "Find Sources with Smart Cite",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "smartCite") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: fetchCitations,
      args: [info.selectionText]
    });
  }
});

async function fetchCitations(selectedText) {
  const query = encodeURIComponent(selectedText);
  const scholarURL = `https://scholar.google.com/scholar?q=${query}`;
  window.open(scholarURL, "_blank");
}
