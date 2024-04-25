function getComputerChoice(){
    let rockPaperScissorsArray =['rock', 'paper', 'scissors'];
    return rockPaperScissorsArray[Math.floor(Math.random()* rockPaperScissorsArray.length)] 
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
// created a dictionary to define what beats what in rock paper
// scissors so that I could reduce the number of if else statements 
// I had to write
    const didNotBeat = {
        rock : 'scissors',
        paper : 'rock',
        scissors : 'paper',
   };

    if (playerSelection === computerSelection)
    {
        console.log (`Its a draw! ${computerSelection} equals ${playerSelection}`)
        let answer = 'Its a draw'
        return answer

    } else if (computerSelection === didNotBeat[playerSelection])
    {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
        let answer = 'Player won'
        return answer
    }
    else if (playerSelection === didNotBeat[computerSelection])
    {
        console.log( `You lost! ${computerSelection} beats ${playerSelection}`)
        let answer = 'Computer won'
        return answer

    } else {
        console.log(` You didn't input the correct arguments. Your input was ${playerSelection}. Try again!!!`)
        let answer = ' Wrong input'
        return answer
    }
}
// let playerSelection = 'rock'
// const computerSelection = getComputerChoice();
// console.log('This is the computer selection', computerSelection)
// console.log('This is the player selection', playerSelection)
// console.log (playRound(playerSelection, computerSelection))



function playGame() {

    let player  = 0;
    let computer = 0;
    let total = 5

    for (let c = 0; c < total ; c++){

        let playerSelection = prompt ("Hey mate make a choice between rock, paper or scissors", '')
        
        let computerSelection = getComputerChoice();
        console.log('This is the computer selection', computerSelection)

        let roundResult = playRound(playerSelection, computerSelection);

        if ( roundResult === 'Player won' )
        {
            alert ( "You won")
            player++

        } else if (roundResult === 'Computer won'){
            computer++
            alert ( "You lost")
        }
        else if ( roundResult === 'Its a draw'){
            alert ("Its a draw")}
        else {
            alert ("Wrong Input")
        }

        console.log('total score is for player is ', player)
        console.log('total score is for computer is ', computer)

    }
    let winner =
    (player > computer)? `Congrats Player you won by ${player} points`:
    (computer > player)? `Congrats the Computer won by ${computer} points`:
    (computer === player)? `You tied with the computer better luck next time`:
    '';

alert (winner);

}

playGame()

