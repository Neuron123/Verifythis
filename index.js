function loadurlofcurrentPage(){

	window.onload = function() {
    	if (window.jQuery) {  
        // jQuery is loaded  
        console.log("jQuery loaded");
    	} else {
        	// jQuery is not loaded
        	console.log("jQuery not loaded");
    	}
	}
	//
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    var title = tabs[0].title;
    //console.log(title); 
    document.getElementById('cardheader').innerText = title;
    document.getElementById('well_url').innerText = url;

	});

}
loadurlofcurrentPage();

/* jQuery code */
$(document).ready(function(){
	$("#fakebtn").click(function(){
		$(this).addClass("active");

		setTimeout(function(){
			$("#fakebtn").addClass("success");
		},4000);

		setTimeout(function(){
			$("#fakebtn").removeClass("active");
			$("#fakebtn").removeClass("success");
			$("#fakebtn").html("Thank You!");
			$("#fakebtn").attr("disabled",true);
		},5000);

	});

});
