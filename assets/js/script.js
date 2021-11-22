let userScore = 0;
let computerScore = 0;
let userScore_p = document.getElementById("user-score");
let compScore_p = document.getElementById("comp-score");
let winnerContent = document.querySelector(".winner-content");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let choices = document.querySelector(".choices");
let playAgainBtn = document.querySelector(".play-btn");

// Get computer's choice
const computerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
computerChoice();

// Click events added to icons
const iconClicks = () => {
  rock.addEventListener("click", () => {
    game("rock");
  });
  paper.addEventListener("click", () => {
    game("paper");
  });
  scissors.addEventListener("click", () => {
    game("scissors");
  });
};
iconClicks();

// User's win function
const win = (userChoice, computerChoice) => {
  playAgainBtn.addEventListener("click", gameOver);
  let userDisplay = "(User)".sup();
  let compDisplay = "(Comp)".sup();
  let userChoiceIcon = document.getElementById(userChoice);
  userScore += 1;
  userScore_p.innerHTML = userScore;
  compScore_p.innerHTML = computerScore;
  if (userScore < 5) {
    winnerContent.innerHTML = `
        ${userChoice.toUpperCase()} ${userDisplay} beats ${computerChoice.toUpperCase()} ${compDisplay}. You win! 😃
    `;
  } else if (userScore === 5) {
    winnerContent.innerHTML = `Game over. User beats Computer! 😀`;
    playAgainBtn.classList.remove("play-btn");
    choices.classList.add("choices-display-none");
  }

  userChoiceIcon.classList.add("user-winner-glow");
  setTimeout(() => {
    userChoiceIcon.classList.remove("user-winner-glow");
  }, 300);
};

// User's lose function
const lose = (userChoice, computerChoice) => {
  let userDisplay = "(User)".sup();
  let compDisplay = "(Comp)".sup();
  let userChoiceIcon = document.getElementById(userChoice);
  computerScore += 1;
  userScore_p.innerHTML = userScore;
  compScore_p.innerHTML = computerScore;
  if (computerScore < 5) {
    winnerContent.innerHTML = `
        ${userChoice.toUpperCase()} ${userDisplay} loses to ${computerChoice.toUpperCase()} ${compDisplay}. You win! 😃
    `;
  } else if (computerScore === 5) {
    winnerContent.innerHTML = `Game over. Computer beats User! 😞`;
    playAgainBtn.classList.remove("play-btn");
    choices.classList.add("choices-display-none");
  }
  userChoiceIcon.classList.add("user-loser-glow");
  setTimeout(() => {
    userChoiceIcon.classList.remove("user-loser-glow");
  }, 300);
};

// User's draw function
const draw = (userChoice, computerChoice) => {
  let userDisplay = "(User)".sup();
  let compDisplay = "(Comp)".sup();
  let userChoiceIcon = document.getElementById(userChoice);
  winnerContent.innerHTML = `
          ${userChoice.toUpperCase()} ${userDisplay} draws with ${computerChoice.toUpperCase()} ${compDisplay}. It's a draw! 😐
      `;
  userChoiceIcon.classList.add("draw-glow");
  setTimeout(() => {
    userChoiceIcon.classList.remove("draw-glow");
  }, 300);
};

// switch statement choices
const game = (userChoice) => {
  const compChoice = computerChoice();
  switch (userChoice + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, compChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, compChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, compChoice);
      break;
    default:
      console.log("Nothing to show");
  }
};
game();

const gameOver = () => {
  userScore = 0;
  computerScore = 0;
  userScore_p.innerHTML = userScore;
  compScore_p.innerHTML = computerScore;
  winnerContent.innerHTML = "First to 5 wins!";
  choices.classList.remove("choices-display-none");
  playAgainBtn.classList.add("play-btn");
};
gameOver();
