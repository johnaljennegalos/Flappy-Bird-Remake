let board;
let boardWidth = 360;
let boardHeight = 620;
let context;

let birdWidth = 32;
let birdHeight = 24;
let birdX = boardWidth/8
let birdY = boardHeight/2;
let birdImg;

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight,
}

let pipeArray = []
let pipeWidth = 54
let pipeHeight = 512
let pipeX = boardWidth
let pipeY = 0

let topPipeImg
let bottomPipeImg

let velocityX = -2


window.onload = () => {
    board = document.getElementById('board');

    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext('2d');

    birdImg = new Image();
    birdImg.src = "./img/flappybird.gif"
    birdImg.onload = () => {
        context.drawImage(birdImg, bird.x, bird.y, birdWidth, birdHeight);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./img/toppipe.png"

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./img/bottompipe.png"

    requestAnimationFrame(update)
    setInterval(placePipes, 1500)
}

function update(){
    requestAnimationFrame(update)

    context.clearRect(0, 0, board.width, board.height);
    context.drawImage(birdImg, bird.x, bird.y, birdWidth, birdHeight)

    for(let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i]

        pipe.x += velocityX

        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    }
}

function placePipes(){
    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2)
    let openingSpace = board.height/4

    let topPipe = {
        img: topPipeImg,
        y: randomPipeY,
        x: pipeX,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipeArray.push(topPipe)


    let bottomPipe = {
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipeArray.push(bottomPipe)


}