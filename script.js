// This game is made/developed to learn Event Bubbling in JavaScript

let timer = 60;
let score = 0;
let randomNumberHit = "";
function makeBubble() {
  let singleBubble = "";
  for (let i = 0; i < 160; i++) {
    var randomNum = Math.floor(Math.random() * 10);
    singleBubble += `<div class="bubble">${randomNum}</div>`;
  }

  document.querySelector("#pannel-btm-cont").innerHTML = singleBubble;
}

function timerFunc() {
  let runTime = setInterval(function () {
    if (timer > 0) {
      timer--;
      //   console.log(timer)
      document.querySelector("#timer-interval").innerHTML = timer;
    } else {
      //   console.log("Time end");
      clearInterval(runTime);
      document.querySelector(
        "#pannel-btm-cont"
      ).innerHTML = `<div class="game-end-cont">
        <h1>Game Over</h1>
        <h2>Congratulations Your Score is ${score}😎</h2>
        <button class="restart_btn">Restart Now</button>
      </div>`;

      let restartBtn = document.querySelector(".restart_btn");
      restartBtn.addEventListener("click",function(){
        location.reload();
      })
    }
  }, 1000);
}


function hitRandomNum() {
  randomNumberHit = Math.floor(Math.random() * 10);
  document.querySelector("#hit-number").innerHTML = randomNumberHit;
}

function scoreCalculation() {
  score += 10;
  document.querySelector("#current-score").innerHTML = score;
}

function checkTheNumber() {
  document
    .querySelector("#pannel-btm-cont")
    .addEventListener("click", function (details) {
      let clickedNumber = +details.target.textContent;
      if (randomNumberHit === clickedNumber) {
        scoreCalculation();
        makeBubble();
        hitRandomNum();
      } 
    });
}

function restartTheGame(){
   let rsBtn = document.querySelector(".restart-btn");
   console.log(rsBtn,"Hello world")
}
// All function calls
makeBubble();
timerFunc();
hitRandomNum();
checkTheNumber();

// scoreCalculation();
