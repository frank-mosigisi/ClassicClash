function getComputerChoice(){
    let rockPaperScissorArray =['rock', 'paper', 'scissors'];
    // let pick = rockPaperScissorArray[Math.floor(Math.random()* rockPaperScissorArray.length)]
    // return pick
    return rockPaperScissorArray[Math.floor(Math.random()* rockPaperScissorArray.length)] 
}

// console.log('This is pick 1',  getComputerChoice())
// console.log('This is pick 2',  getComputerChoice())
// console.log('This is pick 3',  getComputerChoice())
// console.log('This is pick 4',  getComputerChoice())
// console.log('This is pick 5',  getComputerChoice())
// console.log('This is pick 6',  getComputerChoice())

let Question = prompt ("Hey mate make a choice between rock, paper or scissors", '')
// ensuring the answer is always in lowecase
let playerSelection = Question.toLocaleLowerCase()
function playRound(playerSelection, computerSelection){
//  create a dictionary to show which beats the other
    let didNotBeat = {
        rock : 'scissors',
        paper : 'rock',
        scissors : 'paper',
   };

    if (playerSelection === computerSelection)
    {
        return `Its a draw! ${computerSelection} equals ${playerSelection}`

    } else if (computerSelection === didNotBeat[playerSelection])
    {
        return `you won! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === didNotBeat[computerSelection])
    {
        return `You lost! ${computerSelection} beats ${playerSelection}`

    } else {
        
        return ` you did not input correct arguments. Your input was ${playerSelection} Try again!!!`
    }
}

const computerSelection = getComputerChoice();
console.log('This is the computer selection', computerSelection)
console.log('This is the player selection', playerSelection)
// alert (playRound(playerSelection, computerSelection))
return playRound(playerSelection, computerSelection)