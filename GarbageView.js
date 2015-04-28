

function GarbageView() {
       var addMouseAndTouchUp = function (elementID, handler) {
            //utility function to add both mouseup and touchend events and prevent double events
            var element = document.getElementById(elementID),
                f = function (e) {
                    e.preventDefault();//stops mobile browsers faking the mouse events after touch events
                    handler(e);
                    return false;
                    console.out(element);
                };
            element.addEventListener("mouseup", f, false);
            element.addEventListener("touchend", f, false);
        },
        showAbout = function () {
            //handle showing about box purely within the view as their's no model involved
            document.getElementById("popupAbout").style.display = "block";
            history.pushState(null, null, "#about");
        },
        hideAbout = function () {
            //handle hiding about box purely within the view
            document.getElementById("popupAbout").style.display = "none";
            if (openNav) { openCloseNav(); }
        };

    this.setSignInCallBack = function (callback) {
        addMouseAndTouchUp("signIn", callback);
    };

    this.setMapCallback = function (callback) {
        addMouseAndTouchUp("map", callback);
    };

    this.setChatCallback = function (callback) {
        addMouseAndTouchUp("chat", callback);
    };

    this.setSettingsCallback = function (callback) {
        addMouseAndTouchUp("settings", callback);
    };

    this.setAboutCallback = function (callback) {
        addMouseAndTouchUp("about", callback);
    };
    

    this.init = function () {

    };
}
