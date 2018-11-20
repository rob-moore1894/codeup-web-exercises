"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var userAnswer = confirm("Wanna play a game?");
if (userAnswer === true) {
    var userInput = parseFloat(prompt("Please enter a number:"));
    isEven(userInput);
    addHundred(userInput);
    isPositive(userInput);
}

alert("Thanks for playing. Have a nice day, beautiful!");

function isEven() {
    if (userInput % 2 === 0) {
        alert(userInput + " is an even number!");
    } else {
        alert(userInput + " is an odd number!");
    }
}

function addHundred() {
    alert(userInput + " + 100 = " + (userInput + 100));
}

function isPositive(){
    if (userInput > 0) {
        alert(userInput + " is a positive number!");
    } else {
        alert(userInput + " is a negative number!");
    }
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

alert("Let's play a new game with colors");
var color = prompt("Enter a color of your choice: ");

function analyzeColor(input) {
    if (input === "red" || input === "RED" || input === "Red") {
        console.log("Red is the color of the sky on a really bad day!");
    } else if (input === "orange" || input === "ORANGE" || input === "Orange") {
        console.log("Orange is the color of the sun coming up.");
    } else if (input === "yellow" || input === "YELLOW" || input === "Yellow") {
        console.log("Yellow is the color of missing someone you love.");
    } else if (input === "green" || input === "GREEN" || input === "Green") {
        console.log("Green is the color of grass, unless it's brown.");
    } else if (input === "blue" || input === "BLUE" || input === "Blue") {
        console.log("Blue is my favorite color.");
    } else if (input === "indigo" || input === "INDIGO" || input === "Indigo") {
        console.log("Why did you pick indigo?");
    } else if (input === "violet" || input === "VIOLET" || input === "Violet") {
        console.log("Violet? Or did you mean Violent?")
    } else {
        console.log("Ain't nobody got time for " + input + "!");
    }
}

analyzeColor(color);


alert("Now I'm going to pick a random color. Watch the console log");
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log("Random color chosen: " + randomColor);
analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

alert("I'm going to do this again, I changed something that you can't see. Trust me ;-)");

function analyzeColor2 (input) {
    input = input.toLowerCase();
    switch (input) {
        case "red":
            alert("Red is the color of the sky on a really bad day!");
            break;
        case "orange":
            alert("Orange is the color of the sun coming up.");
            break;
        case "yellow":
            alert("Yellow is the color of missing someone you love.");
            break;
        case "green":
            alert("Green is the color of grass, unless it's brown.");
            break;
        case "blue":
            alert("Blue is my favorite color.");
            break;
        case "indigo":
            alert("Why did you pick indigo?");
            break;
        case "violet":
            alert("Violet? Or did you mean Violent?");
            break;
        default:
            alert("Ain't nobody got time for " + input + "!");
    }
}

analyzeColor2(randomColor);


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

alert("Ok, one last time. Participation required");
var userColor = prompt("Enter a color one more time: ");

analyzeColor2(userColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 1) {
        var newTotal = totalAmount - (totalAmount * .1);
        alert("Nice! You received a 10% discount! Your total bill is now $" + newTotal + "!");
    } else if (luckyNumber === 2) {
        var newTotal = totalAmount - (totalAmount * .25);
        alert("Yaaas! You received a 25% discount! Your total bill is now $" + newTotal + "!");
    } else if (luckyNumber === 3) {
        var newTotal = totalAmount - (totalAmount * .35);
        alert("Oh heck yeah! You received a 35% discount! Your total bill is now $" + newTotal + "!");
    } else if (luckyNumber === 4) {
        var newTotal = totalAmount - (totalAmount * .5);
        alert("WHAAAAT! You received a 50% discount! Your total bill is now $" + newTotal + "!");
    } else if (luckyNumber === 5) {
        alert("YOU WIN! You received a 100% discount! Your total bill is now FREE!");
    } else {
        alert("Sorry, you received no discount. Your total bill is " + totalAmount);
    }
}


alert("I'm testing a new feature. \nThe total bill is $100 \nThe lucky number is 0");
calculateTotal(0,100);
alert("The total bill is still $100 \nThe lucky number is now 1");
calculateTotal(1,100);
alert("The total bill is still $100 \nThe lucky number is now 2");
calculateTotal(2,100);
alert("The total bill is still $100 \nThe lucky number is now 3");
calculateTotal(3,100);
alert("The total bill is still $100 \nThe lucky number is now 4");
calculateTotal(4,100);
alert("The total bill is still $100 \nThe lucky number is now 5");
calculateTotal(5,100);

alert("Now for more participation");
var totalBill = parseFloat(prompt("How much is your Walmart bill?"));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

alert("Your total bill is: " + totalBill + "\nYour lucky number is: " + luckyNumber);
calculateTotal(luckyNumber, totalBill);
