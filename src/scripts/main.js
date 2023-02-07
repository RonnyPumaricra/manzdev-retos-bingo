import "./components/BingoCage";

import "./components/BingoCard";
import "./components/NumbersWrapper";
import "./components/BingoNumber";

import "./components/ChosenNumbersWrapper";

import "./components/ModalWrapper";

import { bothPlayers, NumbersPool } from "./helpers";
import confetti from "canvas-confetti";

// TO DO:
//  + Mover todo como funcionalidad del Bingo Cage
const CurrentPool = new NumbersPool(30);

function clickHandle() {
  const newNumber = CurrentPool.pullNumber();

  if (newNumber === null) {
    throw new Error("Todos los números fueron elegidos");
  }

  /* Inyectar el la nueva lista en el DOM */
  const stringified = CurrentPool.numbersList.join(" ");

  const allCards = document.querySelectorAll("bingo-card");
  const numbersWrapper = document.querySelector("chosen-numbers-wrapper");

  numbersWrapper.setAttribute("chosen-numbers", stringified);
  for (const Card of allCards) {
    Card.setAttribute("chosen-numbers", stringified);
  }

  const { pc, player } = bothPlayers;
  if (player + pc === "00") return;
  disableBingo(player + pc);
}

function disableBingo(result) {
  BingoCage.removeEventListener("click", clickHandle);

  const makeModal = title => /* html */`
    <h2 slot="title">${title}</h2>
  `;

  const modal = document.createElement("modal-wrapper");

  switch (result) {
    case "10":
      showConfeti();
      modal.innerHTML = makeModal("Ganaste!");
      break;
    case "01":
      // console.log("Uy, perdiste!");
      modal.innerHTML = makeModal("Uy, perdiste!");
      break;
    case "11":
      console.log("Empatados!");
      modal.innerHTML = makeModal("Empatados!");
      break;
    default:
      break;
  }
  document.body.appendChild(modal);
}

function showConfeti() {
  console.log("Ganaste!");
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}

const BingoCage = document.querySelector("bingo-cage");

BingoCage.addEventListener("click", clickHandle);
