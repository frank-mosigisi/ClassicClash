function getComputerChoice(){
    let rockPaperScissorArray =['Rock', 'Paper', 'Scissors'];
    // let pick = rockPaperScissorArray[Math.floor(Math.random()* rockPaperScissorArray.length)]
    // return pick
    return rockPaperScissorArray[Math.floor(Math.random()* rockPaperScissorArray.length)] 
}

console.log('This is pick 1',  getComputerChoice())
console.log('This is pick 2',  getComputerChoice())
console.log('This is pick 3',  getComputerChoice())
console.log('This is pick 4',  getComputerChoice())