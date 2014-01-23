chrome.browserAction.onClicked.addListener(function(tab) {
	  
	console.log('Applying proxy on ' + tab.url);
	chrome.tabs.executeScript({
		file: 'backdoor.js'
	});
});