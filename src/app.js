/* eslint-disable */
import "bootstrap";
import "./style.css";

function Numero() {
  let ArrNum = [
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
    "K"
  ];
  let randomNum = Math.floor(Math.random() * 13);
  return ArrNum[randomNum];
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
  if (pinta === "♥" || pinta === "♦") {
    document.querySelector("#center").style.color = "red";
  }
  document.querySelector("#top").innerHTML = pinta;
  document.querySelector("#bottom").innerHTML = pinta;
};
