chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    console.log('Page uses History API and we heard a pushState/replaceState');
    chrome.tabs.executeScript(null, {file: "content.js"});		
});
