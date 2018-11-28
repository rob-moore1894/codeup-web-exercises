"use strict";

function isValidEntry(input) {
    return (!isNaN(parseFloat(input))) && input % 2 !== 0 && input < 50 && input > 0;
}

var max_count = 5;
var oddInput;

function showConfirm() {
    var oddInput = (prompt("Please enter an odd number between 1 and 50: "));
    switch (isValidEntry(oddInput) === true) {
        case true: alert("Number to skip is: " + oddInput);
        break;
        case false:
        // to limit user for limited count
        if (--max_count > 0)
            showConfirm()
    }
}
showConfirm();



