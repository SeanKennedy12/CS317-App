$(document).ready(function() {
	var new_bgc = document.body.style.backgroundColor;
	if(docCookies.hasItem('bgc')) {
		new_bgc = docCookies.getItem('bgc');
		console.log("Getting saved background color ("+new_bgc+")");
	}
	document.body.style.backgroundColor = new_bgc;
});