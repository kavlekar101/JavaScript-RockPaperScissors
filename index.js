function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 2);
    return arr[num];
}

function playRound(playerSelection, computerSelection) {
    let str;
    switch (computerSelection) {
        case "Rock": 
            if(playerSelection.toLowerCase() == "rock") {
                str = "its a tie!";
            } else if (playerSelection.toLowerCase() == "paper") {
                str = "player won!";
            } else {
                str = "Computer won";
            }
        break;

        case "Paper":
            if (playerSelection.toLowerCase() == "rock") {
                str = "Computer won";
            } else if (playerSelection.toLowerCase() == "paper") {
                str = "its a tie!";
            } else {
                str = "player won!";
            }
        break;

        case "Scissors":
            if (playerSelection.toLowerCase() == "rock") {
                str = "player won!";
            } else if (playerSelection.toLowerCase() == "paper") {
                str = "Computer won";
            } else {
                str = "its a tie!";
            }
        break;

        default: str = "something terribly wrong has happend";
        break;
    }
    return str;
}

const numTimes = prompt("Enter how many times you would like to play");

for(let i = 0; i < numTimes; i++){
    const playerSelection = prompt("Enter your selection.");
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
}