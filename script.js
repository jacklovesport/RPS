let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    let computerChoice = "Rock";
    if (randomInt === 1) {
        computerChoice = "Paper";
    } else if (randomInt === 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;

    } else if (humanChoice === computerChoice) {
      
    } else {
        computerScore++;
        
    }
    updateScore();
}

function updateScore() {
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            document.getElementById('result').innerHTML = `You win! Your score: ${humanScore}. Computer score: ${computerScore}`;
        } else if (humanScore === computerScore) {
            document.getElementById('result').innerHTML = `It's a tie! Your score: ${humanScore}. Computer score: ${computerScore}`;
        } else {
            document.getElementById('result').innerHTML = `You lose! Your score: ${humanScore}. Computer score: ${computerScore}`;
        }
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;

       
        setTimeout(function() {
            if (confirm("Do you want to play again?")) {
                resetGame();
            }
        }, 500); 
    } else {
        document.getElementById('result').innerHTML = `Your score: ${humanScore}. Computer score: ${computerScore}`;
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('result').innerHTML = "Let's play again!";
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

document.getElementById('rock').addEventListener('click', function() {
    playRound("rock", getComputerChoice());
});

document.getElementById('paper').addEventListener('click', function() {
    playRound("paper", getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', function() {
    playRound("scissors", getComputerChoice());
});
