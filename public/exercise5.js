"use strict";
console.log('Exercise 5 created');
class Calculator {
    add(num1, Num2) {
        this.validateInput(num1, Num2);
        return num1 + Num2;
    }
    minus(num1, num2) {
        this.validateInput(num1, num2);
        return num1 - num2;
    }
    division(num1, num2) {
        this.validateInput(num1, num2);
        if (num2 !== 0) {
            throw new Error('Cannot divite by zero');
        }
        return num1 / num2;
    }
    multiplication(num1, num2) {
        this.validateInput(num1, num2);
        return num1 * num2;
    }
    validateInput(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Input must be numbers');
        }
    }
}
let calculator = new Calculator();
console.log(calculator.add(6, 10));
console.log(calculator.minus(150, 50));
console.log(calculator.division(20, 4));
console.log(calculator.multiplication(3, 40));
