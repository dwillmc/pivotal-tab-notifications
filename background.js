
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == "loading") {
        if (tab.url.search("pivotal") != -1 && (tab.url.search("/n/projects") != -1 || tab.url.search("/n/workspaces") != -1)) {
            chrome.tabs.executeScript(tabId, {
                file: 'run.js'
            });
        }
    }
});