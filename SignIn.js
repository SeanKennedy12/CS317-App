function attemptSignIn(){
	console.log("Cookie before sign-in: ---" + document.cookie + "---");
	var current_username = document.getElementById("login_username").value;
	var current_password = document.getElementById("login_password").value;
	console.log("Attempting login with username "+current_username+" and password "+current_password.charAt(0)+"..." + 
	current_password.charAt(current_password.length - 1));
	$.post("SignIn.php", {username: current_username, password: current_password}, function(data){
		console.log("Returned: " + data);
		var current_level = parseInt(data);
		if(current_level >= 0){
			docCookies.setItem("username", current_username);
			docCookies.setItem("level", current_level);
			//alert('Successfully signed in as '+current_username);
			window.location.href = "welcome.html"
		}else if(current_level == -1){
			alert("Username not recognised!");
		}else if(current_level == -2){
			alert("Incorrect password!");
		}
	});
}