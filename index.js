let compWins = 0;
let playerWins = 0;

function displayScore(div){
    div.textContent = "Player Wins: " + playerWins + " , Computer Wins: " + compWins;

    container.appendChild(div);
}

function displayWinner() {
    if (playerWins == 5) {
        alert("Congratulations! You have beaten the computer!");
    } else if (compWins == 5) {
        alert("Sorry, the computer has won the game. Maybe next time.");
    }
}

function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 2);
    return arr[num];
}

function playRound(playerSelection, computerSelection) {
    let str;
    switch (computerSelection) {
        case "rock": 
            if(playerSelection == "rock") {
                str = "Both you and the computer selected rock, so it is a tie";
            } else if (playerSelection == "paper") {
                str = "Paper covers rock, you won!";
                playerWins++;
            } else {
                str = "Rock crushes scissors, you lost!";
                compWins++;
            }
        break;

        case "paper":
            if (playerSelection == "rock") {
                str = "Paper covers rock, you lost!";
                compWins++;
            } else if (playerSelection == "paper") {
                str = "Both you and the computer selected paper, so it is a tie";
            } else {
                str = "Scissors cuts paper, you won!";
                playerWins++;
            }
        break;

        case "scissors":
            if (playerSelection == "rock") {
                str = "Rock crushes scissors, you won!";
                playerWins++;
            } else if (playerSelection == "paper") {
                str = "Scissors cuts paper, you lost!";
                compWins++;
            } else {
                str = "Both you and the computer selected scissors, so it is a tie";
            }
        break;

        default: str = "something terribly wrong has happend";
        break;
    }
    return str;
}

// displays the winners
const div = document.createElement('div');
div.classList.add('content');

/*
* adding in the action listeners for the buttons.
*/
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
        displayScore(div);
        displayWinner();
    });
});
