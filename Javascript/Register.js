function attemptRegister(){
	var current_username = document.getElementById("register_username").value;
	var current_password = document.getElementById("register_password").value;
	console.log("Attempting registration with username "+current_username+" and password "+current_password.charAt(0)+"..." + 
		current_password.charAt(current_password.length - 1));
	$.post("Register.php", {username: current_username, password: current_password}, function(data){
		console.log("Returned: " + data + "|");
		var tokens = data.split('###');
		var return_val = parseInt(tokens[0]);
		if(return_val == 1){
			docCookies.setItem("username", current_username);
			docCookies.setItem("level", "0");
			alert('Successfully registered username "'+current_username+'"');
			window.location.href = "WelcomeRegister.html"
		}else if(return_val == 0){
			alert("Username has already been taken!");
		}else if(return_val == -1){
			var username_min = tokens[1];
			var username_max = tokens[2];
			var password_min = tokens[3];
			var password_max = tokens[4];
			alert("Your username or password did not have a valid amount of characters. Usernames must be between "+username_min+" and "+username_max+" characters, and passwords must be between "+password_min+" and "+password_max+" characters.");
		}
	});
}