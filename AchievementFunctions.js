function updateStats(user, stat){
	$.post("UpdateUsageStats.php", {username: user, stat_to_update: stat}, function(data){
		console.log("Updating data of user "+user+": " + stat);
		console.log("Returned: " + data);
	});
}
				
function updateCookieStats(stat){
	if(docCookies.hasItem(stat)){
		docCookies.setItem(stat, parseInt(docCookies.getItem(stat)) + 1);
	}else{
		docCookies.setItem(stat, "1");
	}
}

function getUsageStats(){
	var markers_created = 0;
	var markers_cleared = 0;
	var messages_sent = 0;
	
	if(docCookies.hasItem("markers_created")){
		markers_created = parseInt(docCookies.getItem("markers_created"));
	}
	
	if(docCookies.hasItem("markers_cleared")){
		markers_cleared = parseInt(docCookies.getItem("markers_cleared"));
	}
	
	if(docCookies.hasItem("messages_sent")){
		messages_sent = parseInt(docCookies.getItem("messages_sent"));
	}
	
	return {markers_created: markers_created, markers_cleared: markers_cleared, messages_sent, messages_sent};
}