(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = [
                    "Rob",
                    "Laurelynn",
                    "Averie",
                    "Blake"
                ];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("+++ array.length method +++");
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("+++ Individual log statements +++");
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    console.log("+++ For Loop +++");
    for(var i = 0; i < names.length; i++){
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("+++ For Each +++");
    names.forEach(function(name){
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    console.log("+++ First, Second, and Last Functions +++");
    function first(array){
        return (array[0]);
    }

    function second(array){
        return (array[1]);
    }

    function last(array){
        return (array[array.length - 1]);
    }

    console.log(first(names));
    console.log(second(names));
    console.log(last(names));

})();

// More practice w/ loops and arrays
//
// Exercise 1:
// Write a function named oneHundred() that returns an array with integers starting at 1 and ending at 100;

function oneHundred() {
    var nums = [];
    for (var i = 1; i <= 100; i++) {
        nums.push(i);
    }
    return nums;
}

console.log(oneHundred());

// Exercise 2:
// Write a function named reverse() that takes in an array and returns a reversed copy of the provided array. This function should not alter the orignal array sent into it.

//long version//
console.log("+++ Long Version +++");
function reverse(array) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverse(oneHundred()));

// Exercise 3:
// Write a function named sumAll() that takes in an array of numbers and returns the sum of all the numbers. Use sumAll() on oneHundred() to get the sum of all numbers 1 + 2 + 3... + 100

function sumAll(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += parseFloat(array[i]);
        // sum = array.length*(array.length + 1) / 2;
    }
    return sum;
}

console.log(sumAll(oneHundred()));
//
// Exercise 4:
// Write a function named multiplyAll() that takes in an array of numbers and returns the product of all numbers. Use multiplyAll on oneOnehundred() to get the product of 1*2*3*...100

function multiplyAll(array){
    var product = 1;
    for (var i = 1; i < array.length; i++) {
        product *= parseFloat(array[i]);
    }
    return product;
}

console.log(multiplyAll(oneHundred()));