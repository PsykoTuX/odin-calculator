
let result = '';
let operator = '';
let displayValue = '';

// Ask for the type of operation 
//operator = prompt("Choose operator: 'addition', 'subtraction', 'multiplication' or 'division'");

function operate(operator, aNumber, bNumber) {
    // Basic math operators functions: 
    function add(array) { 
        sum = array.reduce((total, item) => {
           return total + item;
        });
        console.log(sum)
    };

    function substract(array) {
        difference = array.reduce((total, item) => {
            return total - item;
        });
        console.log(difference);
    };
    
    function multiply(array) {
        product = array.reduce((total, item) => {
            return total * item;
        });
        console.log(product);
    };
    
    function divide(array) {
        quotient = array.reduce((total, item) => {
            return total / item;
        });
        console.log(quotient);
    };

    //Actual operation 
    let array = [aNumber, bNumber];
    if (operator=="addition") {
        result=add(array);
        } else if (operator=="subtraction") {
            result=substract(array);
        } else if (operator=="multiplication") {
            result==multiply(array);
        } else if (operator=="division") {
            result==divide(array);    
        } else {
            console.log("Please enter a valid operation: 'addition', 'subtraction',\
                'multiplication' or 'division'");
            operate();
        }
}

// DOM manipulation

const buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen')
const content = document.createElement('p')
screen.appendChild(content);
const eraseButton = document.getElementById('clear-button');

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

//Result button 




//Clear button 
function reset() {
content.textContent='';
}

eraseButton.addEventListener('click', () => {
    displayValue = '';
    reset();
    
    }
    )


//Create the functions that populate the display when you click the number buttons. 
//You should be storing the ‘display value’ in a variable somewhere for use in the next step.

