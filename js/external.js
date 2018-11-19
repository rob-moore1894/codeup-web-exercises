"use strict";

console.log("Hello from External JavaScript");

alert("Welcome to my Website");

var favoriteColor = prompt("What is your favorite color?");
alert("Awesome! " + favoriteColor + " is my favorite color, too!");
console.log(favoriteColor + " is my favorite color too!");

//Movies Exercise
var pricePerDay = 3;

alert("You're renting the Little Mermaid");
var littleMermaidDays = prompt("How many days?");
var littleMermaidPrice = littleMermaidDays * pricePerDay;
alert("Great, Little Mermaid for " + littleMermaidDays + " days is $" + littleMermaidPrice);

alert("You're renting Brother Bear");
var brotherBearDays = prompt("How many days?");
var brotherBearPrice = brotherBearDays * pricePerDay;
alert("Fantastic, Brother Bear for " + brotherBearDays + " days is $" + brotherBearPrice + "!  Prepare to cry!");

alert("You're renting Hercules");
var herculesDays = prompt("How many days?");
var herculesPrice = herculesDays * pricePerDay;
alert("Sweet, Hercules for " + herculesDays + " days is $" + herculesPrice);

alert("Your total is $" + (littleMermaidPrice + brotherBearPrice + herculesPrice));

//Contractor Exercise
var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var googleHours = prompt ("How many hours did you work at Google this week?");
var amazonHours = prompt ("How many hours did you work at Amazon this week?");
var facebookHours = prompt ("How many hours did you work at Facebook this week?");
var googleWeek = googleHours * googlePay;
var amazonWeek = amazonHours * amazonPay;
var facebookWeek = facebookHours * facebookPay;

alert("You should receive $" + (googleWeek + amazonWeek + facebookWeek) + " before taxes!");

//Student Enrollment Exercise
var fullClass = 20;
var currentClassTotal = 19;
var slotsAvailable = fullClass - currentClassTotal;

var enrollInClass = confirm ("Do you want to enroll in the class?");
    if (enrollInClass == true) {
        alert("There is/are " + slotsAvailable + " slot(s) available!");
        if (slotsAvailable > 0) {
            alert("Let's get started!");
                var classConflict = confirm ("Do you have a class conflict?");
                if (classConflict == true){
                    alert("This class is not available.");
                } else {
                    alert("Class added to your schedule.");
                }
        } else {
            alert("This class is not available");
        }

    } else {
        alert("Have a nice day!");
    }


//Premium Member Exercise
var premiumMember = confirm("Are you a premium member?");
var numberOfItems = prompt("How many items did you purchase?");
var offerExpiration = false;

if (offerExpiration == false) {
    if (premiumMember == true){
        alert("Thank you for being a Premium Member.  The current offer was applied to your purchase!");
    } else if (premiumMember == false && numberOfItems >= 2) {
        alert("Thank you for shopping.  The current offer was applied to your purchase!");
    } else {
        alert("Thank you for visiting.  Unfortunately, the current offer was not applied.");
    }
} else {
    alert("Thank you for your patronage.  Unfortunately, the offer has expired.");
}






