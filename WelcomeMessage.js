$(document).ready(function() {
    var welcome_message = document.getElementById('welcome_message');
	var username = docCookies.getItem('username');
	welcome_message.innerHTML = "Welcome back, " + username + "!";
});
