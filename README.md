# Rock-Paper-Scissors Game

This project is a simple, interactive Rock-Paper-Scissors game that can be played in a web browser. The game is implemented in JavaScript and can be initiated with a single function call. It provides a straightforward gaming experience where a player can choose between rock, paper, or scissors and compete against the computer.

## Feature Overview

- **Easy to Start**: Just call one function, and you are ready to play.
- **Interactive Play**: The game uses `prompt` for player input and `alert` to announce the results after each round.
- **Simple UI**: No complicated interfaces; it's pure JavaScript with feedback given through alerts and console logs.
- **Best of Five Rounds**: The game runs for five rounds, and the player with the most wins at the end is declared the champion.
- **Score Tracking**: The game keeps track of the score and informs the player after each round.
- **Input Validation**: Ensures that the player's input matches one of the three choices: rock, paper, or scissors.

## Functions

- **getComputerChoice()**: Randomly returns "rock," "paper," or "scissors" as the computer's choice.

- **playRound(playerSelection, computerSelection)**: Takes in the player's choice and the computer's choice, determines the winner of the round, and logs the results to the console.

- **playGame()**: Initiates the game loop, which runs for five rounds. It handles player inputs, calls `playRound` to determine the outcome of each round, and keeps track of the scores.

## How to Play

1. Open the JavaScript console in your web browser.
2. Call the `playGame()` function.
3. When prompted, enter your choice: "rock," "paper," or "scissors."
4. After each round, an alert will show whether you won, lost, or tied the round.
5. After five rounds, an alert will show the final results and declare the winner.

## Getting Started

To set up the game, you can simply copy the JavaScript code into your web browser's console or include it in a web page's script tag. There is no additional setup required.

## Improvements from the Base Version

The code has been enhanced with the following improvements:

- Code organization for better readability and maintainability.
- Improved naming conventions for variables and functions.
- Separation of game logic from user interaction.
- Added robust input validation for the player's choices.
- More descriptive feedback provided to the player after each round.
- Implemented ES6 features for a more modern codebase.

## Future Enhancements

Planned enhancements to further improve the game experience include:

- A graphical user interface (GUI) for a more engaging user experience.
- Improved replayability with a "Play Again" feature.
- A visual scoreboard for real-time score tracking.
- Announcements of choices and results to make the game more interactive.
- Further refactoring to streamline the code and improve performance.

## License

This project is open-sourced and available for anyone to use, modify, and distribute as per the terms specified in the LICENSE file (if provided).

Enjoy the game and may the odds be ever in your favor!