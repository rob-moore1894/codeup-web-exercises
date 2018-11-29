"use strict";

function isValidEntry(input) {
    return (!isNaN(parseFloat(input))) && input % 2 !== 0 && input < 50 && input > 0;
}

var oddInput;

function showConfirm() {
    do{
        oddInput = (prompt("Please enter an odd number between 1 and 50: "));
        if (isValidEntry(oddInput) === true)
            break;
    } while (true);
}

function skipUserInput() {
    for (var i = 1; i <= 50; i +=2){
        if (i === oddInput) {
            console.log("Yikes! Skipping number: " + oddInput);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}

showConfirm();
skipUserInput();

//Walkthrough Solution

// function isNumeric(num) {
//     return (!isNaN(parseFloat(num)));
// }
//
// var userInput;
//
// do {
//     userInput = prompt("Please enter an odd number between 1 and 50: ");
//     userInput = parseFloat(userInput);
//     if (isNumeric(userInput)
//         && userInput % 2 === 1
//         && userInput >= 1
//         && userInput <= 50) break;
// } while (true);
//
// for (var i = 1; i <= 50; i+=2){
//     if (i === userInput) {
//         console.log("Yikes! Skipping number: " + userInput);
//         continue;
//     }
//     console.log("Here is an odd number: " + i);
//
// }