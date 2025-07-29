function getHumanChoice() {
    return prompt("What do you choose?");
}

function getComputerChoice()
{
    let randNum = Math.random;

    if (randNum <= (randNum/3))
        return "rock";
    else if ((randNum/3) < randNum <= (randNum * 2 / 3))
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
for (let i = 0; i < 10; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));
    console.log(computerChoice);
    console.log(humanScore + " ", computerScore);
    
}