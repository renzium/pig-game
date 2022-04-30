// 'use strict';


let scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
const player1 =  document.querySelector("#score--0")
const player2 =  document.querySelector("#score--1")


const resetBtn = document.querySelector(".btn--new")
const rollBtn = document.querySelector(".btn--roll")
const holdBtn = document.querySelector(".btn--hold")

const diceImg = document.querySelector(".dice");



player1.textContent = scores[0]
player2.textContent = scores[1]

function reset() {
  scores = [0, 0]
  player1.textContent = scores[0];
  player2.textContent = scores[1];
    document.querySelector('#current--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  activePlayer = 0;
  diceImg.classList.add('hide');

}

function roll(){
  dice = Math.floor(Math.random() * 6) + 1;
  roundScore = dice !== 1 ? dice : 0;

  document.querySelector("#current--" + activePlayer).textContent = roundScore;
 ( activePlayer === 0)
    ? (document.querySelector('#current--1').textContent = 0)
    : (document.querySelector('#current--0').textContent = 0);

  diceImg.setAttribute("src", "dice-" + dice + ".png");
 diceImg.classList.remove("hide")
  if (dice === 1) {
    activePlayer = activePlayer === 0 ? 1 : 0;
  diceImg.classList.toggle("hide")
  }
}

function hold(){
  scores[activePlayer] += roundScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  diceImg.classList.add("hide")
  
player1.textContent = scores[0];
  player2.textContent = scores[1];
  document.querySelector('#current--1').textContent = 0
  document.querySelector('#current--0').textContent = 0
}


rollBtn.addEventListener("click", roll);
holdBtn.addEventListener("click", hold);
resetBtn.addEventListener("click", reset);


