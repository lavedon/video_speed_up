try {
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    console.log('Page uses History API and we heard a pushState/replaceState');
    chrome.tabs.executeScript(null, {file: "content.js"});		
}); 
} catch(err) {
    console.log(err);
}
try {
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null, {file: "content.js"});
});
} catch(err) {
    console.log(err);
}
