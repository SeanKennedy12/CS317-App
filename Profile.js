 function setAchievements(user_stats){
	var UNLOCKED_IMAGE = "Images/YesUnlock.png";
	var LOCKED_IMAGE = "Images/NoUnlock.png";
 
	var messages_sent = parseInt(user_stats.messages_sent);
	var markers_cleared = parseInt(user_stats.markers_cleared);
	var markers_created = parseInt(user_stats.markers_created);
	var checked_about = parseInt(user_stats.checked_about);
 
	console.log("stats: " + user_stats);
	console.log("markers_created:"+markers_created+", markers_cleared:"+markers_cleared+", messages_sent:" + messages_sent);
	var achievement_checks = [];
	for(i = 0; i <= 18; i++){
		achievement_checks[i] = document.getElementById("achievementCheck" + i);
		
	}
	
	document.getElementById("text1").innerHTML = '<span class ="yellowText">Number of posts in chat</span>: ' + messages_sent;
	document.getElementById("text2").innerHTML = '<span class ="yellowText">Number of items picked up</span>: ' + markers_cleared;
	document.getElementById("text3").innerHTML = '<span class ="yellowText">Number of markers added to map</span>: ' + markers_created;
	
	if(docCookies.hasItem("username")){
		achievement_checks[0].setAttribute("src", UNLOCKED_IMAGE);
	}else{
		achievement_checks[0].setAttribute("src", LOCKED_IMAGE);
	}
	
	if(checked_about > 0){
		achievement_checks[1].setAttribute("src", UNLOCKED_IMAGE);
	}else{
		achievement_checks[1].setAttribute("src", LOCKED_IMAGE);
	}
	
	if(markers_cleared >= 1){
		achievement_checks[2].setAttribute("src", UNLOCKED_IMAGE);
		if(markers_cleared >= 5){
			achievement_checks[3].setAttribute("src", UNLOCKED_IMAGE);
			if(markers_cleared >= 10){
				achievement_checks[4].setAttribute("src", UNLOCKED_IMAGE);
				if(markers_cleared >= 20){
					achievement_checks[5].setAttribute("src", UNLOCKED_IMAGE);
					if(markers_cleared >= 50){
						achievement_checks[6].setAttribute("src", UNLOCKED_IMAGE);
						if(markers_cleared >= 100){
							achievement_checks[7].setAttribute("src", UNLOCKED_IMAGE);
						}
					}
				}
			}
		}
	}
	
	if(messages_sent >= 1){
		achievement_checks[8].setAttribute("src", UNLOCKED_IMAGE);
		if(messages_sent >= 5){
			achievement_checks[9].setAttribute("src", UNLOCKED_IMAGE);
			if(messages_sent >= 10){
				achievement_checks[10].setAttribute("src", UNLOCKED_IMAGE);
				if(messages_sent >= 20){
					achievement_checks[11].setAttribute("src", UNLOCKED_IMAGE);
					if(messages_sent >= 50){
						achievement_checks[12].setAttribute("src", UNLOCKED_IMAGE);
						if(messages_sent >= 100){
							achievement_checks[13].setAttribute("src", UNLOCKED_IMAGE);
						}
					}
				}
			}
		}
	}
	
	if(markers_created >= 1){
		achievement_checks[14].setAttribute("src", UNLOCKED_IMAGE);
		if(markers_created >= 5){
			achievement_checks[15].setAttribute("src", UNLOCKED_IMAGE);
			if(markers_created >= 10){
				achievement_checks[16].setAttribute("src", UNLOCKED_IMAGE);
				if(markers_created >= 25){
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
 }
 
 $(document).ready(function() {
	if(docCookies.hasItem("username")){
		var user = docCookies.getItem("username");
		console.log("Getting stats from account <"+user+">");
		$.post("GetUsageStats.php", {username: user}, function(data){
			console.log("Parsing: " + data)
			var stats = JSON.parse(data);
			setAchievements(stats);
		});
	}else{
		console.log("Getting user_stats from local cookies");
		var stats = getLocalUsageStats();
		alert("Because you are not signed in, any achievements you earn will only be stored locally, and so they will disappear if cookies are cleared.");
		setAchievements(stats);
	}
});