function getHumanChoice()
{
    return prompt("What do you choose?");
}

function playRound(humanChoiceInput, computerChoiceInput)
{
    let humanChoice = humanChoiceInput.toLowerCase();
    let computerChoice = computerChoiceInput.toLowerCase();

    if (humanChoice == "rock")
    {
        switch (computerChoice)
        {
            case "rock":
                return "It's a tie!";
                break;
            case "paper":
                computerScore++;
                return "You Lose!"
                break;
            case "scissors":
                humanScore++;
                return "You Win!"
                break;
            default:
                return "THERE WAS AN ERROR!!! LINE 27"
        }
    }
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();

console.log(playRound(humanChoice, "Rock"));
console.log(humanScore + " ", + computerScore);

console.log(playRound(humanChoice, "pAper"));
console.log(humanScore + " ", + computerScore);

console.log(playRound(humanChoice, "Scissors"));
console.log(humanScore + " ", + computerScore);