chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'developer.chrome.com' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

    
    chrome.contextMenus.onClicked.addListener((data, tab) =>{
        console.log(data);

        let url = "https://polarpod.herokuapp.com"
        if(data.menuItemId == "cleanfb"){
            url += `/cleanfb?url=${data.linkUrl}`
        }
        else if(data.menuItemId == "ogtags"){
            url += `/ogtags?url=${data.linkUrl}`
        }

        chrome.tabs.create({url: url, index: tab.index + 1});
    });


    // MAIN menu item
    chrome.contextMenus.create({
        id: "polar-main",
        title: "Polarpod",
        contexts:['selection', 'link']
        
    });

    // cleanfb
    chrome.contextMenus.create({
        id: "cleanfb",
        parentId:'polar-main',
        title: "Clean facebook link",
        contexts:['selection', 'link']
        
    });

    // ogtags
    chrome.contextMenus.create({
        id: "ogtags",
        parentId:'polar-main',
        title: "Get Og tags",
        contexts:['selection', 'link']
        
    });


});