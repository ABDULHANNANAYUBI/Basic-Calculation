"use strict";

const message = "";
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let firstResult = document.querySelector(".result-1");
let secondResult = document.querySelector(".result-2");

const arrayList = [];
const secondArrayList = [];
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btn-enter").addEventListener("click", function () {
  let firstNumber = Number(document.querySelector(".input-1").value);
  const secondNumber = Number(document.querySelector(".input-2").value);
  const thirdNumber = Number(document.querySelector(".input-3").value);
  if (
    firstNumber > 0 &&
    secondNumber > 0 &&
    thirdNumber > 0 &&
    firstNumber < secondNumber
  ) {
    first.textContent = firstNumber;
    second.textContent = secondNumber;
    third.textContent = thirdNumber;

    document.querySelector(".btn-enter").style.backgroundColor = "green";
    let caluclate = (secondNumber - firstNumber) / (thirdNumber - 1);
    arrayList.push(firstNumber);
    for (let index = 1; index < thirdNumber; index++) {
      firstNumber = firstNumber + caluclate;
      arrayList.push(firstNumber.toFixed(2));
    }
    for (let index = 0; index < thirdNumber; index++) {
      secondArrayList.push(secondNumber + index);
    }
    firstResult.textContent = arrayList;
    secondResult.textContent = secondArrayList;
    console.log(arrayList);
    console.log(secondArrayList);
  } else {
    alert("You entered a number smaller than 0 (Zero)");
    document.querySelector(".btn-enter").style.backgroundColor = "red";
    document.querySelector(".input-1").value = "";
    document.querySelector(".input-2").value = "";
    document.querySelector(".input-3").value = "";
    firstResult.textContent = "";
    secondResult.textContent = "";
    first.textContent = "";
    second.textContent = "";
    third.textContent = "";
  }
});
