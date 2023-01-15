import Player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
import throttle from 'lodash.throttle';
import { save, load } from "./localStorage.js";
//додати лодаш

// player.on('timeupdate', function () {

//     player.getCurrentTime().then(function (seconds) {
//         save("videoplayer-current-time", JSON.stringify(seconds));
//     }).catch(function (error) {
//         console.error(error.message);
//     });
// });
player.on("timeupdate", throttle(function (data) {
    const time = data.seconds;
    console.log(time);
    save("videoplayer-current-time", JSON.stringify(time));
    // save("videoplayer-current-time", time)
}, 1000))

player.setCurrentTime(load("videoplayer-current-time")).then(function (seconds) {
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

