/* eslint-disable */
import "bootstrap";
import "./style.css";

function Numero() {
  var ArrNum = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "JOKER"
  ];

  let randomNum = Math.floor(Math.random() * ArrNum.length);
  if (ArrNum[randomNum] === "JOKER") {
    document.querySelector("#top").style.color = "white";
    document.querySelector("#bottom").style.color = "white";
    return "<img id='joker-image' style='width: 20rem; height: 27rem; margin: 0 ;' src='https://ih1.redbubble.net/image.356486953.0040/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg' alt='JOKER' />";
  } else {
    return ArrNum[randomNum];
  }
}

function crearPinta() {
  let ArrPinta = ["♥", "♠", "♦", "♣"];
  let randomPinta = Math.floor(Math.random() * 4);
  if (ArrPinta[randomPinta] === "♥" || ArrPinta[randomPinta] === "♦") {
    document.querySelector("#top").style.color = "red";
    document.querySelector("#bottom").style.color = "red";
  }

  return ArrPinta[randomPinta];
}

window.onload = function() {
  document.querySelector("#center").innerHTML = Numero();
  const pinta = crearPinta();
  const joker = Numero();
  if (pinta === "♥" || pinta === "♦") {
    document.querySelector("#center").style.color = "red";
  }
  document.querySelector("#top").innerHTML = pinta;
  document.querySelector("#bottom").innerHTML = pinta;
  if (joker === "JOKER") {
    document.querySelector("#top").style.color = "white";
    document.querySelector("#bottom").style.color = "white";
    document
      .querySelector("#top")
      .style.setProperty("color", "white", "important");
    document
      .querySelector("#bottom")
      .style.setProperty("color", "white", "important");
  }
};

function generarCarta() {
  document.querySelector("#center").innerHTML = Numero();
  const pinta = crearPinta();

  if (pinta === "♥" || pinta === "♦") {
    document.querySelector("#center").style.color = "red";
  } else {
    document.querySelector("#center").style.color = "black";
    document.querySelector("#top").style.color = "black";
    document.querySelector("#bottom").style.color = "black";
  }

  document.querySelector("#top").innerHTML = pinta;
  document.querySelector("#bottom").innerHTML = pinta;
}

//para crear el botón
const buttonContainer = document.createElement("div");
buttonContainer.style.textAlign = "center";

const button = document.createElement("button");
button.innerHTML = "Give me a new card!";
button.addEventListener("click", generarCarta);

buttonContainer.appendChild(button);
document.body.appendChild(buttonContainer);
