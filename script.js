const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

const playerDisplay = document.querySelector('.player h3');
const computerDisplay = document.querySelector('.computer h3');
const playerScoreBoard = document.querySelector('.player p');
const computerScoreBoard = document.querySelector('.computer p');

function setDisplay(target, choice) {
    if (choice === "Rock") {
        target.textContent = "👊";
    } else if (choice === "Paper") {
        target.textContent = "🖐️";
    } else if (choice === "Scissors") {
        target.textContent = "✌️";
    } else {
        target.textContent = "❔";
    }

    playerScoreBoard.textContent = `Player: ${playerScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;
}

function playRound(player) {
    const computer = getComputerChoice();

    const draw = (computer === player);
    const win = (player === "Rock" && computer === "Scissors")
        || (player === "Paper" && computer === "Rock")
        || (player === "Scissors" && computer === "Paper");

    let output;
    if (draw) {
        output = `It's a draw! Both chose ${computer}`;
    } else if (win) {
        playerScore++;
        output = `You win! ${player} beats ${computer}`;
    } else {
        computerScore++;
        output = `You lose! ${computer} beats ${player}`;
    }
    
    setDisplay(playerDisplay, player);
    setDisplay(computerDisplay, computer);

    rounds++;
    return output;
}

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
function playGame() {
    const buttonList = document.querySelectorAll('.choices button');
    for(let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', (e) => {
            const playerChoice = e.target.dataset.value;
            console.log( playRound(playerChoice) );

            if (rounds === 5) {
                if (playerScore > computerScore) {
                    alert("You Wins!");
                } else {
                    alert("You Lose!");
                }

                playerScore = 0;
                computerScore = 0;
                rounds = 0;
                setDisplay(playerDisplay, 0);
                setDisplay(computerDisplay, 0);
            }
        });
    }
}

playGame ();