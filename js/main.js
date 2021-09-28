import Game from "./Game.js"

let game = new Game();


console.log("My turn is", game.turn);
game.nextTurn();
console.log("My turn is", game.turn);
game.makeMove(3)