$(".sidebar-task").click(e => {
    $(".sidebar-task").addClass("selected")
    $(".sidebar-timer").removeClass("selected")

    $(".main-task").addClass('show')
    $(".main-timer").removeClass("show")
})

$(".sidebar-timer").click(e => {
    $(".sidebar-timer").addClass("selected")
    $(".sidebar-task").removeClass("selected")

    $(".main-task").removeClass('show')
    $(".main-timer").addClass("show")
})



