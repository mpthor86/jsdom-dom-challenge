const timer = document.getElementById('counter')
// const beginTimer = setInterval(startTimer, 1000)


function startTimer() {
    while (true) {
        let i = 0 
    timer.innerText = i++
    }
}
// window.onload = beginTimer

document.getElementById('plus').addEventListener('click', timeClick)
document.getElementById('minus', timeClick).addEventListener('click', timeClick)

function upOne(e) {
    e.preventDefault()
    let newTime = parseInt(timer.innerText) + 1
    timer.innerText = newTime
}

function downOne(e) {
    e.preventDefault()
    let newTime = parseInt(timer.innerText) - 1
    timer.innerText = newTime
}

function timeClick(e) {
    if(e.target.id === 'plus') {
        upOne(e)
    }else if(e.target.id === 'minus') {
        downOne(e)
    }
}