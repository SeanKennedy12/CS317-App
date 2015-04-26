$(document).ready(function() {
    if(docCookies.getItem("cookies_accepted") != "true"){
	    alert("This app uses cookies for core functionality, and will not function properly without them. Please exit this app immediately if you do not want cookies to be stored. By clicking OK you agree that cookies may be stored.");
	    docCookies.setItem("cookies_accepted", "true");
    }
	if(docCookies.hasItem("username")){
		var sign_in = document.getElementById("signIn");
		sign_in.innerHTML = "Sign out";
	}
});
