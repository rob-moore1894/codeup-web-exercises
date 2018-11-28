"use strict";

//Multiplication Table
function showMultiplicationTable(input) {
    for (var i = 1; i <= 10; i++) {
        console.log(input + " x " + i + " = " + input * i);
    }
}

showMultiplicationTable(7);

//Even or Odd
function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

for (var i = 0; i < 10; i++) {
    var rand = Math.floor(Math.random() * 180) + 20;
    if (isEven(rand) === true) {
        console.log(rand + " is an even number.");
    } else {
        console.log(rand + " is an odd number.");
    }
}

//Cascading numbers
function generatePyramid() {
    for (var i = 1; i < 10; i++) {
        var x = "";
        for (var j = 1; j <= i; j++) {
            x = x + i;
        }
        console.log(x);
    }
}

generatePyramid();

//Decreasing 100 to 5 by 5
for (var y = 100; y >= 5; y--){
    if (y % 5 !== 0) {
        continue;
    }
    console.log(y);
}

