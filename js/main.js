// Random number generator
function random (min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

// Generate random computer choice
function computerPlay () {
    return random(0,3)
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

// Get round ruleset
function getPossiblePlays (playerSelection) {
    let possiblePlays;

    switch(playerSelection) {
        case 'Rock':
            possiblePlays = ['Scissors', 'Rock', 'Paper'];
            break;
        case 'Paper':
            possiblePlays = ['Rock', 'Paper', 'Scissors'];
            break;
        case 'Scissors':
            possiblePlays = ['Paper', 'Scissors', 'Rock']
            break; 
    }

    return possiblePlays
}

// A single round of rock paper scissors
function playRound (playerSelection, computerSelection, rules) {
    let result = (computerSelection == 1) ? `${playerSelection} cancels ${rules[computerSelection]}. It's a draw!` : 
                 (computerSelection < 1) ? `${playerSelection} beats ${rules[computerSelection]}. You win!` :
                 `${playerSelection} loses to ${rules[computerSelection]}. You lose!`
    return result
}

// Game loop
function game () {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        let rules = getPossiblePlays(playerSelection);
        let computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection, rules))
    }
}

// Run the game loop
game ()