export default class GameView {


    constructor() {
    
    }

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            
            // I need to fix here that when tile winner show up, the color last the same
            tile.classList.remove("tile-winner")


            // Ternary Shortcut

            let tileType = game.board[i] == "X" ? "tile-x" : "tile-o";

            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`
            

            // When winning combinations is there 
            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }

        }

    }

    // Function for seeing which player is on turn ( I need to target those players)
    updateTurn(game){
        let playerX = document.querySelector(".player-X")
        let playerO = document.querySelector(".player-O");

        // Removing active class after turn
        playerX.classList.remove("active");
        playerO.classList.remove("active");

        // active class for playerx x only if im sure that is player x turn
        if (game.turn == 'X'){
            playerX.classList.add('active');
        } else {
            playerO.classList.add('active');
        }
        

    }


}
