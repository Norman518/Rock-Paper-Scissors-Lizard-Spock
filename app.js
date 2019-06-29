userScore = 0;
computerScore = 0;
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


function convertToWord(token) {
  if (token ==="r") return "Rock";
    if (token ==="p") return "Paper";
      if (token ==="sc") return "Scissors";
        if (token ==="l") return "Lizard";
          if (token ==="sp") return "Spock";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}



function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallCompWord} beats ${convertToWord(computerChoice)}${smallUserWord}. You lose!`;
  userChoice_div.classList.add('red-glow');
setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;
  userChoice_div.classList.add('gray-glow');
setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
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
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () =>
        game("p")
    );

    scissors_div.addEventListener('click',() =>
        game("sc")
    );

    lizard_div.addEventListener('click', () =>
        game("l")
    );

    spock_div.addEventListener('click', () =>
        game("sp")
    );
}


main();
