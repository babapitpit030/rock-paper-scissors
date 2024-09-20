 function getComputerChoice() {

            let value = 0
            let x = Math.random();

                if (x <= 0.333) {
                    value = "rock";

                } else if (x >= 0.333 && x <= 0.666) {
                    value = "paper";

                } else if (x >= 0.666) {
                    value = "scissors";
                }
        return value;
        }

        function playRound(humanChoice, computerChoice) {

            if (humanChoice == "rock" && computerChoice == "scissors") {
                console.log("human wins");
                humanScore += 1;
            } else if (humanChoice == "rock" && computerChoice == "paper") {
                console.log("computer wins");
                computerScore += 1;
            } else if (humanChoice == "rock" && computerChoice == "rock") {
                console.log("draw");
                computerScore += 1;
                humanScore += 1;
            } else if (humanChoice == "paper" && computerChoice == "scissors") {
                console.log("computer wins");
                computerScore += 1;
            } else if (humanChoice == "paper" && computerChoice =="rock") {
                console.log("human wins");
                humanScore += 1;
            } else if (humanChoice == "paper" && computerChoice == "paper") {
                console.log("draw"); 
                computerScore += 1;
                humanScore += 1;
            } else if (humanChoice == "scissors" && computerChoice == "scissors") {
                console.log("draw");
                computerScore += 1;
                humanScore += 1;
            } else if (humanChoice =="scissors" && computerChoice == "rock") {
                console.log("computer wins");
                computerScore += 1;
            } else  {
                console.log("human wins");
                humanScore += 1;

             }
        }

        function playGame(rounds, human) {

            for (let i = 1; i <= rounds; i++) {
                const humanSelection = human;
                const computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
            }

            console.log(`score for human is ${humanScore}`)
            console.log(`score for computer is ${computerScore}`)
        }

        let humanScore = 0;
        let computerScore  = 0;

        const button = document.querySelectorAll("button")
        const rock = document.querySelector(".rock")
        const paper = document.querySelector(".paper")
        const scissors = document.querySelector(".scissors")
        const text = document.querySelector(".text")
        const scoreHuman = document.querySelector(".humanscore")
        const scoreComputer = document.querySelector(".computerscore")

        rock.addEventListener("click", () => {
            playGame(1, "rock");
            text.textContent = "You chose Rock"
          });

        paper.addEventListener("click", () => {
            playGame(1, "paper");
            text.textContent = "You chose paper"
          });

          scissors.addEventListener("click", () => {
            playGame(1, "scissors");
            text.textContent = "You chose scissors"
          });

