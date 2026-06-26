
function getComputerChoice(){
    let choice;
    let random=Math.floor(Math.random()*10);
    if(random>=0 && random<=2){
        choice="rock";
    }                                               /*this function creates a random choice
                                                    among the 3 choices */
    else if(random>=3 && random<=5){
        choice="paper";
    }
    else if(random>=6){
        choice="scissors";
    }
    return choice;
}

function getHumanChoice(){
    let choice=prompt("Please enter your choice : ");
    return choice;
}

function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(humanChoice, computerChoice){
    let machineChoice=computerChoice();
    let userChoice=humanChoice();
    console.log("User chose : "+userChoice);
    console.log("Computer chose : "+machineChoice);
    if(machineChoice==userChoice){
        console.log("Oops! It's a tie.");
    }
    else if(machineChoice=="rock" && userChoice=="paper"){
        console.log("User wins! Paper wraps rock.");
        humanScore++;
    }
    else if(machineChoice=="scissors" && userChoice=="rock"){
        console.log("User wins! Rock breaks scissors.");
        humanScore++;
    }
    else if(machineChoice=="paper" && userChoice=="scissors"){
        console.log("User wins! Scissors cut paper.");
        humanScore++;
    }
    else if(machineChoice=="paper" && userChoice=="rock"){
        console.log("Computer wins! Paper wraps rock.");
        computerScore++;

    }
    else if(machineChoice=="rock" && userChoice=="scissors"){
        console.log("Computer wins! Rock breaks scissor.");
        computerScore++;
    }
    else if(machineChoice=="scissors" && userChoice=="paper"){
        console.log("Computer wins! Scissors cut paper.");
        computerScore++;
        }
    }
    console.log("Round 1");
    playRound(getHumanChoice,getComputerChoice);
    console.log("Round 2");
    playRound(getHumanChoice,getComputerChoice);
    console.log("Round 3");
    playRound(getHumanChoice,getComputerChoice);
    console.log("Round 4");
    playRound(getHumanChoice,getComputerChoice);
    console.log("Round 5");
    playRound(getHumanChoice,getComputerChoice);
    console.log("Computer's total score : "+computerScore);
    console.log("User's total score : "+humanScore);
    if(humanScore>computerScore){
        console.log("Human wins the game!");
    }
    else if(computerScore>humanScore){
        console.log("Computer wins the game!");
    }
    else{
        console.log("The game has tied!");
    }
}
playGame();