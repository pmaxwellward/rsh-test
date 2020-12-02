

(function(exports) {
    'use strict';

    const key1 = "AIzaSyAeVFK45K-_p_";
    const key2 = "KHZBM-UpU3hfJta6u5dzM";

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "UCpaDIRGzBwp6B88WflwuFpA",
        devKey: key1.concat(key2),
        showLatestChannel: false,
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
