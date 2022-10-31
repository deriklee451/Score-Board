let score = ''
let scoreb = ''


// home
function increaseScore() {
    score++
    console.log(score)
    draw()

}


function decreaseScore() {
    score--
    console.log(score)
    draw()
}

// away
function increaseScoreA() {
    scoreb++
    console.log(score)
    drawA()

}


function decreaseScoreA() {
    scoreb--
    console.log(score)
    drawA()
}



// Home Draw
function draw() {

    let points = document.getElementById("homeScore")

    points.innerText = score

}

// Away Draw

function drawA() {

    let points = document.getElementById("away-score")

    points.innerText = scoreb

}

function clearScore() {

    score = '0'
    scoreb = '0'
    draw()
    drawA()
}