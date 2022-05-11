const status = document
    .getElementsByClassName('statuscheck')

for (let i = 0; i < status.length; i++) {
    let text = status[i].innerText
    if (text === 'Failed') {
        status[i].style.color = 'red'
    }
}


const row = document.getElementsByClassName('transition')

window.onresize = function () {
    if (window.screen.width > 650) {
        for (let i = 0; i < row.length; i++) {
            row[i].children[3].style.display = 'block'
        }
    } else {
        for (let i = 0; i < row.length; i++) {
            row[i].children[3].style.display = 'none'
        }
    }
}