// Set up game logic
const RULESET = ['Rock', 'Paper', 'Scissors']
let playerScore = 0;
let cpuScore = 0;

// Get DOM nodes 
const playerChoice = document.querySelector('#playerChoice');
const cpuChoice = document.querySelector('#cpuChoice');
const battleReport = document.querySelector('#battleReport');
const roundResults = document.querySelector('#roundResults');

const playerScoreBoard = document.querySelector('#playerScore');
const cpuScoreBoard = document.querySelector('#cpuScore');
const winnerIs = document.querySelector('#winnerIs')

const buttons = document.querySelectorAll('.btn-primary');
const rstBtn = document.querySelector('.btn-danger');

// Add Event listeners
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        playRound(e.target.id, computerPlay(RULESET))
    });
});

rstBtn.addEventListener('click', () => {
    resetGame()
});

// Random number generator
function random (min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

// Generate random computer choice
function computerPlay (rules) {
    return rules[random(0,3)]
}

// Display results of current matchup and add to scores
function getBattleReport (playerSelection, computerSelection, strength, weakness) {
    if (computerSelection == strength) {
        battleReport.textContent = `${playerSelection} beats ${computerSelection}. Player wins!`
        playerScore += 1;
    } else if (computerSelection == weakness){
        battleReport.textContent = `${playerSelection} is beaten by ${computerSelection}. CPU wins!`
        cpuScore += 1;
    } else {
        battleReport.textContent = `${playerSelection} cancels ${computerSelection}. It's a draw!`
    }
}

// tracks and display scores and display winner
function trackScore (playerScore, cpuScore) {
    if (playerScore == 5) {
        toggleButtons()
        winnerIs.textContent = "Player Wins!"
    } else if (cpuScore == 5) {
        toggleButtons()
        winnerIs.textContent = "CPU Wins!"
    }
    displayScore(playerScore, cpuScore)
}

// display score
function displayScore (playerScore, cpuScore) {
    playerScoreBoard.textContent = `${playerScore}`;
    cpuScoreBoard.textContent = `${cpuScore}`;
}

// A single round of rock paper scissors
function playRound (playerSelection, computerSelection) {

    playerChoice.textContent = `${playerSelection}`
    cpuChoice.textContent = `${computerSelection}`

    switch(playerSelection) {
        case 'Rock':
            getBattleReport(playerSelection, computerSelection, "Scissors", "Paper");
            break;
        case 'Paper':
            getBattleReport(playerSelection, computerSelection, "Rock", "Scissors");
            break;
        case 'Scissors':
            getBattleReport(playerSelection, computerSelection, "Paper", "Rock");
            break;
    }

    trackScore(playerScore, cpuScore);
}

// Reset the game back to start
function resetGame() {
    playerScore = 0;
    cpuScore = 0;

    playerChoice.textContent = "";
    cpuChoice.textContent = "";
    battleReport.textContent = "";
    winnerIs.textContent = "";

    toggleButtons()
    trackScore(playerScore, cpuScore);
}

// toggle buttons on and off depending on game state
function toggleButtons() {
    buttons.forEach(button => {
        if (button.disabled) {
            button.removeAttribute("disabled");
        } else {
            button.setAttribute("disabled", true);
        }
    });
}