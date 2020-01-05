/* V1 of Rock Paper Scissors */

// Set up game rules
const RULESET = ['Rock', 'Paper', 'Scissors']

// Random number generator
function random (min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

// Generate random computer choice
function computerPlay (rules) {
    return rules[random(0,3)]
}

// Prompt the player for his next move using basic validation
function getPlayerSelection () {
    let selection = prompt('Enter your selection: Rock, Paper or Scissors')
    
    if (!['rock', 'paper', 'scissors'].includes(selection.toLowerCase())) {
        console.log('Error: Please follow the rules!')
        getPlayerSelection()
    } 

    return processPlayerSelection(selection)
}

// Clean player input to avoid case sensitivity issues
function processPlayerSelection(selection) {
    return selection[0].toUpperCase() + selection.slice(1).toLowerCase()
}

// A single round of rock paper scissors
function playRound (playerSelection, computerSelection) {
    let result;

    switch(playerSelection) {
        case 'Rock':
            result = (computerSelection == "Scissors") ? `${playerSelection} beats ${computerSelection}.You win!` :
                     (computerSelection == "Paper") ? `${playerSelection} is beaten by ${computerSelection}. You lose!` :
                     `${playerSelection} cancels ${computerSelection}. It's a draw!`;
            break;
        case 'Paper':
            result = (computerSelection == "Rock") ? `${playerSelection} beats ${computerSelection}.You win!` :
                     (computerSelection == "Scissors") ? `${playerSelection} is beaten by ${computerSelection}. You lose!` :
                     `${playerSelection} cancels ${computerSelection}. It's a draw!`;
            break;
        case 'Scissors':
            result = (computerSelection == "Paper") ? `${playerSelection} beat ${computerSelection}.You win!` :
                     (computerSelection == "Rock") ? `${playerSelection} are beaten by ${computerSelection}. You lose!` :
                     `${playerSelection} cancel ${computerSelection}. It's a draw!`;
            break;
    }

    return result
}

// Game loop
function game () {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = computerPlay(RULESET);
        
        console.log(playRound(playerSelection, computerSelection))
    }
}

// Run the game loop
game ()