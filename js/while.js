"use strict";


//Doubling
var i = 1;

while (i < 65536) {
    console.log(i *= 2);
}

//Ice Cream do-while loop
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Starting amount " + allCones);

do {
    var rand2 = Math.floor(Math.random() * 5) + 1;
    if (allCones === 0) {
        console.log("SOLD OUT... TIME TO GO HOME!");
        break;
    } else if (allCones < rand2) {
        console.log("Cannot sell you " + rand2 + " cones I only have " + allCones);
    } else if (allCones > 0) {
        allCones = allCones - rand2;
        console.log(rand2 + " cones sold..");
    }
} while (allCones >= 0);

