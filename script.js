
let playerScore = 0;
let computerScore = 0;
//outcome of current game
let currentGame;   
function updateScore() {
    switch (playerScore) {
        case 1: document.getElementById('playerPointOne').style.backgroundColor = "green";
        break;
        case 2: document.getElementById('playerPointTwo').style.backgroundColor = "green";
        break;
        case 3: document.getElementById('playerPointThree').style.backgroundColor = "green";
        break;
        case 4: document.getElementById('playerPointFour').style.backgroundColor = "green";
        break;
        case 5: document.getElementById('playerPointFive').style.backgroundColor = "green";
        document.getElementById('player-selection').innerHTML = '<button id="end-game" onclick="window.location.reload()">Play again?</button>'
        document.getElementById('computer-selection').innerHTML = '<p id="end-dialog">YOU WIN THE MATCH!</p>'
        
        break;
    }

    switch (computerScore) {
        case 1: document.getElementById('computerPointOne').style.backgroundColor = "green";
        break;
        case 2: document.getElementById('computerPointTwo').style.backgroundColor = "green";
        break;
        case 3: document.getElementById('computerPointThree').style.backgroundColor = "green";
        break;
        case 4: document.getElementById('computerPointFour').style.backgroundColor = "green";
        break;
        case 5: document.getElementById('computerPointFive').style.backgroundColor = "green";
        document.getElementById('player-selection').innerHTML = '<button id="end-game" onclick="window.location.reload()">Play again?</button>'
        document.getElementById('computer-selection').innerHTML = '<p id="end-dialog">YOU LOSE THE MATCH!</p>'
        
        break;
    }
}
  
document.getElementById('btn-paper').addEventListener('click', callPaper)

document.getElementById('btn-scissors').addEventListener('click', callScissors)

document.getElementById('btn-rock').addEventListener('click', callRock)

function callScissors() {
    document.getElementById('player-selected').src = "images/scissors.jpg"
    playRound('scissors');
}

function callPaper() {
    document.getElementById('player-selected').src = "images/paper.jpg"
    playRound('paper');
}

function callRock() {
    document.getElementById('player-selected').src = "images/rock.jpg"
    playRound('rock')
}
function currentScore() {
    return `The current score is YOU: ${playerScore} COMPUTER: ${computerScore}`;
}


   
function playRound(playerSelection) {
    let  computerSelection = "";
       //create variable to store roll. 0-1 roughly divided between choices
    let randomRoll = Math.random();

    if (randomRoll >= 0 && randomRoll <= 0.33 ){
            computerSelection = "Paper";
            document.getElementById('computer-selected').src = "images/paper.jpg"
    } 
     else if (randomRoll > 0.33 && randomRoll <= 0.66) {
            computerSelection = "Rock";
            document.getElementById('computer-selected').src = "images/rock.jpg"
        }
    else {
            computerSelection = "Scissors";
            document.getElementById('computer-selected').src = "images/scissors.jpg"
    }   

    document.getElementById('msg-center').innerText = `You chose ${playerSelection} and the I chose ${computerSelection}`


    // outcome if you pick rock   
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "rock") {
            document.getElementById("match-outcome").innerText = "Draw!";
        }
        else if (computerSelection.toLowerCase() === "paper") {
            computerScore++;
            document.getElementById("match-outcome").innerText = "Paper beats Rock! You Lose!";     
        }

        else if (computerSelection.toLowerCase() === "scissors") {
            playerScore++;
            document.getElementById("match-outcome").innerText = "Rock beats scissors. You Win!";  
        }
    }
    // outcome if you pick paper
    if (playerSelection.toLowerCase() === "paper") {

        if (computerSelection.toLowerCase() === "rock") {
            playerScore++;
            document.getElementById("match-outcome").innerText = "Paper beats rock! You Win!";
                
        }
        else if (computerSelection.toLowerCase() === "paper") {
                document.getElementById("match-outcome").innerText = "Draw!";
        }

        else if (computerSelection.toLowerCase() === "scissors") {
                computerScore++;
                document.getElementById("match-outcome").innerText = "Scissors beats Paper! You Lose!";
                
        }

    }
    //outcome if you pick scissors
    if (playerSelection.toLowerCase() === "scissors") {

        if (computerSelection.toLowerCase() === "rock") {
            computerScore++;
            document.getElementById("match-outcome").innerText = "Rock beats scissors! You Lose!";
               
        }
        else if (computerSelection.toLowerCase() === "paper") {
            playerScore++;
            document.getElementById("match-outcome").innerText = "Scissors beats paper! You Win!";
               
        }

        else if (computerSelection.toLowerCase() === "scissors") {
               document.getElementById("match-outcome").innerText = "Draw!";
        }

    }  
    
    updateScore();
}