import Game from "./Game.js";
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();


// Start a new game button functionality
document.querySelector(".restart").addEventListener("click", () => {
    onRestartClick();
})

// Here Im creating event listener and functionality
let tiles = document.querySelectorAll(".board-tile") // I selected all board tiles
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
       onTileClick(tile.dataset.index);
    })
})


// Function that will handle the tile click

function onTileClick(i){
    // do something
    // make a move
    // change turn
    // update board
    game.makeMove(i)
    gameView.updateBoard(game);
    game.nextTurn();
}

// Start a new game button functionality
function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);