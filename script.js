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

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');
const content = document.createElement('p');
screen.appendChild(content);
const eraseButton = document.getElementById('clear-button');
const equalButton = document.getElementById('equal');
const backspaceButton = document.getElementById('backspace-button');


function addContent(input) {
    content.textContent=+ input;
}

// we use the .forEach method to iterate through each button
digits.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        addContent(button.textContent);
        displayValue += button.textContent;
        content.textContent = displayValue;
    });
});

operators.forEach((item) => {
    item.addEventListener('click', () => {
        if ((storedValue !='') && (displayValue !='')) {
            calculusResult();
        }
        operator=item.id;
        console.log(storedValue);

        if (storedValue == '') {
            storedValue = displayValue;
        }

       
        
        displayValue = ''
    })
    });
    


function calculusResult() {
    if (storedValue == '' && displayValue == "") {
        addContent(0);
        return 0
        ;
    }
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
    displayValue = '';

}

//Result button 

equalButton.addEventListener('click', () => {
    calculusResult()
});

//Backspace button

backspaceButton.addEventListener('click', () => {
    displayValue=displayValue.slice(0,-1);
    addContent(displayValue);
})

//Clear button 
function reset() {
content.textContent='';
displayValue='';
storedValue=''
result='';
}

eraseButton.addEventListener('click', () => {
    displayValue = '';
    storedValue = '';
    reset();
    }
    )