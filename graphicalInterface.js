function getComputerChoice(){
    let rockPaperScissorsArray =['rock', 'paper', 'scissors'];
    return rockPaperScissorsArray[Math.floor(Math.random()* rockPaperScissorsArray.length)] 
}


let player  = 0;
let computer = 0;

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
// created a dictionary to define what beats what in rock paper
// scissors so that I could reduce the number of if else statements 
// I had to write
    const didNotBeat = {
        "rock" : 'scissors',
        "paper" : 'rock',
        "scissors" : 'paper',
   };

    if (playerSelection === computerSelection)
    {
        console.log(`Its a draw! ${computerSelection} equals ${playerSelection}`)
        let answer = 'Its a draw'
        return answer

    } else if (computerSelection === didNotBeat[playerSelection])
    {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
        let answer = 'Player won'
        player++
        playerCurrentScore.textContent =`player has ${ player} points`
        return answer
    }
    else if (playerSelection === didNotBeat[computerSelection])
    {
        console.log( `You lost! ${computerSelection} beats ${playerSelection}`)
        let answer = 'Computer won'
        computer++
        computerCurrentScore.textContent =`computer has ${ computer} points`
        return answer

    } else {
        console.log(` You didn't input the correct arguments. Your input was ${playerSelection}. Try again!!!`)
        let answer = ' Wrong input'
        return answer
    }
}

let playerSelection;
const container = document.querySelector('#container');

container.addEventListener("click", (event) => {
    // Ensure the clicked target is a button.
    if (event.target.tagName === 'BUTTON') {
        let target = event.target;
        playerSelection = target.id.replace("Button",""); // getting the selection type from the id (rock, paper, scissors)
        let computerSelection = getComputerChoice();
        
        pSelection.textContent = `The player selected ${playerSelection}`;
        compSelection.textContent = `The computer selected ${computerSelection}`;
        roundResult.textContent = `${playRound(playerSelection, computerSelection)}`;
        checkforWinner();
    }
});
// This section creates and gives us the selection of player and computer for each round
const compSelection = document.createElement('para')
const pSelection = document.createElement('para')
container.appendChild(compSelection)
container.appendChild(pSelection)

// This section shows who won in each round
const divResults = document.createElement('div')
const roundResult = document.createElement('para')
divResults.classList.add("divResults");
divResults.textContent ='Result'
divResults.appendChild(roundResult)

// This section keeps track of everyone's scores
const computerCurrentScore = document.createElement('para')
const playerCurrentScore = document.createElement('para')
divResults.appendChild(computerCurrentScore);
divResults.appendChild(playerCurrentScore)

// This section shows us the overall winner once the game ends
const computerFinalScore = document.createElement('para')
const playerFinalScore = document.createElement('para')
divResults.appendChild(computerFinalScore);
divResults.appendChild(playerFinalScore)
container.appendChild(divResults)



function checkforWinner(){
    const buttons = document.querySelectorAll('#container button');
    if (player === 5){

        playerFinalScore.textContent = 'Player has won the game'
        buttons.forEach(button => button.disabled= true);
    }

    if (computer === 5 ){

        computerFinalScore.textContent = 'Computer has won the game'
        buttons.forEach(button => button.disabled= true);
    }
}


const restartButton = document.querySelector("#restartButton");

restartButton.addEventListener("click", function() {
    // Enable all the buttons
    const buttons = document.querySelectorAll('#container button');
    buttons.forEach(button => button.disabled = false);
    
    //// Reset the text content of score displays
    // computerFinalScore.textContent = '';
    // playerFinalScore.textContent = '';
    // computerCurrentScore.textContent =''
    // playerCurrentScore.textContent =''
    // roundResult.textContent = ''
    location.reload();
});