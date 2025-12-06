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


window.onload = () => {
    board = document.getElementById('board');

    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext('2d');

    birdImg = new Image();
    birdImg.src = "./img/flappybird.gif"
    birdImg.onload = () => {
        context.drawImage(birdImg, bird.x, birdY, birdWidth, birdHeight);
    }
}