userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("sc");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");

function getComputerChoice() {
    const choices = [
      'r', 'p', 'sc', 'l', 'sp'
    ];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
}

function lose(userChoice, computerChoice) {
}

function draw(userChoice, computerChoice) {
}

function game(userChoice) {

    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rsc":
        case "rl":
        case "lsp":
        case "lp":
        case "spsc":
        case "spr":
        case "scp":
        case "scl":
        case "psp":
        case "pr":
          console.log("test");
            win(userChoice, computerChoice);
            break;
        case "scr":
        case "lr":
        case "spl":
        case "pl":
        case "scsp":
        case "rsp":
        case "psc":
        case "lsc":
        case "spp":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ll":
        case "spsp":
        case "scsc":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("sc");
    })

    lizard_div.addEventListener('click', function() {
        game("l");
    })

    spock_div.addEventListener('click', function() {
        game("sp");
    })
}


main();
