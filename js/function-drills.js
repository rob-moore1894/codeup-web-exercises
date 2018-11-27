function isOdd(number) {
    return number % 2 != 0;
}

console.log(isOdd(1));
console.log(isOdd(2));

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(1));
console.log(isEven(2));


function identity(input) {
    return input;
}

console.log(identity("Rob"));


function isFive(input) {
    return input == 5;
}

console.log(isFive(5));
console.log(isFive("5"));
console.log(isFive(3));


function addFive(input) {
    return input + 5;
}

console.log(addFive(-5));


function isMultipleOfFive(input) {
    return input % 5 === 0;
}

console.log(isMultipleOfFive(15));
console.log(isMultipleOfFive(10));

function isThree(input) {
    return input == 3;
}

console.log(isThree(3));
console.log(isThree("3"));
console.log(isThree(5));

function isMultipleOfThree(input) {
    return input % 3 === 0;
}

console.log(isMultipleOfThree(3));
console.log(isMultipleOfThree(15));
console.log(isMultipleOfThree(10));


function isMultipleOfThreeAndFive(input) {
    return isMultipleOfThree(input) && isMultipleOfFive(input);
}

console.log(isMultipleOfThreeAndFive(15));
console.log(isMultipleOfThreeAndFive(10));

function isMultipleOf(target, n) {
    return target % n == 0;
}

console.log(isMultipleOf(21, 3));
console.log(isMultipleOf(19, 3));

function isTrue(boolean) {
    return boolean === true;
}

console.log(isTrue(false));
console.log(isTrue(true));

function isFalse(boolean) {
    return boolean === false;
}

console.log(isFalse(false));
console.log(isFalse(true));

function isTruthy(input) { //remember that values other than true will behave like true
    return input == true;
}

console.log(isTruthy(5));
console.log(isTruthy(false));

// Make a function isFalsy(input), remember that values other than false behave like false


function isVowel(letter){
    var letter = letter.toLowerCase();
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
        return true;
    } else {
        return false;
    }
}

console.log(isVowel("A"));
console.log(isVowel("B"));

function isConsonant(letter){
    var letter = letter.toLowerCase();
    if (!letter === isVowel(letter)){
        return true;
    } else {
        return false;
    }
}

console.log(isConsonant("A"));
console.log(isConsonant("B"));

function isCapital(letter){
    return letter === letter.toUpperCase();
}

console.log(isCapital("A"));
console.log(isCapital("b"));

function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}

console.log(isLowerCase("A"));
console.log(isLowerCase("b"));

function hasLowerCase(string) {
    return (/[a-z]/.test(string));
}

console.log(hasLowerCase("HeLLO"));
console.log(hasLowerCase("HELLO"));
// Make a function isSpace(letter) that returns if a character is a space character

function isSpace(letter) {
    return (/{[  ]/.test(letter));
}

console.log(isSpace(" "));
console.log(isSpace("3"));

function isZero(number) {
    return number === 0;
}

console.log(isZero(0));
console.log(isZero(1));

function notZero(input) {
    return input !== 0;
}

console.log(notZero(0));
console.log(notZero(1));

function lowerCase(string) {
    return string.toLowerCase();
}

console.log(lowerCase("HELLO"));
console.log(lowerCase("Yo Mama!"));

function double(n) {
    return parseFloat(n) * 2;
}

console.log(double(5));
console.log(double("3"));
console.log(double("Hello"));

function triple(n) {
    return parseFloat(n) * 3;
}

console.log(triple(2));
console.log(triple(-4));
console.log(triple("Hello"));

function quadruple(n) {
    return parseFloat(n) * 4;
}

console.log(quadruple(2));
console.log(quadruple(-4));
console.log(quadruple("Hello"));

function half(n) {
    return parseFloat(n) / 2;
}

console.log(half(2));
console.log(half(-4));
console.log(half("Hello"));

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

console.log(subtract(5,2));
console.log(subtract(-4, 4));
console.log(subtract("Hello", "world"));

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

console.log(multiply(5,2));
console.log(multiply(-4, 4));
console.log(multiply("Hello", "world"));

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

console.log(divide(5,2));
console.log(divide(-4, 4));
console.log(divide("Hello", "world"));

function remainder(a, b) {
    return parseFloat(a) % parseFloat(b);
}

console.log(remainder(5,2));
console.log(remainder(-4, 4));
console.log(remainder("Hello", "world"));

function modulo(a, b) {
    var remain = remainder(a,b);
    return remain;
}

console.log(modulo(5,2));
console.log(modulo(-4, 4));
console.log(modulo("Hello", "world"));

function cube(n) {
    return parseFloat(n) * parseFloat(n) * parseFloat(n);
}

console.log(cube(5));
console.log(cube(-4));
console.log(cube("Hello"));

function squareRoot(n){
    return Math.sqrt(n);
}

console.log(squareRoot(25));
console.log(squareRoot(-16));
console.log(squareRoot("Hello"));


function cubeRoot(n){
    return Math.cbrt(n);
}

console.log(cubeRoot(27));
console.log(cubeRoot(212));
console.log(cubeRoot("Hello"));

// Write a function invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function degreesToRadians(number)
// Write a function radiansToDegrees(number)
// Make a function isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named trim(string) that removes empty spaces before and after the input.
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
//     Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
