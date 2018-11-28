"use strict";

//Multiplication Table
var randomNumber = Math.floor(Math.random() * 10) + 1;

function showMultiplicationTable(input) {
    for (var i = 1; i <= 10; i++) {
        console.log(input + " x " + i + " = " + input * i);
    }
}

showMultiplicationTable(randomNumber);

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
// for (var x = 1; x < 10; x++){
//     console.log(x);
// }

//Decreasing 100 to 5 by 5
for (var y = 100; y >= 5; y--){
    if (y % 5 !== 0) {
        continue;
    }
    console.log(y);
}

