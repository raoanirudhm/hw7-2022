var video;
var volumeDisplay;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector('#player1');
    video.autoplay = false;
    video.loop = false;
    volumeDisplay = document.querySelector('#volume');
    volumeDisplay.textContent = (video.volume * 100) + '%';

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        volumeDisplay.textContent = (video.volume * 100) + '%';
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        console.log("Slow Down");
        video.playbackRate *= 0.9;
        console.log(video.playbackRate);
    });

    document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up");
        video.playbackRate /= 0.9;
        console.log(video.playbackRate);
    });

    document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip Ahead");
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log(video.currentTime);
    });

    document.querySelector("#mute").addEventListener("click", function() {
        console.log("Mute/Unmute");
        if (video.muted) {
            video.muted = false;
            this.textContent = "Mute";
        } else {
            video.muted = true;
            this.textContent = "Unmute";
        }
    });

    document.querySelector("#slider").addEventListener("change", function() {
        console.log("Volume Slider");
        video.volume = this.value / 100;
        volumeDisplay.textContent = (video.volume * 100) + '%';
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        console.log("Old School");
        video.classList.add('oldSchool');
    });

    document.querySelector("#orig").addEventListener("click", function() {
        console.log("Original");
        video.classList.remove('oldSchool');
    });
});
// document.querySelector("#play").addEventListener("click", function() {
//  console.log("Play Video");
// });
