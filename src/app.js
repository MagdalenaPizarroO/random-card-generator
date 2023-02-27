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
  if (ArrPinta === "♥" || ArrPinta === "♦") {
    document.querySelector("#top").style.color = "red";
    document.querySelector("#bottom").style.color = "red";
  }
  let randomPinta = Math.floor(Math.random() * 4);
  return ArrPinta[randomPinta];
}

window.onload = function() {
  document.querySelector("#center").innerHTML = Numero();
  document.querySelector("#top").innerHTML = crearPinta();
  document.querySelector("#bottom").innerHTML = crearPinta();
};
