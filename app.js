"use strict";

var result;
var argumentsString = process.argv[2];
var mathOperators = {
    '+': function(x, y) {return x + y},
    '-': function(x, y) {return x - y},
    '*': function(x, y) {return x * y},
    '/': function(x, y) {return x / y}
};

var polandNotationString = '';

function polandNotation (inputString) {
    var outputString = '';
    var operationStack = [];
    var i = 0;

    for (; i < inputString.length; i++) {
        var j = inputString.charAt(i);
        if (+j) {
            outputString = outputString + j;
        } else {
            if (j == '*' || j == '/') {
                outputString = outputString + inputString.charAt(i+1);
                outputString = outputString + j;
                i++;
            } else {
                operationStack = operationStack + j;
            }
        }
    }
    outputString = outputString + operationStack;
    return outputString;
}


function evaluate(expr) {
    expr = expr.replace (/,/g,'.');
    var stack = [];

    expr.split('').forEach(function (token) {
        if (token in mathOperators) {
            var y = stack.pop();
            var x = stack.pop();
            stack.push(mathOperators[token](x, y));
        } else {
            stack.push(parseFloat(token));
        }
    });

    return stack.pop();
}

polandNotationString = polandNotation (argumentsString);

result = evaluate(polandNotationString);
//result = evaluate(argumentsString);

console.log('Результат выражения ' + result);

/