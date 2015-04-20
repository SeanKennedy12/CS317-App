function GarbageModel() {
    /* 
     * Menu Control
     */

    var menuVisible = false;
    var currentView = $("#map");

    function openmenu(){
	if(!menuVisible){
		$("#navigation").addClass('open');
		menuVisible = true;
	}else{
		$("#navigation").removeClass('open');
		menuVisible = false;
	}
    }

    $("#nav-open").click(openmenu);

    $("#nav-home").click(function(event) {
	currentView.addClass('hidden');
	$("#home").removeClass('hidden');
	currentView = $("#home");
        $("#title").html("Home");
        openmenu();
    });

    $("#nav-map").click(function(event) {
	currentView.addClass('hidden');
	$("#map").removeClass('hidden');
	currentView = $("#map");
        $("#title").html("Map");
        openmenu();
    });
    
    $("#nav-chat").click(function(event) {
	currentView.addClass('hidden');
	$("#chat").removeClass('hidden');
	currentView = $("#chat");
        $("#title").html("Chat");
        openmenu();
    });
    
    $("#nav-settings").click(function(event) {
	currentView.addClass('hidden');
	$("#settings").removeClass('hidden');
	currentView = $("#settings");
        $("#title").html("Settings");
        openmenu();
    });
    
    $("#nav-about").click(function(event) {
	currentView.addClass('hidden');
	$("#about").removeClass('hidden');
	currentView = $("#about");
        $("#title").html("About");
        openmenu();
    });
    
    $("#nav-signin").click(function(event) {
	currentView.addClass('hidden');
	$("#signIn").removeClass('hidden');
	currentView = $("#signIn");
        $("#title").html("Sign In");
        openmenu();
    });
    
    $("#nav-profile").click(function(event) {
	currentView.addClass('hidden');
	$("#profile").removeClass('hidden');
	currentView = $("#profile");
        $("#title").html("Profile");
        openmenu();
    });
    
    
    this.init = function () {};
}