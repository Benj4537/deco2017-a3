$(document).on('click', '.modal-timer .btn-remove', e => {
    $(".modal").remove()
})
$(document).on('click', '.watch-btns .btn-setting', e => {
    $(".container").append(`<div class="modal modal-timer">
        <div class="modal-content">
            <div class="modal-timer-content">
                <div>
                    <input type="number" name="h" value="0">
                    Hour
                </div>
                <div>
                    <input type="number" name="m" max="59" value="30">
                    Mins
                </div>
                <div>
                    <input type="number" name="s" max="59" value="5">
                    Second
                </div>
            </div>
            <div class="btns">
                <div class="btn-remove"></div>
                <div class="btn-start b">Start</div>
            </div>
        </div>
    </div>`)
})

let h = 0, m = 30, s = 5, rm = 30, rs = 5

$(document).on('click', '.modal-timer .btn-start', e => {
    h = parseInt($(".modal-timer [name='h']").val())
    m = parseInt($(".modal-timer [name='m']").val())
    s = parseInt($(".modal-timer [name='s']").val())
    h = h < 0 ? 0 : h
    m = m < 0 ? 0 : m
    s = s < 0 ? 0 : s

    m = h * 60 + m +  (s - s % 60) / 60
    s = s % 60

    rm = m
    rs = s
    console.log(h, m, s)
    $(".modal").remove()
    renderTime()
    startTimer()
})

function renderTime () {
    $(".watch-min").html(m)
    $(".watch-sec").html(s)
}

let timer

function startTimer() {
    pauseTimer()
    $(".watch-btns .btn-pause").attr('src', 'imgs/puase.png')
    $('.watch-time').css('color', "white")
    timer = setInterval(() => {
        if (s > 0){
            s--
        } else {
            if (m > 0) {
                s = 59
                m--
            } else {
                pauseTimer()
                $('.watch-time').css('color', "red")
            }
        }
        renderTime()
    }, 1000)
}
function pauseTimer(){
    $(".watch-btns .btn-pause").attr('src', 'imgs/timer-play.png')
    clearInterval(timer)
}
let pause = true
$(document).on('click', '.watch-btns .btn-pause', e => {
    if (pause) {
        startTimer()
    } else {
        pauseTimer()
    }
    pause = !pause
})

$(document).on('click', '.reset', e => {
    pauseTimer()
    // m = rm
    // s = rs
    h = 0
    m = 0
    s = 0
    renderTime()
    // startTimer()
})
