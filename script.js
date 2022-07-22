
let result = null;
let operator = null;

// Ask for the type of operation 
operator = prompt("Choose operator: 'addition', 'subtraction', 'multiplication' or 'division'");

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
    console.log(result);
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