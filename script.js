const numberButtons = document.querySelectorAll('.js-numbers')
const mathSignsButtons = document.querySelectorAll('.js-math--symbols')
const equalsButton = document.querySelector('.js-equals')
const resetButton = document.querySelector('.js-reset')
const mathSign = document.querySelector('.js-mathSign')
const previousNumber = document.querySelector('.js-previousNumber')
const currentNumber = document.querySelector('.js-currentNumber')

let result = '';
function numbers() {
    currentNumber.innerHTML += this.textContent;
}

function signs() {
    if (currentNumber.innerHTML === "" && this.textContent === "-") {
        currentNumber.innerHTML = "-";
        return;
    }
    else if (currentNumber.innerHTML === "") {
        return;
    }
    if (mathSign.innerHTML !== "") {
        displayResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = "";
}



function displayResult() {
    if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") {
        return;
    } else {
        let a = Number(currentNumber.innerHTML);
        let b = Number(previousNumber.innerHTML);
        let operator = mathSign.innerHTML;


        switch(operator) {
            case '+':
            result = a + b;
            break;
            case '-':
            result = b - a;
            break;
            case '*':
            result = a * b;
            break;
            case '/':
            result = b / a;
            break;
        }
    }
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function resetAll() {
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}





resetButton.addEventListener("click", resetAll);
equalsButton.addEventListener("click", displayResult);
mathSignsButtons.forEach((signsButons) => signsButons.addEventListener("click", signs))
numberButtons.forEach((number) => number.addEventListener("click", numbers))
