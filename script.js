//Function: generates either rock, paper or scissors randomly
//How? by generating a random number which would then serve as a random index 
function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    return rps[Math.floor(Math.random() * 3)];
}


//Function: this function takes the user and computer selections and works on them
function playRound(playerSelection, computerSelection) {

    //Selecting the player's score and storing it in  playerRealScore
    let playerRealScore = document.querySelector('.player-score');

    //Selecting the computer's score and storing it in  computerRealScore
    let computerRealScore = document.querySelector('.computer-score');

    //Selecting the gane hints and storing it in  gameHints
    let gameHints = document.querySelector('.game-hints');

    //Storing the player's score in number form in  playerScore
    let playerScore = +playerRealScore.innerHTML;

    //Storing the computer's score in number form in  computerScore
    let computerScore = +computerRealScore.innerHTML;

    
    //Boolean conditions to make comparison less ambiguous
    let scissorsBeatPaper = playerSelection === "scissors" && computerSelection === "paper";
    let paperBeatRock = playerSelection === "paper" && computerSelection === "rock";
    let rockBeatScissors = playerSelection === "rock" && computerSelection === "scissors";
    let isATie = playerSelection === computerSelection;


    //Comparison for the above conditions
    if (isATie) {
        gameHints.innerHTML = `This was a tie! ${playerSelection} cannot beat ${computerSelection}`;
    } else if (scissorsBeatPaper || paperBeatRock || rockBeatScissors) {
        gameHints.innerHTML = ` ${playerSelection} beats ${computerSelection} `;
        playerScore++;
        playerRealScore.innerHTML = playerScore;
    } else {
        gameHints.innerHTML = `${computerSelection} beats ${playerSelection}`;
        computerScore++;
        computerRealScore.innerHTML = computerScore;
    }


    //returns the player's score 
    /**why? this is because if it returns a negative number, 
     * then the computer's score is larger, otherwise, the player's 
     * score is larger.
     */
    return playerScore - computerScore;

}


//Function: this is like the "main" function of this game
function game() {

    //Selectors for the rock, paper and scissors div
    let rock = document.querySelector('.rock');
    let paper = document.querySelector('.paper');
    let scissors = document.querySelector('.scissors');

    //Selectors for the restart and quit game buttons
    let restartButton = document.querySelector('.restart');
    let endButton = document.querySelector('.end-game');

    //Selectors for the moves remaining and moves spans
    let movesRemaining = document.querySelector('#counter');
    let moves = document.querySelector('#moves');


    //This if is to avoid the TypeError error and make sure 
    //I don't have a null value before assigning an event listener
    if (rock != null) {
        rock.addEventListener('click', function() {
            if (!(+moves.innerHTML + 1 === 5)) { //If the moves the user has used is not up to 5

                //Increment the moves count by 1
                moves.innerHTML = Number(moves.innerHTML) + 1; 

                //send the appropriate value to the playRound function and save the return value in counter
                counter = playRound("rock", computerPlay());

                //Dercrease the moves remaining by 1
                movesRemaining.innerHTML = parseInt(movesRemaining.innerHTML) - 1;
            } else {
                //Else if the moves is up to 5, call the endGame() function
                endGame();
            }
        });
    }


    //This if is to avoid the TypeError error and make sure 
    //I don't have a null value before assigning an event listener
    if (paper != null) {
        paper.addEventListener('click', function() {
            if (!(+moves.innerHTML + 1 === 5)) { //If the moves the user has used is not up to 5

                //Increment the moves count by 1
                moves.innerHTML = Number(moves.innerHTML) + 1;
  
                //send the appropriate value to the playRound function and save the return value in counter
                counter = playRound("paper", computerPlay());

                //Dercrease the moves remaining by 1
                movesRemaining.innerHTML = parseInt(movesRemaining.innerHTML) - 1;
            } else {
                //Else if the moves is up to 5, call the endGame() function
                endGame();
            }
        });
    }


    //This if is to avoid the TypeError error and make sure 
    //I don't have a null value before assigning an event listener
    if (scissors != null) {
        scissors.addEventListener('click', function() {
            if (!(+moves.innerHTML + 1 === 5)) { //If the moves the user has used is not up to 5

                //Increment the moves count by 1
                moves.innerHTML = Number(moves.innerHTML) + 1;

                //send the appropriate value to the playRound function and save the return value in counter
                counter = playRound("scissors", computerPlay());

                //Dercrease the moves remaining by 1
                movesRemaining.innerHTML = parseInt(movesRemaining.innerHTML) - 1;
            } else {
                //Else if the moves is up to 5, call the endGame() function
                endGame();
            }
        });
    }


    //This if is to avoid the TypeError error and make sure 
    //I don't have a null value before assigning an event listener
    if (restartButton != null) {
        restartButton.addEventListener('click', restartGame);
    }


    //This if is to avoid the TypeError error and make sure 
    //I don't have a null value before assigning an event listener
    if (endButton != null) {
        endButton.addEventListener('click', endGame);
    }

}


//Function: basically takes care of what happens when the game ends
function endGame() {

    //Selector for the user controls div
    let userControls = document.querySelector('.user-controls');

    //Selector for the moves remaining and moves spans
    let moves = document.querySelector('#counter');
    let playerMoves = document.querySelector('#moves');

    //Selector for the game hints
    let gameHints = document.querySelector('.game-hints');

    //Selector for the player and computer FINAL (since the game has ended) scores
    let playerFinalScore = document.querySelector('.player-score').innerHTML;
    let computerFinalScore = document.querySelector('.computer-score').innerHTML;

    //the final value of the moves remaining and the moves
    moves.innerHTML = "0";
    playerMoves.innerHTML = "5"

    //Checking for the winner
    if (+playerFinalScore === +computerFinalScore) {
        gameHints.innerHTML = "TIE!";
    } else if (+playerFinalScore > +computerFinalScore) {
        gameHints.innerHTML = "PLAYER WINS!";
        gameHints.style.color = "green";
    } else {
        gameHints.innerHTML = "YOU LOST!";
        gameHints.style.color = "red";
    }

    //Hiding the user controls to indicate the end of a game!
    userControls.style.visibility = "hidden";

}


//Function: basically takes care of resetting all values to their default 
function restartGame() {

    //Selector for the user controls div
    let userControls = document.querySelector('.user-controls');

    //Selector for the moves remaining and moves spans
    let counter = document.querySelector('#counter');
    let moves = document.querySelector('#moves');

    //Selector for the game hints
    let gameHints = document.querySelector('.game-hints');

    //Selector for both the player and computer scores
    let playerRealScore = document.querySelector('.player-score');
    let computerRealScore = document.querySelector('.computer-score');

    /* RESETTING ALL VALUES */

    //resetting the moves remaining and moves spans
    counter.innerHTML = "5"; 
    moves.innerHTML = "0";

    //resetting the game hints screen
    gameHints.innerHTML = ""; 

    //resetting the color to avoid red or green from previous lose or win
    gameHints.style.color = "black";

    //resetting the player and computer score
    playerRealScore.innerHTML = "0";
    computerRealScore.innerHTML = "0";


    //Setting the user controls back to be visible in case the game had already 
    //ended before the restart button is clicked
    userControls.style.visibility = "visible";

}

//Calling the "main" function for the game to start
game();