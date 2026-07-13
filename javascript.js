function getComputerChoice(){
    let choice;
    let random = Math.floor(Math.random() * 10);
    if(random >= 0 && random <= 2){
        choice = "rock";
    }
    else if(random >= 3 && random <= 5){
        choice = "paper";
    }
    else if(random >= 6){
        choice = "scissors";
    }
    return choice;
}

function playGame(){
    const TOTAL_ROUNDS = 5;
    let currentRound = 0;
    let humanScore = 0;
    let computerScore = 0;

    const heading = document.createElement("h2");
    heading.textContent = "Rock Paper Scissors";
    document.body.appendChild(heading);

    const roundDisplay = document.createElement("p");
    roundDisplay.textContent = "Round: 1 / " + TOTAL_ROUNDS;
    document.body.appendChild(roundDisplay);

    const rock = document.createElement("button");
    rock.textContent = "Rock";
    document.body.appendChild(rock);

    const paper = document.createElement("button");
    paper.textContent = "Paper";
    document.body.appendChild(paper);

    const scissor = document.createElement("button");
    scissor.textContent = "Scissor";
    document.body.appendChild(scissor);

    const resultDisplay = document.createElement("p");
    resultDisplay.textContent = "Make your first move!";
    document.body.appendChild(resultDisplay);

    const userScoreDisplay = document.createElement("p");
    userScoreDisplay.textContent = "Total user score: 0";
    document.body.appendChild(userScoreDisplay);

    const machineScoreDisplay = document.createElement("p");
    machineScoreDisplay.textContent = "Total computer score: 0";
    document.body.appendChild(machineScoreDisplay);

    const finalResultDisplay = document.createElement("p");
    document.body.appendChild(finalResultDisplay);

    function playRound(playerChoice){
        if(currentRound >= TOTAL_ROUNDS) return;

        const machineChoice = getComputerChoice();
        currentRound++;

        let roundText = "You chose " + playerChoice + ". Computer chose " + machineChoice + ". ";

        if(machineChoice === playerChoice){
            roundText += "It's a tie!";
        }
        else if(
            (machineChoice === "rock" && playerChoice === "paper") ||
            (machineChoice === "scissors" && playerChoice === "rock") ||
            (machineChoice === "paper" && playerChoice === "scissors")
        ){
            roundText += "You win this round!";
            humanScore++;
        }
        else {
            roundText += "Computer wins this round!";
            computerScore++;
        }

        resultDisplay.textContent = roundText;
        userScoreDisplay.textContent = "Total user score: " + humanScore;
        machineScoreDisplay.textContent = "Total computer score: " + computerScore;

        if(currentRound < TOTAL_ROUNDS){
            roundDisplay.textContent = "Round: " + (currentRound + 1) + " / " + TOTAL_ROUNDS;
        } else {
            roundDisplay.textContent = "Game over!";
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;

            if(humanScore > computerScore){
                finalResultDisplay.textContent = "Human wins the game!";
            }
            else if(computerScore > humanScore){
                finalResultDisplay.textContent = "Computer wins the game!";
            }
            else{
                finalResultDisplay.textContent = "The game has tied!";
            }
        }
    }

    rock.addEventListener("click", () => playRound("rock"));
    paper.addEventListener("click", () => playRound("paper"));
    scissor.addEventListener("click", () => playRound("scissors"));
}

playGame();
