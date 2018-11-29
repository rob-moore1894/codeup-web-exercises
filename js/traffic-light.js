"use strict";

alert("TRAFFIC LIGHT AHEAD!");

    // function getLightColor() {
    //     var lightColor = prompt("What color is the light?").toLowerCase();
    //     if (validEntry(lightColor) === true) {
    //         if (lightColor === "red") {
    //             alert("STOP!");
    //         } else if (lightColor === "yellow") {
    //             var spaceToStop = confirm("Is there space to stop safely?");
    //             if (spaceToStop === true) {
    //                 alert("STOP!");
    //             } else {
    //                 alert("Beat the light!");
    //             }
    //         } else if (lightColor === "green") {
    //             alert("Then go! Easy decision...");
    //         }
    //     } else {
    //             getLightColor();
    //         }
    // }
    //
    // getLightColor();

function validEntry(input){
    return input === "red" || input === "yellow" || input === "green";
}

function getColor() {
    var i = 0;
    do{
        var color = prompt("What color is the light?").toLowerCase();
        i++;
        if (i >= 5) {
            alert("Too many invalid entries. Hope you don't get hurt!")
            return;
        }
    } while (validEntry(color) === false);

    if (color === "red") {
        alert("STOP!");
    } else if (color === "yellow") {
        var space = confirm("Is there enough space to stop?");
        if (space === true) {
            alert("STOP!");
        } else {
            alert("LOOK OUT!");
        }
    } else if (color === "green") {
        alert("Then go!");
    }
}

getColor();






