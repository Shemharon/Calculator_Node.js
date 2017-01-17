"use strict";

var j = [];
var arg1;
var arg2;
var mathCommandNumber;
var result;
var minPosition = Infinity;
var originArgument = process.argv[2];

function findArguments() {
    j[0] = originArgument.indexOf("/");
    j[1] = originArgument.indexOf("*");
    j[2] = originArgument.indexOf("-");
    j[3] = originArgument.indexOf("+");

    for (var i = 0; i < j.length; i++) { //проверяем, какая команда идет раньше
        if (j[i] < minPosition && j[i] > -1) {
            minPosition = j[i];
            mathCommandNumber = i;
        }
    }

    arg1 = +originArgument.slice(0, minPosition);
    arg2 = originArgument.slice(minPosition + 1);
    arg2 = parseFloat(arg2);

    result = (mathCommandNumber == 0) ? arg1 / arg2 :
        (mathCommandNumber == 1) ? arg1 * arg2 :
            (mathCommandNumber == 2) ? arg1 - arg2 :
                (mathCommandNumber == 3) ? arg1 + arg2 : false;


}

findArguments();


console.log('originArgument: ' + originArgument);
console.log('arg1: ' + arg1);
console.log('arg2: ' + arg2);
console.log('j[0]: ' + j[0]);
console.log('j[1]: ' + j[1]);
console.log('j[2]: ' + j[2]);
console.log('j[3]: ' + j[3]);
console.log('minPosition: ' + minPosition);
console.log('mathCommandNumber: ' + mathCommandNumber);
console.log('result: ' + result);