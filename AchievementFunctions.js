function updateStats(user, stat){
	$.post("UpdateUsageStats.php", {username: user, stat_to_update: stat}, function(data){
		console.log("Updating <"+user+">'s <"+stat+"> stat");
		docCookies.setItem();
		console.log("Updating data of user "+user+": " + stat);
		console.log("Returned: " + data);
		docCookies.setItem("backup_" + stat, data);
	});
}
				
function updateCookieStats(stat){
	if(docCookies.hasItem(stat)){
		docCookies.setItem(stat, parseInt(docCookies.getItem(stat)) + 1, Infinity);
	}else{
		docCookies.setItem(stat, "1", Infinity);
	}
}

function getLocalUsageStats(){
	var markers_created = 0;
	var markers_cleared = 0;
	var messages_sent = 0;
	var checked_about = 0;
	
	if(docCookies.hasItem("markers_created")){
		markers_created = parseInt(docCookies.getItem("markers_created"));
	}
	
	if(docCookies.hasItem("markers_cleared")){
		markers_cleared = parseInt(docCookies.getItem("markers_cleared"));
	}
	
	if(docCookies.hasItem("messages_sent")){
		messages_sent = parseInt(docCookies.getItem("messages_sent"));
	}
	
	if(docCookies.hasItem("checked_about")){
		checked_about = parseInt(docCookies.getItem("checked_about"));
	}
	
	return {markers_created: markers_created, markers_cleared: markers_cleared, messages_sent: messages_sent, checked_about: checked_about};
}

function getAccountUsageStats(user){
	var stats = false;
	console.log("stats: " + stats.markers_created + "," + stats.markers_cleared + "," + stats.messages_sent + "," + stats.checked_about);
	
	try{
		$.post("GetUsageStats.php", {username: user}, function(data){
			var markers_created = 0;
			var markers_cleared = 0;
			var messages_sent = 0;
			var checked_about = 0;
			
			console.log("Returned: " + data);
			
			/*
			var tokens = data.split('###');
			console.log("Tokens: "+tokens[0]+","+tokens[1]+","+tokens[2]+","+tokens[3]);
			markers_created_val = parseInt(tokens[0]);
			markers_cleared = parseInt(tokens[1]);
			messages_sent = parseInt(tokens[2]);
			checked_about = parseInt(tokens[3]);
			*/
			
			console.log("Parsing: " + data)
			stats = JSON.parse(data);
			console.log("stats: " + stats.markers_created + "," + stats.markers_cleared + "," + stats.messages_sent + "," + stats.checked_about);
		});
	}catch(err){
		var markers_created = 0;
		var markers_cleared = 0;
		var messages_sent = 0;
		var checked_about = 0;
	
		markers_created = parseInt(docCookies.getItem("backup_markers_created"));
		markers_cleared = parseInt(docCookies.getItem("backup_markers_cleared"));
		messages_sent = parseInt(docCookies.getItem("backup_messages_sent"));
		checked_about = parseInt(docCookies.getItem("backup_checked_about"));
		
		stats = {markers_created: markers_created, markers_cleared: markers_cleared, messages_sent: messages_sent, checked_about: checked_about};
	}
	
	while(!stats);
	console.log("stats: " + stats.markers_created + "," + stats.markers_cleared + "," + stats.messages_sent + "," + stats.checked_about);
	return stats;
}