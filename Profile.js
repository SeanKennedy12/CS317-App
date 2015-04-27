 $(document).ready(function() {
	var UNLOCKED_IMAGE = "Images/YesUnlock.png";
	var LOCKED_IMAGE = "Images/NoUnlock.png";
    var isSignedIn = false;
	var stats;
	if(docCookies.hasItem("username")){
		console.log("Getting stats from account <"+docCookies.getItem("username")+">");
		stats = getUsageStats(docCookies.getItem("username"));
		isSignedIn = true;
	}else{
		console.log("Getting stats from local cookies");
		stats = getUsageStats();
		alert("Because you are not signed in, any achievements you earn will only be stored locally, and so they will disappear if cookies are cleared.");
	}
	console.log("markers_created:"+stats.markers_created+", markers_cleared:"+stats.markers_cleared+", messages_sent:" + stats.messages_sent);
	var achievement_checks = [];
	for(i = 0; i <= 18; i++){
		achievement_checks[i] = document.getElementById("achievementCheck" + i);
		
	}
	
	document.getElementById("text1").innerHTML = '<span class ="yellowText">Number of posts in chat</span>: ' + stats.messages_sent;
	document.getElementById("text2").innerHTML = '<span class ="yellowText">Number of items picked up</span>: ' + stats.markers_cleared;
	document.getElementById("text3").innerHTML = '<span class ="yellowText">Number of markers added to map</span>: ' + stats.markers_created;
	
	if(isSignedIn){
		achievement_checks[0].setAttribute("src", UNLOCKED_IMAGE);
	}else{
		achievement_checks[0].setAttribute("src", LOCKED_IMAGE);
	}
	
	if(docCookies.hasItem("checked_about")){
		achievement_checks[1].setAttribute("src", UNLOCKED_IMAGE);
	}else{
		achievement_checks[1].setAttribute("src", LOCKED_IMAGE);
	}
	
	if(stats.markers_cleared >= 1){
		achievement_checks[2].setAttribute("src", UNLOCKED_IMAGE);
		if(stats.markers_cleared >= 5){
			achievement_checks[3].setAttribute("src", UNLOCKED_IMAGE);
			if(stats.markers_cleared >= 10){
				achievement_checks[4].setAttribute("src", UNLOCKED_IMAGE);
				if(stats.markers_cleared >= 20){
					achievement_checks[5].setAttribute("src", UNLOCKED_IMAGE);
					if(stats.markers_cleared >= 50){
						achievement_checks[6].setAttribute("src", UNLOCKED_IMAGE);
						if(stats.markers_cleared >= 100){
							achievement_checks[7].setAttribute("src", UNLOCKED_IMAGE);
						}
					}
				}
			}
		}
	}
	
	if(stats.messages_sent >= 1){
		achievement_checks[8].setAttribute("src", UNLOCKED_IMAGE);
		if(stats.messages_sent >= 5){
			achievement_checks[9].setAttribute("src", UNLOCKED_IMAGE);
			if(stats.messages_sent >= 10){
				achievement_checks[10].setAttribute("src", UNLOCKED_IMAGE);
				if(stats.messages_sent >= 20){
					achievement_checks[11].setAttribute("src", UNLOCKED_IMAGE);
					if(stats.messages_sent >= 50){
						achievement_checks[12].setAttribute("src", UNLOCKED_IMAGE);
						if(stats.messages_sent >= 100){
							achievement_checks[13].setAttribute("src", UNLOCKED_IMAGE);
						}
					}
				}
			}
		}
	}
	
	if(stats.markers_created >= 1){
		achievement_checks[14].setAttribute("src", UNLOCKED_IMAGE);
		if(stats.markers_created >= 5){
			achievement_checks[15].setAttribute("src", UNLOCKED_IMAGE);
			if(stats.markers_created >= 10){
				achievement_checks[16].setAttribute("src", UNLOCKED_IMAGE);
				if(stats.markers_created >= 25){
					achievement_checks[17].setAttribute("src", UNLOCKED_IMAGE);
				}
			}
		}
	}
	
	if(docCookies.hasItem("found_secret")){
		achievement_checks[18].setAttribute("src", UNLOCKED_IMAGE);
	}else{
		achievement_checks[18].setAttribute("src", LOCKED_IMAGE);
	}
	
});