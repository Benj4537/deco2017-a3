let taskList = [
    {
        title: "Design 1111 Group Meeting",
        subeTitle: ":Assessment 2 1st meeting",
        Y: "2021",
        M: "Apr",
        D: "12",
        members: [0,1,2],
        course: {
            name: "James Lee",
            contact: "truyri@fgda.com"
        },
        place: "ONE time' cafe'",
        content: "1111This quiz is an oberview xxx of xxxx, covers xxxx , student will have permision access to book and online mate rials ...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diomnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat"
    },
    {
        title: "Design 2222 Group Meeting",
        subeTitle: ":Assessment 2 1st meeting",
        Y: "2021",
        M: "Apr",
        D: "12",
        members: [0,1],
        course: {
            name: "James Lee",
            contact: "truyri@fgda.com"
        },
        place: "ONE time' cafe'",
        content: "2222This quiz is an oberview xxx of xxxx, covers xxxx , student will have permision access to book and online mate rials ...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diomnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat"
    },
    {
        title: "Design 3333 Group Meeting",
        subeTitle: ":Assessment 2 1st meeting",
        Y: "2021",
        M: "Apr",
        D: "12",
        members: [2],
        course: {
            name: "James Lee",
            contact: "truyri@fgda.com"
        },
        place: "ONE time' cafe'",
        content: "3333This quiz is an oberview xxx of xxxx, covers xxxx , student will have permision access to book and online mate rials ...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diomnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat"
    },
]

let membersList = [
    "Jack OU",
    "Amanda",
    "Benj Deng"
]

// Render all tasks to Calendar

function renderTask() {
    let dom = $(".calendar-list")
    dom.empty()
    for (let i = 0; i < taskList.length; i++) {
        let task = taskList[i]
        dom.append(`<div class="item" task="${i}">
                        <div class="title">${task.title}</div>
                        <div class="sub-title">${task.subeTitle}</div>
                        <svg class="btn-remove-cal icon" t="1623068340330" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4489" width="200" height="200"><path d="M512 620.544l253.3376 253.3376a76.6976 76.6976 0 1 0 108.544-108.544L620.6464 512l253.2352-253.3376a76.6976 76.6976 0 1 0-108.544-108.544L512 403.3536 258.6624 150.1184a76.6976 76.6976 0 1 0-108.544 108.544L403.3536 512 150.1184 765.3376a76.6976 76.6976 0 1 0 108.544 108.544L512 620.6464z" fill="#333333" p-id="4490"></path></svg>
                    </div>`)
    }
}
renderTask()

// Click on the task in the calendar to display the details

$(document).on("click", ".calendar-list .item", e => {
    let target = $(e.target)
    if (target.hasClass('item')) {
        target.siblings().removeClass("selected")
        target.addClass("selected")
        taskDetails(target.attr("task"))
    }
})
function taskDetails(index) {
    let task = taskList[index]
    let members = ""
    for (let i = 0; i < task.members.length; i++) {
        members += `<span>${membersList[task.members[i]]}</span>`
    }
    $(".calendar-details").remove()
    $(".calendar").append(`<div class="calendar-details">
                    <img class="btn-col" src="imgs/INDICATOR.png" alt="" width="30">
                    <div class="details-dates b">${task.Y}/${task.M}/${task.D}</div>
                    <div class="line"></div>
                    <div class="details-remarks">
                        ${task.content}
                    </div>
                    <div class="members">
                        ${members}
                    </div>
                    <div class="flex">
                        <div class="flex-left">
                            <div>
                                <div class="name">${task.course.name}</div>
                                <div class="contact">Contact: ${task.course.contact}</div>
                            </div>
                        </div>
                        <div class="flex-right">
                            <div class="place">Place: ${task.place}</div>
                        </div>
                    </div>
                    <img class="btn-down-arrow" src="imgs/DOWN_ARROW.png" alt="">
                </div>`)
}
//todo : fold
$(document).on('click', ".btn-col", e => {
    $(e.target).parent().addClass('col')
})

