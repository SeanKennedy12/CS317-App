function GarbageController() {
    var garbageModel = new GarbageModel(),
        garbageView = new GarbageView();

    this.init = function () {
        garbageModel.init();
        garbageView.init();
        garbageView.setSignInCallBack(function () {window.location.href = "SignIn.html"; });
        garbageView.setMapCallback(function () {window.location.href = "Map.html"; });
        garbageView.setChatCallback(function () {window.location.href = "Chat.html"; });
        garbageView.setSettingsCallback(function () {window.location.href = "Settings.html"; });
        garbageView.setAboutCallback(function () {window.location.href = "About.html"; });
    };
}

var garbageController = new GarbageController();

window.addEventListener("load", garbageController.init, false);