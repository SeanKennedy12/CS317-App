function attemptSignIn(){
	var current_username = document.getElementById(login_username).value;
	var current_password = document.getElementById(login_password).value;
	console.log("Attempting login with username "+current_username+" and password "+current_password.charAt(0)+"..." + 
		current_password.charAt(current_password.length - 1));
	$.post("SignIn.php", {username: current_username, password: current_password} function(data){
		if(data === "true"){
			document.cookie = document.cookie + "username=" + current_username + ";";
		}else{
			alert("Username/password not recognised!");
		}
	}
}