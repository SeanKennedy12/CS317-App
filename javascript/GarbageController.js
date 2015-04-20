function GarbageController() {
    var garbageModel = new GarbageModel(),
        garbageView = new GarbageView();

    this.init = function () {
        garbageModel.init();
        garbageView.init();
//        garbageView.setSignInCallBack(function () {window.location.href = "SignIn"; });
//        garbageView.setMapCallback(function () {window.location.href = "Map"; });
//        garbageView.setChatCallback(function () {window.location.href = "Chat"; });
//        garbageView.setSettingsCallback(function () {window.location.href = "Settings"; });
//        garbageView.setAboutCallback(function () {window.location.href = "About"; });
    };
}

var garbageController = new GarbageController();

window.addEventListener("load", garbageController.init, false);