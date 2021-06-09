let songs = [
    "music/bensound-buddy.mp3",
    "music/bensound-cute.mp3",
    "music/1-04 Cherry Pepsi.mp3",
    "music/Last Reunion.mp3",
    "music/Dream Disoder.mp3",
    "music/Below the Briage.mp3",
    
]
let music = $("#music")[0]
let proBar = $(".music-progress")[0]
let index = 0

// music play
$(document).on('click', '.sidebar-play', e => {
    $(".music").remove()
    $(".main").append(`<div class="music">
            <div class="music-progress"></div>
            <div class="grid">
                <img class="music-prev" src="imgs/PREVIOUS.png" alt="" width="20">
                <img class="music-play" src="imgs/PAUSE.png" alt="" width="50">
                <img class="music-next" src="imgs/NEXT.png" alt="" width="20">
            </div>
            <audio src="#" id="music"></audio>
        </div>`)
    music = $("#music")[0]
    proBar = $(".music-progress")[0]
    index = 0
    changeMusic(index)
})

function changeMusic (index) {
    music.src = songs[index]
    music.play()
    proBar.style.width = 0

    music.addEventListener("timeupdate", function(event) { //Listening to fact of music play events
        let jd = music.currentTime / music.duration;
        proBar.style.width = jd * 100 + "%";
    });
}

// switch music fucntion
$(document).on('click', '.music-prev', e => {
    index--;
    if (index <= -1) {
        index = songs.length - 1;
    }
    changeMusic(index);
})

$(document).on('click', '.music-next', e => {
    index++;
    if (index > songs.length - 1) {
        index = 0;
    }
    changeMusic(index);
})


// music pause and play
$(document).on('click', '.music-play', e => {
    $(".music").remove()
})
