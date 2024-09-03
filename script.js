let getComputerChoice = function(){
    let num = Math.floor(Math.random() * 3);
    if(num === 0){
        return "rock";
    }
    if(num === 1){
        return "paper";
    }
    if(num === 2){
        return "scissors";
    }
}

function getHumanChoice(userInput){
    let lowerCaseString = userInput.toLowerCase();
    if(lowerCaseString === "rock"){
        return "rock";
    }
    if(lowerCaseString === "paper"){
        return "paper";
    }
    if(lowerCaseString === "scissors"){
        return "scissors";
    }
    return "Invalid Choice"; 
}

function playRound(humanChoice, computerChoice){    
    if(humanChoice === "Invalid Choice"){
        return "Invalid input. Please enter Rock, Paper, or Scissors.";
    }
    if(humanChoice === computerChoice){
        return "It's a tie!";
    }
    if((humanChoice === "rock" && computerChoice === "scissors") ||
       (humanChoice === "scissors" && computerChoice === "paper") ||
       (humanChoice === "paper" && computerChoice === "rock")){
        return "You win!";
    }
    else{
    return "Computer wins!";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Введите свой выбор (rock, paper, scissors)");
        let humanSelection = getHumanChoice(userInput);
        let computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);
        console.log(result);

        if (result === "You win!") {
            humanScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game. Better luck next time!");
    } else {
        console.log("It's a tie overall!");
    }
}

console.log(playGame());
