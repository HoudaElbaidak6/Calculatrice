let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");
let clearBtn = document.querySelector(".clear");
let toggleBtn = document.querySelector(".toggle>i");
let body = document.querySelector("body");

let firstValue = 0;
let isDecimal = false;
let operatorSign = "";
let waitforsecondValue = false;

function clear() {
  firstValue = 0;
  isDecimal = false;
  operatorSign = "";
  waitforsecondValue = false;
  screen.textContent = firstValue;
}

clearBtn.addEventListener("click", clear);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("digit")) {
      let content = button.value;
      if (waitforsecondValue) {
        screen.textContent = "";
        waitforsecondValue = false;
      }

      if (screen.textContent == "0") {
        screen.textContent = content;
        console.log("clicked");
      } else {
        screen.textContent += content;
        console.log("clicked");
      }
    } else if (button.classList.contains("decimal")) {
      if (isDecimal == false) {
        screen.textContent += ".";
        isDecimal = true;
      }
    } else if (button.classList.contains("operator")) {
      firstValue = Number(screen.textContent);
      operatorSign = button.value;
      isDecimal = false;
      waitforsecondValue = true;
    } else if (button.classList.contains("egal")) {
      let currentValue = Number(screen.textContent);
      console.log(firstValue, operatorSign, currentValue);
      // screen.textContent = `${firstValue} ${operatorSign} ${currentValue}`;
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

toggleBtn.addEventListener("click", function () {
  console.log("clicked");
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    toggleBtn.classList.replace("fa-moon", "fa-sun");
    console.log("changed");
  } else {
    toggleBtn.classList.replace("fa-sun", "fa-moon");
  }
});

// <i class="bi bi-brightness-high"></i>
//
// <i class="fa-solid fa-sun"></i>
