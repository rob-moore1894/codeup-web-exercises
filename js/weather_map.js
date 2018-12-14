"use strict";

$(document).ready(function() {

    $('#weatherButton').click(function(){

        var city = $('#city').val();

        if (city !== ''){

            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&APPID=e607a180955b52a1622535c6a426c5b4',
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);
                    var femalePic = femalePicture(data);
                    var malePic = malePicture(data);
                    var recenter = recenterMap(data);

                    console.log(data);

                    $('#show').html(widget);
                    $('#femalePic').html(femalePic);
                    $('#malePic').html(malePic);
                    console.log(recenter);
                    $('#city').val('');
                }
            });

        }else {
            $('.form-control').css('border', '2px solid red');
            $('#femalePic').html('Field Cannot Be Empty!')
        }

    });

    var mapOptions = {
        // Set the zoom level
        zoom: 5,

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
    // var geocoder = new google.maps.Geocoder();

    // // Geocode our address
    // geocoder.geocode({ "address":  }, function(results, status) {
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
    //
    // Adding marker to the map
    // var marker = new google.maps.Marker({
    //     position: {
    //         lat: 29.4858551,
    //         lng: -98.5083507,
    //     },
    //     map: map,
    //     animation: google.maps.Animation.DROP,
    // });
});

function show(data) {
    return "<h3><strong>City</strong>: " + data.name + "</h3>" + "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
        "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" + "<h3><strong>Temperature</strong>: " + data.main.temp + "</h3>" +
        "<h4>Min: </h4>" + data.main.temp_min + "<h4>Max: </h4>" + data.main.temp_max
}

function femalePicture(data) {
    if (data.main.temp <= 60) {
        return "<img id='cold-female' src='images/female_cold.jpg' >"
    }
 }

 function malePicture(data) {
    if (data.main.temp <= 60) {
        return "<img id='cold-male' src='images/male_cold.jpg'>"
    }
 }

 function recenterMap(data) {
    marker.position.lat = data.coord.lat;
    marker.position.lng = data.coord.lon;
 }

