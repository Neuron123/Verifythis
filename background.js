

function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " +
    request.message1);
	
	var ajax = new XMLHttpRequest();
	ajax.open("GET","http://localhost/newscheck/data.php?q=" + request.message1,true);
	ajax.send();
	ajax.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		//console.log(this.responseText);
		var check = this.responseText;
		if(check == 1){
			//alert("flagged");

			/* notifications create */
				chrome.notifications.create('', {  title: 'Just wanted to notify you',  message: 'This article has been reported as fake!',  iconUrl: '/assets/images/icon24.png',  type: 'basic'});
					
				sendMessageToContent();
		}
	}	
	
	};
	
  sendResponse({response: "Response from background script"});
}
chrome.runtime.onMessage.addListener(handleMessage);

function sendMessageToContent(){
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "flagged"}, function(response) {
    console.log(response.farewell);
  });
});

}

var min = 1;
var max = 27;
var current = min;

var keep_switching_icon = true;

function rotateIcon() {
  if (keep_switching_icon) {
    chrome.browserAction.setIcon({path:"assets/images/icons/" + current + ".png"});
    //console.log(current);
    if (current++ > max) {
      current = min;
    };

    window.setTimeout(rotateIcon, 200);
  }
}

rotateIcon();