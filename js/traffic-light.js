"use strict";

alert("TRAFFIC LIGHT AHEAD!");
var lightColor = prompt("What color is the light?").toLowerCase();


    function getLightColor(input) {
        if (input === "red" || input === "yellow" || input === "green") {
            if (input === "red") {
                alert("STOP!");
            } else if (input === "yellow") {
                var spaceToStop = confirm("Is there space to stop safely?");
                if (spaceToStop === true) {
                    alert("STOP!");
                } else {
                    alert("Beat the light!");
                }
            } else if (input === "green") {
                alert("Then go! Easy decision...");
            }
        } else {
                getLightColor();
            }
    }