//todo extend the details
$(document).on('click', '.btn-down-arrow', e => {
    $(e.target).parent().removeClass('col')
})

//todo delete
$(document).on('click', ".btn-remove-cal", e => {
    let target = $(e.target)
    let id = target.parent().attr("task")
    taskList.splice(id,1)
    renderTask()
})



let courses = [
    {
        name: "James Lee",
        contact: "truyri@fgda.com"
    }, {
        name: "Charles Aarn",
        contact: "cxerrt@fgda.aa"
    }
]


// Rendering members
function renderMembers() {
    let dom = $(".modal-members")
    dom.empty()
    for (let i = 0; i < membersList.length; i++) {
        dom.append(`<input type="checkbox" name="member" value="${i}"><label>${membersList[i]}</label><br>`)
    }
}


// adding member to the list and match the activities
$(document).on('click', '.add-member', e => {
    let input = $(".input-add-member")
    membersList.push(input.val())
    input.val("")
    renderMembers()
})

// Adding events to the calendar

$(document).on('click', '.btn-add-act', e => {
    $(".container").append(`<div class="modal modal-calendar">
        <div class="modal-content">
            <div class="modal-head">
                <label for="">Title</label>
                <input type="text" name="title">
                <label for="">:Sube-title</label>
                <input type="text" name="subeTitle">
            </div>
            <div class="modal-body">
                <div class="modal-body-date">
                    <span>Date of Event:</span>
                    <span>
                        <label>YY</label>
                        <input type="text" name="Y">
                    </span>
                    <span>
                        <label>MM</label>
                        <input type="text" name="M">
                    </span>
                    <span>
                        <label>DD</label>
                        <input type="text" name="D">
                    </span>
                </div>
                <div>
                    <label>Select a course:</label>
                    <select name="course" id="">
                        <option value="0">James Lee</option>
                        <option value="1">Charles Aarn</option>
                    </select>
                </div>
                <div>
                    <label>Place:</label>
                    <input type="text" name="place">
                </div>
                <div>
                    <span>Add Members:</span><br>
                    <div class="modal-members">
<!--                        <input type="checkbox" name="member" value=""><label>Jack OU</label><br>-->
<!--                        <input type="checkbox" name="member" value=""><label>Amanda</label><br>-->
<!--                        <input type="checkbox" name="member" value=""><label>Benj Deng</label><br>-->
                    </div>
                    <img class="add-member" src="imgs/ADD.png" alt="">
                    <input type="text" class="input-add-member">
                </div>
                <div>
                    <div>Content:</div>
                    <textarea name="content" cols="40" rows="5"></textarea>
                </div>
            </div>
            <div class="text-center">
                <button class="modal-btn">Add</button>
            </div>
        </div>

    </div>`)
    renderMembers()
})
$(document).on('click', '.modal-calendar .modal-btn', e => {
    addAct()
    $('.modal-calendar').remove()
})
function addAct(){
    let act = {
        title: inputVal("title") == "" ? "untitled" : inputVal("title"),
        subeTitle: inputVal("subeTitle") == "" ? "untitled" : inputVal("subeTitle"),
        Y: inputVal("Y"),
        M: inputVal("M"),
        D: inputVal("D"),
        members: [],
        course: courses[inputVal("course")],
        place: inputVal("place"),
        content: inputVal("content"),
    }

    $(".modal-members input").each(function () {
        if ($(this)[0].checked == true) {
            act.members.push($(this).val())
        }
    })
    taskList.push(act)
    renderTask()
}
function inputVal(name){
    return $(`.modal-calendar [name=${name}]`).val()
}



