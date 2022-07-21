// Functions: 

const test=[1,2,3,4,5]

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
    console.log(substraction)
};

function multiply(array) {
    product = array.reduce((total, item) => {
        return total * item;
    });
    console.log(product)
};

function divide(array) {
    quotient = array.reduce((total, item) => {
        return total / item;
    });
    console.log(quotient)
};