 $(document).ready(function() {
	if(docCookies.hasItem("username")){
		if(!docCookies.hasItem("checked_about")){
			docCookies.setItem("checked_about","1",Infinity);
			$.post("UpdateUsageStats.php", {username: docCookies.getItem("username"), stat_to_update: "checked_about"}, function(data){
				console.log("Updating data of user "+user+": " + stat);
				console.log("Returned: " + data);
			});
		}
	}else{
		docCookies.setItem("checked_about","1",Infinity);
	}
});