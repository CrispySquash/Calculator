//Operator Functions
function Operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            let sum = Add(num1, num2);
            return sum;
            break;
        case '-':
            let difference = Subtract(num1, num2);
            return difference;
            break;
        case '*':
            let product = Multiply(num1, num2);
            return product;
            break;
        case '/':
            let quotient = Divide(num1, num2);
            return quotient;
            break;
        default:
            console.log('Not an operator');
    }
}

function Add(x, y) {
    let sum = 0;
    sum = x + y;
    return sum;
}
function Subtract(x, y) {
    let difference = 0;
    difference = x - y;
    return difference;
}
function Multiply(x, y) {
    let product = 0;
    product = x * y;
    return product;
}
function Divide(x, y) {
    let quotient = 0;
    quotient = x / y;
    return quotient;
}

//setting up display and calculation functions
let display = document.getElementById('display');
let currentDisplay = '';
let numValue = '';
let operatorValue = '';

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

//saves values for calculation
function saveValues(clicked) {
    operatorValue = this.id;
    numValue = currentDisplay;
    
}

//displays numbers and stores value for calculation
function displayNumber(clicked) {
    if(this.id == 0 && currentDisplay == 0){
        return;
    }
    currentDisplay += this.id;
    display.innerHTML = currentDisplay;
}




