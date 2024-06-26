"use strict";
let sum = 0;
let calSum = (num1, num2) => {
    sum = num1 + num2;
    return sum;
};
console.log('Sum of the numbers is ' + calSum(5, 35));
function fixedNum() {
    let num = 50;
    return num;
}
console.log(fixedNum());
let UpperCaseOrLowerCase = (StringValue, boolOrNot) => {
    if (boolOrNot === true) {
        return StringValue.toUpperCase();
    }
    else {
        return StringValue.toLowerCase();
    }
};
console.log(UpperCaseOrLowerCase('Hello There', true));
