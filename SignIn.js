function attemptSignIn(){
	var current_username = document.getElementById(login_username).value;
	var current_password = document.getElementById(login_password).value;
	$.post("SignIn.php", {username: current_username, password: current_password} function(data){
		if(data === "true"){
			document.cookie = document.cookie + "username=" + current_username + ";";
		}else{
			alert("Username/password not recognised!");
		}
	}
}