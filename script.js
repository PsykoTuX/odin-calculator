
let result = '';
let operator = '';
let displayValue = '';
let storedValue = '';
// Ask for the type of operation 
//operator = prompt("Choose operator: 'addition', 'subtraction', 'multiplication' or 'division'");

function operate(operator, aNumber, bNumber) {
    aNumber= parseFloat(aNumber);
    bNumber=parseFloat(bNumber);
    
    let array = [aNumber, bNumber];
    console.log(array);
        //Actual operations 

        
    // Basic math operators functions: 
    function add(array) { 
        sum = array.reduce((total, item) => {
           return total + item;
        });
        console.log(sum);
        return sum;
    };

    function subtract(array) {
        difference = array.reduce((total, item) => {
            return total - item;
        });
        console.log(difference);
        return difference;
    };
    
    function multiply(array) {
        product = array.reduce((total, item) => {
            return total * item;
        });
        console.log(product);
        return product;
    };
    
    function divide(array) {
        quotient = array.reduce((total, item) => {
            return total / item;
        });
        console.log(quotient);
        return quotient;
    };

    if (operator=="addition") {
        result=add(array);
        return sum;
        } else if (operator=="subtraction") {
            result=subtract(array);
            return difference;
        } else if (operator=="multiplication") {
            result==multiply(array);
            return product;
        } else if (operator=="division") {
            result==divide(array);
            return quotient;
        } ;
}

// DOM manipulation

const buttons = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');
const content = document.createElement('p');
screen.appendChild(content);
const eraseButton = document.getElementById('clear-button');
const equalButton = document.getElementById('equal');


function addContent(input) {
    content.textContent=+ input;
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        addContent(button.textContent);
        displayValue += button.textContent;
        content.textContent = displayValue;
    });
});

operators.forEach((item) => {
    item.addEventListener('click', () => {
        operator=item.id;
        console.log(storedValue);

        if (storedValue == '') {
            storedValue = displayValue;
        }


        
        displayValue = ''
    })
    });
    


function calculusResult() {
    console.log(operator);
    console.log(storedValue);
    console.log(displayValue);
    
    storedValue = parseFloat(storedValue);
    displayValue = parseFloat (displayValue);
    
    result=operate(operator, storedValue, displayValue);
    addContent(result);
    storedValue = result;
    console.log(result);
    console.log(storedValue);
    result = ''

}

//Result button 

equalButton.addEventListener('click', () => {
    calculusResult()
});


//Clear button 
function reset() {
content.textContent='';
displayValue='';
}

eraseButton.addEventListener('click', () => {
    displayValue = '';
    storedValue = '';
    reset();
    
    }
    )


//Create the functions that populate the display when you click the number buttons. 
//You should be storing the ‘display value’ in a variable somewhere for use in the next step.

