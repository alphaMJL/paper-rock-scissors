
let playerScore = 0;
let computerScore = 0;
//outcome of current game
let currentGame;   
  
        
function currentScore() {
    return `The current score is YOU: ${playerScore} COMPUTER: ${computerScore}`;
}


function userPlay() {
    //allows player to type choice and will only accept acceptableChoices as answers ignoring case
    let acceptableChoices = "rock paper scissors"
    let check = false;
    let playerChoice;

    while (check === false) {
        let playerChoice = prompt("Please type your Selection of Paper, Rock or Scissors")

        if (acceptableChoices.indexOf(playerChoice.toLowerCase()) === -1) {
            alert("That is not an acceptable choice");

        } 
        else {

            check = true;
            return playerChoice;
        }
    }           
}

function computerPlay() {
       //create variable to store roll. 0-1 roughly divided between choices
    let randomRoll = Math.random();

    if (randomRoll >= 0 && randomRoll <= 0.33 ){
            return "Paper";

     } else if (randomRoll > 0.33 && randomRoll <= 0.66) {
            return "Rock";
    } else {
            return "Scissors";
    }   
}
   
function playRound(playerSelection, computerSelection) {
    console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`)
    // outcome if you pick rock   
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "rock") {
            currentGame = "Draw!";
        }
        else if (computerSelection.toLowerCase() === "paper") {
            computerScore++;
            currentGame = "Paper beats Rock! You Lose!";     
        }

        else if (computerSelection.toLowerCase() === "scissors") {
            playerScore++;
            currentGame = "Rock beats scissors. You Win!";  
        }
    }
    // outcome if you pick paper
    if (playerSelection.toLowerCase() === "paper") {

        if (computerSelection.toLowerCase() === "rock") {
            playerScore++;
            currentGame = "Paper beats rock! You Win!";
                
        }
        else if (computerSelection.toLowerCase() === "paper") {
                currentGame = "Draw!";
        }

        else if (computerSelection.toLowerCase() === "scissors") {
                computerScore++;
                currentGame = "Rock beats scissors! You Lose!";
                
        }

    }
    //outcome if you pick scissors
    if (playerSelection.toLowerCase() === "scissors") {

        if (computerSelection.toLowerCase() === "rock") {
            computerScore++;
            currentGame = "Rock beats scissors! You Lose!";
               
        }
        else if (computerSelection.toLowerCase() === "paper") {
            playerScore++;
            currentGame = "Scissors beats paper! You Win!";
               
        }

        else if (computerSelection.toLowerCase() === "scissors") {
               currentGame = "Draw!";
        }

    }  
}




function game() {
    //five rounds match 
    for (let i = 1; i <= 5; i++) {
        console.log(`MATCH NUMBER: ${i}`)
        playRound(userPlay(), computerPlay());
        
        console.log(currentGame);
        console.log(currentScore())                  
    }
    console.log("Game over!")
}
// run game
game();


   