// my task
const myTask = [
    {
        brief: "Des",
        title: "Design 0000",
        subTitle: ":Assessment 2 Mock u-",
        content: ["background research",],
        Y: "2021",
        M: "1",
        D: "1",
        color: "#d55b4f"
    }, {
        brief: "Soci",
        title: "Easy to do",
        subTitle: ":Assessment 2 Mock u-",
        content: ["background research", "iteration"],
        Y: "2021",
        M: "2",
        D: "2",
        color: "#eaa653"
    }, {
        brief: "Mu",
        title: "Need more time",
        subTitle: ":Assessment 2 Mock u-",
        content: ["iteration"],
        Y: "2021",
        M: "3",
        D: "3",
        color: "#94c35f"
    }
]
const taskContent = [
    "background research",
    "user research",
    "iteration",
    "mockup",
    "video",
    "submission"
]
function renderTaskContent() {
    let dom = $(".modal-add-task-content, .modal-edit-task-content")
    dom.empty()
    for (let i = 0; i < taskContent.length; i++) {
        dom.append(`
            <input type="checkbox" name="content" value="${taskContent[i]}"><label for="">${taskContent[i]}</label>
        `)
    }
    dom.append(`<img class="add-task-content" src="imgs/ADD.png" alt="">
                    <input type="text" class="input-add-content">`)
}
$(document).on('click', '.my-task .add', e => {
    $(".container").append(`<div class="modal modal-add-task">
        <div class="modal-content">
            <div class="flex">
                <div class="square">
                    <input type="text" name="brief">
                    <div class="changeColor"></div>
                </div>
                <div class="grid">
                    <label for="">Title</label>
                    <input type="text" name="title">
                    <label for="">Sube-title</label>
                    <input type="text" name="subTitle">
                </div>
            </div>
            <div>
                <h3>Priority</h3>
                <input type="radio" name="priority" value="0">
                <label for="">DO IT NOW</label>
                <input type="radio" name="priority" value="1" checked>
                <label for="">Add to Task List</label>
            </div>
            <div>
                <h3>Content</h3>
                <div class="modal-add-task-content">
                    <input type="checkbox" name="content" value=""><label for="">1\`11</label>
                    <input type="checkbox" name="content" value=""><label for="">1\`11</label>
                    <input type="checkbox" name="content" value=""><label for="">1\`11</label>
                    <img class="add-task-content" src="imgs/ADD.png" alt="">
                    <input type="text" class="input-add-content">
                </div>
            </div>
            <div>
                <h3>Estimated Completing Time</h3>
                <div class="estTime">
                    <label for="">YY</label>
                    <input type="text" name="Y">
                    <label for="">MM</label>
                    <input type="text" name="M">
                    <label for="">DD</label>
                    <input type="text" name="D">
                </div>
            </div>
            
            <div class="btns">
                <img class="btn-cancel" src="imgs/CANCLE.png" alt="">
                <img class="btn-confirm" src="imgs/COMFIRM.png" alt="">
            </div>
        </div>
    </div>`)
    renderTaskContent()
})
$(document).on('click', '.btn-cancel', e => {
    $(".modal").remove()
})
$(document).on('click', '.modal-add-task .btn-confirm', e => {
    addMyTask()
    $(".modal").remove()
})
function addMyTask() {
    let priority = $(`.modal-add-task [name='priority']:checked`).val()
    let task = {
        brief: inputValT("brief"),
        title: inputValT("title"),
        subTitle: inputValT("subTitle"),
        content: [],
        color: $(".square").css('background-color'),
        Y: inputValT("Y"),
        M: inputValT("M"),
        D: inputValT("D"),
    }
    $(".modal-add-task [name='content']").each(function () {
        if ($(this)[0].checked == true) {
            task.content.push($(this).val())
        }
    })
    priority === "1" ? myTask.push(task) : myTask.unshift(task)
    renderMyTask()
}
function inputValT(name){
    return $(`[name=${name}]`).val()
}

