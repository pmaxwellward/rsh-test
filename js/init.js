

(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "UCpaDIRGzBwp6B88WflwuFpA",
        devKey: API_KEY,
        showLatestChannel: false,
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
