function getHumanChoice() {
    return prompt("What do you choose?");
}

function getComputerChoice()
{
    let randNum = Math.random();

    console.log(randNum);

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

    const beats =
    {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (humanChoice == computerChoice)
        return "It's a draw!"
    else if (beats[humanChoice] == computerChoice) {
        humanScore++;
        return "You Won!";
    }
    else {
        computerScore++;
        return "You Lost!";
    }

    f
}

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
for (let i = 0; i < 10; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));
    console.log(computerChoice);
    console.log(humanScore + " ", computerScore);
    
}