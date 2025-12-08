let board;
let boardWidth = 360;
let boardHeight = 620;
let context;

let birdWidth = 34;
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
let velocityY = 0
let gravity = 0.4

let gameOver = false
let score = 0


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

    document.addEventListener("keydown", moveBird)
}

function update(){
    requestAnimationFrame(update)

    if(gameOver){
        return
    }

    context.clearRect(0, 0, board.width, board.height);

    velocityY += gravity
    bird.y = Math.max(bird.y + velocityY,0)
    context.drawImage(birdImg, bird.x, bird.y, birdWidth, birdHeight)

    // console.log(pipeArray)

    for(let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i]

        pipe.x += velocityX

        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if(!pipe.passed && bird.x > pipe.x){
            score += 0.5
            pipe.passed = true
        }

        if(detectCollision(bird, pipe)){
            gameOver = true
        }

        context.fillStyle = "white"
        context.font = "45px sans-serif";
        context.fillText(score, 0, 40)

        if(gameOver){
            context.fillText("GAME OVER", 0, 85)
        }
    }

    if(bird.y > board.height){
        gameOver = true
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

function moveBird(e){
    if(e.code === "Space"){
        velocityY = -6
    }
}

function detectCollision(a, b){
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y
}