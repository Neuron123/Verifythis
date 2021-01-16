var url_current = window.location.href;


function sendMesssageToBackground(url_current){
	 var sending = Promise.resolve(chrome.runtime.sendMessage({message1: url_current}));
	sending.then(handleResponse, handleError);
}

function handleResponse(message) {
  console.log("From background");
}

function handleError(error) {
  console.log("Error: ${error}");
}

sendMesssageToBackground(url_current);


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "flagged")
      sendResponse({farewell: "goodbye"});
  		
  /* JS */

    function error(msg) {
        $('<div/>').prependTo('body').addClass('notify-error').html(msg).slideDown();

    }
    
    function success(msg) {
        $('<div/>').prependTo('body').addClass('notify-success').html(msg).slideDown();
    }
    
    
    
        $('.notify-success').click(function () {
            $(this).slideUp().empty();
        });
    
    
    error('This article has been reported as fake! - click to dismiss');
    

    	$(".notify-error").click(function(){
         $(this).slideUp().empty();
		});

  		  });




 