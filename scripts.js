//Operator Functions
function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            let sum = add(num1, num2);
            return sum;
            break;
        case '-':
            let difference = subtract(num1, num2);
            return difference;
            break;
        case '*':
            let product = multiply(num1, num2);
            return product;
            break;
        case '/':
            let quotient = divide(num1, num2);
            return quotient;
            break;
        default:
            console.log('Not an operator');
    }
}

function add(x, y) {
    let sum = 0;
    sum = +x + +y;
    return sum;
}
function subtract(x, y) {
    let difference = 0;
    difference = x - y;
    return difference;
}
function multiply(x, y) {
    let product = 0;
    product = x * y;
    return product;
}
function divide(x, y) {
    let quotient = 0;
    quotient = x / y;
    return quotient;
}

//setting up display and calculation functions
let display = document.getElementById('display');
let displayValue = '';
let currentDisplay = '';
let numValue = null;
let numValue2 = null;
let operatorValue = null;

document.getElementById('0').onclick = displayNumber;
document.getElementById('1').onclick = displayNumber;
document.getElementById('2').onclick = displayNumber;
document.getElementById('3').onclick = displayNumber;
document.getElementById('4').onclick = displayNumber;
document.getElementById('5').onclick = displayNumber;
document.getElementById('6').onclick = displayNumber;
document.getElementById('7').onclick = displayNumber;
document.getElementById('8').onclick = displayNumber;
document.getElementById('9').onclick = displayNumber;
document.getElementById('+').onclick = saveValues;
document.getElementById('-').onclick = saveValues;
document.getElementById('*').onclick = saveValues;
document.getElementById('/').onclick = saveValues;
document.getElementById('=').onclick = callOperate;
document.getElementById('clear').onclick = clearCalc;

//clear calculator function
function clearCalc() {
    display.innerHTML = '';
    displayValue = '';
    currentDisplay = '';
    numValue = null;
    numValue2 = null;
    operatorValue = null;
}

//sets default values without changing calc display
function setDefaults() {
    numValue = null;
    numValue2 = null;
    operatorValue = null;
    displayValue = '';
}
//function that calls on the operate function when equals is selected
function callOperate() {
    if(numValue2 == 0){
        alert("Please do not divide by zero");
        clearCalc();
        return;
    }
    if (numValue !== null && numValue2 !== null && operatorValue !== null) {
        display.innerHTML = '';
        display.innerHTML = Math.round((operate(numValue, numValue2, operatorValue) + Number.EPSILON) * 100) / 100;
    } else { return; }

    setDefaults();
}

//saves values for calculation when an operator is selected
function saveValues(clicked) {
    if (numValue !== null) {
        callOperate();
    }
    operatorValue = this.id;
    numValue = display.innerHTML;
    displayValue = '';
}

//displays numbers and stores value for calculation
function displayNumber(clicked) {
    displayValue += this.id;
    display.innerHTML = displayValue;

    if(numValue !== null){
        numValue2 = displayValue;
    }
}




