"use strict";

$(document).ready(function() {

    $('#weatherButton').click(function(){

        var city = $('#city').val();

        if (city !== ''){

            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial' + '&APPID=e607a180955b52a1622535c6a426c5b4',
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var location = cityLocation(data);
                    var current24 = current(data);
                    var next24 = nextDay(data);
                    var next48 = thirdDay(data);
                    // var recenter = recenterMap(data);

                    console.log(data);

                    $('#cityName').html(location);
                    $('#current24').html(current24);
                    $('#next24').html(next24);
                    $('#next48').html(next48);
                    // console.log(recenter);
                    $('#city').val('');
                }
            });

        }else {
            $('.form-control').css('border', '2px solid red');
            $('#cityName').html('Field Cannot Be Empty!')
        }

    });

    var mapOptions = {
        // Set the zoom level
        zoom: 10,

        // This sets the center of the map
        center: {
            lat: 29.4858551,
            lng: -98.5083507
        },

        // Map type set to hybrid
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // // Init geocoder object
    var geocoder = new google.maps.Geocoder();

    // // Geocode our address
    // geocoder.geocode({ "address": data.city.coord.lat, data.city.coord.lon}, function(results, status) {
    //
    //     // Check for a successful result
    //     if (status == google.maps.GeocoderStatus.OK) {
    //
    //         // Recenter the map over the address
    //         map.setCenter(results[0].geometry.location);
    //     } else {
    //
    //         // Show an error message with the status if our request fails
    //         alert("Geocoding was not successful - STATUS: " + status);
    //     }
    // });

    //Adding marker to the map
    // var marker = new google.maps.Marker({
    //     position: {
    //         lat: newLat,
    //         lng: newLon,
    //     },
    //     map: map,
    //     animation: google.maps.Animation.DROP,
    // });
});

function cityLocation(data) {
    return "<h3>" + data.city.name + "</h3>"
}

function current(data) {
    return "Current 24" + "<h3>Weather: " + data.list[1].weather[0].main + "</h3>" +
        "<h3>Description: " + data.list[1].weather[0].description + "</h3>" + "<h3>Temperature: " + data.list[1].main.temp + "</h3>" + "<h4>Min: </h4>" + data.list[1].main.temp_min + "<h4>Max: </h4>" + data.list[1].main.temp_max
}
//
function nextDay(data) {
    return "Next 24" + "<h3>Weather: " + data.list[9].weather[0].main + "</h3>" +
        "<h3>Description: " + data.list[9].weather[0].description + "</h3>" + "<h3>Temperature: " + data.list[9].main.temp + "</h3>" + "<h4>Min: </h4>" + data.list[9].main.temp_min + "<h4>Max: </h4>" + data.list[9].main.temp_max
 }

 function thirdDay(data) {
     return "Next 48" + "<h3>Weather: " + data.list[17].weather[0].main + "</h3>" +
         "<h3>Description: " + data.list[17].weather[0].description + "</h3>" + "<h3>Temperature: " + data.list[17].main.temp + "</h3>" + "<h4>Min: </h4>" + data.list[17].main.temp_min + "<h4>Max: </h4>" + data.list[17].main.temp_max
 }

 // function recenterMap(data) {
 //    var newLat = data.city.coord.lat;
 //    var newLon = data.city.coord.lon;
 // }

