let userScore = 0;
let botScore = 0;
const userScore_span = document.getElementById("user-score");
let botScore_span = document.getElementById("bot-score");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const scoreBoard_div = document.querySelector(".score-board");

function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNum = Math.floor(Math.random()*3);
  return choices[randomNum];
}

function convertToWord(letter) {
  if (letter === 'r')
    return "rock";
  else if (letter === 'p')
    return "paper";
  else return 'scissor';
}

function win(userChoice , computerChoice) {
  botScore_span.innerHTML = botScore;
  userScore_span.innerHTML = ++userScore;
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. you win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
}

function lose(userChoice,computerChoice) {
  botScore_span.innerHTML = ++botScore;
  userScore_span.innerHTML = userScore;
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. you lose!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function draw(userChoice,computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(userChoice)} and ${convertToWord(computerChoice)}. its a draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener("click" , () => game("r"));
  paper_div.addEventListener("click" , () =>game("p"));
  scissor_div.addEventListener("click" , () => game("s"));
}
main();
