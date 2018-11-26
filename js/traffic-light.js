"use strict";

alert("TRAFFIC LIGHT AHEAD!");

    function getLightColor(lightColor) {
        var lightColor = prompt("What color is the light?").toLowerCase();
        if (lightColor === "red" || lightColor === "yellow" || lightColor === "green") {
            if (lightColor === "red") {
                alert("STOP!");
            } else if (lightColor === "yellow") {
                var spaceToStop = confirm("Is there space to stop safely?");
                if (spaceToStop === true) {
                    alert("STOP!");
                } else {
                    alert("Beat the light!");
                }
            } else if (lightColor === "green") {
                alert("Then go! Easy decision...");
            }
        } else {
                getLightColor(lightColor);
            }
    }

    getLightColor(lightColor);





