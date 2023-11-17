let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songCurrentTime = document.getElementById("current");
let songDuration = document.getElementById("duration");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    updateDuration(); // Call function to update total duration
}

function updateDuration() {
    const totalSeconds = Math.floor(song.duration);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    songDuration.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateCurrentTime() {
    const totalSeconds = Math.floor(song.currentTime);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    songCurrentTime.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        // Update the current time and progress bar continuously while playing
        setInterval(() => {
            progress.value = song.currentTime;
            updateCurrentTime();
        }, 500);
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

progress.onchange = function () {
    song.currentTime = progress.value;
}