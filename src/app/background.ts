chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Background got a message!");
  sendResponse({});
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it
  // like send the new url to contentscripts.js
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      message: "URL_CHANGE",
      url: changeInfo.url,
    });
  }
});
