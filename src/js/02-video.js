import Player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function () {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem("currentTime", JSON.stringify(seconds));
        console.log(localStorage.getItem("currentTime"));
    }).catch(function (error) {
        console.error(error.message);
    });
});
player.on('play', function () {
    player.setCurrentTime(localStorage.getItem("currentTime")).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });

});
