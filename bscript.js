
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.match(/coursera.org/i)) {
        browser.pageAction.show(tab.id);
    }
});

