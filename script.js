function getHumanChoice() {
    return prompt("What do you choose?");
}

function getComputerChoice()
{
    let randNum = Math.random();

    if (randNum <= (1/3))
        return "rock";
    else if ((1/3) < randNum && randNum <= (2 / 3))
        return "paper";
    else
        return "scissors";
}

function playRound(humanChoiceInput, computerChoiceInput) {
    let humanChoice = humanChoiceInput.toLowerCase();
    let computerChoice = computerChoiceInput.toLowerCase();

    playerChoiceEl.textContent = humanChoiceInput;
    computerChoiceEl.textContent = computerChoiceInput;

    const beats =
    {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (humanChoice == computerChoice)
    {
        winnerEl.textContent = "It's a Draw!";
    }
    else if (beats[humanChoice] == computerChoice) {
        humanScore++;
        winnerEl.textContent = "You Won!";
    }
    else {
        computerScore++;
        winnerEl.textContent = "You Lost!";
    }
    scoreEl.textContent = "Player: " + humanScore + "   Computer: " + computerScore;
}

const playerChoiceEl = document.querySelector("#player-choice");
const computerChoiceEl = document.querySelector("#computer-choice");
const scoreEl = document.querySelector("#score");
const winnerEl = document.querySelector("#winner")
const rockBtn = document.querySelector("#rock-btn");
const scissorsBtn = document.querySelector('#scissors-btn');
const paperBtn = document.querySelector('#paper-btn');

const btns = document.querySelectorAll("button");


let humanScore = 0;
let computerScore = 0;

btns.forEach(function(btn) {
    btn.addEventListener('click', () =>
    {
        let humanChoice = btn.textContent.toLowerCase();
        playRound(humanChoice, getComputerChoice());
        if (humanScore == 5 || computerScore == 5)
            {
                winnerEl.textContent = "The Ultimate Winner is ";
                if (humanScore > computerScore)
                {
                    winnerEl.textContent += "The Human!!!";
                }
                else if (humanScore < computerScore)
                {
                    winnerEl.textContent += "The Computer!!!";
                }
                else
                {
                    winnerEl.textContent += "No Body! It was a Tie!!!!!"
                }

                humanScore = 0;
                computerScore = 0;
            }
    });
});

