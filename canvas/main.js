function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
        // ctx.strokeStyle = 'black'
    ctx.moveTo(x1, y1)
    ctx.lineWidth = lineWidth
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
}

function setCanvasSize() {
    let pageWidth = document.documentElement.clientWidth
    let pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
}


const isTouchScreen = document.body.ontouchstart !== undefined


function getClientX(e) {
    return isTouchScreen ? e.touches[0].clientX : e.clientX
}

function getClientY(e) {
    return isTouchScreen ? e.touches[0].clientY : e.clientY
}
let lineWidth = 5
let startEvent = isTouchScreen ? 'ontouchstart' : 'onmousedown'
let moveEvent = isTouchScreen ? 'ontouchmove' : 'onmousemove'
let endEvent = isTouchScreen ? 'ontouchend' : 'onmouseup'


let eraser = document.getElementById('eraser')
let canvas = document.getElementById('canvas')
setCanvasSize()
let ctx = canvas.getContext('2d') //canvas必写
window.onresize = function() {
    setCanvasSize()
}

let useEraser = false
let using = false
let lastPoint = {
    x: undefined,
    y: undefined
}

canvas[startEvent] = function(e) {
    let x = getClientX(e)
    let y = getClientY(e)
    using = true
    if (useEraser) {
        ctx.clearRect(x - 5, y - 5, 10, 10)
    } else {
        lastPoint = {
            x: x,
            y: y
        }
    }
}

canvas[moveEvent] = function(e) {
    let x = getClientX(e)
    let y = getClientY(e)
    let newPoint = {
        x: x,
        y: y
    }

    if (useEraser) {
        ctx.clearRect(x - 5, y - 5, 10, 10)
    } else {
        if (using) {
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        }
        lastPoint = newPoint
    }
}
canvas[endEvent] = function() {
    using = false
}
eraser.onclick = function() {
    useEraser = !useEraser
    eraser.className = useEraser ? 'brush' : 'eraser'
}
red.onclick = function() {
    ctx.strokeStyle = 'red';

}
green.onclick = function() {
    ctx.strokeStyle = 'green'
}
blue.onclick = function() {
    ctx.strokeStyle = 'blue'
}
black.onclick = function() {
    ctx.strokeStyle = 'black'
}
line1.onclick = function() {
    lineWidth = 1
}
line2.onclick = function() {
    lineWidth = 5
}
line3.onclick = function() {
    lineWidth = 10
}
clearscreen.onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
download.onclick = function() {
    var url = canvas.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = 'draw'
    a.click()
}