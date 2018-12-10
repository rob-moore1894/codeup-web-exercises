"use strict";

// Function named getHighest() that takes in an array of numbers and returns the highest number
// My answer
function getHighest(array) {
    return Math.max.apply(null, array);
}

console.log(getHighest([3, 2, 1]));


// Function named getLowest() that takes in an array of numbers and returns the lowest number
// My answer
function getLowest(array) {
    return Math.min.apply(null, array);
}

console.log(getLowest([1, 2, -11]));


// Function sumAllNumbers() that takes in a two-dimensional array of numbers and returns the sum of all numbers added together


var arrayOfNumbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


console.log(sumAllNumbers(arrayOfNumbers));
console.log(sumAllNumbers([[0, 1, 2, 0],[5, 0],[6, 7, 8]]));