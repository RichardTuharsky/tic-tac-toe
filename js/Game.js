export default class Game {
    
    constructor(){
        console.log("init game");
        this.turn = "X";
        this.board = new Array(9).fill(null)
    }


    nextTurn(){
        if(this.turn == "X") {
            this.turn = "O "
        } else {
            this.turn = "X"
        }
    }


    makeMove(i) {
        // When someone find a winning combination
        if(this.endOfGame()){
            return;
        }

        if(this.board[i]){   // This solved that you cannot click again on specific tile and change for O to X
            return;         //
        }
        this.board[i]= this.turn; 
        let winningCombination = this.findWinningCombinations();
        console.log("this is the winner:", winningCombination)
        
    }


    // Here I know that Ive won the game 
    // The combinations [0,1,2] [3,4,5] [6,7,8] [0,3,6] [1,4,7] [2,5,8], two more

    findWinningCombinations(){
        
        const winningCombinations = [
            [0,1,2], // winning combination
            [3,4,5], // winning combination
            [6,7,8], // winning combination
            [0,3,6], // winning combination
            [1,4,7], // winning combination
            [2,5,8], // winning combination
            [0,4,8], // winning combination
            [6,4,2] // winning combination
        ]

        
        for(const combination of winningCombinations){
           const [a,b,c] = combination;

        if (this.board[a] &&   
           (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                 return combination;
           }    
        }
        return null;
    }   

    // When someone find a winning combination, nobody can continue to play.
            endOfGame(){
                let winningCombination = this.findWinningCombinations();
                if(winningCombination){
                return true;
            } else {
                return false;
            }
    }

}