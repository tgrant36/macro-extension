const playMacroId = document.getElementById("playMacroId");
const recordMacroId = document.getElementById("recordMacroId");

if (playMacroId) {
    playMacroId.onclick = function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    url: chrome.runtime.getURL("images/web-image.png"),
                    imageDivId: `${guidGenerator()}`,
                    tabId: tabs[0].id
                },
                function(response) {
                    window.close();
                }
            );
        });
  };
}

if(recordMacroId) {
    recordMacroId.onclick = function() {
        console.log("Will start recording! Once I build it....")
    }
}

function guidGenerator() {
    const S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};