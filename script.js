let buttons = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let clearBtn = document.querySelector(".Clear");

let firstValue = 0;
let isDecimal = false;
let waitforSecondvalue = false;
let operatorSign = "";

function resetCalcul() {
  let firstValue = 0;
  let isDecimal = false;
  let waitforSecondvalue = false;
  let operatorSign = "";
  screen.textContent = firstValue;
}

clearBtn.addEventListener("click", resetCalcul);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("digit")) {
      let content = button.value;

      if (waitforSecondvalue) {
        screen.textContent = "";
        waitforSecondvalue = false;
      }

      if (screen.textContent == "0") {
        screen.textContent = content;
      } else {
        screen.textContent += content;
      }
    } else if (button.classList.contains("decimal")) {
      if (isDecimal == false) {
        screen.textContent += ".";
        isDecimal = true;
      }
    } else if (button.classList.contains("operator")) {
      firstValue = Number(screen.textContent);
      operatorSign = button.value;
      waitforSecondvalue = true;
      isDecimal = false;
    } else if (button.classList.contains("egal")) {
      let currentValue = Number(screen.textContent);
      console.log(firstValue, operatorSign, currentValue);
      let res = 0;
      switch (operatorSign) {
        case "+":
          res = firstValue + currentValue;
          break;
        case "-":
          res = firstValue - currentValue;
          break;
        case "*":
          res = firstValue * currentValue;
          break;
        case "/":
          res = firstValue / currentValue;
          break;

        default:
          res = currentValue;
          break;
      }
      operatorSign = "";
      screen.textContent = res;
    }
  });
});
