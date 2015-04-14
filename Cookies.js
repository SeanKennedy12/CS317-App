function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 

function addCookie(cname, cval){
	document.cookie = document.cookie + cname + "=" + cval + ";";
}

function deleteCookie(cname){
	var ca = document.cookie.split(';');
	document.cookie = "";
	for(var i=0; i<ca.length; i++){
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != 0) document.cookie = document.cookie + c;
	}
}