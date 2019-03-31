<script>
            
            let playerSelection;
            let computerSelection;
            let result;
            let computerScore = 0;
            let playerScore = 0;
            let round;

            function computerPlay() {
                let x = Math.floor((Math.random() * 3) + 1); //Generates random number between 1-3
                
                if (x < 2) { //Depending on the outcome of the random value it sets the computerSelection variable to one of three options
                    computerSelection = "ROCK"
                } else if (x > 2) {
                    computerSelection = "SCISSORS"
                } else {
                    computerSelection = "PAPER"
                };
                return computerSelection;
            }

            function rockPaperScissors(playerSelection) { 

                computerSelection = computerPlay();
                playerSelection = playerSelection.toUpperCase();

                if (playerSelection == "ROCK") {
                    if (computerSelection == "SCISSORS") {
                        playerScore++;
                        result = "You win!! " + playerSelection + " beats " + computerSelection + ("!");
                    } else if (computerSelection == "PAPER") {
                        computerScore++;
                        result = "You lose!! " + computerSelection + " beats " + playerSelection + ("!"); 
                    } else {
                        result = "It's a tie!! You both chose " + playerSelection;
                    }
                } else if (playerSelection == "PAPER") {
                    if (computerSelection == "ROCK") {
                        playerScore++;
                        result = "You win!! " + playerSelection + " beats " + computerSelection + ("!");
                    } else if (computerSelection == "SCISSORS") {
                        computerScore++;
                        result = "You lose!! " + computerSelection + " beats " + playerSelection + ("!"); 
                    } else {
                        result = "It's a tie!! You both chose " + playerSelection;
                    }
                } else if (playerSelection == "SCISSORS") {
                    if (computerSelection == "PAPER") {
                        playerScore++;
                        result = "You win!! " + playerSelection + " beats " + computerSelection + ("!");
                    } else if (computerSelection == "ROCK") {
                        computerScore++;
                        result = "You lose!! " + computerSelection + " beats " + playerSelection + ("!"); 
                    } else {
                        result = "It's a tie!! You both chose " + playerSelection;
                    }
                } else {
                    round--;
                    result = "DON'T CHEAT! Choose Rock, Paper or Scissors!!"
                };

                return (result);
            }

            function game() {
                computerScore = 0;
                playerScore = 0;

                for (round = 1; round <= 5; round++) {
                playerSelection = window.prompt("Round: " + round + ". Choose Rock, Paper or Scissors");
                rockPaperScissors(playerSelection.toUpperCase())
                alert(result);
                alert("Score: " + playerScore + " - " + computerScore)
                }

                if (playerScore > computerScore) {
                    alert("Score: " + playerScore + " - " + computerScore + ". You win!");
                } else if (playerScore < computerScore) {
                    alert("Score: " + playerScore + " - " + computerScore + ". You lose!");
                } else {
                    alert("It's a tie!!");
                }
            }
            game();