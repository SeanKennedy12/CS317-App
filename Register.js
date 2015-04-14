function attemptRegister(){
	console.log("x");
	var current_username = document.getElementById("register_username").value;
	var current_password = document.getElementById("register_password").value;
	console.log("Attempting registration with username "+current_username+" and password "+current_password.charAt(0)+"..." + 
		current_password.charAt(current_password.length - 1));
	$.post("Register.php", {username: current_username, password: current_password}, function(data){
		console.log("Returned: " + data + "|");
		if(data == 'true '){
			deleteCookie("username");
			addCookie("username", current_username);
			alert('Successfully registered username "'+current_username+'"');
		}else{
			alert("Username has already been taken!");
		}
	});
}