function renderMyTask() {
    $(".task-1 .title").html(myTask[0].title)
    $(".task-1 .sub-title").html(myTask[0].subTitle)
    $(".task-1 .item-square").html(myTask[0].brief).css('background-color', myTask[0].color)
    $(".task-1 .estTime").html(`${myTask[0].Y} / ${myTask[0].M} / ${myTask[0].D}`)
    $(".task-1 .progress-bar").css("width", myTask[0].content.length / taskContent.length * 100 + "%")

    let box = $(".task-2 .grid")
    box.empty()
    for (let i = 1; i < myTask.length; i++) {
        box.append(`<div class="item">
                        <div class="title">${myTask[i].title}</div>
                        <div class="item-square" taskid="${i}" style="background-color: ${myTask[i].color}">${myTask[i].brief}</div>
                    </div>`)
    }
    box.append(`<div class="add">
                    <img src="imgs/ADD.png" alt="" width="60">
                </div>`)
}
renderMyTask()

$(document).on('click', '.add-task-content', e => {
    taskContent.push($(".input-add-content").val())
    renderTaskContent()
})

let editId
$(document).on('click', '.item-square', e => {
    let id = $(e.target).attr("taskid")
    editId = id
    $(".container").append(`<div class="modal modal-edit-task">
        <div class="modal-content">
            <div class="flex">
                <div class="square" style="background-color: ${myTask[id].color}">
                    ${myTask[id].brief}
                </div>
                <div class="grid">
                    <p>${myTask[id].title}</p>
                    <p>${myTask[id].subTitle}</p>
                </div>
            </div>
            <div>
                <h3>Priority</h3>
                <input type="radio" name="priority" value="0" ${id == "0" ? "checked" : ""}>
                <label for="">DO IT NOW</label>
                <input type="radio" name="priority" value="1" ${id != "0" ? "checked" : ""}>
                <label for="">Add to Task List</label>
            </div>
            <div>
                <h3>Content</h3>
                <div class="modal-edit-task-content">
                    <input type="checkbox" name="content" value=""><label for="">1\`11</label>
                    <input type="checkbox" name="content" value=""><label for="">1\`11</label>
                    <input type="checkbox" name="content" value=""><label for="">1\`11</label>
                    <img class="add-task-content" src="imgs/ADD.png" alt="">
                    <input type="text" class="input-add-content">
                </div>
            </div>
            <div>
                <h3>Estimated Completing Time</h3>
                <div class="estTime">
                    <label for="">YY</label>
                    <input type="text" name="Y" value="${myTask[id].Y}">
                    <label for="">MM</label>
                    <input type="text" name="M" value="${myTask[id].M}">
                    <label for="">DD</label>
                    <input type="text" name="D" value="${myTask[id].D}">
                </div>
            </div>

            <div class="progress">
                <div class="progress-bar"></div>
            </div>

            <div class="btns">
                <img class="btn-cancel" src="imgs/CANCLE.png" alt="">
                <img class="btn-confirm" src="imgs/COMFIRM.png" alt="">
            </div>
        </div>
    </div>`)
    $(".modal-edit-task .progress-bar").css("width", myTask[id].content.length / taskContent.length * 100 + "%")

    renderTaskContent()
    for (let i = 0; i < myTask[id].content.length; i++) {
        $(`[value='${myTask[id].content[i]}']`).attr('checked', true)
    }
})


$(document).on('click', '.modal-edit-task .btn-confirm', e => {
    let priority = $(`.modal-edit-task [name='priority']:checked`).val()
    let task = {
        brief: myTask[editId].brief,
        title: myTask[editId].title,
        subTitle: myTask[editId].subTitle,
        content: [],
        color: $(".square").css('background-color'),
        Y: inputValT("Y"),
        M: inputValT("M"),
        D: inputValT("D"),
    }
    $("[name='content']").each(function () {
        if ($(this)[0].checked == true) {
            task.content.push($(this).val())
        }
    })
    myTask.splice(editId, 1)
    priority === "1" ? myTask.push(task) : myTask.unshift(task)
    renderMyTask()
    $(".modal").remove()
})

// color varifies
const color = [
    "#d55b4f",
    "#eaa653",
    "#94c35f",
    "#5b6c8d",
]
let colorId = 0
$(document).on('click', '.changeColor', e => {
    colorId++
    colorId > 3 ? colorId = 0 : ""
    $(".square").css('background-color', color[colorId])
})